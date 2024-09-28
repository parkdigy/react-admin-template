import React from 'react';
import { Checkbox, TableCell } from '@mui/material';
import { useAutoUpdateLayoutState } from '@pdg/react-hook';

const AdminGroupFormRoleTableCells: React.FC<{
  item: {
    new_read?: boolean;
    new_write?: boolean;
    new_export?: boolean;
  };
  noRead?: boolean;
  noWrite?: boolean;
  noExport?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}> = ({ item, noRead, noWrite, noExport, disabled, onChange }) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [r, setR] = useAutoUpdateLayoutState(!!item?.new_read);
  const [w, setW] = useAutoUpdateLayoutState(!!item?.new_write);
  const [e, setE] = useAutoUpdateLayoutState(!!item?.new_export);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const fireChange = useCallback(() => {
    onChange && onChange();
  }, [onChange]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <TableCell align='center'>
        {!noRead && (
          <Checkbox
            disabled={disabled}
            checked={r}
            onChange={(e) => {
              item.new_read = e.target.checked;
              setR(item.new_read);

              if (!item.new_read) {
                if (item.new_write) {
                  item.new_write = false;
                  setW(false);
                }

                if (item.new_export) {
                  item.new_export = false;
                  setE(false);
                }
              }

              fireChange();
            }}
          />
        )}
      </TableCell>
      <TableCell align='center'>
        {!noWrite && (
          <Checkbox
            disabled={disabled}
            checked={w}
            onChange={(e) => {
              item.new_write = e.target.checked;
              setW(item.new_write);

              if (item.new_write) {
                item.new_read = true;
                setR(true);
              }

              fireChange();
            }}
          />
        )}
      </TableCell>
      <TableCell align='center'>
        {!noExport && (
          <Checkbox
            disabled={disabled}
            checked={e}
            onChange={(e) => {
              item.new_export = e.target.checked;
              setE(item.new_export);

              if (item.new_export) {
                item.new_read = true;
                setR(true);
              }

              fireChange();
            }}
          />
        )}
      </TableCell>
    </>
  );
};

export default React.memo(AdminGroupFormRoleTableCells);
