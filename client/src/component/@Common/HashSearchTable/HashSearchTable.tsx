/********************************************************************************************************************
 * SearchTable 컴포넌트에 Hash 기능 추가한 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { HashSearchTableProps as Props } from './HashSearchTable.types';
import './HashSearchTable.scss';

function HashSearchTableBase<T extends TableItem = TableItem>({
  size,
  stickyHeader: initStickyHeader,
  className,
  ...props
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const navigate = useNavigate();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sizeClassName = useMemo(() => {
    switch (size || HashSearchTable.defaults.size) {
      case 'small':
        return 'size-small';
    }
  }, [size]);

  const stickyHeader = useMemo(
    () => ifUndefined(initStickyHeader, HashSearchTable.defaults.stickyHeader),
    [initStickyHeader]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSearchTableRequestHashChange = useCallback(
    (hash: string) => {
      navigate(`#${hash}`);
    },
    [navigate]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <SearchTable
      stickyHeader={stickyHeader}
      className={classnames(className, 'HashSearchTable', sizeClassName)}
      {...props}
      onRequestHashChange={handleSearchTableRequestHashChange}
    />
  );
}

const HashSearchTable = Object.assign(HashSearchTableBase, {
  defaults: {
    size: 'small',
    stickyHeader: true,
  },
} as { defaults: { size: 'small' | 'medium'; stickyHeader: boolean } });

export default HashSearchTable;
