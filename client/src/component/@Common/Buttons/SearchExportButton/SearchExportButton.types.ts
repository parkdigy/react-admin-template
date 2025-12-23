export interface SearchExportButtonItem {
  label: string;
  icon?: IconProps['children'];
  color?: IconProps['color'];
  onClick: () => void;
}

export type SearchExportButtonItems = SearchExportButtonItem[];

export interface SearchExportButtonProps
  extends Omit<SearchButtonProps, 'children' | 'color' | 'icon' | 'startIcon' | 'endIcon'> {
  items?: SearchExportButtonItems;
}
