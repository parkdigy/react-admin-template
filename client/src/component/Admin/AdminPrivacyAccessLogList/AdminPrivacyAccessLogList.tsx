import React from 'react';
import {
  FormSelectCommands,
  HashSearchTable,
  SearchExportButton,
  SearchTableCommands,
  SearchTableData,
  SearchTableSearchProps,
  SearchTableTableProps,
  TableColumns,
} from '@ccomp';
import { AdminPrivacyAccessLogListProps as Props } from './AdminPrivacyAccessLogList.types';
import { Admin, AdminPrivacyAccessLogListDataItem } from '@const';
import dayjs from 'dayjs';

const AdminPrivacyAccessLogList: React.FC<Props> = ({ noHash, onRequestScrollToTop }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<SearchTableCommands<AdminPrivacyAccessLogListDataItem>>(null);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const hasExportRole = app.hasMenuExportRole(app.Menu.Admin.PrivacyAccessLog);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const initSearchDate: FormDateRangePickerProps['value'] = useMemo(() => [dayjs().subtract(29, 'days'), dayjs()], []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadTypeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 구분 목록 불러오기 */
  const loadTypeList = useCallback(() => {
    Admin.PrivacyAccessLog.typeList().then(({ data }) => {
      const items = data.map((item) => lv(item.name, item.type));
      items.unshift(lv('전체', ''));
      searchTableRef.current?.getSearch()?.getItem<FormSelectCommands<string>>('type')?.setItems(items);
    });
  }, []);

  /** 목록 불러오기 */
  const getData = useCallback(
    (data: Dict) => {
      onRequestScrollToTop?.();
      return new Promise<SearchTableData<AdminPrivacyAccessLogListDataItem>>((resolve) => {
        Admin.PrivacyAccessLog.list(data).then(({ data: items, paging }) => {
          resolve({ items, paging });
        });
      });
    },
    [onRequestScrollToTop]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleExportClick = useCallback(() => {
    const data = searchTableRef.current?.getLastLoadData();
    if (data) Admin.PrivacyAccessLog.exportList(data);
  }, []);

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 검색 영역 */
  const searchGroups = useMemo(
    () => (
      <>
        <SearchGroup max>
          <FormSelect name='type' label='구분' value='' width={300} />
          <FormDateRangePicker
            name='search_date'
            fromLabel='조회기간'
            toLabel='조회기간'
            required
            value={initSearchDate}
          />
        </SearchGroup>
        <SearchGroup align='right'>{hasExportRole && <SearchExportButton onClick={handleExportClick} />}</SearchGroup>
      </>
    ),
    [handleExportClick, hasExportRole, initSearchDate]
  );

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        { label: 'ID', name: 'id', width: 100 },
        { label: '조회 관리자', width: 150, onRender: (item) => `(${item.admin_user_id}) ${item.admin_user_name}` },
        { label: '구분', name: 'type_name', width: 300, align: 'left', onGetTooltip: (info) => info.type_name },
        { label: '사유', name: 'reason', align: 'left', onGetTooltip: (info) => <pre>{info.reason}</pre> },
        { label: '참조 ID', name: 'parent_id', width: 100, onHide: (info) => info.parent_id === 0 },
        { label: '조회일자', type: 'datetime', name: 'create_date', width: 150, minWidth: 100 },
      ] as TableColumns<AdminPrivacyAccessLogListDataItem>,
    []
  );

  const search = useMemo(() => ({ searchGroups }) as SearchTableSearchProps, [searchGroups]);

  const table = useMemo(
    () =>
      ({
        showEvenColor: true,
        defaultAlign: 'center',
        columns: tableColumns,
      }) as SearchTableTableProps<AdminPrivacyAccessLogListDataItem>,
    [tableColumns]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(
    () => (
      <HashSearchTable<AdminPrivacyAccessLogListDataItem>
        ref={searchTableRef}
        hash={!noHash}
        fullHeight
        onGetData={getData}
        search={search}
        table={table}
      />
    ),
    [getData, noHash, search, table]
  );
};

export type TAdminPrivacyAccessLogList = typeof AdminPrivacyAccessLogList;

export default AdminPrivacyAccessLogList;
