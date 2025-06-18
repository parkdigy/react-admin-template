import React from 'react';
import {
  PForm,
  PFormRow,
  PFormCol,
  PFormText,
  PFormButton,
  PFormValueMap,
  PFormCommands,
  PFormBody,
  PFormFooter,
  PFormTag,
  PFormMobile,
  PFormBusinessNo,
  PFormPersonalNo,
  PFormTel,
  PFormEmail,
  PFormNumber,
  PFormSwitch,
  PFormRadioGroup,
  PFormRadioGroupCommands,
  PFormUrl,
  PFormDateTimePicker,
  PFormDatePicker,
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

  const formRef = useRef<PFormCommands>(null);

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
      formRef.current?.getItem<PFormRadioGroupCommands<TestDataStatus>>('status')?.setItems(items);
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
              onCancel?.();
            }
          },
        });
      }
    },
    [onCancel, privacyAccessReasonDialog]
  );

  /** 취소 */
  const cancel = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: PFormValueMap) => {
      if (id) {
        Test.dataEdit('정보를 수정하시겠습니까?', id, data).then(() => {
          onSuccess?.();
        });
      } else {
        Test.dataAdd('등록하시겠습니까?', data).then(() => {
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
    <PForm ref={formRef} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <PFormBody>
        <PFormRow icon='Article' label='기본 정보' line>
          <PFormCol>
            <PFormText name='text' label='Text' value={info?.text} required autoFocus />
          </PFormCol>
          <PFormCol xs={3}>
            <PFormRadioGroup name='status' label='Status' value={info?.status || Test.DataStatus.On} required />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormTag name='text_array' label='Text Array' value={info?.text_array} required />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormEmail name='email' label='Email' value={info?.email} required />
          </PFormCol>
        </PFormRow>

        <PFormRow icon='CalendarMonth' label='날짜/시간' line>
          <PFormCol>
            <PFormDatePicker name='date' label='Date' value={date} required />
          </PFormCol>
          <PFormCol>
            <PFormDateTimePicker name='datetime' label='DateTime' time='second' value={datetime} required />
          </PFormCol>
        </PFormRow>

        <PFormRow icon='BlurOn' label='추가 정보' line>
          <PFormCol>
            <PFormTel name='tel' label='Tel' value={info?.tel} required />
          </PFormCol>
          <PFormCol>
            <PFormMobile name='mobile' label='Mobile' value={info?.mobile} required />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormBusinessNo name='business_no' label='Company Num' value={info?.business_no} required />
          </PFormCol>
          <PFormCol>
            <PFormPersonalNo
              name='personal_no'
              label='Personal Num'
              value={info?.personal_no}
              required
              skipPersonalNumberValidateCheck
            />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormNumber name='num_int' label='Num Int' value={info?.num_int} required />
          </PFormCol>
          <PFormCol>
            <PFormNumber
              name='num_float'
              label='Num Float'
              value={info?.num_float}
              required
              allowDecimal
              decimalScale={2}
            />
          </PFormCol>
          <PFormCol>
            <PFormSwitch name='bool' label='Bool' value={info?.bool} />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol>
            <PFormUrl name='url' label='Url' value={info?.url} required />
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
              {id ? '수정' : '등록'}
            </PFormButton>
          </PFormCol>
        </PFormRow>
      </PFormFooter>
    </PForm>
  );
};

export default TestDataForm;
