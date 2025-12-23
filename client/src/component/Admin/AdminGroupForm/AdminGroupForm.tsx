/********************************************************************************************************************
 * 어드민 그룹 등록/수정 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { AdminGroupFormProps as Props } from './AdminGroupForm.types';
import {
  Admin,
  AdminGroupInfoData,
  AdminGroupMenuListData,
  AdminGroupMenuListDataItem,
  AdminGroupMenuListDataItemBase,
} from '@const';
import { useConfirmDialog } from '@pdg/react-dialog';
import { Chip, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import AdminGroupFormRoleTableCells from './AdminGroupFormRoleTableCells';

const AdminGroupForm = ({ id, onValueChange, onSuccess, onCancel }: Props) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const confirmDialog = useConfirmDialog();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<AdminGroupInfoData>();
  const [menu, setMenu] = useState<AdminGroupMenuListData>();
  const [privacyAccess, setPrivacyAccess] = useState({ new_read: false });

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 메뉴 목록 불러오기 */
  const loadMenuList = useCallback(() => {
    if (id === 1) {
      setMenu(undefined);
    } else {
      Admin.Group.menuList({ admin_group_id: id }).then(({ data }) => {
        setMenu(data);
      });
    }
  }, [id]);

  /** 정보 불러오기 */
  const loadInfo = useCallback((id?: number) => {
    if (id == null) {
      setInfo(undefined);
    } else {
      Admin.Group.info(id).then(({ data }) => {
        setInfo(data);
        setPrivacyAccess({ new_read: data.info.is_privacy_access });
      });
    }
  }, []);

  /** 취소 */
  const cancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      loadMenuList();
      loadInfo(id);
    });
    useEffect(() => {
      return effectEvent();
    }, [id]);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 전체 사용자 목록 불러오기 - FormAutocomplete.onLoadItems */
  const handleUsersLoadItems = useCallback(async () => {
    const { data } = await Admin.User.allList();
    return data.map((info) =>
      lv(`(${info.name}) ${info.email}`, info.id, { groupName: info.admin_group_name })
    ) as FormAutocompleteItems<number>;
  }, []);

  /** 그룹에 사용자 추가 - FormAutocomplete.onAddItem */
  const handleUsersAddItem = useCallback(
    (item: FormAutocompleteItem<number>) => {
      if (notEmpty(item.groupName)) {
        return new Promise<boolean>((resolve) => {
          confirmDialog({
            title: '사용자 그룹 변경',
            content: (
              <div>
                <div>&quot;{item.groupName}&quot; 그룹에 소속된 사용자입니다.</div>
                <div>현재 그룹으로 변경하시겠습니까?</div>
              </div>
            ),
            onConfirm(commands) {
              resolve(true);
              commands.close();
            },
            onCancel(commands) {
              resolve(false);
              commands.close();
            },
          });
        });
      } else {
        return true;
      }
    },
    [confirmDialog]
  );

  /** 그룹 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: Dict) => {
      data.is_privacy_access = privacyAccess.new_read;

      if (menu) {
        const menuRoles: {
          [key: string]: {
            read?: { old: boolean; new: boolean };
            write?: { old: boolean; new: boolean };
            export?: { old: boolean; new: boolean };
          };
        } = {};
        const addMenuRoles = (item: AdminGroupMenuListDataItemBase) => {
          const id = item.id;
          if (item.read !== item.new_read || item.write !== item.new_write || item.export !== item.new_export)
            if (!menuRoles[id]) menuRoles[id] = {};
          if (item.read !== item.new_read) menuRoles[id].read = { old: !!item.read, new: !!item.new_read };
          if (item.write !== item.new_write) menuRoles[id].write = { old: !!item.write, new: !!item.new_write };
          if (item.export !== item.new_export) menuRoles[id].export = { old: !!item.export, new: !!item.new_export };
        };

        menu.map((item) => {
          if (item.items && item.items.length > 0) {
            item.items.map((subItem) => addMenuRoles(subItem));
          } else {
            addMenuRoles(item);
          }
        });

        if (notEmpty(menuRoles)) {
          data.menu = JSON.stringify(menuRoles);
        }
      }

      if (id) {
        Admin.Group.edit('그룹 정보를 수정하시겠습니까?', id, data).then(() => {
          onSuccess?.();
        });
      } else {
        Admin.Group.add('그룹을 등록하시겠습니까?', data).then(() => {
          onSuccess?.();
        });
      }
    },
    [id, menu, privacyAccess, onSuccess]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const editable = app.hasMenuWriteRole(app.Menu.Admin.Group) && (!info || !info.info || info.info.editable);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleRoleChange = useCallback(
    (
      item: AdminGroupMenuListDataItem | 'privacy',
      newRole: { new_read?: boolean; new_write?: boolean; new_export?: boolean }
    ) => {
      if (item === 'privacy') {
        setPrivacyAccess((prev) => {
          const newValue = { ...prev };
          if (newRole.new_read !== undefined) newValue.new_read = newRole.new_read;
          return prev;
        });
      } else if (menu) {
        setMenu(
          menu.map((info) => {
            if (info.id === item.id) {
              return {
                ...info,
                new_read: newRole.new_read ?? info.new_read,
                new_write: newRole.new_write ?? info.new_write,
                new_export: newRole.new_export ?? info.new_export,
              };
            } else if (info.items) {
              return {
                ...info,
                items: info.items.map((subInfo) => {
                  if (subInfo.id === item.id) {
                    return {
                      ...subInfo,
                      new_read: newRole.new_read ?? subInfo.new_read,
                      new_write: newRole.new_write ?? subInfo.new_write,
                      new_export: newRole.new_export ?? subInfo.new_export,
                    };
                  } else {
                    return subInfo;
                  }
                }),
              };
            } else {
              return info;
            }
          })
        );
      }
      onValueChange?.();
    },
    [menu, onValueChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return !id || info ? (
    <Form ref={formRef} disabled={!editable} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <FormBody>
        <FormRow>
          <FormCol>
            <FormText
              name='name'
              label='그룹 이름'
              readOnly={info?.info?.id === SUPER_ADMIN_GROUP_ID}
              required
              value={info?.info.name}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormAutocomplete
              name='users'
              label='사용자'
              multiple
              formValueSort
              value={info?.users}
              disableClearable
              onRenderItem={(item) => (
                <div>
                  {item.label} {notEmpty(item.groupName) && <Chip label={item.groupName} size='small' sx={{ ml: 1 }} />}
                </div>
              )}
              onLoadItems={handleUsersLoadItems}
              onAddItem={handleUsersAddItem}
            />
          </FormCol>
        </FormRow>
        {menu && (
          <FormRow line label='권한 설정' icon='LibraryAddCheck'>
            <FormCol>
              <div style={{ width: '100%', textAlign: 'right', marginTop: -38, zIndex: 2 }}>
                <span style={{ backgroundColor: '#fff', paddingLeft: 10 }}>
                  <Button size='small' startIcon='Download'>
                    다른 그룹에서 권한 가져오기
                  </Button>
                </span>
              </div>
              <Table
                sx={{
                  '.MuiTableCell-root': {
                    padding: '0 10px',
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 100 }}>대분류</TableCell>
                    <TableCell style={{ minWidth: 100 }}>중분류</TableCell>
                    <TableCell align='center' style={{ width: 100 }}>
                      조회
                    </TableCell>
                    <TableCell align='center' style={{ width: 100 }}>
                      수정
                    </TableCell>
                    <TableCell align='center' style={{ width: 100 }}>
                      다운로드
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {menu.map((info) => (
                    <React.Fragment key={info.id}>
                      <TableRow>
                        <TableCell rowSpan={(info.items?.length || 0) + 1}>{info.name}</TableCell>
                        {info.items?.length === 0 && (
                          <>
                            <TableCell />
                            <AdminGroupFormRoleTableCells
                              info={info}
                              disabled={!editable}
                              onChange={(v) => handleRoleChange(info, v)}
                            />
                          </>
                        )}
                      </TableRow>
                      {info.items?.map((subInfo) => (
                        <TableRow key={subInfo.id}>
                          <TableCell>{subInfo.name}</TableCell>
                          <AdminGroupFormRoleTableCells
                            info={subInfo}
                            disabled={!editable}
                            onChange={(v) => handleRoleChange(subInfo, v)}
                          />
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                  <TableRow>
                    <TableCell>
                      <IconText icon='person'>개인정보</IconText>
                    </TableCell>
                    <TableCell />
                    <AdminGroupFormRoleTableCells
                      info={privacyAccess}
                      noWrite
                      noExport
                      disabled={!editable}
                      onChange={(v) => handleRoleChange('privacy', v)}
                    />
                  </TableRow>
                </TableBody>
              </Table>
            </FormCol>
          </FormRow>
        )}
      </FormBody>
      {editable && (
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton startIcon='close' onClick={cancel}>
                취소
              </FormButton>
            </FormCol>
            <FormCol>
              <FormButton type='submit' startIcon='save_alt'>
                {id ? '수정' : '등록'}
              </FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      )}
    </Form>
  ) : null;
};

export default AdminGroupForm;
