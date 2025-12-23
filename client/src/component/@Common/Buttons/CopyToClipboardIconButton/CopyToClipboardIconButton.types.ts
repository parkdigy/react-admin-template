export interface CopyToClipboardIconButtonProps extends Omit<IconButtonProps, 'children'> {
  text: string;
  icon?: string;
  tooltip?: string;
  successMsg?: string;
}
