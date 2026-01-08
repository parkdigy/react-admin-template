/********************************************************************************************************************
 * 어드민 사용자 로그인 로그 목록 컴포넌트
 * ******************************************************************************************************************/

import { type AdminUserLoginLogListProps as Props } from './AdminUserLoginLogList.types';
import { type AdminUserLoginLogListDataItem } from '@const';
import dayjs from 'dayjs';
import { useAppState } from '@context';

const AdminUserLoginLogList = ({ email, noHash, limit, onRequestScrollToTop }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { auth } = useAppState();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<SearchTableCommands<AdminUserLoginLogListDataItem>>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const hasExportRole = g.menu.hasExportRole(g.menu.Admin.LoginLog);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 로그인 로그 목록 불러오기 */
  const getData = useCallback(
    (data: Dict) => {
      onRequestScrollToTop?.();
      return new Promise<SearchTableData<AdminUserLoginLogListDataItem>>((resolve) => {
        Const.Admin.User.LoginLog.list({ ...data, limit }).then(({ data: items, paging }) => {
          resolve({ items, paging });
        });
      });
    },
    [limit, onRequestScrollToTop]
  );

  /** 로그인 로그 목록 액셀 다운로드 */
  const exportData = useCallback(() => {
    const data = searchTableRef.current?.getLastLoadData();
    if (data) Const.Admin.User.LoginLog.exportList(data);
  }, []);

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 검색 영역 */
  const searchGroups = useMemo(() => {
    return (
      <>
        <SearchGroup max>
          <FormSelect
            name='keyword_option'
            label='검색영역'
            value={email ? 'email' : 'all'}
            onLoadItems={async () =>
              auth?.is_super
                ? [lv('전체', 'all'), lv('이메일', 'email'), lv('IP', 'ip'), lv('Location', 'location')]
                : [lv('전체', 'all'), lv('IP', 'ip'), lv('Location', 'location')]
            }
          />
          <FormText name='keyword' label='검색어' placeholder='검색어' value={email} />
          <FormDateRangePicker
            name='login_date'
            value={[dayjs().subtract(1, 'month').add(1, 'day'), dayjs()]}
            fromLabel='검색기간'
            toLabel='검색기간'
            disableFuture
          />
        </SearchGroup>
        <SearchGroup align='right'>{hasExportRole && <SearchExportButton onClick={exportData} />}</SearchGroup>
      </>
    );
  }, [auth?.is_super, email, exportData, hasExportRole]);

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        { label: '이메일', name: 'email', align: 'left', minWidth: 200, paddingLeft: 20 },
        { label: '이름', name: 'name', width: 150, minWidth: 80 },
        { type: 'datetime', label: '로그인시간', name: 'create_date', width: 160, minWidth: 160 },
        { label: 'IP', name: 'ip_address', width: 150, minWidth: 100 },
        {
          label: 'Location',
          width: 200,
          minWidth: 150,
          onRender(item) {
            return item.ip_country === 'Unknown' ? 'Unknown' : `${item.ip_city}, ${item.ip_country}`;
          },
        },
      ] as TableColumns<AdminUserLoginLogListDataItem>,
    []
  );

  const search = useMemo(
    () => ({ sx: { pt: 2.5 }, labelShrink: true, searchGroups }) as SearchTableSearchProps,
    [searchGroups]
  );

  const table = useMemo(
    () =>
      ({
        showEvenColor: true,
        defaultAlign: 'center',
        columns: tableColumns,
      }) as SearchTableTableProps<AdminUserLoginLogListDataItem>,
    [tableColumns]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(
    () => (
      <HashSearchTable<AdminUserLoginLogListDataItem>
        ref={searchTableRef}
        hash={!noHash}
        fullHeight
        stickyHeader
        onGetData={getData}
        search={search}
        table={table}
      />
    ),
    [getData, noHash, search, table]
  );
};

export default AdminUserLoginLogList;
