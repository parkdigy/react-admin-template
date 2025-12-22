// types
declare type TableCommonProps = import('@pdg/react-table').PTableCommonProps;
declare type TableCommonSxProps = import('@pdg/react-table').PTableCommonSxProps;

// InfoTable
declare const InfoTable: typeof import('@pdg/react-table').PInfoTable;
declare type InfoTableProps<T extends InfoTableInfo = InfoTableInfo> = import('@pdg/react-table').PInfoTableProps<T>;
declare type InfoTableInfo = import('@pdg/react-table').PInfoTableInfo;
declare type InfoTableItemType = import('@pdg/react-table').PInfoTableItemType;
declare type InfoTableItem<T extends InfoTableInfo = InfoTableInfo> = import('@pdg/react-table').PInfoTableItem<T>;
declare type InfoTableItems<T extends InfoTableInfo = InfoTableInfo> = import('@pdg/react-table').PInfoTableItems<T>;
declare type InfoTableCols = import('@pdg/react-table').PInfoTableCols;

// SearchTable
declare const SearchTable: typeof import('@pdg/react-table').PSearchTable;
declare type SearchTableProps<T extends TableItem = TableItem> = import('@pdg/react-table').PSearchTableProps<T>;
declare type SearchTableCommands<T extends TableItem = TableItem> = import('@pdg/react-table').PSearchTableCommands<T>;
declare type SearchTableSearchInfo = import('@pdg/react-table').PSearchTableSearchInfo;
declare type SearchTableTableInfo<T extends TableItem = TableItem> =
  import('@pdg/react-table').PSearchTableTableInfo<T>;
declare type SearchTableData<T extends TableItem = TableItem> = import('@pdg/react-table').PSearchTableData<T>;
declare type SearchTableSearchProps = import('@pdg/react-table').PSearchTableSearchProps;
declare type SearchTableTableProps<T extends TableItem = TableItem> =
  import('@pdg/react-table').PSearchTableTableProps<T>;

// Table
declare const Table: typeof import('@pdg/react-table').PTable;
declare type TableProps<T extends TableItem = TableItem> = import('@pdg/react-table').PTableProps<T>;
declare type TableCommands<T extends TableItem = TableItem> = import('@pdg/react-table').PTableCommands<T>;
declare type TableItem = import('@pdg/react-table').PTableItem;
declare type TableProgressiveVisibleInfo = import('@pdg/react-table').PTableProgressiveVisibleInfo;
declare type TableColumn<T extends TableItem = TableItem> = import('@pdg/react-table').PTableColumn<T>;
declare type TableColumns<T extends TableItem = TableItem> = import('@pdg/react-table').PTableColumns<T>;

// TableBodyCell
declare const TableBodyCell: typeof import('@pdg/react-table').PTableBodyCell;
declare type TableBodyCellProps<T extends TableItem = TableItem> = import('@pdg/react-table').PTableBodyCellProps<T>;
declare type TableBodyCellCommands = import('@pdg/react-table').PTableBodyCellCommands;

// TableBodyRow
declare const TableBodyRow: typeof import('@pdg/react-table').PTableBodyRow;
declare type TableBodyRowProps<T extends TableItem = TableItem> = import('@pdg/react-table').PTableBodyRowProps<T>;

// TableButton
declare const TableButton: typeof import('@pdg/react-table').PTableButton;
declare type TableButtonProps = import('@pdg/react-table').PTableButtonProps;

// TableCommonCell
declare const TableCommonCell: typeof import('@pdg/react-table').PTableCommonCell;
declare type TableCommonCellProps<T extends TableItem = TableItem> =
  import('@pdg/react-table').PTableCommonCellProps<T>;

// TableFooterCell
declare const TableFooterCell: typeof import('@pdg/react-table').PTableFooterCell;
declare type TableFooterCellProps<T extends TableItem = TableItem> =
  import('@pdg/react-table').PTableFooterCellProps<T>;

// TableHeadCell
declare const TableHeadCell: typeof import('@pdg/react-table').PTableHeadCell;
declare type TableHeadCellProps<T extends TableItem = TableItem> = import('@pdg/react-table').PTableHeadCellProps<T>;

// TableMenuButton
declare const TableMenuButton: typeof import('@pdg/react-table').PTableMenuButton;
declare type TableMenuButtonProps = import('@pdg/react-table').PTableMenuButtonProps;

// TablePagination
declare const TablePagination: typeof import('@pdg/react-table').PTablePagination;
declare type TablePaginationProps = import('@pdg/react-table').PTablePaginationProps;
declare type TablePaging = import('@pdg/react-table').PTablePaging;

// TableSortableBody
declare const TableSortableBody: typeof import('@pdg/react-table').PTableSortableBody;
declare type TableSortableBodyProps<T extends TableItem = TableItem> =
  import('@pdg/react-table').PTableSortableBodyProps<T>;

// TableSortableBodyBlock
declare const TableSortableBodyBlock: typeof import('@pdg/react-table').PTableSortableBodyBlock;
declare type TableSortableBodyBlockProps<T extends TableItem = TableItem> =
  import('@pdg/react-table').PTableSortableBodyBlockProps<T>;

// TableTopHead
declare const TableTopHead: typeof import('@pdg/react-table').PTableTopHead;
declare type TableTopHeadProps<T extends TableItem = TableItem> = import('@pdg/react-table').PTableTopHeadProps<T>;
declare type TableTopHeadRowColumn = import('@pdg/react-table').PTableTopHeadRowColumn;
declare type TableTopHeadRowColumnValue = import('@pdg/react-table').PTableTopHeadRowColumnValue;
