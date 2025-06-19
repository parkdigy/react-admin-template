import { DialogProps, DialogCommands, DialogRequireProps } from '@pdg/react-dialog';
import {
  PFormEmailProps,
  PFormMobileProps,
  PFormNumberProps,
  PFormTagProps,
  PFormTagValue,
  PFormTelProps,
  PFormTextareaProps,
  PFormTextProps,
  PFormUrlProps,
} from '@pdg/react-form';
import { ReactNode } from 'react';

export type InputDialogInputType = 'text' | 'number' | 'url' | 'tel' | 'mobile' | 'textarea' | 'email' | 'tag';

export interface InputDialogProps<
  T extends InputDialogInputType = 'text',
  Required extends boolean | undefined = undefined,
  Value extends string | PFormTagValue | number = T extends 'number'
    ? number
    : T extends 'tag'
      ? PFormTagValue
      : string,
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
  | 'placeholder'
  | 'slotProps';

export type InputDialogTextInputProps = Pick<PFormTextProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogNumberInputProps = Pick<
  PFormNumberProps,
  DefaultPickKeys | 'allowNegative' | 'thousandSeparator' | 'allowDecimal' | 'decimalScale' | 'prefix' | 'suffix'
>;

export type InputDialogUrlInputProps = Pick<PFormUrlProps, DefaultPickKeys | 'maxLength'>;

export type InputDialogTelInputProps = Pick<PFormTelProps, DefaultPickKeys>;

export type InputDialogMobileInputProps = Pick<PFormMobileProps, DefaultPickKeys>;

export type InputDialogTextareaInputProps = Pick<PFormTextareaProps, DefaultPickKeys | 'rows' | 'maxLength'>;

export type InputDialogTagInputProps = Pick<PFormTagProps, DefaultPickKeys>;

export type InputDialogEmailInputProps = Pick<PFormEmailProps, DefaultPickKeys>;
