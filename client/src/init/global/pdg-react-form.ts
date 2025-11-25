import {
  // Form
  Form as _Form,
  type FormProps as _FormProps,
  // FormCommon
  FormButton as _FormButton,
  type FormButtonProps as _FormButtonProps,
  FormLabel as _FormLabel,
  type FormLabelProps as _FormLabelProps,
  // FormItemCustom
  FormAutocomplete as _FormAutocomplete,
  type FormAutocompleteProps as _FormAutocompleteProps,
  FormCheckbox as _FormCheckbox,
  type FormCheckboxProps as _FormCheckboxProps,
  FormDatePicker as _FormDatePicker,
  type FormDatePickerProps as _FormDatePickerProps,
  FormDateRangePicker as _FormDateRangePicker,
  type FormDateRangePickerProps as _FormDateRangePickerProps,
  FormDateTimePicker as _FormDateTimePicker,
  type FormDateTimePickerProps as _FormDateTimePickerProps,
  FormFile as _FormFile,
  type FormFileProps as _FormFileProps,
  FormImageFile as _FormImageFile,
  type FormImageFileProps as _FormImageFileProps,
  FormMonthPicker as _FormMonthPicker,
  type FormMonthPickerProps as _FormMonthPickerProps,
  FormMonthRangePicker as _FormMonthRangePicker,
  type FormMonthRangePickerProps as _FormMonthRangePickerProps,
  FormRadioGroup as _FormRadioGroup,
  type FormRadioGroupProps as _FormRadioGroupProps,
  FormRating as _FormRating,
  type FormRatingProps as _FormRatingProps,
  FormSwitch as _FormSwitch,
  type FormSwitchProps as _FormSwitchProps,
  FormTextEditor as _FormTextEditor,
  type FormTextEditorProps as _FormTextEditorProps,
  FormTimePicker as _FormTimePicker,
  type FormTimePickerProps as _FormTimePickerProps,
  FormToggleButtonGroup as _FormToggleButtonGroup,
  type FormToggleButtonGroupProps as _FormToggleButtonGroupProps,
  FormYearPicker as _FormYearPicker,
  type FormYearPickerProps as _FormYearPickerProps,
  FormYearRangePicker as _FormYearRangePicker,
  type FormYearRangePickerProps as _FormYearRangePickerProps,
  // FormItemTextFieldBase
  FormBusinessNo as _FormBusinessNo,
  type FormBusinessNoProps as _FormBusinessNoProps,
  FormEmail as _FormEmail,
  type FormEmailProps as _FormEmailProps,
  FormHidden as _FormHidden,
  type FormHiddenProps as _FormHiddenProps,
  FormMobile as _FormMobile,
  type FormMobileProps as _FormMobileProps,
  FormNumber as _FormNumber,
  type FormNumberProps as _FormNumberProps,
  FormPassword as _FormPassword,
  type FormPasswordProps as _FormPasswordProps,
  FormPersonalNo as _FormPersonalNo,
  type FormPersonalNoProps as _FormPersonalNoProps,
  FormSearch as _FormSearch,
  type FormSearchProps as _FormSearchProps,
  FormSelect as _FormSelect,
  type FormSelectProps as _FormSelectProps,
  FormTag as _FormTag,
  type FormTagProps as _FormTagProps,
  FormTel as _FormTel,
  type FormTelProps as _FormTelProps,
  FormText as _FormText,
  type FormTextProps as _FormTextProps,
  FormTextarea as _FormTextarea,
  type FormTextareaProps as _FormTextareaProps,
  FormTextField as _FormTextField,
  type FormTextFieldProps as _FormTextFieldProps,
  FormUrl as _FormUrl,
  type FormUrlProps as _FormUrlProps,
  // FormLayout
  FormBlock as _FormBlock,
  type FormBlockProps as _FormBlockProps,
  FormBody as _FormBody,
  type FormBodyProps as _FormBodyProps,
  FormCol as _FormCol,
  type FormColProps as _FormColProps,
  FormDivider as _FormDivider,
  type FormDividerProps as _FormDividerProps,
  FormFooter as _FormFooter,
  type FormFooterProps as _FormFooterProps,
  FormRow as _FormRow,
  type FormRowProps as _FormRowProps,
  // Search
  HashSearch as _HashSearch,
  type HashSearchProps as _HashSearchProps,
  Search as _Search,
  type SearchProps as _PSearchProps,
  SearchButton as _SearchButton,
  type SearchButtonProps as _SearchButtonProps,
  SearchGroup as _SearchGroup,
  type SearchGroupProps as _SearchGroupProps,
  SearchGroupRow as _SearchGroupRow,
  type SearchGroupRowProps as _SearchGroupRowProps,
  SearchMenuButton as _SearchMenuButton,
  type SearchMenuButtonProps as _SearchMenuButtonProps,
  // Types for Generic
  type FormAutocompleteSingleValue,
  type FormRadioGroupSingleValue,
  type FormRadioGroupItems,
  type FormToggleButtonGroupSingleValue,
  type FormSelectSingleValue,
  type FormTextFieldValue,
} from '../../component/Common/@pdg';

