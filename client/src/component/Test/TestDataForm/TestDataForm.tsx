import { type TestDataFormProps as Props } from './TestDataForm.types';
import { type TestDataInfoData } from '@const';
import { usePrivacyAccessReasonDialog } from '@dialog';

const TestDataForm = ({ id, onValueChange, onSuccess, onCancel }: Props) => {
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
   * Function
   * ******************************************************************************************************************/

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
            Const.Test.dataInfo(id, { privacy_access: true, privacy_access_reason: reason }).then(({ data }) => {
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
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    loadInfo(id);
  }, [id]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 저장 - Form.onSubmit */
  const handleSubmit = useCallback(
    (data: Dict) => {
      if (id) {
        Const.Test.dataEdit('정보를 수정하시겠습니까?', id, data).then(() => {
          onSuccess?.();
        });
      } else {
        Const.Test.dataAdd('등록하시겠습니까?', data).then(() => {
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
    <Form ref={formRef} onSubmit={handleSubmit} onValueChangeByUser={onValueChange}>
      <FormBody>
        <FormRow icon='Article' label='기본 정보' line>
          <FormCol>
            <FormText name='text' label='Text' value={info?.text} required autoFocus />
          </FormCol>
          <FormCol xs={3}>
            <FormRadioGroup
              name='status'
              label='Status'
              value={info?.status || Const.Test.DataStatus.On}
              required
              onLoadItems={async () => Const.Test.DataStatus.getLvList()}
            />
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
            <FormBusinessNo name='business_no' label='Company Num' value={info?.business_no} required />
          </FormCol>
          <FormCol>
            <FormPersonalNo
              name='personal_no'
              label='Personal Num'
              value={info?.personal_no}
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
