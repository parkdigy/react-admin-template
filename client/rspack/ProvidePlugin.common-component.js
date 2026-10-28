const path = require('path');

module.exports = {
  // Buttons
  CopyToClipboardButton: [
    path.resolve(__dirname, '../src/component/@Common/Buttons/CopyToClipboardButton/index.ts'),
    'default',
  ],
  CopyToClipboardIconButton: [
    path.resolve(__dirname, '../src/component/@Common/Buttons/CopyToClipboardIconButton/index.ts'),
    'default',
  ],
  SearchAddButton: [path.resolve(__dirname, '../src/component/@Common/Buttons/SearchAddButton/index.ts'), 'default'],
  SearchExportButton: [
    path.resolve(__dirname, '../src/component/@Common/Buttons/SearchExportButton/index.ts'),
    'default',
  ],

  // Dividers
  Divider: [path.resolve(__dirname, '../src/component/@Common/Dividers/Divider/index.ts'), 'default'],
  VerticalDivider: [path.resolve(__dirname, '../src/component/@Common/Dividers/VerticalDivider/index.ts'), 'default'],

  // Errors
  ErrorBoundary: [path.resolve(__dirname, '../src/component/@Common/Errors/ErrorBoundary/index.ts'), 'default'],
  ErrorRetry: [path.resolve(__dirname, '../src/component/@Common/Errors/ErrorRetry/index.ts'), 'default'],

  // HashSearchTable
  HashSearchTable: [path.resolve(__dirname, '../src/component/@Common/HashSearchTable/index.ts'), 'default'],

  // Loadings
  Loading: [path.resolve(__dirname, '../src/component/@Common/Loadings/Loading/index.ts'), 'default'],

  // Texts
  PrivacyBusinessNoText: [
    path.resolve(__dirname, '../src/component/@Common/Texts/PrivacyBusinessNoText/index.ts'),
    'default',
  ],
  PrivacyPersonalNoText: [
    path.resolve(__dirname, '../src/component/@Common/Texts/PrivacyPersonalNoText/index.ts'),
    'default',
  ],
  PrivacyTelText: [path.resolve(__dirname, '../src/component/@Common/Texts/PrivacyTelText/index.ts'), 'default'],
  PrivacyText: [path.resolve(__dirname, '../src/component/@Common/Texts/PrivacyText/index.ts'), 'default'],
  StatusText: [path.resolve(__dirname, '../src/component/@Common/Texts/StatusText/index.ts'), 'default'],
};
