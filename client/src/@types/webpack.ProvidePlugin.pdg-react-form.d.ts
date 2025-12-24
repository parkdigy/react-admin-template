// types
declare type FormDateType = import('@pdg/react-form').PFormDateType;
declare type FormTimeType = import('@pdg/react-form').PFormTimeType;
declare type CommonProps = import('@pdg/react-form').PCommonProps;
declare type CommonSxProps = import('@pdg/react-form').PCommonSxProps;
declare type FormYearMonthValue = import('@pdg/react-form').PFormYearMonthValue;
declare type FormValue = import('@pdg/react-form').PFormValue;
declare type FormValueMap = import('@pdg/react-form').PFormValueMap;
declare type FormValueItemData = import('@pdg/react-form').PFormValueItemData;
declare type FormValueItemBaseCommands<
  T,
  AllowUndefinedValue extends boolean,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> = import('@pdg/react-form').PFormValueItemBaseCommands<T, AllowUndefinedValue, V>;
declare type FormArrayValueItemCommands = import('@pdg/react-form').PFormArrayValueItemCommands;
declare type FormItemsValueItemCommands<T> = import('@pdg/react-form').PFormItemsValueItemCommands<T>;
declare type FormCheckValueItemCommands<T> = import('@pdg/react-form').PFormCheckValueItemCommands<T>;
declare type FormMultipleValueItemCommands = import('@pdg/react-form').PFormMultipleValueItemCommands;
declare type FormLoadingValueItemCommands = import('@pdg/react-form').PFormLoadingValueItemCommands;
declare type FormDateValueItemCommands = import('@pdg/react-form').PFormDateValueItemCommands;
declare type FormRangeValueItemCommands<T> = import('@pdg/react-form').PFormRangeValueItemCommands<T>;
declare type FormRangeValueItemNameCommands = import('@pdg/react-form').PFormRangeValueItemNameCommands;
declare type FormYearMonthValueItemCommands = import('@pdg/react-form').PFormYearMonthValueItemCommands;
declare type FormYearMonthValueItemNameCommands = import('@pdg/react-form').PFormYearMonthValueItemNameCommands;
declare type FormYearMonthRangeValueItemCommands = import('@pdg/react-form').PFormYearMonthRangeValueItemCommands;
declare type FormYearMonthRangeValueItemNameCommands =
  import('@pdg/react-form').PFormYearMonthRangeValueItemNameCommands;
declare type FormValueItemCommands<
  T,
  AllowUndefinedValue extends boolean = true,
  ItemType = any,
  RangeItemValue = any,
> = import('@pdg/react-form').PFormValueItemCommands<T, AllowUndefinedValue, ItemType, RangeItemValue>;
declare type FormValueItemCommandsMap<
  T,
  AllowUndefinedValue extends boolean = true,
  ItemType = any,
> = import('@pdg/react-form').PFormValueItemCommandsMap<T, AllowUndefinedValue, ItemType>;
declare type FormValueItemProps<
  T,
  AllowUndefinedValue extends boolean = true,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> = import('@pdg/react-form').PFormValueItemProps<T, AllowUndefinedValue, V>;

// Form
declare const Form: typeof import('@pdg/react-form').PForm;
declare type FormProps = import('@pdg/react-form').PFormProps;
declare type FormCommands = import('@pdg/react-form').PFormCommands;
declare type FormInvalidItemInfo = import('@pdg/react-form').PFormInvalidItemInfo;
declare type FormInvalidItems = import('@pdg/react-form').PFormInvalidItems;

// FormCommon
declare const FormButton: typeof import('@pdg/react-form').PFormButton;
declare type FormButtonProps = import('@pdg/react-form').PFormButtonProps;
declare const FormLabel: typeof import('@pdg/react-form').PFormLabel;
declare type FormLabelProps = import('@pdg/react-form').PFormLabelProps;

