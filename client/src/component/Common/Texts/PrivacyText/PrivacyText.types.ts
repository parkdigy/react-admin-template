import { TypographyProps } from '@mui/material';

export interface PrivacyTextProps {
  textType?: 'text' | 'tel' | 'company_num' | 'personal_num';
  text: string;
  type: string;
  parentId: number;
  textProps?: Omit<TypographyProps, 'children'>;
}
