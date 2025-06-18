/********************************************************************************************************************
 * 어드민 사용 로그 목록 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import {
  PSearchTableCommands,
  PSearchTableData,
  PSearchTableSearchProps,
  PSearchTableTableProps,
  PTableColumns,
} from '@pdg/react-table';
import { PSearchGroup, PFormText, PFormValueMap, PFormDateRangePicker, PFormSelect } from '@pdg/react-form';
import { SearchExportButton, HashSearchTable } from '@ccomp';
import { AdminUserAccessLogListProps as Props } from './AdminUserAccessLogList.types';
import { Admin, AdminUserAccessLogListDataItem, AdminUserAccessLogListRequestData } from '@const';
import dayjs from 'dayjs';
import app from '@app';

const AdminUserAccessLogList: React.FC<Props> = ({ noHash }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<PSearchTableCommands<AdminUserAccessLogListDataItem>>(null);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const hasExportRole = app.hasMenuExportRole(app.Menu.Admin.AccessLog);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [paging, setPaging] = useState<PSearchTableData['paging']>();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 사용 로그 목록 불러오기 */
  const getData = useCallback((data: PFormValueMap) => {
    return new Promise<PSearchTableData<AdminUserAccessLogListDataItem>>((resolve) => {
      Admin.UserAccessLog.list(data as unknown as AdminUserAccessLogListRequestData).then(({ data: items, paging }) => {
        setPaging(paging);
        resolve({ items, paging });
      });
    });
  }, []);

  /** 사용 로그 목록 액셀 다운로드 */
  const exportData = useCallback(() => {
    const data = searchTableRef.current?.getLastLoadData();
    if (data) Admin.UserAccessLog.exportList(data as unknown as AdminUserAccessLogListRequestData);
  }, []);

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 검색 영역 */
  const searchGroups = useMemo(
    () => (
      <>
        <PSearchGroup max>
          <PFormSelect
            name='keyword_option'
            label='검색영역'
            items={[lv('이메일', 'email'), lv('사용자 No.', 'user_id')]}
            value='email'
          />
          <PFormText name='keyword' label='검색어' />
          <PFormSelect name='type' label='구분' items={[lv('전체', ''), lv('화면', 'VIEW'), lv('Export', 'EXPORT')]} />
          <PFormDateRangePicker
            name='search_date'
            fromLabel='검색기간'
            toLabel='검색기간'
            disableFuture
            value={[dayjs().subtract(30, 'day'), dayjs()]}
          />
        </PSearchGroup>
        <PSearchGroup align='right'>
          {hasExportRole && <SearchExportButton disabled={(paging?.total || 0) === 0} onClick={exportData} />}
        </PSearchGroup>
      </>
    ),
    [exportData, hasExportRole, paging?.total]
  );

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        { label: '이메일', name: 'email', width: 250, minWidth: 150, paddingLeft: 20 },
        {
          label: '구분',
          align: 'center',
          width: 80,
          minWidth: 80,
          onRender(item): React.ReactNode {
            switch (item.type) {
              case 'VIEW':
                return '화면';
              case 'EXPORT':
                return 'Export';
            }
          },
        },
        { label: '화면', name: 'title', minWidth: 200 },
        { label: 'URL', name: 'url', minWidth: 200 },
        {
          type: 'datetime',
          label: '사용시간',
          name: 'create_date',
          align: 'center',
          width: 150,
          minWidth: 150,
        },
      ] as PTableColumns<AdminUserAccessLogListDataItem>,
    []
  );

  const search = useMemo(() => ({ searchGroups }) as PSearchTableSearchProps, [searchGroups]);

  const table = useMemo(
    () =>
      ({
        showEvenColor: true,
        columns: tableColumns,
      }) as PSearchTableTableProps<AdminUserAccessLogListDataItem>,
    [tableColumns]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(
    () => (
      <HashSearchTable<AdminUserAccessLogListDataItem>
        ref={searchTableRef}
        hash={!noHash}
        stickyHeader
        fullHeight
        onGetData={getData}
        search={search}
        table={table}
      />
    ),
    [getData, noHash, search, table]
  );
};

export default AdminUserAccessLogList;
