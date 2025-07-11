import {
  // InfoTable
  InfoTable as _InfoTable,
  type InfoTableProps as _InfoTableProps,
  // SearchTable
  SearchTable as _SearchTable,
  type SearchTableProps as _SearchTableProps,
  // Table
  Table as _Table,
  type TableProps as _TableProps,
  // TableBodyCell
  TableBodyCell as _TableBodyCell,
  type TableBodyCellProps as _TableBodyCellProps,
  // TableBodyRow
  TableBodyRow as _TableBodyRow,
  type TableBodyRowProps as _TableBodyRowProps,
  // TableButton
  TableButton as _TableButton,
  type TableButtonProps as _TableButtonProps,
  // TableCommonCell
  TableCommonCell as _TableCommonCell,
  type TableCommonCellProps as _TableCommonCellProps,
  // TableFooterCell
  TableFooterCell as _TableFooterCell,
  type TableFooterCellProps as _TableFooterCellProps,
  // TableHeadCell
  TableHeadCell as _TableHeadCell,
  type TableHeadCellProps as _TableHeadCellProps,
  // TableMenuButton
  TableMenuButton as _TableMenuButton,
  type TableMenuButtonProps as _TableMenuButtonProps,
  // TablePagination
  TablePagination as _TablePagination,
  type TablePaginationProps as _TablePaginationProps,
  // TableSortableBody
  TableSortableBody as _TableSortableBody,
  type TableSortableBodyProps as _TableSortableBodyProps,
  // TableSortableBodyBlock
  TableSortableBodyBlock as _TableSortableBodyBlock,
  type TableSortableBodyBlockProps as _TableSortableBodyBlockProps,
  // TableTpoHead
  TableTopHead as _TableTopHead,
  type TableTopHeadProps as _TableTopHeadProps,
  // Types for Generic
  type InfoTableInfo,
  TableItem,
} from '@ccomp';

/* eslint-disable no-var */
declare global {
  // InfoTable
  var InfoTable: typeof _InfoTable;
  type InfoTableProps<T = InfoTableInfo> = _InfoTableProps<T>;
  // SearchTable
  var SearchTable: typeof _SearchTable;
  type SearchTableProps<T = TableItem> = _SearchTableProps<T>;
  // Table
  var Table: typeof _Table;
  type TableProps<T = TableItem> = _TableProps<T>;
  // TableBodyCell
  var TableBodyCell: typeof _TableBodyCell;
  type TableBodyCellProps = _TableBodyCellProps;
  // TableBodyRow
  var TableBodyRow: typeof _TableBodyRow;
  type TableBodyRowProps = _TableBodyRowProps;
  // TableButton
  var TableButton: typeof _TableButton;
  type TableButtonProps = _TableButtonProps;
  // TableCommonCell
  var TableCommonCell: typeof _TableCommonCell;
  type TableCommonCellProps = _TableCommonCellProps;
  // TableFooterCell
  var TableFooterCell: typeof _TableFooterCell;
  type TableFooterCellProps<T = TableItem> = _TableFooterCellProps<T>;
  // TableHeadCell
  var TableHeadCell: typeof _TableHeadCell;
  type TableHeadCellProps<T = TableItem> = _TableHeadCellProps<T>;
  // TableMenuButton
  var TableMenuButton: typeof _TableMenuButton;
  type TableMenuButtonProps = _TableMenuButtonProps;
  // TablePagination
  var TablePagination: typeof _TablePagination;
  type TablePaginationProps = _TablePaginationProps;
  // TableSortableBody
  var TableSortableBody: typeof _TableSortableBody;
  type TableSortableBodyProps = _TableSortableBodyProps;
  // TableSortableBodyBlock
  var TableSortableBodyBlock: typeof _TableSortableBodyBlock;
  type TableSortableBodyBlockProps = _TableSortableBodyBlockProps;
  // TableTopHead
  var TableTopHead: typeof _TableTopHead;
  type TableTopHeadProps<T = TableItem> = _TableTopHeadProps<T>;
}
/* eslint-enable no-var */

globalThis.InfoTable = _InfoTable;
globalThis.SearchTable = _SearchTable;
(globalThis as any).Table = _Table;
globalThis.TableBodyCell = _TableBodyCell;
globalThis.TableBodyRow = _TableBodyRow;
globalThis.TableButton = _TableButton;
globalThis.TableCommonCell = _TableCommonCell;
globalThis.TableFooterCell = _TableFooterCell;
globalThis.TableHeadCell = _TableHeadCell;
globalThis.TableMenuButton = _TableMenuButton;
(globalThis as any).TablePagination = _TablePagination;
globalThis.TableSortableBody = _TableSortableBody;
globalThis.TableSortableBodyBlock = _TableSortableBodyBlock;
globalThis.TableTopHead = _TableTopHead;

export {};
