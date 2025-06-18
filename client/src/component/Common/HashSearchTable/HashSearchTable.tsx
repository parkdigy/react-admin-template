/********************************************************************************************************************
 * SearchTable 컴포넌트에 Hash 기능 추가한 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { useNavigate } from 'react-router';
import { PSearchTable, PSearchTableCommands, PTableItem } from '@pdg/react-table';
import { HashSearchTableProps as Props } from './HashSearchTable.types';
import './HashSearchTable.scss';

interface WithForwardRefType<T = PTableItem> extends React.FC<Props<T>> {
  <T = PTableItem>(props: Props<T> & React.RefAttributes<PSearchTableCommands<T>>): ReturnType<React.FC<Props<T>>>;
}

const HashSearchTableBase: WithForwardRefType = React.forwardRef<
  PSearchTableCommands,
  Omit<Props, 'onRequestHashChange'>
>(({ size, stickyHeader: initStickyHeader, className, ...props }, ref) => {
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
    <PSearchTable
      ref={ref}
      stickyHeader={stickyHeader}
      className={classnames(className, 'HashSearchTable', sizeClassName)}
      {...props}
      onRequestHashChange={handleSearchTableRequestHashChange}
    />
  );
});

const HashSearchTable = Object.assign(HashSearchTableBase, {
  defaults: {
    size: 'small',
    stickyHeader: true,
  },
} as { defaults: { size: 'small' | 'medium'; stickyHeader: boolean } });

export type THashSearchTable = typeof HashSearchTable;

export default HashSearchTable;
