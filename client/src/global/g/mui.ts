import { type Theme } from '@mui/material/styles';

export const mui = {
  /********************************************************************************************************************
   * sx 병합
   * @param sx - 병합할 sx
   * @returns 병합된 sx
   * ******************************************************************************************************************/
  mergeSx(...sx: (boolean | undefined | SxProps<Theme>)[]): SxProps<Theme> {
    const finalSx: SxProps<Theme> = [];
    if (Array.isArray(finalSx)) {
      sx.forEach((v) => v && finalSx.push(...(Array.isArray(v) ? v : [v])));
    }
    return finalSx;
  },

  /********************************************************************************************************************
   * 텍스트 컬러를 sx 컬러로 변환
   * @param color - 텍스트 컬러
   * @returns sx 컬러
   * ******************************************************************************************************************/
  typographyColorToSxColor(color: MuiTypographyProps['color']) {
    if (typeof color === 'string') {
      if (['primary', 'secondary', 'info', 'warning', 'error', 'success'].includes(color)) {
        return `${color}.main`;
      } else if (color === 'text') {
        return 'text.primary';
      } else {
        return color;
      }
    } else {
      return color;
    }
  },
};

export default mui;
