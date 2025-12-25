import React from 'react';
import { TestDataListProps as Props } from './TestDataList.types';
import { TestDataListDataItem, TestDataStatus } from '@const';
import { Divider, Icon, MenuItem, MenuList } from '@mui/material';
import { StyledTableMenuItemCopyToClipboard } from '@styles';
import { DialogCommands, useDialog } from '@pdg/react-dialog';
import { TestDataFormDialog, TestDataInfoDialog, usePrivacyAccessReasonDialog } from '@dialog';
import { HashSearchTable } from '@ccomp';

const Menu = {
  edit: 'edit',
  remove: 'remove',
} as const;
type Menu = ValueOf<typeof Menu>;

const TestDataList = ({ noHash, onRequestScrollToTop }: Props) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const formDialog = useDialog(TestDataFormDialog);
  const infoDialog = useDialog(TestDataInfoDialog);
  const privacyAccessReasonDialog = usePrivacyAccessReasonDialog();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<SearchTableCommands<TestDataListDataItem>>(null);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 상태 불러오기 */
  const loadStatusList = useCallback(() => {
    Const.Test.dataStatusList().then(({ data }) => {
      const items = [lv('전체', ''), ...data.map((item) => lv(item.name, item.status))];
      searchTableRef.current
        ?.getSearch()
        ?.getItem<FormRadioGroupCommands<'' | TestDataStatus>>('status')
        ?.setItems(items);
    });
  }, []);

  /** 목록 다시 불러오기 */
  const reloadList = useCallback(
    (page?: number) => {
      searchTableRef.current?.reload(page);
    },
    [searchTableRef]
  );

  /** 목록 불러오기 */
  const getData = useCallback(
    (data: Dict) => {
      onRequestScrollToTop?.();
      return new Promise<SearchTableData<TestDataListDataItem>>((resolve) => {
        Const.Test.dataList(data).then(({ data: items, paging }) => {
          resolve({ items, paging });
        });
      });
    },
    [onRequestScrollToTop]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      loadStatusList();
    });
    useEffect(() => effectEvent(), []);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 추가 버튼 클릭 */
  const handleAddClick = useCallback(() => {
    formDialog({
      onSuccess() {
        reloadList(1);
      },
    });
  }, [formDialog, reloadList]);

  /** export 버튼 클릭 */
  const handleExportClick = useCallback(() => {
    const data = searchTableRef.current?.getLastLoadData();
    if (data) Const.Test.exportDataList(data);
  }, []);

  /** export 버튼 (마스킹 해제) 클릭 */
  const handleUnMaskingExportClick = useCallback(() => {
    privacyAccessReasonDialog({
      onConfirm(dialog: DialogCommands, value: string) {
        dialog.close();
        const data = searchTableRef.current?.getLastLoadData();
        if (data) {
          Const.Test.exportDataList({ ...data, privacy_access: true, privacy_access_reason: value });
        }
      },
    });
  }, [privacyAccessReasonDialog]);

  /** 테이블 아이템 클릭 */
  const handleTableItemClick = useCallback(
    (item: TestDataListDataItem) => {
      infoDialog({
        id: item.id,
        subTitle: item.id,
        onChange() {
          reloadList();
        },
      });
    },
    [infoDialog, reloadList]
  );

  /** 테이블 아이템 스타일 */
  const handleTableGetBodyColumnClassName = useCallback(
    (column: TableColumn<TestDataListDataItem>, item: TestDataListDataItem) => {
      return column.id !== 'more' && item.status === 'OFF' ? 'opacity-50' : undefined;
    },
    []
  );

  /** 테이블 메뉴 클릭 */
  const handleTableMenuClick = useCallback(
    (menu: Menu, item: TestDataListDataItem) => {
      switch (menu) {
        case Menu.edit:
          formDialog({
            id: item.id,
            subTitle: item.id,
            onSuccess() {
              reloadList();
            },
          });
          break;
        case Menu.remove:
          Const.Test.dataRemove('삭제하시겠습니까?', item.id).then(() => {
            reloadList();
          });
          break;
      }
    },
    [formDialog, reloadList]
  );

  /** 검색 영역 */
  const searchGroups = useMemo(
    () => (
      <>
        <SearchGroup max>
          <FormText name='keyword' label='검색어' />
          <FormRadioGroup name='status' label='Status' value='' />
        </SearchGroup>
        <SearchGroup align='right'>
          <SearchExportButton
            items={[
              { label: '다운로드', icon: 'download', onClick: handleExportClick },
              {
                label: '다운로드 (마스킹 해제)',
                icon: 'download',
                color: 'error',
                onClick: handleUnMaskingExportClick,
              },
            ]}
          />
          <SearchAddButton onClick={handleAddClick}>새 데이터</SearchAddButton>
        </SearchGroup>
      </>
    ),
    [handleAddClick, handleExportClick, handleUnMaskingExportClick]
  );

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 테이블 상단 헤드 */
  const tableTopHeadRows: TableProps['topHeadRows'] = useMemo(
    () => [
      { colSpan: 2 },
      { colSpan: 3, label: 'Group 1', align: 'center' },
      { colSpan: 5, label: 'Group 2', align: 'center' },
    ],
    []
  );

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        { label: 'ID', name: 'id', width: 70 },
        {
          label: 'Text<br/>Text Array',
          name: 'text',
          align: 'left',
          ellipsis: true,
          onRender: (item) => (
            <>
              <p className='text-ellipsis'>{item.text}</p>
              <p className='text-ellipsis opacity-50'>{item.text_array.join(', ')}</p>
            </>
          ),
        }, // auto width
        { label: 'Email', name: 'email', width: 150, align: 'left', ellipsis: true },
        { label: 'Mobile', type: 'tel', name: 'mobile', width: 100 },
        {
          label: 'Company Num<br/>Personal Num',
          width: 120,
          onRender: (item) => (
            <>
              <p>{g.format.businessNo(item.business_no)}</p>
              <p>{g.format.personalNo(item.personal_no)}</p>
            </>
          ),
        },
        { label: 'Int', type: 'number', name: 'num_int', width: 70 },
        { label: 'Float', type: 'number', name: 'num_float', width: 80 },
        { label: 'Bool', width: 50, onRender: (item) => (item.bool ? 'Y' : 'N') },
        { label: 'Date', type: 'date', name: 'date', width: 90 },
        { label: 'Datetime', type: 'datetime', name: 'datetime', width: 140 },
        { label: 'Status', width: 60, name: 'status_name' },
        {
          label: 'Create Date<br/>Update Date',
          width: 140,
          onRender: (item) => (
            <>
              <div>
                <DateText value={item.create_date} />
              </div>
              <div>
                <DateText value={item.update_date} />
              </div>
            </>
          ),
        },
        {
          id: 'more',
          type: 'button',
          width: 50,
          onRender(item) {
            return (
              <TableMenuButton
                variant='text'
                placement='left'
                menuList={
                  <MenuList>
                    <MenuItem onClick={() => handleTableMenuClick(Menu.edit, item)}>
                      <Icon>edit</Icon> 수정
                    </MenuItem>
                    <MenuItem color='danger' onClick={() => handleTableMenuClick(Menu.remove, item)}>
                      <Icon>delete</Icon> 삭제
                    </MenuItem>
                    <Divider />
                    <StyledTableMenuItemCopyToClipboard>
                      <CopyToClipboardButton
                        variant='text'
                        fullWidth
                        disableRipple
                        text={item.email}
                        startIcon='content_copy'
                      >
                        Email 복사
                      </CopyToClipboardButton>
                    </StyledTableMenuItemCopyToClipboard>
                    <StyledTableMenuItemCopyToClipboard>
                      <CopyToClipboardButton
                        variant='text'
                        fullWidth
                        disableRipple
                        text={item.mobile}
                        startIcon='content_copy'
                      >
                        Mobile 복사
                      </CopyToClipboardButton>
                    </StyledTableMenuItemCopyToClipboard>
                  </MenuList>
                }
              />
            );
          },
        },
      ] as TableColumns<TestDataListDataItem>,
    [handleTableMenuClick]
  );

  const search = useMemo(() => ({ searchGroups }) as SearchTableSearchProps, [searchGroups]);

  const table = useMemo(
    () =>
      ({
        showEvenColor: true,
        defaultAlign: 'center',
        topHeadRows: tableTopHeadRows,
        columns: tableColumns,
        onClick: handleTableItemClick,
        onGetBodyColumnClassName: handleTableGetBodyColumnClassName,
      }) as SearchTableTableProps<TestDataListDataItem>,
    [handleTableGetBodyColumnClassName, handleTableItemClick, tableColumns, tableTopHeadRows]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(
    () => (
      <HashSearchTable<TestDataListDataItem>
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

export default TestDataList;
