import React from 'react';
import { PrivacyTelTextProps as Props } from './PrivacyTelText.types';
import PrivacyText from '../PrivacyText';

export const PrivacyTelText: React.FC<Props> = (props) => {
  return <PrivacyText textType='tel' {...props} />;
};

export type TPrivacyTelText = typeof PrivacyTelText;

export default PrivacyTelText;
