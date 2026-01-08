import { type StatusTextProps as Props } from './StatusText.types';
import { Typography, type TypographyProps } from '@mui/material';

export const StatusText = ({ type, status, children }: Props) => {
  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const color = useMemo(() => {
    let color: TypographyProps['color'] | undefined;

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
    <Typography color={color} fontWeight='bold'>
      {children}
    </Typography>
  );
};

export default StatusText;
