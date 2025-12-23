import React from 'react';
import { PrivacyPersonalNoTextProps as Props } from './PrivacyPersonalNoText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyPersonalNoText = (props: Props) => {
  return <PrivacyText textType='business_no' {...props} />;
};

export default PrivacyPersonalNoText;
