import React from 'react';
import { PrivacyTelTextProps as Props } from './PrivacyTelText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyTelText = (props: Props) => {
  return <PrivacyText textType='tel' {...props} />;
};

export default PrivacyTelText;
