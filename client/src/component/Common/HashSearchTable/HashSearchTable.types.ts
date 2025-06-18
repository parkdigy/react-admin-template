import { PSearchTableProps, PTableItem } from '@pdg/react-table';

export interface HashSearchTableProps<T = PTableItem> extends PSearchTableProps<T> {
  size?: 'medium' | 'small';
}
