/********************************************************************************************************************
 * 어드민 메뉴 등록/수정 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { Form, FormRow, FormCol, FormText, FormButton, FormCommands, FormBody, FormFooter } from '@pdg/react-form';
import { AdminMenuFormProps as Props } from './AdminMenuForm.types';
import { Admin, AdminMenuInfoData } from '@const';
import { PdgIcon } from '@pdg/react-component';

const AdminMenuForm: React.FC<Props> = ({
  parentMenu: initParentMenu,
  id: initId,
  onValueChange,
  onSuccess,
  onCancel,
}) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<AdminMenuInfoData>();
  const [icon, setIcon] = useState<string>();
  const [id, setId] = useState<string>('');

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** 부모 메뉴 */
  const parentMenu = useMemo(() => (initId ? info?.parent : initParentMenu), [info?.parent, initId, initParentMenu]);

  /** 최종 ID */
  const finalId = useMemo(
    () => (parentMenu ? `${parentMenu?.id}/${id.toLowerCase()}` : id.toLowerCase()),
    [id, parentMenu]
  );

  /** ID 입력 도움말 */
  const idHelperText = useMemo(() => {
    if (finalId !== id) {
      return `최종 ID : ${finalId}`;
    }
  }, [finalId, id]);

  /** URI */
  const uri = useMemo(() => `/${finalId}`, [finalId]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadInfo(initId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initId]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 메뉴 정보 불러오기 */
  const loadInfo = useCallback((id?: string) => {
    if (id == null) {
      setInfo(undefined);
    } else {
      Admin.Menu.info(id).then(({ data }) => {
        setInfo(data);

        if (data.parent) {
          setId(data.id.substring(data.parent.id.length + 1));
        } else {
          setId(data.id);
        }
        setIcon(data.icon || undefined);
      });
    }
  }, []);

  /** 취소 */
  const cancel = useCallback(() => {
    if (onCancel) onCancel();
  }, [onCancel]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: Dict) => {
      if (initId) {
        Admin.Menu.edit('정보를 수정하시겠습니까?', initId, data).then(() => {
          onSuccess && onSuccess();
        });
      } else {
        if (parentMenu) {
          data.parent_id = parentMenu.id;
        }
        Admin.Menu.add('등록하시겠습니까?', data).then(() => {
          onSuccess && onSuccess();
        });
      }
    },
    [initId, onSuccess, parentMenu]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Form ref={formRef} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <FormBody>
        {parentMenu && (
          <FormRow>
            <FormCol>
              <FormText name='parent' exceptValue label='부모 메뉴' value={parentMenu.name} disabled />
            </FormCol>
          </FormRow>
        )}
        <FormRow>
          <FormCol>
            <FormText
              name={initId ? 'new_id' : 'id'}
              label='ID'
              required
              autoFocus
              value={id}
              onChange={setId}
              startAdornment={parentMenu ? `${parentMenu?.id}/` : undefined}
              helperText={idHelperText}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormText name='name' label='이름' value={info?.name} required />
          </FormCol>
        </FormRow>
        {!parentMenu && (
          <FormRow>
            <FormCol>
              <FormText
                name='icon'
                label='아이콘'
                value={icon}
                required
                onChange={setIcon}
                endAdornment={icon ? <PdgIcon color='primary'>{icon}</PdgIcon> : undefined}
              />
            </FormCol>
          </FormRow>
        )}
        <FormRow>
          <FormCol>
            <FormText name='uri' label='URL 경로' exceptValue value={uri} disabled />
          </FormCol>
        </FormRow>
      </FormBody>
      <FormFooter>
        <FormRow>
          <FormCol>
            <FormButton startIcon='close' onClick={cancel}>
              취소
            </FormButton>
          </FormCol>
          <FormCol>
            <FormButton type='submit' startIcon='save_alt'>
              {initId ? '수정' : '등록'}
            </FormButton>
          </FormCol>
        </FormRow>
      </FormFooter>
    </Form>
  );
};

export default AdminMenuForm;