/* eslint-disable no-var */
declare global {
  // Form
  var Form: typeof _Form;
  type FormProps = _FormProps;
  // FormCommon
  var FormButton: typeof _FormButton;
  type FormButtonProps = _FormButtonProps;
  var FormLabel: typeof _FormLabel;
  type FormLabelProps = _FormLabelProps;
  // FormItemCustom
  var FormAutocomplete: typeof _FormAutocomplete;
  type FormAutocompleteProps<
    T extends FormAutocompleteSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = _FormAutocompleteProps<T, Multiple>;
  var FormCheckbox: typeof _FormCheckbox;
  type FormCheckboxProps = _FormCheckboxProps;
  var FormDatePicker: typeof _FormDatePicker;
  type FormDatePickerProps = _FormDatePickerProps;
  var FormDateRangePicker: typeof _FormDateRangePicker;
  type FormDateRangePickerProps = _FormDateRangePickerProps;
  var FormDateTimePicker: typeof _FormDateTimePicker;
  type FormDateTimePickerProps = _FormDateTimePickerProps;
  var FormFile: typeof _FormFile;
  type FormFileProps = _FormFileProps;
  var FormImageFile: typeof _FormImageFile;
  type FormImageFileProps = _FormImageFileProps;
  var FormMonthPicker: typeof _FormMonthPicker;
  type FormMonthPickerProps = _FormMonthPickerProps;
  var FormMonthRangePicker: typeof _FormMonthRangePicker;
  type FormMonthRangePickerProps = _FormMonthRangePickerProps;
  var FormRadioGroup: typeof _FormRadioGroup;
  type FormRadioGroupProps<
    BaseValue extends FormRadioGroupSingleValue,
    Items extends FormRadioGroupItems<BaseValue>,
    Value extends FormRadioGroupSingleValue = Items[number]['value'],
  > = _FormRadioGroupProps<BaseValue, Items, Value>;
  var FormRating: typeof _FormRating;
  type FormRatingProps = _FormRatingProps;
  var FormSwitch: typeof _FormSwitch;
  type FormSwitchProps = _FormSwitchProps;
  var FormTextEditor: typeof _FormTextEditor;
  type FormTextEditorProps = _FormTextEditorProps;
  var FormTimePicker: typeof _FormTimePicker;
  type FormTimePickerProps = _FormTimePickerProps;
  var FormToggleButtonGroup: typeof _FormToggleButtonGroup;
  type FormToggleButtonGroupProps<
    T extends FormToggleButtonGroupSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = _FormToggleButtonGroupProps<T, Multiple>;
  var FormYearPicker: typeof _FormYearPicker;
  type FormYearPickerProps = _FormYearPickerProps;
  var FormYearRangePicker: typeof _FormYearRangePicker;
  type FormYearRangePickerProps = _FormYearRangePickerProps;
  // FormItemTextFieldBase
  var FormBusinessNo: typeof _FormBusinessNo;
  type FormBusinessNoProps = _FormBusinessNoProps;
  var FormEmail: typeof _FormEmail;
  type FormEmailProps = _FormEmailProps;
  var FormHidden: typeof _FormHidden;
  type FormHiddenProps = _FormHiddenProps;
  var FormMobile: typeof _FormMobile;
  type FormMobileProps = _FormMobileProps;
  var FormNumber: typeof _FormNumber;
  type FormNumberProps = _FormNumberProps;
  var FormPassword: typeof _FormPassword;
  type FormPasswordProps = _FormPasswordProps;
  var FormPersonalNo: typeof _FormPersonalNo;
  type FormPersonalNoProps = _FormPersonalNoProps;
  var FormSearch: typeof _FormSearch;
  type FormSearchProps = _FormSearchProps;
  var FormSelect: typeof _FormSelect;
  type FormSelectProps<
    T extends FormSelectSingleValue,
    Multiple extends boolean | undefined = undefined,
  > = _FormSelectProps<T, Multiple>;
  var FormTag: typeof _FormTag;
  type FormTagProps = _FormTagProps;
  var FormTel: typeof _FormTel;
  type FormTelProps = _FormTelProps;
  var FormText: typeof _FormText;
  type FormTextProps = _FormTextProps;
  var FormTextarea: typeof _FormTextarea;
  type FormTextareaProps = _FormTextareaProps;
  var FormTextField: typeof _FormTextField;
  type FormTextFieldProps<
    T = FormTextFieldValue,
    AllowUndefinedValue extends boolean = true,
    V = AllowUndefinedValue extends true ? T | undefined : T,
  > = _FormTextFieldProps<T, AllowUndefinedValue, V>;
  var FormUrl: typeof _FormUrl;
  type FormUrlProps = _FormUrlProps;
  // FormLayout
  var FormBlock: typeof _FormBlock;
  type FormBlockProps = _FormBlockProps;
  var FormBody: typeof _FormBody;
  type FormBodyProps = _FormBodyProps;
  var FormCol: typeof _FormCol;
  type FormColProps = _FormColProps;
  var FormDivider: typeof _FormDivider;
  type FormDividerProps = _FormDividerProps;
  var FormFooter: typeof _FormFooter;
  type FormFooterProps = _FormFooterProps;
  var FormRow: typeof _FormRow;
  type FormRowProps = _FormRowProps;
  // Search
  var HashSearch: typeof _HashSearch;
  type HashSearchProps = _HashSearchProps;
  var Search: typeof _Search;
  type SearchProps = _PSearchProps;
  var SearchButton: typeof _SearchButton;
  type SearchButtonProps = _SearchButtonProps;
  var SearchGroup: typeof _SearchGroup;
  type SearchGroupProps = _SearchGroupProps;
  var SearchGroupRow: typeof _SearchGroupRow;
  type SearchGroupRowProps = _SearchGroupRowProps;
  var SearchMenuButton: typeof _SearchMenuButton;
  type SearchMenuButtonProps = _SearchMenuButtonProps;
}
/* eslint-enable no-var */

