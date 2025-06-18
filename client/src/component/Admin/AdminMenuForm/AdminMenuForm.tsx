/********************************************************************************************************************
 * 어드민 메뉴 등록/수정 폼 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import {
  PForm,
  PFormRow,
  PFormCol,
  PFormText,
  PFormButton,
  PFormCommands,
  PFormBody,
  PFormFooter,
} from '@pdg/react-form';
import { AdminMenuFormProps as Props } from './AdminMenuForm.types';
import { Admin, AdminMenuInfoData } from '@const';
import { PIcon } from '@pdg/react-component';

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

  const formRef = useRef<PFormCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<AdminMenuInfoData>();
  const [icon, setIcon] = useState<string>();
  const [id, setId] = useState<string>('');

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  /** 부모 메뉴 */
  const parentMenu = initId ? info?.parent : initParentMenu;

  /** 최종 ID */
  const finalId = parentMenu ? `${parentMenu?.id}/${id.toLowerCase()}` : id.toLowerCase();

  /** ID 입력 도움말 */
  const idHelperText = finalId !== id ? `최종 ID : ${finalId}` : undefined;

  /** URI */
  const uri = `/${finalId}`;

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
    onCancel?.();
  }, [onCancel]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: Dict) => {
      if (initId) {
        Admin.Menu.edit('정보를 수정하시겠습니까?', initId, data).then(() => {
          onSuccess?.();
        });
      } else {
        if (parentMenu) {
          data.parent_id = parentMenu.id;
        }
        Admin.Menu.add('등록하시겠습니까?', data).then(() => {
          onSuccess?.();
        });
      }
    },
    [initId, onSuccess, parentMenu]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PForm ref={formRef} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <PFormBody>
        {parentMenu && (
          <PFormRow>
            <PFormCol>
              <PFormText name='parent' exceptValue label='부모 메뉴' value={parentMenu.name} disabled />
            </PFormCol>
          </PFormRow>
        )}
        <PFormRow>
          <PFormCol>
            <PFormText
              name={initId ? 'new_id' : 'id'}
              label='ID'
              required
              autoFocus
              value={id}
              onChange={setId}
              startAdornment={parentMenu ? `${parentMenu?.id}/` : undefined}
              helperText={idHelperText}
            />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormText name='name' label='이름' value={info?.name} required />
          </PFormCol>
        </PFormRow>
        {!parentMenu && (
          <PFormRow>
            <PFormCol>
              <PFormText
                name='icon'
                label='아이콘'
                value={icon}
                required
                onChange={setIcon}
                endAdornment={icon ? <PIcon color='primary'>{icon}</PIcon> : undefined}
              />
            </PFormCol>
          </PFormRow>
        )}
        <PFormRow>
          <PFormCol>
            <PFormText name='uri' label='URL 경로' exceptValue value={uri} disabled />
          </PFormCol>
        </PFormRow>
      </PFormBody>
      <PFormFooter>
        <PFormRow>
          <PFormCol>
            <PFormButton startIcon='close' onClick={cancel}>
              취소
            </PFormButton>
          </PFormCol>
          <PFormCol>
            <PFormButton type='submit' startIcon='save_alt'>
              {initId ? '수정' : '등록'}
            </PFormButton>
          </PFormCol>
        </PFormRow>
      </PFormFooter>
    </PForm>
  );
};

export default AdminMenuForm;
