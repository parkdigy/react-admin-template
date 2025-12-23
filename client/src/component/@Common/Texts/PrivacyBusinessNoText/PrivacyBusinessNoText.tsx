import React from 'react';
import { PrivacyBusinessNoTextProps as Props } from './PrivacyBusinessNoText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyBusinessNoText = (props: Props) => {
  return <PrivacyText textType='business_no' {...props} />;
};

export default PrivacyBusinessNoText;