// FormContext
declare const FormContext: typeof import('@pdg/react-form').PFormContext;
declare type FormContextValue = import('@pdg/react-form').PFormContextValue;
declare const useFormState: typeof import('@pdg/react-form').useFormState;
declare const FormContextProvider: typeof import('@pdg/react-form').PFormContextProvider;
declare type FormContextProviderProps<
  T = any,
  AllowUndefinedValue extends boolean = true,
> = import('@pdg/react-form').PFormContextProviderProps<T, AllowUndefinedValue>;

// FormItemCustom - FormAutocomplete
declare const FormAutocomplete: typeof import('@pdg/react-form').PFormAutocomplete;
declare type FormAutocompleteProps<
  T extends FormAutocompleteSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends FormAutocompleteItems<T> = FormAutocompleteItems<T>,
  SingleValue extends Items[number]['value'] = Items[number]['value'],
  Item = FormAutocompleteItem<SingleValue>,
  Value = Multiple extends true ? SingleValue[] : SingleValue,
  ComponentValue = FormAutocompleteComponentValue<SingleValue, Multiple>,
> = import('@pdg/react-form').PFormAutocompleteProps<T, Multiple, Items, SingleValue, Item, Value, ComponentValue>;
declare type FormAutocompleteCommands<
  T extends FormAutocompleteSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormAutocompleteCommands<T, Multiple>;
declare type FormAutocompleteSingleValue = import('@pdg/react-form').PFormAutocompleteSingleValue;
declare type FormAutocompleteItem<T extends FormAutocompleteSingleValue> =
  import('@pdg/react-form').PFormAutocompleteItem<T>;
declare type FormAutocompleteItems<T extends FormAutocompleteSingleValue> =
  import('@pdg/react-form').PFormAutocompleteItems<T>;
declare type FormAutocompleteValue<
  T extends FormAutocompleteSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormAutocompleteValue<T, Multiple>;
declare type FormAutocompleteComponentValue<
  T extends FormAutocompleteSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormAutocompleteComponentValue<T, Multiple>;

// FormItemCustom - FormCheckbox
declare const FormCheckbox: typeof import('@pdg/react-form').PFormCheckbox;
declare type FormCheckboxProps = import('@pdg/react-form').PFormCheckboxProps;
declare type FormCheckboxCommands = import('@pdg/react-form').PFormCheckboxCommands;
declare type FormCheckboxValue = import('@pdg/react-form').PFormCheckboxValue;

// FormItemCustom - FormDatePicker
declare const FormDatePicker: typeof import('@pdg/react-form').PFormDatePicker;
declare type FormDatePickerProps = import('@pdg/react-form').PFormDatePickerProps;
declare type FormDatePickerCommands = import('@pdg/react-form').PFormDatePickerCommands;
declare type FormDatePickerValue = import('@pdg/react-form').PFormDatePickerValue;

// FormItemCustom - FormDateRangePicker
declare const FormDateRangePicker: typeof import('@pdg/react-form').PFormDateRangePicker;
declare type FormDateRangePickerProps = import('@pdg/react-form').PFormDateRangePickerProps;
declare type FormDateRangePickerCommands = import('@pdg/react-form').PFormDateRangePickerCommands;
declare type FormDateRangePickerDateValue = import('@pdg/react-form').PFormDateRangePickerDateValue;
declare type FormDateRangePickerValue = import('@pdg/react-form').PFormDateRangePickerValue;
declare type FormDateRangePickerCalendarCount = import('@pdg/react-form').PFormDateRangePickerCalendarCount;

// FormItemCustom - FormDateTimePicker
declare const FormDateTimePicker: typeof import('@pdg/react-form').PFormDateTimePicker;
declare type FormDateTimePickerProps = import('@pdg/react-form').PFormDateTimePickerProps;
declare type FormDateTimePickerCommands = import('@pdg/react-form').PFormDateTimePickerCommands;
declare type FormDateTimePickerValue = import('@pdg/react-form').PFormDateTimePickerValue;

