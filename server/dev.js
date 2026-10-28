const { fork } = require('node:child_process');
const { watchFile, unwatchFile } = require('node:fs');
const path = require('node:path');
const rspack = require('@rspack/core');
const config = require('./rspack.config');

let child;
let stopping = false;
let restartQueue = Promise.resolve();
const envPath = path.resolve(__dirname, '../.env');

function stopChild() {
  return new Promise((resolve) => {
    if (!child || child.exitCode !== null || child.signalCode !== null) return resolve();
    const running = child;
    const timer = setTimeout(() => running.kill('SIGKILL'), 5000);
    running.once('exit', () => {
      clearTimeout(timer);
      resolve();
    });
    running.kill('SIGINT');
  });
}

function restart() {
  restartQueue = restartQueue.then(async () => {
    await stopChild();
    if (!stopping) child = fork(path.join(config.output.path, config.output.filename), [], { stdio: 'inherit' });
  });
}

const compiler = rspack(config);
let hasBuild = false;
const watcher = compiler.watch({}, (error, stats) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(stats.toString({ colors: true, preset: 'errors-warnings' }));
  if (!stats.hasErrors()) {
    hasBuild = true;
    restart();
  }
});

watchFile(envPath, { interval: 500 }, () => {
  if (hasBuild) restart();
});

async function shutdown() {
  if (stopping) return;
  stopping = true;
  unwatchFile(envPath);
  await restartQueue;
  await stopChild();
  watcher.close(() => compiler.close(() => process.exit(0)));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
