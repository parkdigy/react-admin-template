import { api } from '@common';
import { TestDataInfo, TestDataList, TestDataStatusList } from '@const';
import TestDataStatus from './TestDataStatus';

export default {
  DataStatus: TestDataStatus,

  // 데이터 - 상태 목록
  dataStatusList() {
    return api.get<TestDataStatusList>('test/data/status');
  },
  // 데이터 - 목록
  dataList(data: Dict) {
    return api.get<TestDataList>('test/data', data);
  },
  // 데이터 - 목록 다운로드
  exportDataList(data: Dict) {
    return api.export('test/data', data);
  },
  // 데이터 - 상태 목록
  dataInfo(id: number, data?: Dict) {
    return api.get<TestDataInfo>(`test/data/${id}`, data);
  },
  // 데이터 - 등록
  dataAdd(auth: ReactNode, data: Dict) {
    return api.post(auth, 'test/data', data);
  },
  // 데이터 - 수정
  dataEdit(auth: ReactNode, id: number, data: Dict) {
    return api.patch(auth, `test/data/${id}`, data);
  },
  // 데이터 - 삭제
  dataRemove(auth: ReactNode, id: number) {
    return api.delete(auth, `test/data/${id}`);
  },
};
