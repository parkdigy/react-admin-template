import { SearchButtonProps } from '@pdg/react-form';
import { PdgIconProps } from '@pdg/react-component';

export interface SearchExportButtonItem {
  label: string;
  icon?: PdgIconProps['children'];
  color?: PdgIconProps['color'];
  onClick(): void;
}

export type SearchExportButtonItems = SearchExportButtonItem[];

export interface SearchExportButtonProps
  extends Omit<SearchButtonProps, 'children' | 'color' | 'icon' | 'startIcon' | 'endIcon'> {
  items?: SearchExportButtonItems;
}
