/** index.html 에 전역변수로 선언한 $$AppConfig 값을 config 에 설정 */
const config = {
  version: (window as any).$$AppConfig?.version,
  env: (window as any).$$AppConfig?.env,
  title: (window as any).$$AppConfig?.title,
};

export default config;
