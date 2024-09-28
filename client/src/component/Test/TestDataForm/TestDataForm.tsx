import React from 'react';
import {
  Form,
  FormRow,
  FormCol,
  FormText,
  FormButton,
  FormValueMap,
  FormCommands,
  FormBody,
  FormFooter,
  FormTag,
  FormMobile,
  FormCompanyNo,
  FormPersonalNo,
  FormTel,
  FormEmail,
  FormNumber,
  FormSwitch,
  FormRadioGroup,
  FormRadioGroupCommands,
  FormUrl,
  FormDateTimePicker,
  FormDatePicker,
} from '@pdg/react-form';
import { TestDataFormProps as Props } from './TestDataForm.types';
import { Test, TestDataInfoData } from '@const';
import dayjs, { Dayjs } from 'dayjs';
import TestDataStatus from '../../../constant/Test/TestDataStatus';
import { usePrivacyAccessReasonDialog } from '@dialog';

const TestDataForm: React.FC<Props> = ({ id, onValueChange, onSuccess, onCancel }) => {
  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const privacyAccessReasonDialog = usePrivacyAccessReasonDialog();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<FormCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [info, setInfo] = useState<TestDataInfoData>();
  const [date, setDate] = useState<Dayjs>();
  const [datetime, setDatetime] = useState<Dayjs>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadStatusList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadInfo(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 상태 목록 불러오기 */
  const loadStatusList = useCallback(() => {
    Test.dataStatusList().then(({ data }) => {
      const items = data.map((item) => lv(item.name, item.status));
      formRef.current?.getItem<FormRadioGroupCommands<TestDataStatus>>('status')?.setItems(items);
    });
  }, []);

  /** 정보 불러오기 */
  const loadInfo = useCallback(
    (id?: number) => {
      if (id == null) {
        setInfo(undefined);
        setDate(undefined);
        setDatetime(undefined);
      } else {
        let isConfirm = false;
        privacyAccessReasonDialog({
          onConfirm: (dialog, reason) => {
            Test.dataInfo(id, { privacy_access: true, privacy_access_reason: reason }).then(({ data }) => {
              isConfirm = true;
              dialog.close();
              setInfo(data);
              setDate(dayjs(data.date));
              setDatetime(dayjs(data.datetime));
            });
          },
          onClose() {
            if (!isConfirm) {
              onCancel && onCancel();
            }
          },
        });
      }
    },
    [onCancel, privacyAccessReasonDialog]
  );

  /** 취소 */
  const cancel = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: FormValueMap) => {
      if (id) {
        Test.dataEdit('정보를 수정하시겠습니까?', id, data).then(() => {
          onSuccess && onSuccess();
        });
      } else {
        Test.dataAdd('등록하시겠습니까?', data).then(() => {
          onSuccess && onSuccess();
        });
      }
    },
    [id, onSuccess]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Form ref={formRef} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <FormBody>
        <FormRow icon='Article' label='기본 정보' line>
          <FormCol>
            <FormText name='text' label='Text' value={info?.text} required autoFocus />
          </FormCol>
          <FormCol xs={3}>
            <FormRadioGroup name='status' label='Status' value={info?.status || Test.DataStatus.On} required />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormTag name='text_array' label='Text Array' value={info?.text_array} required />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormEmail name='email' label='Email' value={info?.email} required />
          </FormCol>
        </FormRow>

        <FormRow icon='CalendarMonth' label='날짜/시간' line>
          <FormCol>
            <FormDatePicker name='date' label='Date' value={date} required />
          </FormCol>
          <FormCol>
            <FormDateTimePicker name='datetime' label='DateTime' time='second' value={datetime} required />
          </FormCol>
        </FormRow>

        <FormRow icon='BlurOn' label='추가 정보' line>
          <FormCol>
            <FormTel name='tel' label='Tel' value={info?.tel} required />
          </FormCol>
          <FormCol>
            <FormMobile name='mobile' label='Mobile' value={info?.mobile} required />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormCompanyNo name='company_num' label='Company Num' value={info?.company_num} required />
          </FormCol>
          <FormCol>
            <FormPersonalNo
              name='personal_num'
              label='Personal Num'
              value={info?.personal_num}
              required
              skipPersonalNumberValidateCheck
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormNumber name='num_int' label='Num Int' value={info?.num_int} required />
          </FormCol>
          <FormCol>
            <FormNumber
              name='num_float'
              label='Num Float'
              value={info?.num_float}
              required
              allowDecimal
              decimalScale={2}
            />
          </FormCol>
          <FormCol>
            <FormSwitch name='bool' label='Bool' value={info?.bool} />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <FormUrl name='url' label='Url' value={info?.url} required />
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
              {id ? '수정' : '등록'}
            </FormButton>
          </FormCol>
        </FormRow>
      </FormFooter>
    </Form>
  );
};

export default TestDataForm;
