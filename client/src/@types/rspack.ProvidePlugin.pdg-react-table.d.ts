import * as PdgReactTable from '@pdg/react-table';

declare global {
  // types
  type TableCommonProps = PdgReactTable.PTableCommonProps;
  type TableCommonSxProps = PdgReactTable.PTableCommonSxProps;

  // InfoTable
  const InfoTable: typeof PdgReactTable.PInfoTable;
  type InfoTableProps<T extends InfoTableInfo = InfoTableInfo> = PdgReactTable.PInfoTableProps<T>;
  type InfoTableInfo = PdgReactTable.PInfoTableInfo;
  type InfoTableItemType = PdgReactTable.PInfoTableItemType;
  type InfoTableItem<T extends InfoTableInfo = InfoTableInfo> = PdgReactTable.PInfoTableItem<T>;
  type InfoTableItems<T extends InfoTableInfo = InfoTableInfo> = PdgReactTable.PInfoTableItems<T>;
  type InfoTableCols = PdgReactTable.PInfoTableCols;

  // SearchTable
  const SearchTable: typeof PdgReactTable.PSearchTable;
  type SearchTableProps<T extends TableItem = TableItem> = PdgReactTable.PSearchTableProps<T>;
  type SearchTableCommands<T extends TableItem = TableItem> = PdgReactTable.PSearchTableCommands<T>;
  type SearchTableSearchInfo = PdgReactTable.PSearchTableSearchInfo;
  type SearchTableTableInfo<T extends TableItem = TableItem> = PdgReactTable.PSearchTableTableInfo<T>;
  type SearchTableData<T extends TableItem = TableItem> = PdgReactTable.PSearchTableData<T>;
  type SearchTableSearchProps = PdgReactTable.PSearchTableSearchProps;
  type SearchTableTableProps<T extends TableItem = TableItem> = PdgReactTable.PSearchTableTableProps<T>;

  // Table
  const Table: typeof PdgReactTable.PTable;
  type TableProps<T extends TableItem = TableItem> = PdgReactTable.PTableProps<T>;
  type TableCommands<T extends TableItem = TableItem> = PdgReactTable.PTableCommands<T>;
  type TableItem = PdgReactTable.PTableItem;
  type TableProgressiveVisibleInfo = PdgReactTable.PTableProgressiveVisibleInfo;
  type TableColumn<T extends TableItem = TableItem> = PdgReactTable.PTableColumn<T>;
  type TableColumns<T extends TableItem = TableItem> = PdgReactTable.PTableColumns<T>;

  // TableBodyCell
  const TableBodyCell: typeof PdgReactTable.PTableBodyCell;
  type TableBodyCellProps<T extends TableItem = TableItem> = PdgReactTable.PTableBodyCellProps<T>;
  type TableBodyCellCommands = PdgReactTable.PTableBodyCellCommands;

  // TableBodyRow
  const TableBodyRow: typeof PdgReactTable.PTableBodyRow;
  type TableBodyRowProps<T extends TableItem = TableItem> = PdgReactTable.PTableBodyRowProps<T>;

  // TableButton
  const TableButton: typeof PdgReactTable.PTableButton;
  type TableButtonProps = PdgReactTable.PTableButtonProps;

  // TableCommonCell
  const TableCommonCell: typeof PdgReactTable.PTableCommonCell;
  type TableCommonCellProps<T extends TableItem = TableItem> = PdgReactTable.PTableCommonCellProps<T>;

  // TableFooterCell
  const TableFooterCell: typeof PdgReactTable.PTableFooterCell;
  type TableFooterCellProps<T extends TableItem = TableItem> = PdgReactTable.PTableFooterCellProps<T>;

  // TableHeadCell
  const TableHeadCell: typeof PdgReactTable.PTableHeadCell;
  type TableHeadCellProps<T extends TableItem = TableItem> = PdgReactTable.PTableHeadCellProps<T>;

  // TableMenuButton
  const TableMenuButton: typeof PdgReactTable.PTableMenuButton;
  type TableMenuButtonProps = PdgReactTable.PTableMenuButtonProps;

  // TablePagination
  const TablePagination: typeof PdgReactTable.PTablePagination;
  type TablePaginationProps = PdgReactTable.PTablePaginationProps;
  type TablePaging = PdgReactTable.PTablePaging;

  // TableSortableBody
  const TableSortableBody: typeof PdgReactTable.PTableSortableBody;
  type TableSortableBodyProps<T extends TableItem = TableItem> = PdgReactTable.PTableSortableBodyProps<T>;

  // TableSortableBodyBlock
  const TableSortableBodyBlock: typeof PdgReactTable.PTableSortableBodyBlock;
  type TableSortableBodyBlockProps<T extends TableItem = TableItem> = PdgReactTable.PTableSortableBodyBlockProps<T>;

  // TableTopHead
  const TableTopHead: typeof PdgReactTable.PTableTopHead;
  type TableTopHeadProps<T extends TableItem = TableItem> = PdgReactTable.PTableTopHeadProps<T>;
  type TableTopHeadRowColumn = PdgReactTable.PTableTopHeadRowColumn;
  type TableTopHeadRowColumnValue = PdgReactTable.PTableTopHeadRowColumnValue;
}

export {};
