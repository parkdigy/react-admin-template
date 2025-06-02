import React from 'react';
import { PrivacyPersonalNoTextProps as Props } from './PrivacyPersonalNoText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyPersonalNoText: React.FC<Props> = (props) => {
  return <PrivacyText textType='business_no' {...props} />;
};

export type TPrivacyPersonalNoText = typeof PrivacyPersonalNoText;

export default PrivacyPersonalNoText;
