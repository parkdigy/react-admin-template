import React from 'react';
import { PrivacyPersonalNumTextProps as Props } from './PrivacyPersonalNumText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyPersonalNumText: React.FC<Props> = (props) => {
  return <PrivacyText textType='company_num' {...props} />;
};

export type TPrivacyPersonalNumText = typeof PrivacyPersonalNumText;

export default PrivacyPersonalNumText;
