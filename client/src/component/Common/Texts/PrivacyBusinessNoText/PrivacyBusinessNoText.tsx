import React from 'react';
import { PrivacyBusinessNoTextProps as Props } from './PrivacyBusinessNoText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyBusinessNoText: React.FC<Props> = (props) => {
  return <PrivacyText textType='business_no' {...props} />;
};

export type TPrivacyBusinessNoText = typeof PrivacyBusinessNoText;

export default PrivacyBusinessNoText;