// FormItemCustom - FormFile
declare const FormFile: typeof import('@pdg/react-form').PFormFile;
declare type FormFileProps = import('@pdg/react-form').PFormFileProps;
declare type FormFileCommands = import('@pdg/react-form').PFormFileCommands;
declare type FormFileValue = import('@pdg/react-form').PFormFileValue;

// FormItemCustom - FormImageFile
declare const FormImageFile: typeof import('@pdg/react-form').PFormImageFile;
declare type FormImageFileProps = import('@pdg/react-form').PFormImageFileProps;
declare type FormImageFileCommands = import('@pdg/react-form').PFormImageFileCommands;
declare type FormImageFileImageSize = import('@pdg/react-form').PFormImageFileImageSize;

// FormItemCustom - FormMonthPicker
declare const FormMonthPicker: typeof import('@pdg/react-form').PFormMonthPicker;
declare type FormMonthPickerProps = import('@pdg/react-form').PFormMonthPickerProps;
declare type FormMonthPickerCommands = import('@pdg/react-form').PFormMonthPickerCommands;
declare type FormMonthPickerBaseValue = import('@pdg/react-form').PFormMonthPickerBaseValue;
declare type FormMonthPickerValue = import('@pdg/react-form').PFormMonthPickerValue;

// FormItemCustom - FormMonthRangePicker
declare const FormMonthRangePicker: typeof import('@pdg/react-form').PFormMonthRangePicker;
declare type FormMonthRangePickerProps = import('@pdg/react-form').PFormMonthRangePickerProps;
declare type FormMonthRangePickerCommands = import('@pdg/react-form').PFormMonthRangePickerCommands;
declare type FormMonthRangePickerBaseValue = import('@pdg/react-form').PFormMonthRangePickerBaseValue;
declare type FormMonthRangePickerValue = import('@pdg/react-form').FormMonthRangePickerValue;

// FormItemCustom - FormRadioGroup
declare const FormRadioGroup: typeof import('@pdg/react-form').PFormRadioGroup;
declare type FormRadioGroupProps<
  BaseValue extends FormRadioGroupSingleValue,
  Items extends FormRadioGroupItems<BaseValue> = FormRadioGroupItems<BaseValue>,
  Value extends FormRadioGroupSingleValue = Items[number]['value'],
> = import('@pdg/react-form').PFormRadioGroupProps<BaseValue, Items, Value>;
declare type FormRadioGroupCommands<T extends FormRadioGroupSingleValue> =
  import('@pdg/react-form').PFormRadioGroupCommands<T>;
declare type FormRadioGroupSingleValue = import('@pdg/react-form').PFormRadioGroupSingleValue;
declare type FormRadioGroupItem<T extends FormRadioGroupSingleValue> = import('@pdg/react-form').PFormRadioGroupItem<T>;
declare type FormRadioGroupItems<T extends FormRadioGroupSingleValue> =
  import('@pdg/react-form').PFormRadioGroupItems<T>;
declare type FormRadioGroupValue<T extends FormRadioGroupSingleValue> =
  import('@pdg/react-form').PFormRadioGroupValue<T>;

// FormItemCustom - FormRating
declare const FormRating: typeof import('@pdg/react-form').PFormRating;
declare type FormRatingProps = import('@pdg/react-form').PFormRatingProps;
declare type FormRatingCommands = import('@pdg/react-form').PFormRatingCommands;
declare type FormRatingValue = import('@pdg/react-form').PFormRatingValue;

// FormItemCustom - FormSwitch
declare const FormSwitch: typeof import('@pdg/react-form').PFormSwitch;
declare type FormSwitchProps = import('@pdg/react-form').PFormSwitchProps;
declare type FormSwitchCommands = import('@pdg/react-form').PFormSwitchCommands;

// FormItemCustom - FormTextEditor
declare const FormTextEditor: typeof import('@pdg/react-form').PFormTextEditor;
declare type FormTextEditorProps = import('@pdg/react-form').PFormTextEditorProps;
declare type FormTextEditorCommands = import('@pdg/react-form').PFormTextEditorCommands;
declare type FormTextEditorValue = import('@pdg/react-form').PFormTextEditorValue;

