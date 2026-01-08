declare global {
  // Buttons
  const CopyToClipboardButton: typeof import('../component/@Common/index.ts').CopyToClipboardButton;
  type CopyToClipboardButtonProps = import('../component/@Common/index.ts').CopyToClipboardButtonProps;
  const CopyToClipboardIconButton: typeof import('../component/@Common/index.ts').CopyToClipboardIconButton;
  type CopyToClipboardIconButtonProps = import('../component/@Common/index.ts').CopyToClipboardIconButtonProps;
  const SearchAddButton: typeof import('../component/@Common/index.ts').SearchAddButton;
  type SearchAddButtonProps = import('../component/@Common/index.ts').SearchAddButtonProps;
  const SearchExportButton: typeof import('../component/@Common/index.ts').SearchExportButton;
  type SearchExportButtonProps = import('../component/@Common/index.ts').SearchExportButtonProps;

  // Dividers
  const Divider: typeof import('../component/@Common/index.ts').Divider;
  type DividerProps = import('../component/@Common/index.ts').DividerProps;
  const VerticalDivider: typeof import('../component/@Common/index.ts').VerticalDivider;
  type VerticalDividerProps = import('../component/@Common/index.ts').VerticalDividerProps;

  // Errors
  const ErrorBoundary: typeof import('../component/@Common/index.ts').ErrorBoundary;
  type ErrorBoundaryProps = import('../component/@Common/index.ts').ErrorBoundaryProps;
  const ErrorRetry: typeof import('../component/@Common/index.ts').ErrorRetry;
  type ErrorRetryProps = import('../component/@Common/index.ts').ErrorRetryProps;

  // HashSearchTable
  const HashSearchTable: typeof import('../component/@Common/index.ts').HashSearchTable;
  type HashSearchTableProps<T extends TableItem = TableItem> =
    import('../component/@Common/index.ts').HashSearchTableProps<T>;

  // Loadings
  const Loading: typeof import('../component/@Common/index.ts').Loading;
  type LoadingProps = import('../component/@Common/index.ts').LoadingProps;
  type LoadingCommands = import('../component/@Common/index.ts').LoadingCommands;

  // Texts
  const PrivacyBusinessNoText: typeof import('../component/@Common/index.ts').PrivacyBusinessNoText;
  type PrivacyBusinessNoTextProps = import('../component/@Common/index.ts').PrivacyBusinessNoTextProps;
  const PrivacyPersonalNoText: typeof import('../component/@Common/index.ts').PrivacyPersonalNoText;
  type PrivacyPersonalNoTextProps = import('../component/@Common/index.ts').PrivacyPersonalNoTextProps;
  const PrivacyTelText: typeof import('../component/@Common/index.ts').PrivacyTelText;
  type PrivacyTelTextProps = import('../component/@Common/index.ts').PrivacyTelTextProps;
  const PrivacyText: typeof import('../component/@Common/index.ts').PrivacyText;
  type PrivacyTextProps = import('../component/@Common/index.ts').PrivacyTextProps;
  const StatusText: typeof import('../component/@Common/index.ts').StatusText;
  type StatusTextProps = import('../component/@Common/index.ts').StatusTextProps;
}

export {};
