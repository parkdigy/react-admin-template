import { AdminMenuListDataItem } from '@const';

export interface AdminMenuListItemProps {
  menu: AdminMenuListDataItem;
  sortChanged: boolean;
  dragging: boolean;
  onEdit(menu: AdminMenuListDataItem): void;
  onRemove(menu: AdminMenuListDataItem): void;
  onAddSubMenu(menu: AdminMenuListDataItem): void;
}