// FormItemCustom - FormTimePicker
declare const FormTimePicker: typeof import('@pdg/react-form').PFormTimePicker;
declare type FormTimePickerProps = import('@pdg/react-form').PFormTimePickerProps;
declare type FormTimePickerCommands = import('@pdg/react-form').PFormTimePickerCommands;
declare type FormTimePickerValue = import('@pdg/react-form').PFormTimePickerValue;

// FormItemCustom - FormToggleButtonGroup
declare const FormToggleButtonGroup: typeof import('@pdg/react-form').PFormToggleButtonGroup;
declare type FormToggleButtonGroupProps<
  T extends FormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends FormToggleButtonGroupItems<T> = FormToggleButtonGroupItems<T>,
  SingleValue extends Items[number]['value'] = Items[number]['value'],
  Value = FormToggleButtonGroupValue<SingleValue, Multiple>,
> = import('@pdg/react-form').PFormToggleButtonGroupProps<T, Multiple, Items, SingleValue, Value>;
declare type FormToggleButtonGroupCommands<
  T extends FormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormToggleButtonGroupCommands<T, Multiple>;
declare type FormToggleButtonGroupExtraCommands<T extends FormToggleButtonGroupSingleValue> =
  import('@pdg/react-form').PFormToggleButtonGroupExtraCommands<T>;
declare type FormToggleButtonGroupSingleValue = import('@pdg/react-form').PFormToggleButtonGroupSingleValue;
declare type FormToggleButtonGroupItem<T extends FormToggleButtonGroupSingleValue> =
  import('@pdg/react-form').PFormToggleButtonGroupItem<T>;
declare type FormToggleButtonGroupItems<T extends FormToggleButtonGroupSingleValue> =
  import('@pdg/react-form').PFormToggleButtonGroupItems<T>;
declare type FormToggleButtonGroupValue<
  T extends FormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined,
> = import('@pdg/react-form').PFormToggleButtonGroupValue<T, Multiple>;

// FormItemCustom - FormYearPicker
declare const FormYearPicker: typeof import('@pdg/react-form').PFormYearPicker;
declare type FormYearPickerProps = import('@pdg/react-form').PFormYearPickerProps;
declare type FormYearPickerCommands = import('@pdg/react-form').PFormYearPickerCommands;
declare type FormYearPickerBaseValue = import('@pdg/react-form').PFormYearPickerBaseValue;
declare type FormYearPickerValue = import('@pdg/react-form').PFormYearPickerValue;

// FormItemCustom - FormYearRangePicker
declare const FormYearRangePicker: typeof import('@pdg/react-form').PFormYearRangePicker;
declare type FormYearRangePickerProps = import('@pdg/react-form').PFormYearRangePickerProps;
declare type FormYearRangePickerCommands = import('@pdg/react-form').PFormYearRangePickerCommands;
declare type FormYearRangePickerBaseValue = import('@pdg/react-form').PFormYearRangePickerBaseValue;
declare type FormYearRangePickerValue = import('@pdg/react-form').PFormYearRangePickerValue;

// FormItemTextFieldBase - FormBusinessNo
declare const FormBusinessNo: typeof import('@pdg/react-form').PFormBusinessNo;
declare type FormBusinessNoProps = import('@pdg/react-form').PFormBusinessNoProps;
declare type FormBusinessNoCommands = import('@pdg/react-form').PFormBusinessNoCommands;
declare type FormBusinessNoValue = import('@pdg/react-form').PFormBusinessNoValue;

// FormItemTextFieldBase - FormEmail
declare const FormEmail: typeof import('@pdg/react-form').PFormEmail;
declare type FormEmailProps = import('@pdg/react-form').PFormEmailProps;
declare type FormEmailCommands = import('@pdg/react-form').PFormEmailCommands;
declare type FormEmailValue = import('@pdg/react-form').PFormEmailValue;

