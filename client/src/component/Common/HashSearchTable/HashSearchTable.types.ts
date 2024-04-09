import { SearchTableProps, TableItem } from '@pdg/react-table';

export interface HashSearchTableProps<T = TableItem> extends SearchTableProps<T> {
  size?: 'medium' | 'small';
}
