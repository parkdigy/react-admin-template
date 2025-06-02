import { TypographyProps } from '@mui/material';

export interface PrivacyTextProps {
  textType?: 'text' | 'tel' | 'business_no' | 'personal_no';
  text: string;
  type: string;
  parentId: number;
  textProps?: Omit<TypographyProps, 'children'>;
}