// FormItemTextFieldBase - FormHidden
declare const FormHidden: typeof import('@pdg/react-form').PFormHidden;
declare type FormHiddenProps = import('@pdg/react-form').PFormHiddenProps;
declare type FormHiddenCommands = import('@pdg/react-form').PFormHiddenCommands;
declare type FormHiddenValue = import('@pdg/react-form').PFormHiddenValue;

// FormItemTextFieldBase - FormMobile
declare const FormMobile: typeof import('@pdg/react-form').PFormMobile;
declare type FormMobileProps = import('@pdg/react-form').PFormMobileProps;
declare type FormMobileCommands = import('@pdg/react-form').PFormMobileCommands;
declare type FormMobileValue = import('@pdg/react-form').PFormMobileValue;

// FormItemTextFieldBase - FormNumber
declare const FormNumber: typeof import('@pdg/react-form').PFormNumber;
declare type FormNumberProps = import('@pdg/react-form').PFormNumberProps;
declare type FormNumberCommands = import('@pdg/react-form').PFormNumberCommands;

// FormItemTextFieldBase - FormPassword
declare const FormPassword: typeof import('@pdg/react-form').PFormPassword;
declare type FormPasswordProps = import('@pdg/react-form').PFormPasswordProps;
declare type FormPasswordCommands = import('@pdg/react-form').PFormPasswordCommands;
declare type FormPasswordValue = import('@pdg/react-form').PFormPasswordValue;

// FormItemTextFieldBase - FormPersonalNo
declare const FormPersonalNo: typeof import('@pdg/react-form').PFormPersonalNo;
declare type FormPersonalNoProps = import('@pdg/react-form').PFormPersonalNoProps;
declare type FormPersonalNoCommands = import('@pdg/react-form').PFormPersonalNoCommands;
declare type FormPersonalNoValue = import('@pdg/react-form').PFormPersonalNoValue;

// FormItemTextFieldBase - FormSearch
declare const FormSearch: typeof import('@pdg/react-form').PFormSearch;
declare type FormSearchProps = import('@pdg/react-form').PFormSearchProps;
declare type FormSearchCommands = import('@pdg/react-form').PFormSearchCommands;
declare type FormSearchValue = import('@pdg/react-form').PFormSearchValue;

// FormItemTextFieldBase - FormSelect
declare const FormSelect: typeof import('@pdg/react-form').PFormSelect;
declare type FormSelectProps<
  T extends FormSelectSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends FormSelectItems<T> = FormSelectItems<T>,
  SingleValue extends Items[number]['value'] = Items[number]['value'],
  Value extends FormSelectValue<SingleValue, Multiple> = FormSelectValue<SingleValue, Multiple>,
> = import('@pdg/react-form').PFormSelectProps<T, Multiple, Item, SingleValue, Value>;
declare type FormSelectCommands<
  T extends FormSelectSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormSelectCommands<T, Multiple>;
declare type FormSelectExtraCommands<T extends FormSelectSingleValue> =
  import('@pdg/react-form').PFormSelectExtraCommands<T>;
declare type FormSelectSingleValue = import('@pdg/react-form').PFormSelectSingleValue;
declare type FormSelectValue<
  T extends FormSelectSingleValue,
  Multiple extends boolean | undefined = undefined,
> = import('@pdg/react-form').PFormSelectValue<T, Multiple>;
declare type FormSelectItem<T extends FormSelectSingleValue> = import('@pdg/react-form').PFormSelectItem<T>;
declare type FormSelectItems<T extends FormSelectSingleValue> = import('@pdg/react-form').PFormSelectItems<T>;

// FormItemTextFieldBase - FormTag
declare const FormTag: typeof import('@pdg/react-form').PFormTag;
declare type FormTagProps = import('@pdg/react-form').PFormTagProps;
declare type FormTagCommands = import('@pdg/react-form').PFormTagCommands;
declare type FormTagExtraCommands = import('@pdg/react-form').PFormTagExtraCommands;
declare type FormTagValue = import('@pdg/react-form').PFormTagValue;

