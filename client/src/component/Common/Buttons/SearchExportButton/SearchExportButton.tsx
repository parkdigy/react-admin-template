/********************************************************************************************************************
 * 엑셀 다운로드 버튼 컴포넌트 - Search 컴포넌트에서 사용
 * ******************************************************************************************************************/

import React from 'react';
import { SearchExportButtonProps } from './SearchExportButton.types';
import { MenuItem as BaseMenuItem, menuItemClasses, styled, Typography, Menu } from '@mui/material';

const SearchExportButton: React.FC<SearchExportButtonProps> = ({ style: initStyle, items, ...props }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const containerRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLLIElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => ({ ...initStyle, paddingLeft: 7, paddingRight: 8 }), [initStyle]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return items ? (
    <div ref={containerRef}>
      <SearchButton
        {...props}
        style={style}
        startIcon='download'
        aria-haspopup='true'
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}>
        {items.map((info, idx) => (
          <MenuItem
            key={idx}
            ref={idx === 0 ? firstMenuItemRef : undefined}
            onClick={() => {
              handleClose();
              info.onClick();
            }}
          >
            {info.icon && (
              <Icon className='opacity-50' color={info.color}>
                {info.icon}
              </Icon>
            )}
            <Typography color={info.color}>{info.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  ) : (
    <SearchButton {...props} style={style} startIcon='download' />
  );
};

export default SearchExportButton;

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
