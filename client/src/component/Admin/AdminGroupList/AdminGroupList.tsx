/********************************************************************************************************************
 * 어드민 그룹 목록 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { SearchTable, SearchTableCommands, SearchTableData, TableColumns, TableItem } from '@pdg/react-table';
import { FormValueMap, SearchGroup } from '@pdg/react-form';
import { Admin, AdminGroupListDataItem } from '@const';
import { Typography } from '@mui/material';
import { useDialog } from '@pdg/react-dialog';
import { AdminGroupFormDialog } from '@dialog';
import { AdminGroupListProps as Props } from './AdminGroupList.type';
import { SearchAddButton } from '@ccomp';
import app from '@app';

const AdminGroupList: React.FC<Props> = ({ noHash }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<SearchTableCommands<AdminGroupListDataItem>>(null);

  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const formDialog = useDialog(AdminGroupFormDialog);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const hasWriteRole = app.hasMenuWriteRole(app.Menu.Admin.Group);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 사용자 목록 다시 불러오기 */
  const reloadList = useCallback(
    (page?: number) => {
      searchTableRef.current?.reload(page);
    },
    [searchTableRef]
  );

  /** 그룹 목록 불러오기 */
  const getData = useCallback((data: FormValueMap) => {
    return new Promise<SearchTableData<AdminGroupListDataItem>>((resolve) => {
      Admin.Group.list(data).then(({ data: items }) => {
        resolve({ items });
      });
    });
  }, []);

  /** 그룹 추가/수정 */
  const showFormDialog = useCallback(
    (item?: TableItem) => {
      formDialog({ id: item?.id, onSuccess: () => reloadList(item ? undefined : 1) });
    },
    [formDialog, reloadList]
  );

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 검색 영역 */
  const searchGroups = useMemo(
    () =>
      hasWriteRole && (
        <SearchGroup max align='right'>
          <SearchAddButton onClick={() => showFormDialog()}>새 그룹</SearchAddButton>
        </SearchGroup>
      ),
    [hasWriteRole, showFormDialog]
  );

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        { label: 'ID', name: 'id', width: 100, minWidth: 70 },
        { label: '그룹 이름', name: 'name', align: 'left', minWidth: 100 },
        {
          label: '인원수',
          name: 'user_count',
          width: 150,
          minWidth: 70,
        },
        {
          label: '상태',
          width: 150,
          minWidth: 70,
          onRender: (item) => (item.is_lock ? <Typography color='error'>제한</Typography> : '정상'),
        },
      ] as TableColumns<AdminGroupListDataItem>,
    []
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <SearchTable<AdminGroupListDataItem>
      ref={searchTableRef}
      hash={!noHash}
      onGetData={getData}
      search={{ searchGroups }}
      table={{
        showEvenColor: true,
        defaultAlign: 'center',
        onClick: showFormDialog,
        columns: tableColumns,
      }}
    />
  );
};

export default AdminGroupList;
