import express from 'express';
import fs from 'fs';

export default {
  app(req: express.Request, res: express.Response) {
    fs.readFile(`${getClientPath()}/index.html`, 'utf-8', (err, data) => {
      if (err) {
        res.send({ result: { c: 99999, m: '예상치 못한 오류가 발생했습니다.' } });
      } else {
        const version = data.split(`window.$$MyAppConfig = {version: '`)[1].split(`'`)[0];
        res.send({
          result: {
            c: 0,
          },
          data: {
            v: version,
          },
        });
      }
    });
  },
};
