import { DialogProps, DialogCommands, DialogRequireProps } from '@pdg/react-dialog';
import {
  FormMobileProps,
  FormNumberProps,
  FormTelProps,
  FormTextareaProps,
  FormTextProps,
  FormUrlProps,
} from '@pdg/react-form';
import { ReactNode } from 'react';

export type InputDialogInputType = 'text' | 'number' | 'url' | 'tel' | 'mobile' | 'textarea';

export interface InputDialogProps<
  T extends InputDialogInputType = 'text',
  Required extends boolean | undefined = undefined,
  Value extends string | number = T extends 'number' ? number : string,
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
            : InputDialogTextInputProps;
  onConfirm?(dialog: DialogCommands, value: Value | ([Required] extends [true] ? never : undefined)): void;
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
  | 'placeholder';

export type InputDialogTextInputProps = Pick<FormTextProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogNumberInputProps = Pick<
  FormNumberProps,
  DefaultPickKeys | 'allowNegative' | 'thousandSeparator' | 'allowDecimal' | 'decimalScale' | 'prefix' | 'suffix'
>;

export type InputDialogUrlInputProps = Pick<FormUrlProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogTelInputProps = Pick<FormTelProps, DefaultPickKeys>;

export type InputDialogMobileInputProps = Pick<FormMobileProps, DefaultPickKeys>;

export type InputDialogTextareaInputProps = Pick<FormTextareaProps, DefaultPickKeys | 'rows' | 'maxLength'>;
