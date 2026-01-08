import * as React from 'react';
import * as Mui from '@mui/material';

declare global {
  const styled: typeof Mui.styled;
  const useTheme: typeof Mui.useTheme;

  type SxProps<Theme extends object = {}> = Mui.SxProps<Theme>;

  const Typography: typeof Mui.Typography;
  type TypographyProps<
    RootComponent extends React.ElementType = Mui.TypographyTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.TypographyProps<RootComponent, AdditionalProps>;

  const Chip: typeof Mui.Chip;
  type ChipProps<
    RootComponent extends React.ElementType = Mui.ChipTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.ChipProps<RootComponent, AdditionalProps>;

  const Grid: typeof Mui.Grid;
  type GridProps<
    RootComponent extends React.ElementType = Mui.GridTypeMap['defaultComponent'],
    AdditionalProps = {},
  > = Mui.GridProps<RootComponent, AdditionalProps>;

  const Tooltip: typeof Mui.Tooltip;
  type TooltipProps = Mui.TooltipProps;
}

export {};
