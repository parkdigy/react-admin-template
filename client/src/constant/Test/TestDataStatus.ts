export const TestDataStatus = {
  On: 'ON',
  Off: 'OFF',
} as const;

export type TestDataStatus = ValueOf<typeof TestDataStatus>;

export default TestDataStatus;
