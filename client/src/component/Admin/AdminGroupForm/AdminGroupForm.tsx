/********************************************************************************************************************
 * 어드민 그룹 등록/수정 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { AdminGroupFormProps } from './AdminGroupForm.types';
import {
  Form,
  FormCol,
  FormRow,
  FormText,
  FormAutocomplete,
  FormAutocompleteItem,
  FormButton,
  FormValueMap,
  FormBody,
  FormFooter,
  FormAutocompleteItems,
} from '@pdg/react-form';
import {
  Admin,
  AdminGroupEditRequestData,
  AdminGroupInfoData,
  AdminGroupMenuListData,
  AdminGroupMenuListDataItemBase,
} from '@const';
import { Chip, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import AdminGroupFormRoleTableCells from './AdminGroupFormRoleTableCells';
import { PdgIconText } from '@pdg/react-component';
import { useConfirmDialog } from '@pdg/react-dialog';
import app from '@app';

const AdminGroupForm: React.FC<AdminGroupFormProps> = ({ id, onChange, onSuccess, onCancel }) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const confirmDialog = useConfirmDialog();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<AdminGroupInfoData>();
  const [menu, setMenu] = useState<AdminGroupMenuListData>();
  const [privacyAccess] = useState({ new_read: false });

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const hasWriteRole = useMemo(() => app.hasMenuWriteRole(app.Menu.Admin.Group), []);
  const editable = useMemo(() => hasWriteRole && (!info || !info.info || info.info.editable), [hasWriteRole, info]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadMenuList();
    loadInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  /** 그룹 정보 불러오기 */
  const loadInfo = useCallback(() => {
    if (id) {
      Admin.Group.info(id).then(({ data: info }) => {
        setInfo(info);
      });
    } else {
      setInfo(undefined);
    }
  }, [id]);

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
                <div>"{item.groupName}" 그룹에 소속된 사용자입니다.</div>
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

  /** 사용자가 직접 데이터 수정 - Form.onValueChangeByUser */
  const handleChangeByUser = useCallback(() => {
    if (onChange) onChange();
  }, [onChange]);

  /** 그룹 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: FormValueMap) => {
      const finalData = data as unknown as AdminGroupEditRequestData;

      if (id) finalData.id = id;

      finalData.is_privacy_access = privacyAccess.new_read;

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
          finalData.menu = JSON.stringify(menuRoles);
        }
      }

      if (id) {
        Admin.Group.edit('그룹 정보를 수정하시겠습니까?', finalData).then(() => {
          if (onSuccess) onSuccess();
        });
      } else {
        Admin.Group.add('그룹을 등록하시겠습니까?', finalData).then(() => {
          if (onSuccess) onSuccess();
        });
      }
    },
    [id, menu, privacyAccess, onSuccess]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={!editable} onValueChangeByUser={handleChangeByUser}>
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
                    {item.label}{' '}
                    {notEmpty(item.groupName) && <Chip label={item.groupName} size='small' sx={{ ml: 1 }} />}
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
                <Table
                  sx={{
                    '.MuiTableCell-root': {
                      padding: '0 10px',
                    },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>대분류</TableCell>
                      <TableCell>중분류</TableCell>
                      <TableCell align='center'>조회</TableCell>
                      <TableCell align='center'>수정</TableCell>
                      <TableCell align='center'>Export</TableCell>
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
                                item={info}
                                disabled={!editable}
                                onChange={handleChangeByUser}
                              />
                            </>
                          )}
                        </TableRow>
                        {info.items?.map((subInfo) => (
                          <TableRow key={subInfo.id}>
                            <TableCell>{subInfo.name}</TableCell>
                            <AdminGroupFormRoleTableCells
                              item={subInfo}
                              disabled={!editable}
                              onChange={handleChangeByUser}
                            />
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                    <TableRow>
                      <TableCell>
                        <PdgIconText icon='person'>개인정보</PdgIconText>
                      </TableCell>
                      <TableCell />
                      <AdminGroupFormRoleTableCells
                        item={privacyAccess}
                        noWrite
                        noExport
                        disabled={!editable}
                        onChange={handleChangeByUser}
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
                <FormButton icon='close' onClick={() => onCancel && onCancel()}>
                  취소
                </FormButton>
              </FormCol>
              <FormCol>
                <FormButton type='submit' icon='save_alt'>
                  {id ? '수정' : '등록'}
                </FormButton>
              </FormCol>
            </FormRow>
          </FormFooter>
        )}
      </Form>
    </>
  );
};

export default AdminGroupForm;
