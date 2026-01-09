export const TestDataStatus = makeConst([
  ['ON', '사용'],
  ['OFF', '미사용'],
]);

export type TestDataStatus = typeof TestDataStatus.Type;

export default TestDataStatus;
