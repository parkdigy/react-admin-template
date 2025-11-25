import { DialogProps, DialogCommands, DialogRequireProps } from '@pdg/react-dialog';
import { ReactNode } from 'react';
import { FormTagValue } from '@ccomp';

export type InputDialogInputType = 'text' | 'number' | 'url' | 'tel' | 'mobile' | 'textarea' | 'email' | 'tag';

export interface InputDialogProps<
  T extends InputDialogInputType = 'text',
  Required extends boolean | undefined = undefined,
  Value extends string | FormTagValue | number = T extends 'number' ? number : T extends 'tag' ? FormTagValue : string,
> extends DialogRequireProps,
    Pick<DialogProps, 'titleIcon' | 'title' | 'color' | 'maxWidth'> {
  inputType?: InputDialogInputType;
  intro?: ReactNode;
  initValue?: Value;
  required?: Required;
  inputProps?: T extends 'number'
    ? InputDialogNumberInputProps
    : T extends 'url'
      ? InputDialogUrlInputProps
      : T extends 'tel'
        ? InputDialogTelInputProps
        : T extends 'mobile'
          ? InputDialogMobileInputProps
          : T extends 'textarea'
            ? InputDialogTextareaInputProps
            : T extends 'tag'
              ? InputDialogTagInputProps
              : T extends 'email'
                ? InputDialogEmailInputProps
                : InputDialogTextInputProps;
  onConfirm?: (dialog: DialogCommands, value: Value | ([Required] extends [true] ? never : undefined)) => void;
}

type DefaultPickKeys =
  | 'className'
  | 'style'
  | 'sx'
  | 'icon'
  | 'clear'
  | 'labelShrink'
  | 'label'
  | 'focused'
  | 'size'
  | 'color'
  | 'startAdornment'
  | 'endAdornment'
  | 'helperText'
  | 'onKeyDown'
  | 'placeholder'
  | 'slotProps';

export type InputDialogTextInputProps = Pick<FormTextProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogNumberInputProps = Pick<
  FormNumberProps,
  DefaultPickKeys | 'allowNegative' | 'thousandSeparator' | 'allowDecimal' | 'decimalScale' | 'prefix' | 'suffix'
>;

export type InputDialogUrlInputProps = Pick<FormUrlProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogTelInputProps = Pick<FormTelProps, DefaultPickKeys>;

export type InputDialogMobileInputProps = Pick<FormMobileProps, DefaultPickKeys>;

export type InputDialogTextareaInputProps = Pick<FormTextareaProps, DefaultPickKeys | 'rows' | 'maxLength'>;

export type InputDialogTagInputProps = Pick<FormTagProps, DefaultPickKeys>;

export type InputDialogEmailInputProps = Pick<FormEmailProps, DefaultPickKeys>;
