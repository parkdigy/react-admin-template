import React from 'react';
import { PrivacyCompanyNumTextProps as Props } from './PrivacyCompanyNumText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyCompanyNumText: React.FC<Props> = (props) => {
  return <PrivacyText textType='company_num' {...props} />;
};

export type TPrivacyCompanyNumText = typeof PrivacyCompanyNumText;

export default PrivacyCompanyNumText;
