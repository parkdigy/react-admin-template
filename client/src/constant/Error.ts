const Error = {
  Exception: 99999, // 예상치 못한 오류가 발생했습니다.
  Parameter: 99998, // 파라메터 정보가 유효하지 않습니다.
  Permission: 99996, // 사용 권한이 없습니다
  NoDataChanged: 99995, // 변경된 정보가 없습니다.
};

function getAllValues(obj: object, result = []) {
  for (const key of Object.keys(obj)) {
    const value = obj[key as keyof typeof obj];

    if (typeof value === 'object') {
      getAllValues(value, result);
    } else {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }
  return result;
}

const allValues = getAllValues(Error);

export default { ...Error, allValues };
