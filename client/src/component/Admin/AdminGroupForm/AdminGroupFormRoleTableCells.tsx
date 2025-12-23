import React from 'react';
import { Checkbox, TableCell } from '@mui/material';

interface Info {
  new_read?: boolean;
  new_write?: boolean;
  new_export?: boolean;
}

interface Props {
  info: Info;
  noRead?: boolean;
  noWrite?: boolean;
  noExport?: boolean;
  disabled?: boolean;
  onChange?: (newInfo: Info) => void;
}

const AdminGroupFormRoleTableCells = ({ info, noRead, noWrite, noExport, disabled, onChange }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [r, setR] = useState(!!info?.new_read);
  useChanged(!!info?.new_read) && setR(!!info?.new_read);

  const [w, setW] = useState(!!info?.new_write);
  useChanged(!!info?.new_write) && setW(!!info?.new_write);

  const [e, setE] = useState(!!info?.new_export);
  useChanged(!!info?.new_export) && setE(!!info?.new_export);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const fireChange = useCallback(
    (newInfo: Info) => {
      onChange?.(newInfo);
    },
    [onChange]
  );

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
              const newRead = e.target.checked;
              let newWrite = info.new_write;
              let newExport = info.new_export;

              setR(newRead);

              if (!newRead) {
                if (info.new_write) {
                  newWrite = false;
                  setW(newWrite);
                }

                if (info.new_export) {
                  newExport = false;
                  setE(newExport);
                }
              }

              fireChange({ ...info, new_read: newRead, new_write: newWrite, new_export: newExport });
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
              const newWrite = e.target.checked;
              let newRead = info.new_read;

              setW(newWrite);

              if (newWrite) {
                if (!info.new_read) {
                  newRead = true;
                  setR(newRead);
                }
              }

              fireChange({ ...info, new_read: newRead, new_write: newWrite });
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
              const newExport = e.target.checked;
              let newRead = info.new_read;

              setE(newExport);

              if (newExport) {
                if (!info.new_read) {
                  newRead = true;
                  setR(newRead);
                }
              }

              fireChange({ ...info, new_read: newRead, new_export: newExport });
            }}
          />
        )}
      </TableCell>
    </>
  );
};

export default AdminGroupFormRoleTableCells;
