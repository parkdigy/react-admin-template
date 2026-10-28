import * as React from 'react';
import * as Mui from '@mui/material';

declare global {
  const styled: typeof Mui.styled;
  const useTheme: typeof Mui.useTheme;

  type SxProps<Theme extends object = {}> = Mui.SxProps<Theme>;

  const MuiBox: typeof Mui.Box;
  type MuiBoxProps<
    RootComponent extends React.ElementType = Mui.BoxTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.BoxProps<RootComponent, AdditionalProps>;

  const MuiStack: typeof Mui.Stack;
  type MuiStackProps<
    RootComponent extends React.ElementType = Mui.StackTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.StackProps<RootComponent, AdditionalProps>;

  const MuiIcon: typeof Mui.Icon;
  type MuiIconProps<
    RootComponent extends React.ElementType = Mui.IconTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.IconProps<RootComponent, AdditionalProps>;

  const MuiButton: typeof Mui.Button;
  type MuiButtonProps<
    RootComponent extends React.ElementType = Mui.ButtonTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.ButtonProps<RootComponent, AdditionalProps>;

  const MuiTypography: typeof Mui.Typography;
  type MuiTypographyProps<
    RootComponent extends React.ElementType = Mui.TypographyTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TypographyProps<RootComponent, AdditionalProps>;

  const MuiChip: typeof Mui.Chip;
  type MuiChipProps<
    RootComponent extends React.ElementType = Mui.ChipTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.ChipProps<RootComponent, AdditionalProps>;

  const MuiGrid: typeof Mui.Grid;
  type MuiGridProps<
    RootComponent extends React.ElementType = Mui.GridTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.GridProps<RootComponent, AdditionalProps>;

  const MuiTooltip: typeof Mui.Tooltip;
  type MuiTooltipProps = Mui.TooltipProps;

  const MuiAlert: typeof Mui.Alert;
  type MuiAlertProps = Mui.AlertProps;

  const MuiAlertTitle: typeof Mui.AlertTitle;
  type MuiAlertTitleProps = Mui.AlertTitleProps;

  const MuiTable: typeof Mui.Table;
  type MuiTableProps<
    RootComponent extends React.ElementType = Mui.TableTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TableProps<RootComponent, AdditionalProps>;

  const MuiTableBody: typeof Mui.TableBody;
  type MuiTableBodyProps<
    RootComponent extends React.ElementType = Mui.TableBodyTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TableBodyProps<RootComponent, AdditionalProps>;

  const MuiTableCell: typeof Mui.TableCell;
  type MuiTableCellProps<
    RootComponent extends React.ElementType = Mui.TableCellTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TableCellProps<RootComponent, AdditionalProps>;

  const MuiTableHead: typeof Mui.TableHead;
  type MuiTableHeadProps<
    RootComponent extends React.ElementType = Mui.TableHeadTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TableHeadProps<RootComponent, AdditionalProps>;

  const MuiTableRow: typeof Mui.TableRow;
  type MuiTableRowProps<
    RootComponent extends React.ElementType = Mui.TableRowTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TableRowProps<RootComponent, AdditionalProps>;

  const MuiDivider: typeof Mui.Divider;
  type MuiDividerProps<
    RootComponent extends React.ElementType = Mui.DividerTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.DividerProps<RootComponent, AdditionalProps>;

  const MuiMenu: typeof Mui.Menu;
  type MuiMenuProps = Mui.MenuProps;
  const MuiMenuClasses: typeof Mui.menuClasses;

  const MuiMenuList: typeof Mui.MenuList;
  type MuiMenuListProps<
    RootComponent extends React.ElementType = Mui.MenuListTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.MenuListProps<RootComponent, AdditionalProps>;

  const MuiMenuItem: typeof Mui.MenuItem;
  type MuiMenuItemProps<
    RootComponent extends React.ElementType = Mui.MenuItemTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.MenuItemProps<RootComponent, AdditionalProps>;
  const MuiMenuItemClasses: typeof Mui.menuItemClasses;

  const MuiTabs: typeof Mui.Tabs;
  type MuiTabsProps<
    RootComponent extends React.ElementType = Mui.TabsTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TabsProps<RootComponent, AdditionalProps>;

  const MuiTab: typeof Mui.Tab;
  type MuiTabProps<
    RootComponent extends React.ElementType = Mui.TabTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TabProps<RootComponent, AdditionalProps>;

  const MuiBadge: typeof Mui.Badge;
  type MuiBadgeProps<
    RootComponent extends React.ElementType = Mui.BadgeTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.BadgeProps<RootComponent, AdditionalProps>;

  const MuiLink: typeof Mui.Link;
  type MuiLinkProps<
    RootComponent extends React.ElementType = Mui.LinkTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.LinkProps<RootComponent, AdditionalProps>;
}

export {};
