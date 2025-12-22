const myAppConfig: Dict<string> = (window as any).$$MyAppConfig || {};

const mode = (myAppConfig.env ?? 'local') as 'local' | 'development' | 'staging' | 'production';

const env = {
  version: myAppConfig.version ?? '0.0.0',
  mode,
  isLocal: mode === 'local',
  isNotLocal: mode !== 'local',
  isDevelopment: mode === 'development',
  isNotDevelopment: mode !== 'development',
  isStaging: mode === 'staging',
  isNotStaging: mode !== 'staging',
  isProduction: mode === 'production',
  isNotProduction: mode !== 'production',
  title: myAppConfig.title ?? '',
};

export default env;
