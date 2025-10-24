/** index.html 에 전역변수로 선언한 $$AppConfig 값을 config 에 설정 */

const myAppConfig: Dict<string> = (window as any).$$MyAppConfig || {};

const version = ifUndefined(myAppConfig.version, '');
const env = ifUndefined(myAppConfig.env, 'local') as 'local' | 'development' | 'staging' | 'production';
const isLocal = env === 'local';
const isNotLocal = env !== 'local';
const isDevelopment = env === 'development';
const isNotDevelopment = env !== 'development';
const isStaging = env === 'staging';
const isNotStaging = env !== 'staging';
const isProduction = env === 'production';
const isNotProduction = env !== 'production';
const title = ifUndefined(myAppConfig.title, '');

const config = {
  version,
  env,
  isLocal,
  isNotLocal,
  isDevelopment,
  isNotDevelopment,
  isStaging,
  isNotStaging,
  isProduction,
  isNotProduction,
  title,
};

export default config;
