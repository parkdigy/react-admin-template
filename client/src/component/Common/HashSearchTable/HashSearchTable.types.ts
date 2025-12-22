export interface HashSearchTableProps<T extends TableItem = TableItem> extends Omit<
  SearchTableProps<T>,
  'onRequestHashChange'
> {
  size?: 'medium' | 'small';
}
