import { PSearchButtonProps } from '@pdg/react-form';
import { PIconProps } from '@pdg/react-component';

export interface SearchExportButtonItem {
  label: string;
  icon?: PIconProps['children'];
  color?: PIconProps['color'];
  onClick(): void;
}

export type SearchExportButtonItems = SearchExportButtonItem[];

export interface SearchExportButtonProps
  extends Omit<PSearchButtonProps, 'children' | 'color' | 'icon' | 'startIcon' | 'endIcon'> {
  items?: SearchExportButtonItems;
}
