import { DateString } from '@types';
import TestDataStatus from './TestDataStatus';

/********************************************************************************************************************
 * status list
 * ******************************************************************************************************************/

export interface TestDataStatusListDataItem {
  status: TestDataStatus;
  name: string;
}

export type TestDataStatusListData = TestDataStatusListDataItem[];

export interface TestDataStatusList extends ApiResult {
  data: TestDataStatusListData;
}

/********************************************************************************************************************
 * data list
 * ******************************************************************************************************************/

export interface TestDataListDataItem {
  id: number;
  text: string;
  email: string;
  tel: string;
  mobile: string;
  url: string;
  business_no: string;
  personal_no: string;
  num_int: number;
  num_float: number;
  bool: boolean;
  date: DateString;
  datetime: DateString;
  text_array: string[];
  status: TestDataStatus;
  status_name: string;
  create_date: DateString;
  update_date: DateString;
}

export type TestDataListData = TestDataListDataItem[];

export interface TestDataList extends ApiResult, ApiPaging {
  data: TestDataListData;
}

/********************************************************************************************************************
 * data info
 * ******************************************************************************************************************/

export interface TestDataInfoData extends TestDataListDataItem {}

export interface TestDataInfo extends ApiResult {
  data: TestDataInfoData;
}