// FormItemTextFieldBase - FormTel
declare const FormTel: typeof import('@pdg/react-form').PFormTel;
declare type FormTelProps = import('@pdg/react-form').PFormTelProps;
declare type FormTelCommands = import('@pdg/react-form').PFormTelCommands;
declare type FormTelValue = import('@pdg/react-form').PFormTelValue;

// FormItemTextFieldBase - FormText
declare const FormText: typeof import('@pdg/react-form').PFormText;
declare type FormTextProps = import('@pdg/react-form').PFormTextProps;
declare type FormTextCommands = import('@pdg/react-form').PFormTextCommands;
declare type FormTextValue = import('@pdg/react-form').PFormTextValue;

// FormItemTextFieldBase - FormTextarea
declare const FormTextarea: typeof import('@pdg/react-form').PFormTextarea;
declare type FormTextareaProps = import('@pdg/react-form').PFormTextareaProps;
declare type FormTextareaCommands = import('@pdg/react-form').PFormTextareaCommands;
declare type FormTextareaValue = import('@pdg/react-form').PFormTextareaValue;

// FormItemTextFieldBase - FormTextField
declare const FormTextField: typeof import('@pdg/react-form').PFormTextField;
declare type FormTextFieldProps = import('@pdg/react-form').PFormTextFieldProps;
declare type FormTextFieldCommands = import('@pdg/react-form').PFormTextFieldCommands;
declare type FormTextFieldValue = import('@pdg/react-form').PFormTextFieldValue;

// FormItemTextFieldBase - FormUrl
declare const FormUrl: typeof import('@pdg/react-form').PFormUrl;
declare type FormUrlProps = import('@pdg/react-form').PFormUrlProps;
declare type FormUrlCommands = import('@pdg/react-form').PFormUrlCommands;
declare type FormUrlValue = import('@pdg/react-form').PFormUrlValue;

// FormLayout
declare const FormBlock: typeof import('@pdg/react-form').PFormBlock;
declare type FormBlockProps = import('@pdg/react-form').PFormBlockProps;
declare const FormBody: typeof import('@pdg/react-form').PFormBody;
declare type FormBodyProps = import('@pdg/react-form').PFormBodyProps;
declare const FormCol: typeof import('@pdg/react-form').PFormCol;
declare type FormColProps = import('@pdg/react-form').PFormColProps;
declare const FormDivider: typeof import('@pdg/react-form').PFormDivider;
declare type FormDividerProps = import('@pdg/react-form').PFormDividerProps;
declare const FormFooter: typeof import('@pdg/react-form').PFormFooter;
declare type FormFooterProps = import('@pdg/react-form').PFormFooterProps;
declare const FormRow: typeof import('@pdg/react-form').PFormRow;
declare type FormRowProps = import('@pdg/react-form').PFormRowProps;
declare type FormColsInRowMap = import('@pdg/react-form').PFormColsInRowMap;

// Search
declare const HashSearch: typeof import('@pdg/react-form').PHashSearch;
declare type HashSearchProps = import('@pdg/react-form').PHashSearchProps;
declare type HashSearchCommands = import('@pdg/react-form').PHashSearchCommands;
declare const Search: typeof import('@pdg/react-form').PSearch;
declare type SearchProps = import('@pdg/react-form').PSearchProps;
declare type SearchCommands = import('@pdg/react-form').PSearchCommands;
declare const SearchButton: typeof import('@pdg/react-form').PSearchButton;
declare type SearchButtonProps = import('@pdg/react-form').PSearchButtonProps;
declare const SearchGroup: typeof import('@pdg/react-form').PSearchGroup;
declare type SearchGroupProps = import('@pdg/react-form').PSearchGroupProps;
declare const SearchGroupRow: typeof import('@pdg/react-form').PSearchGroupRow;
declare type SearchGroupRowProps = import('@pdg/react-form').PSearchGroupRowProps;
declare const SearchMenuButton: typeof import('@pdg/react-form').PSearchMenuButton;
declare type SearchMenuButtonProps = import('@pdg/react-form').PSearchMenuButtonProps;
