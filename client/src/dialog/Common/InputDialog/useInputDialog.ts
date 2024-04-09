import { useDialog } from '@pdg/react-dialog';
import InputDialog from './InputDialog';
import { InputDialogInputType, InputDialogProps } from '@dialog';

export function useInputDialog<T extends InputDialogInputType, Optional extends boolean = false>(
  inputType: T,
  optional?: Optional
): (
  props: PartialOmit<InputDialogProps<T, [Optional] extends [true] ? false : true>, 'inputType' | 'required'>
) => void {
  const inputDialog = useDialog(InputDialog);

  return useCallback(
    (props) => inputDialog({ inputType, required: !optional, ...props } as any),
    [inputDialog, inputType, optional]
  );
}

export default { useInputDialog };
