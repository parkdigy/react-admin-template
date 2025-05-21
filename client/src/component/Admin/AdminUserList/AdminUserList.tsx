/********************************************************************************************************************
 * 어드민 사용자 목록 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import {
  SearchTableCommands,
  SearchTableData,
  SearchTableSearchProps,
  SearchTableTableProps,
  TableButton,
  TableColumn,
  TableColumns,
} from '@pdg/react-table';
import { SearchExportButton, HashSearchTable, SearchAddButton } from '@ccomp';
import { SearchGroup, FormValueMap, FormSelectCommands, FormSelect, FormSearch } from '@pdg/react-form';
import { AdminUserListProps as Props } from './AdminUserList.types';
import { Admin, AdminUserListDataItem } from '@const';
import { AdminGroupFormDialog, AdminUserFormDialog, AdminUserLoginLogListDialog } from '@dialog';
import { useDialog } from '@pdg/react-dialog';
import { Typography } from '@mui/material';
import { PdgText } from '@pdg/react-component';
import { useAppState } from '@context';
import app from '@app';

const AdminUserList: React.FC<Props> = ({ noHash, onRequestScrollToTop }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { auth } = useAppState();

  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const formDialog = useDialog(AdminUserFormDialog);
  const groupFormDialog = useDialog(AdminGroupFormDialog);
  const loginLogListDialog = useDialog(AdminUserLoginLogListDialog);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<SearchTableCommands<AdminUserListDataItem>>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const hasWriteRole = app.hasMenuWriteRole(app.Menu.Admin.User);
  const hasReadRoleGroup = app.hasMenuReadRole(app.Menu.Admin.Group);
  const hasExportRole = app.hasMenuExportRole(app.Menu.Admin.User);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadGroupList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 그룹 목록 불러오기 */
  const loadGroupList = useCallback(() => {
    Admin.Group.list().then(({ data }) => {
      const items = data.map((info) => lv(info.name, info.id));
      items.unshift(lv('전체', ''));
      searchTableRef.current?.getSearch()?.getItem<FormSelectCommands<number>>('admin_group_id')?.setItems(items);
    });
  }, [searchTableRef]);

  /** 사용자 목록 다시 불러오기 */
  const reloadList = useCallback(
    (page?: number) => {
      searchTableRef.current?.reload(page);
    },
    [searchTableRef]
  );

  /** 비밀번호 초기화 */
  const passwordReset = useCallback(
    (item: AdminUserListDataItem) => {
      Admin.User.passwordReset(`사용자 "${item.name}"의 비밀번호를 초기화 하시겠습니까?`, item.id).then(() => {
        reloadList();
      });
    },
    [reloadList]
  );

  /** 사용자 제한/해제 */
  const toggleLock = useCallback(
    (item: AdminUserListDataItem) => {
      if (item.is_lock) {
        Admin.User.unlock(`사용자 "${item.name}"의 사용 제한을 해제하시겠습니까?`, item.id).then(() => {
          reloadList();
        });
      } else {
        Admin.User.lock(
          <PdgText size='inherit' color='error'>
            사용자 "{item.name}"의 사용을 제한 하시겠습니까?
          </PdgText>,
          item.id
        ).then(() => {
          reloadList();
        });
      }
    },
    [reloadList]
  );

  /** 사용자 등록/수정 다이얼로그 열기 */
  const showFormDialog = useCallback(
    (item?: AdminUserListDataItem) => {
      formDialog({ id: item?.id, onSuccess: () => reloadList(item ? undefined : 1) });
    },
    [formDialog, reloadList]
  );

  /** 그룹 등록/수정 다이얼로그 열기 */
  const showGroupFormDialog = useCallback(
    (item: AdminUserListDataItem) => {
      if (item.admin_group_id) {
        groupFormDialog({ id: item.admin_group_id, onSuccess: () => reloadList() });
      }
    },
    [groupFormDialog, reloadList]
  );

  /** 로그인 내역 다이얼로그 열기 */
  const showLoginLogDialog = useCallback(
    (item: AdminUserListDataItem) => {
      loginLogListDialog({ email: item.email });
    },
    [loginLogListDialog]
  );

  /** 사용자 목록 불러오기 */
  const getData = useCallback(
    (data: FormValueMap) => {
      onRequestScrollToTop?.();
      return new Promise<SearchTableData<AdminUserListDataItem>>((resolve) => {
        Admin.User.list(data).then(({ data: items, paging }) => {
          resolve({ items, paging });
        });
      });
    },
    [onRequestScrollToTop]
  );

  /** 사용자 목록 엑셀 다운로드 */
  const exportData = useCallback(() => {
    const data = searchTableRef.current?.getLastLoadData();
    if (data) Admin.User.exportList(data);
  }, [searchTableRef]);

  /** 사용자 제한/해제 스타일 */
  const getLockStyle = useCallback((item: AdminUserListDataItem): TableColumn['style'] => {
    return item.is_lock ? { opacity: 0.5 } : undefined;
  }, []);

  /********************************************************************************************************************
   * Table
   * ******************************************************************************************************************/

  /** 검색 영역 */
  const searchGroups = useMemo(
    () => (
      <>
        <SearchGroup max>
          <FormSelect
            name='keyword_option'
            label='검색옵션'
            items={[lv('이메일', 'email'), lv('ID', 'id'), lv('이름', 'name')]}
            value='name'
          />
          <FormSearch name='keyword' label='검색어' placeholder='검색어' />
          <FormSelect name='is_lock' label='계정상태' items={[lv('전체', ''), lv('정상', 0), lv('제한', 1)]} />
          <FormSelect name='admin_group_id' label='그룹' placeholder='전체' />
        </SearchGroup>
        <SearchGroup align='right'>
          {hasExportRole && <SearchExportButton onClick={() => exportData()} />}
          {hasWriteRole && <SearchAddButton onClick={() => showFormDialog()}>새 사용자</SearchAddButton>}
        </SearchGroup>
      </>
    ),
    [exportData, hasExportRole, hasWriteRole, showFormDialog]
  );

  /** 테이블 컬럼 */
  const tableColumns = useMemo(
    () =>
      [
        {
          label: 'ID',
          name: 'id',
          width: 60,
          minWidth: 60,
          onGetStyle: getLockStyle,
        },
        {
          label: '이메일',
          name: 'email',
          align: 'left',
          minWidth: 150,
          ellipsis: true,
          onGetStyle: getLockStyle,
        },
        {
          label: '이름',
          name: 'name',
          align: 'left',
          width: 90,
          minWidth: 90,
          ellipsis: true,
          onGetStyle: getLockStyle,
        },
        {
          type: 'tel',
          label: '휴대폰번호',
          name: 'tel',
          width: 120,
          minWidth: 120,
          onGetStyle: getLockStyle,
        },
        {
          type: hasReadRoleGroup ? 'button' : undefined,
          label: '그룹',
          width: 180,
          minWidth: 180,
          onRender(item): React.ReactNode {
            return (
              item.admin_group_name && (
                <>
                  {hasReadRoleGroup ? (
                    <TableButton fullWidth onClick={() => showGroupFormDialog(item)}>
                      {item.admin_group_name}
                    </TableButton>
                  ) : (
                    item.admin_group_name
                  )}
                </>
              )
            );
          },
        },
        {
          label: '계정상태',
          width: 70,
          minWidth: 70,
          onGetStyle: getLockStyle,
          onRender(item) {
            return item.is_lock ? <Typography color='error'>제한</Typography> : '정상';
          },
        },
        {
          type: 'datetime',
          label: '생성일',
          name: 'create_date',
          width: 150,
          minWidth: 150,
          onGetStyle: getLockStyle,
        },
        auth?.is_super && {
          type: 'button',
          label: '로그인내역',
          width: 90,
          minWidth: 90,
          onRender(item) {
            return <TableButton onClick={() => showLoginLogDialog(item)}>보기</TableButton>;
          },
        },
        {
          type: 'button',
          label: '비번초기화',
          width: 90,
          minWidth: 90,
          onRender(item) {
            return (
              !item.must_password_change && (
                <TableButton disabled={!item.editable || !hasWriteRole} onClick={() => passwordReset(item)}>
                  초기화
                </TableButton>
              )
            );
          },
        },
        {
          type: 'button',
          label: '제한/해제',
          width: 90,
          minWidth: 90,
          onRender(item) {
            const disabled = !item.editable || !hasWriteRole;
            return item.is_lock ? (
              <TableButton disabled={disabled} onClick={() => toggleLock(item)}>
                해제
              </TableButton>
            ) : (
              <TableButton disabled={disabled} color='error' onClick={() => toggleLock(item)}>
                제한
              </TableButton>
            );
          },
        },
      ] as TableColumns<AdminUserListDataItem>,
    [
      auth?.is_super,
      getLockStyle,
      hasReadRoleGroup,
      hasWriteRole,
      passwordReset,
      showGroupFormDialog,
      showLoginLogDialog,
      toggleLock,
    ]
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
        onClick: showFormDialog,
      }) as SearchTableTableProps<AdminUserListDataItem>,
    [showFormDialog, tableColumns]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return useMemo(
    () => (
      <HashSearchTable<AdminUserListDataItem>
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

export default AdminUserList;