// Form
(globalThis as any).Form = _Form;
// FormCommon
globalThis.FormButton = _FormButton;
(globalThis as any).FormLabel = _FormLabel;
// FormItemCustom
globalThis.FormAutocomplete = _FormAutocomplete;
globalThis.FormCheckbox = _FormCheckbox;
globalThis.FormDatePicker = _FormDatePicker;
globalThis.FormDateRangePicker = _FormDateRangePicker;
globalThis.FormDateTimePicker = _FormDateTimePicker;
globalThis.FormFile = _FormFile;
globalThis.FormImageFile = _FormImageFile;
globalThis.FormMonthPicker = _FormMonthPicker;
globalThis.FormMonthRangePicker = _FormMonthRangePicker;
globalThis.FormRadioGroup = _FormRadioGroup;
globalThis.FormRating = _FormRating;
globalThis.FormSwitch = _FormSwitch;
globalThis.FormTextEditor = _FormTextEditor;
globalThis.FormTimePicker = _FormTimePicker;
globalThis.FormToggleButtonGroup = _FormToggleButtonGroup;
globalThis.FormYearPicker = _FormYearPicker;
globalThis.FormYearRangePicker = _FormYearRangePicker;
// FormItemTextFieldBase
globalThis.FormBusinessNo = _FormBusinessNo;
globalThis.FormEmail = _FormEmail;
globalThis.FormHidden = _FormHidden;
globalThis.FormMobile = _FormMobile;
globalThis.FormNumber = _FormNumber;
globalThis.FormPassword = _FormPassword;
globalThis.FormPersonalNo = _FormPersonalNo;
globalThis.FormSearch = _FormSearch;
globalThis.FormSelect = _FormSelect;
globalThis.FormTag = _FormTag;
globalThis.FormTel = _FormTel;
globalThis.FormText = _FormText;
globalThis.FormTextarea = _FormTextarea;
globalThis.FormTextField = _FormTextField;
globalThis.FormUrl = _FormUrl;
// FormLayout
globalThis.FormBlock = _FormBlock;
globalThis.FormBody = _FormBody;
globalThis.FormCol = _FormCol;
globalThis.FormDivider = _FormDivider;
globalThis.FormFooter = _FormFooter;
globalThis.FormRow = _FormRow;
// Search
globalThis.HashSearch = _HashSearch;
globalThis.Search = _Search;
globalThis.SearchButton = _SearchButton;
globalThis.SearchGroup = _SearchGroup;
globalThis.SearchGroupRow = _SearchGroupRow;
globalThis.SearchMenuButton = _SearchMenuButton;

export {};
