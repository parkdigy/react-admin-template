/********************************************************************************************************************
 * 어드민 사용자 등록/수정 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import {
  PForm,
  PFormRow,
  PFormCol,
  PFormEmail,
  PFormText,
  PFormMobile,
  PFormSelect,
  PFormButton,
  PFormSelectItem,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormSelectItems,
} from '@pdg/react-form';
import { AdminUserFormProps } from './AdminUserForm.types';
import { Admin, AdminUserInfoData } from '@const';
import { useDialog } from '@pdg/react-dialog';
import { AdminGroupFormDialog } from '@dialog';
import app from '@app';
import { useAppState } from '@context';

const AdminUserForm: React.FC<AdminUserFormProps> = ({ id, onChange, onSuccess, onCancel }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { auth } = useAppState();

  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const groupFormDialog = useDialog(AdminGroupFormDialog);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<AdminUserInfoData>();
  const [groupItems, setGroupItems] = useState<PFormSelectItems<number>>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const hasWriteRole = app.hasMenuWriteRole(app.Menu.Admin.User);
  const hasWriteRoleGroup = app.hasMenuWriteRole(app.Menu.Admin.Group);
  const editable = hasWriteRole && (!info || info.editable);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadGroupList();
    loadInfo(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 그룹 목록 불러오기 */
  const loadGroupList = useCallback(() => {
    Admin.Group.list().then(({ data: list }) => {
      const items = list.map<PFormSelectItem<number>>((info) =>
        lv(info.name, info.id, { disabled: info.id === SUPER_ADMIN_GROUP_ID && !auth?.is_super })
      );
      items.unshift(lv('없음', ''));
      setGroupItems(items);
    });
  }, [auth?.is_super]);

  /** 사용자 정보 불러오기 */
  const loadInfo = useCallback((id?: number) => {
    if (id == null) {
      setInfo(undefined);
    } else {
      Admin.User.info(id).then(({ data: info }) => {
        setInfo(info);
      });
    }
  }, []);

  /** 취소 */
  const cancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  /** 그룹 추가 */
  const addGroup = useCallback(() => {
    groupFormDialog({
      onSuccess: () => {
        loadGroupList();
      },
    });
  }, [groupFormDialog, loadGroupList]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: PFormValueMap) => {
      if (id) {
        Admin.User.edit('사용자 정보를 수정하시겠습니까?', id, data).then(() => {
          onSuccess?.();
        });
      } else {
        Admin.User.add('사용자를 등록하시겠습니까?', data).then(() => {
          onSuccess?.();
        });
      }
    },
    [id, onSuccess]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PForm disabled={!editable} onSubmit={handleSubmit} onValueChangeByUser={() => onChange?.()}>
      <PFormBody>
        <PFormRow>
          <PFormCol>
            <PFormEmail name='email' label='이메일' value={info?.email} disabled={!!id} required={!id} />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormText name='name' label='이름' value={info?.name} required />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormMobile name='tel' label='휴대폰번호' value={info?.tel} required />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormSelect
              name='admin_group_id'
              label='그룹'
              placeholder='그룹 선택'
              items={groupItems}
              value={ifNullOrUndefined(info?.admin_group_id, undefined)}
              endAdornment={
                editable && hasWriteRoleGroup ? (
                  <PFormButton sx={{ mr: 2 }} startIcon='add' startIconMarginLeft='-0.3em' onClick={addGroup}>
                    그룹 등록
                  </PFormButton>
                ) : undefined
              }
            />
          </PFormCol>
        </PFormRow>
      </PFormBody>
      {editable && (
        <PFormFooter>
          <PFormRow>
            <PFormCol>
              <PFormButton startIcon='close' onClick={cancel}>
                취소
              </PFormButton>
            </PFormCol>
            <PFormCol>
              <PFormButton type='submit' startIcon='save_alt'>
                {id ? '수정' : '등록'}
              </PFormButton>
            </PFormCol>
          </PFormRow>
        </PFormFooter>
      )}
    </PForm>
  );
};

export default AdminUserForm;
