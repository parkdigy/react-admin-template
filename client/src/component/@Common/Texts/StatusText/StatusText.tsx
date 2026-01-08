import { type StatusTextProps as Props } from './StatusText.types';

export const StatusText = ({ type, status, children }: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const color = useMemo(() => {
    let color: TProps['color'] | undefined;

    switch (type) {
      case 'user':
        switch (status) {
          case 'ON':
            color = 'primary';
            break;
          case 'OFF':
            color = 'error';
            break;
          case 'RESIGN':
            color = 'gray';
            break;
        }
        break;
    }

    return color;
  }, [status, type]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <T color={color} fontWeight='bold'>
      {children}
    </T>
  );
};

export default StatusText;
