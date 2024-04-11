/********************************************************************************************************************
 * 엑셀 다운로드 버튼 컴포넌트 - Search 컴포넌트에서 사용
 * ******************************************************************************************************************/

import React from 'react';
import { SearchButton } from '@pdg/react-form';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { SearchExportButtonProps } from './SearchExportButton.types';
import { ClickAwayListener, MenuItem as BaseMenuItem, menuItemClasses, styled, Typography } from '@mui/material';
import { PdgIcon } from '@pdg/react-component';

const SearchExportButton: React.FC<SearchExportButtonProps> = ({ style: initStyle, items, ...props }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const firstMenuItemRef = useRef<HTMLLIElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [open, setOpen] = useState(false);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => ({ ...initStyle, paddingLeft: 7, paddingRight: 8 }), [initStyle]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return items ? (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <SearchButton {...props} style={style} startIcon='download' onClick={() => setOpen((old) => !old)} />
        <Dropdown open={open}>
          <Menu slots={{ listbox: Listbox }}>
            {items.map((info, idx) => (
              <MenuItem
                key={idx}
                ref={idx === 0 ? firstMenuItemRef : undefined}
                onClick={() => {
                  setOpen(false);
                  info.onClick();
                }}
              >
                {info.icon && (
                  <PdgIcon className='opacity-50' color={info.color}>
                    {info.icon}
                  </PdgIcon>
                )}
                <Typography color={info.color}>{info.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </div>
    </ClickAwayListener>
  ) : (
    <SearchButton {...props} style={style} startIcon='download' />
  );
};

export default SearchExportButton;

const Listbox = styled('ul')`
  position: absolute;
  right: 0;
  padding: 6px;
  margin: 5px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0;
  background: #fff;
  border: 1px solid #dae2ed;
  box-shadow: 0 4px 10px #dae2ed;
  z-index: 1;
`;

const MenuItem = styled(BaseMenuItem)`
  list-style: none;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  .material-icons {
    opacity: 1;
    font-size: 18px;
    margin-right: 3px;
  }
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid #99ccf3;
    background-color: #e5eaf2;
    color: #1c2025;
  }

  &.${menuItemClasses.disabled} {
    color: #b0b8c4;
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: #f0f7ff;
    color: #1c2025;
  }
`;
