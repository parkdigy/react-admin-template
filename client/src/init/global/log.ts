declare global {
  /**
   * 로그를 출력합니다.
   * @param message 출력할 메시지
   * @param optionalParams 출력할 값
   */
  function ll(message?: any, ...optionalParams: any[]): void;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

export {};
