import * as PdgReactForm from '@pdg/react-form';

declare global {
  // types
  type FormDateType = PdgReactForm.PFormDateType;
  type FormTimeType = PdgReactForm.PFormTimeType;
  type CommonProps = PdgReactForm.PCommonProps;
  type CommonSxProps = PdgReactForm.PCommonSxProps;
  type FormYearMonthValue = PdgReactForm.PFormYearMonthValue;
  type FormValue = PdgReactForm.PFormValue;
  type FormValueMap = PdgReactForm.PFormValueMap;
  type FormValueItemData = PdgReactForm.PFormValueItemData;
  type FormValueItemBaseCommands<
    T,
    AllowUndefinedValue extends boolean,
    V = AllowUndefinedValue extends true ? T | undefined : T,
  > = PdgReactForm.PFormValueItemBaseCommands<T, AllowUndefinedValue, V>;
  type FormArrayValueItemCommands = PdgReactForm.PFormArrayValueItemCommands;
  type FormItemsValueItemCommands<T> = PdgReactForm.PFormItemsValueItemCommands<T>;
  type FormCheckValueItemCommands<T> = PdgReactForm.PFormCheckValueItemCommands<T>;
  type FormMultipleValueItemCommands = PdgReactForm.PFormMultipleValueItemCommands;
  type FormLoadingValueItemCommands = PdgReactForm.PFormLoadingValueItemCommands;
  type FormDateValueItemCommands = PdgReactForm.PFormDateValueItemCommands;
  type FormRangeValueItemCommands<T> = PdgReactForm.PFormRangeValueItemCommands<T>;
  type FormRangeValueItemNameCommands = PdgReactForm.PFormRangeValueItemNameCommands;
  type FormYearMonthValueItemCommands = PdgReactForm.PFormYearMonthValueItemCommands;
  type FormYearMonthValueItemNameCommands = PdgReactForm.PFormYearMonthValueItemNameCommands;
  type FormYearMonthRangeValueItemCommands = PdgReactForm.PFormYearMonthRangeValueItemCommands;
  type FormYearMonthRangeValueItemNameCommands = PdgReactForm.PFormYearMonthRangeValueItemNameCommands;
  type FormValueItemCommands<
    T,
    AllowUndefinedValue extends boolean = true,
    ItemType = any,
    RangeItemValue = any,
  > = PdgReactForm.PFormValueItemCommands<T, AllowUndefinedValue, ItemType, RangeItemValue>;
  type FormValueItemCommandsMap<
    T,
    AllowUndefinedValue extends boolean = true,
    ItemType = any,
  > = PdgReactForm.PFormValueItemCommandsMap<T, AllowUndefinedValue, ItemType>;
  type FormValueItemProps<
    T,
    AllowUndefinedValue extends boolean = true,
    V = AllowUndefinedValue extends true ? T | undefined : T,
  > = PdgReactForm.PFormValueItemProps<T, AllowUndefinedValue, V>;

  // Form
  const Form: typeof PdgReactForm.PForm;
  type FormProps = PdgReactForm.PFormProps;
  type FormCommands = PdgReactForm.PFormCommands;
  type FormInvalidItemInfo = PdgReactForm.PFormInvalidItemInfo;
  type FormInvalidItems = PdgReactForm.PFormInvalidItems;

  // FormCommon
  const FormButton: typeof PdgReactForm.PFormButton;
  type FormButtonProps = PdgReactForm.PFormButtonProps;
  const FormLabel: typeof PdgReactForm.PFormLabel;
  type FormLabelProps = PdgReactForm.PFormLabelProps;

  // FormContext
  const FormContext: typeof PdgReactForm.PFormContext;
  type FormContextValue = PdgReactForm.PFormContextValue;
  const useFormState: typeof PdgReactForm.useFormState;
  const FormContextProvider: typeof PdgReactForm.PFormContextProvider;
  type FormContextProviderProps<
    T = any,
    AllowUndefinedValue extends boolean = true,
  > = PdgReactForm.PFormContextProviderProps<T, AllowUndefinedValue>;

  // FormItemCustom - FormAutocomplete
  const FormAutocomplete: typeof PdgReactForm.PFormAutocomplete;
  type FormAutocompleteProps<
    T extends FormAutocompleteSingleValue,
    Multiple extends boolean | undefined = undefined,
    Items extends FormAutocompleteItems<T> = FormAutocompleteItems<T>,
    SingleValue extends Items[number]['value'] = Items[number]['value'],
    Item = FormAutocompleteItem<SingleValue>,
    Value = Multiple extends true ? SingleValue[] : SingleValue,
    ComponentValue = FormAutocompleteComponentValue<SingleValue, Multiple>,
  > = PdgReactForm.PFormAutocompleteProps<T, Multiple, Items, SingleValue, Item, Value, ComponentValue>;
  type FormAutocompleteCommands<
    T extends FormAutocompleteSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormAutocompleteCommands<T, Multiple>;
  type FormAutocompleteSingleValue = PdgReactForm.PFormAutocompleteSingleValue;
  type FormAutocompleteItem<T extends FormAutocompleteSingleValue> = PdgReactForm.PFormAutocompleteItem<T>;
  type FormAutocompleteItems<T extends FormAutocompleteSingleValue> = PdgReactForm.PFormAutocompleteItems<T>;
  type FormAutocompleteValue<
    T extends FormAutocompleteSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormAutocompleteValue<T, Multiple>;
  type FormAutocompleteComponentValue<
    T extends FormAutocompleteSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormAutocompleteComponentValue<T, Multiple>;

  // FormItemCustom - FormCheckbox
  const FormCheckbox: typeof PdgReactForm.PFormCheckbox;
  type FormCheckboxProps = PdgReactForm.PFormCheckboxProps;
  type FormCheckboxCommands = PdgReactForm.PFormCheckboxCommands;
  type FormCheckboxValue = PdgReactForm.PFormCheckboxValue;

  // FormItemCustom - FormDatePicker
  const FormDatePicker: typeof PdgReactForm.PFormDatePicker;
  type FormDatePickerProps = PdgReactForm.PFormDatePickerProps;
  type FormDatePickerCommands = PdgReactForm.PFormDatePickerCommands;
  type FormDatePickerValue = PdgReactForm.PFormDatePickerValue;

  // FormItemCustom - FormDateRangePicker
  const FormDateRangePicker: typeof PdgReactForm.PFormDateRangePicker;
  type FormDateRangePickerProps = PdgReactForm.PFormDateRangePickerProps;
  type FormDateRangePickerCommands = PdgReactForm.PFormDateRangePickerCommands;
  type FormDateRangePickerDateValue = PdgReactForm.PFormDateRangePickerDateValue;
  type FormDateRangePickerValue = PdgReactForm.PFormDateRangePickerValue;
  type FormDateRangePickerCalendarCount = PdgReactForm.PFormDateRangePickerCalendarCount;

  // FormItemCustom - FormDateTimePicker
  const FormDateTimePicker: typeof PdgReactForm.PFormDateTimePicker;
  type FormDateTimePickerProps = PdgReactForm.PFormDateTimePickerProps;
  type FormDateTimePickerCommands = PdgReactForm.PFormDateTimePickerCommands;
  type FormDateTimePickerValue = PdgReactForm.PFormDateTimePickerValue;

  // FormItemCustom - FormFile
  const FormFile: typeof PdgReactForm.PFormFile;
  type FormFileProps = PdgReactForm.PFormFileProps;
  type FormFileCommands = PdgReactForm.PFormFileCommands;
  type FormFileValue = PdgReactForm.PFormFileValue;

  // FormItemCustom - FormImageFile
  const FormImageFile: typeof PdgReactForm.PFormImageFile;
  type FormImageFileProps = PdgReactForm.PFormImageFileProps;
  type FormImageFileCommands = PdgReactForm.PFormImageFileCommands;
  type FormImageFileImageSize = PdgReactForm.PFormImageFileImageSize;

  // FormItemCustom - FormMonthPicker
  const FormMonthPicker: typeof PdgReactForm.PFormMonthPicker;
  type FormMonthPickerProps = PdgReactForm.PFormMonthPickerProps;
  type FormMonthPickerCommands = PdgReactForm.PFormMonthPickerCommands;
  type FormMonthPickerBaseValue = PdgReactForm.PFormMonthPickerBaseValue;
  type FormMonthPickerValue = PdgReactForm.PFormMonthPickerValue;

  // FormItemCustom - FormMonthRangePicker
  const FormMonthRangePicker: typeof PdgReactForm.PFormMonthRangePicker;
  type FormMonthRangePickerProps = PdgReactForm.PFormMonthRangePickerProps;
  type FormMonthRangePickerCommands = PdgReactForm.PFormMonthRangePickerCommands;
  type FormMonthRangePickerBaseValue = PdgReactForm.PFormMonthRangePickerBaseValue;
  type FormMonthRangePickerValue = PdgReactForm.FormMonthRangePickerValue;

  // FormItemCustom - FormRadioGroup
  const FormRadioGroup: typeof PdgReactForm.PFormRadioGroup;
  type FormRadioGroupProps<
    BaseValue extends FormRadioGroupSingleValue,
    Items extends FormRadioGroupItems<BaseValue> = FormRadioGroupItems<BaseValue>,
    Value extends FormRadioGroupSingleValue = Items[number]['value'],
  > = PdgReactForm.PFormRadioGroupProps<BaseValue, Items, Value>;
  type FormRadioGroupCommands<T extends FormRadioGroupSingleValue> = PdgReactForm.PFormRadioGroupCommands<T>;
  type FormRadioGroupSingleValue = PdgReactForm.PFormRadioGroupSingleValue;
  type FormRadioGroupItem<T extends FormRadioGroupSingleValue> = PdgReactForm.PFormRadioGroupItem<T>;
  type FormRadioGroupItems<T extends FormRadioGroupSingleValue> = PdgReactForm.PFormRadioGroupItems<T>;
  type FormRadioGroupValue<T extends FormRadioGroupSingleValue> = PdgReactForm.PFormRadioGroupValue<T>;

  // FormItemCustom - FormRating
  const FormRating: typeof PdgReactForm.PFormRating;
  type FormRatingProps = PdgReactForm.PFormRatingProps;
  type FormRatingCommands = PdgReactForm.PFormRatingCommands;
  type FormRatingValue = PdgReactForm.PFormRatingValue;

  // FormItemCustom - FormSwitch
  const FormSwitch: typeof PdgReactForm.PFormSwitch;
  type FormSwitchProps = PdgReactForm.PFormSwitchProps;
  type FormSwitchCommands = PdgReactForm.PFormSwitchCommands;

  // FormItemCustom - FormTextEditor
  const FormTextEditor: typeof PdgReactForm.PFormTextEditor;
  type FormTextEditorProps = PdgReactForm.PFormTextEditorProps;
  type FormTextEditorCommands = PdgReactForm.PFormTextEditorCommands;
  type FormTextEditorValue = PdgReactForm.PFormTextEditorValue;

  // FormItemCustom - FormTimePicker
  const FormTimePicker: typeof PdgReactForm.PFormTimePicker;
  type FormTimePickerProps = PdgReactForm.PFormTimePickerProps;
  type FormTimePickerCommands = PdgReactForm.PFormTimePickerCommands;
  type FormTimePickerValue = PdgReactForm.PFormTimePickerValue;

  // FormItemCustom - FormToggleButtonGroup
  const FormToggleButtonGroup: typeof PdgReactForm.PFormToggleButtonGroup;
  type FormToggleButtonGroupProps<
    T extends FormToggleButtonGroupSingleValue,
    Multiple extends boolean | undefined = undefined,
    Items extends FormToggleButtonGroupItems<T> = FormToggleButtonGroupItems<T>,
    SingleValue extends Items[number]['value'] = Items[number]['value'],
    Value = FormToggleButtonGroupValue<SingleValue, Multiple>,
  > = PdgReactForm.PFormToggleButtonGroupProps<T, Multiple, Items, SingleValue, Value>;
  type FormToggleButtonGroupCommands<
    T extends FormToggleButtonGroupSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormToggleButtonGroupCommands<T, Multiple>;
  type FormToggleButtonGroupExtraCommands<T extends FormToggleButtonGroupSingleValue> =
    PdgReactForm.PFormToggleButtonGroupExtraCommands<T>;
  type FormToggleButtonGroupSingleValue = PdgReactForm.PFormToggleButtonGroupSingleValue;
  type FormToggleButtonGroupItem<T extends FormToggleButtonGroupSingleValue> =
    PdgReactForm.PFormToggleButtonGroupItem<T>;
  type FormToggleButtonGroupItems<T extends FormToggleButtonGroupSingleValue> =
    PdgReactForm.PFormToggleButtonGroupItems<T>;
  type FormToggleButtonGroupValue<
    T extends FormToggleButtonGroupSingleValue,
    Multiple extends boolean | undefined,
  > = PdgReactForm.PFormToggleButtonGroupValue<T, Multiple>;

  // FormItemCustom - FormYearPicker
  const FormYearPicker: typeof PdgReactForm.PFormYearPicker;
  type FormYearPickerProps = PdgReactForm.PFormYearPickerProps;
  type FormYearPickerCommands = PdgReactForm.PFormYearPickerCommands;
  type FormYearPickerBaseValue = PdgReactForm.PFormYearPickerBaseValue;
  type FormYearPickerValue = PdgReactForm.PFormYearPickerValue;

  // FormItemCustom - FormYearRangePicker
  const FormYearRangePicker: typeof PdgReactForm.PFormYearRangePicker;
  type FormYearRangePickerProps = PdgReactForm.PFormYearRangePickerProps;
  type FormYearRangePickerCommands = PdgReactForm.PFormYearRangePickerCommands;
  type FormYearRangePickerBaseValue = PdgReactForm.PFormYearRangePickerBaseValue;
  type FormYearRangePickerValue = PdgReactForm.PFormYearRangePickerValue;

  // FormItemTextFieldBase - FormBusinessNo
  const FormBusinessNo: typeof PdgReactForm.PFormBusinessNo;
  type FormBusinessNoProps = PdgReactForm.PFormBusinessNoProps;
  type FormBusinessNoCommands = PdgReactForm.PFormBusinessNoCommands;
  type FormBusinessNoValue = PdgReactForm.PFormBusinessNoValue;

  // FormItemTextFieldBase - FormEmail
  const FormEmail: typeof PdgReactForm.PFormEmail;
  type FormEmailProps = PdgReactForm.PFormEmailProps;
  type FormEmailCommands = PdgReactForm.PFormEmailCommands;
  type FormEmailValue = PdgReactForm.PFormEmailValue;

  // FormItemTextFieldBase - FormHidden
  const FormHidden: typeof PdgReactForm.PFormHidden;
  type FormHiddenProps = PdgReactForm.PFormHiddenProps;
  type FormHiddenCommands = PdgReactForm.PFormHiddenCommands;
  type FormHiddenValue = PdgReactForm.PFormHiddenValue;

  // FormItemTextFieldBase - FormMobile
  const FormMobile: typeof PdgReactForm.PFormMobile;
  type FormMobileProps = PdgReactForm.PFormMobileProps;
  type FormMobileCommands = PdgReactForm.PFormMobileCommands;
  type FormMobileValue = PdgReactForm.PFormMobileValue;

  // FormItemTextFieldBase - FormNumber
  const FormNumber: typeof PdgReactForm.PFormNumber;
  type FormNumberProps = PdgReactForm.PFormNumberProps;
  type FormNumberCommands = PdgReactForm.PFormNumberCommands;

  // FormItemTextFieldBase - FormPassword
  const FormPassword: typeof PdgReactForm.PFormPassword;
  type FormPasswordProps = PdgReactForm.PFormPasswordProps;
  type FormPasswordCommands = PdgReactForm.PFormPasswordCommands;
  type FormPasswordValue = PdgReactForm.PFormPasswordValue;

  // FormItemTextFieldBase - FormPersonalNo
  const FormPersonalNo: typeof PdgReactForm.PFormPersonalNo;
  type FormPersonalNoProps = PdgReactForm.PFormPersonalNoProps;
  type FormPersonalNoCommands = PdgReactForm.PFormPersonalNoCommands;
  type FormPersonalNoValue = PdgReactForm.PFormPersonalNoValue;

  // FormItemTextFieldBase - FormSearch
  const FormSearch: typeof PdgReactForm.PFormSearch;
  type FormSearchProps = PdgReactForm.PFormSearchProps;
  type FormSearchCommands = PdgReactForm.PFormSearchCommands;
  type FormSearchValue = PdgReactForm.PFormSearchValue;

  // FormItemTextFieldBase - FormSelect
  const FormSelect: typeof PdgReactForm.PFormSelect;
  type FormSelectProps<
    T extends FormSelectSingleValue,
    Multiple extends boolean | undefined = undefined,
    Items extends FormSelectItems<T> = FormSelectItems<T>,
    SingleValue extends Items[number]['value'] = Items[number]['value'],
    Value extends FormSelectValue<SingleValue, Multiple> = FormSelectValue<SingleValue, Multiple>,
  > = PdgReactForm.PFormSelectProps<T, Multiple, Item, SingleValue, Value>;
  type FormSelectCommands<
    T extends FormSelectSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormSelectCommands<T, Multiple>;
  type FormSelectExtraCommands<T extends FormSelectSingleValue> = PdgReactForm.PFormSelectExtraCommands<T>;
  type FormSelectSingleValue = PdgReactForm.PFormSelectSingleValue;
  type FormSelectValue<
    T extends FormSelectSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = PdgReactForm.PFormSelectValue<T, Multiple>;
  type FormSelectItem<T extends FormSelectSingleValue> = PdgReactForm.PFormSelectItem<T>;
  type FormSelectItems<T extends FormSelectSingleValue> = PdgReactForm.PFormSelectItems<T>;

  // FormItemTextFieldBase - FormTag
  const FormTag: typeof PdgReactForm.PFormTag;
  type FormTagProps = PdgReactForm.PFormTagProps;
  type FormTagCommands = PdgReactForm.PFormTagCommands;
  type FormTagExtraCommands = PdgReactForm.PFormTagExtraCommands;
  type FormTagValue = PdgReactForm.PFormTagValue;

  // FormItemTextFieldBase - FormTel
  const FormTel: typeof PdgReactForm.PFormTel;
  type FormTelProps = PdgReactForm.PFormTelProps;
  type FormTelCommands = PdgReactForm.PFormTelCommands;
  type FormTelValue = PdgReactForm.PFormTelValue;

  // FormItemTextFieldBase - FormText
  const FormText: typeof PdgReactForm.PFormText;
  type FormTextProps = PdgReactForm.PFormTextProps;
  type FormTextCommands = PdgReactForm.PFormTextCommands;
  type FormTextValue = PdgReactForm.PFormTextValue;

  // FormItemTextFieldBase - FormTextarea
  const FormTextarea: typeof PdgReactForm.PFormTextarea;
  type FormTextareaProps = PdgReactForm.PFormTextareaProps;
  type FormTextareaCommands = PdgReactForm.PFormTextareaCommands;
  type FormTextareaValue = PdgReactForm.PFormTextareaValue;

  // FormItemTextFieldBase - FormTextField
  const FormTextField: typeof PdgReactForm.PFormTextField;
  type FormTextFieldProps = PdgReactForm.PFormTextFieldProps;
  type FormTextFieldCommands = PdgReactForm.PFormTextFieldCommands;
  type FormTextFieldValue = PdgReactForm.PFormTextFieldValue;

  // FormItemTextFieldBase - FormUrl
  const FormUrl: typeof PdgReactForm.PFormUrl;
  type FormUrlProps = PdgReactForm.PFormUrlProps;
  type FormUrlCommands = PdgReactForm.PFormUrlCommands;
  type FormUrlValue = PdgReactForm.PFormUrlValue;

  // FormLayout
  const FormBlock: typeof PdgReactForm.PFormBlock;
  type FormBlockProps = PdgReactForm.PFormBlockProps;
  const FormBody: typeof PdgReactForm.PFormBody;
  type FormBodyProps = PdgReactForm.PFormBodyProps;
  const FormCol: typeof PdgReactForm.PFormCol;
  type FormColProps = PdgReactForm.PFormColProps;
  const FormDivider: typeof PdgReactForm.PFormDivider;
  type FormDividerProps = PdgReactForm.PFormDividerProps;
  const FormFooter: typeof PdgReactForm.PFormFooter;
  type FormFooterProps = PdgReactForm.PFormFooterProps;
  const FormRow: typeof PdgReactForm.PFormRow;
  type FormRowProps = PdgReactForm.PFormRowProps;
  type FormColsInRowMap = PdgReactForm.PFormColsInRowMap;

  // Search
  const HashSearch: typeof PdgReactForm.PHashSearch;
  type HashSearchProps = PdgReactForm.PHashSearchProps;
  type HashSearchCommands = PdgReactForm.PHashSearchCommands;
  const Search: typeof PdgReactForm.PSearch;
  type SearchProps = PdgReactForm.PSearchProps;
  type SearchCommands = PdgReactForm.PSearchCommands;
  const SearchButton: typeof PdgReactForm.PSearchButton;
  type SearchButtonProps = PdgReactForm.PSearchButtonProps;
  const SearchGroup: typeof PdgReactForm.PSearchGroup;
  type SearchGroupProps = PdgReactForm.PSearchGroupProps;
  const SearchGroupRow: typeof PdgReactForm.PSearchGroupRow;
  type SearchGroupRowProps = PdgReactForm.PSearchGroupRowProps;
  const SearchMenuButton: typeof PdgReactForm.PSearchMenuButton;
  type SearchMenuButtonProps = PdgReactForm.PSearchMenuButtonProps;
}

export {};
