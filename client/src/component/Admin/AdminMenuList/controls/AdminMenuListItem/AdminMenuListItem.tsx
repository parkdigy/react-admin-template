/********************************************************************************************************************
 * 어드민 메뉴 리스트 아이템 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { AdminMenuListItemProps as Props } from './AdminMenuListItem.types';
import { SortableContext } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Admin } from '@const';
import { PButton, PIcon } from '@pdg/react-component';
import { useFirstSkipEffect } from '@pdg/react-hook';
import { styled } from '@mui/material';

export const AdminMenuListItem: React.FC<Props> = ({
  menu: initMenu,
  dragging,
  sortChanged,
  onEdit,
  onRemove,
  onAddSubMenu,
}) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: initMenu.id,
  });

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [, setUpdateKey] = useState(0);
  const [menu, setMenu] = useState(initMenu);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    setMenu(initMenu);
  }, [initMenu]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => ({ transform: CSS.Translate.toString(transform), transition }), [transform, transition]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const forceUpdate = useCallback(() => {
    setUpdateKey((old) => old + 1);
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** SUPER 버튼 클릭 - Super Admin 그룹 관리자만 접근 가능 여부 설정 */
  const handleSuperClick = useCallback(() => {
    const oldValue = menu.is_super_admin_menu;
    const newValue = !oldValue;

    menu.is_super_admin_menu = newValue;
    forceUpdate();

    Admin.Menu.editSuper(menu.id, newValue)
      .then(() => {
        setMenu((old) => ({
          ...old,
          is_super_admin_menu: newValue,
          is_all_user_menu: newValue ? false : old.is_all_user_menu,
        }));
      })
      .catch(() => {
        menu.is_super_admin_menu = oldValue;
        forceUpdate();
      });
  }, [forceUpdate, menu]);

  /** ALL 버튼 클릭 - 모든 관리자 접근 가능 여부 설정 */
  const handleAllClick = useCallback(() => {
    const oldValue = menu.is_all_user_menu;
    const newValue = !oldValue;

    menu.is_all_user_menu = newValue;
    forceUpdate();

    Admin.Menu.editAll(menu.id, newValue)
      .then(() => {
        setMenu((old) => ({
          ...old,
          is_all_user_menu: newValue,
          is_super_admin_menu: newValue ? false : old.is_super_admin_menu,
        }));
      })
      .catch(() => {
        menu.is_all_user_menu = oldValue;
        forceUpdate();
      });
  }, [forceUpdate, menu]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <AdminMenuListItemContainer
      key={menu.id}
      ref={menu.id !== 'admin' && dragging ? setNodeRef : undefined}
      style={style}
      {...attributes}
    >
      <AdminMenuListItemMenuContainer>
        <AdminMenuListItemMenuTitle>
          {menu.id !== 'admin' && (
            <PIcon
              ref={menu.id !== 'admin' ? setNodeRef : undefined}
              color='primary'
              {...listeners}
              style={{ cursor: 'pointer' }}
            >
              Reorder
            </PIcon>
          )}
          {menu.icon && (
            <PIcon size='small' style={{ color: '#999999' }}>
              {menu.icon}
            </PIcon>
          )}
          <span>{menu.name}</span>
          <span className='opacity-50 font-weight-400'>({menu.id})</span>
        </AdminMenuListItemMenuTitle>
        <AdminMenuListItemMenuButtonContainer>
          {menu.items.length === 0 && (
            <>
              <AdminMenuListItemMenuButton
                color='success'
                size='small'
                variant={menu.is_super_admin_menu ? 'contained' : 'outlined'}
                startIcon={menu.is_super_admin_menu ? 'Check' : 'Close'}
                onClick={handleSuperClick}
              >
                SUPER
              </AdminMenuListItemMenuButton>
              <AdminMenuListItemMenuButton
                color='success'
                size='small'
                variant={menu.is_all_user_menu ? 'contained' : 'outlined'}
                startIcon={menu.is_all_user_menu ? 'Check' : 'Close'}
                onClick={handleAllClick}
              >
                ALL
              </AdminMenuListItemMenuButton>
            </>
          )}
          {menu.editable && (
            <AdminMenuListItemMenuButton
              disabled={sortChanged}
              size='small'
              variant='contained'
              color='info'
              startIcon='Edit'
              onClick={() => onEdit(menu)}
            >
              수정
            </AdminMenuListItemMenuButton>
          )}
          {menu.depth === 1 && (
            <AdminMenuListItemMenuButton
              variant='contained'
              size='small'
              disabled={sortChanged}
              startIcon='Add'
              onClick={() => onAddSubMenu(menu)}
            >
              새 하위 메뉴
            </AdminMenuListItemMenuButton>
          )}
          <AdminMenuListItemMenuButton
            variant='contained'
            size='small'
            color='error'
            disabled={sortChanged || !menu.editable || menu.items.length > 0}
            startIcon='Delete'
            onClick={() => onRemove(menu)}
          >
            삭제
          </AdminMenuListItemMenuButton>
        </AdminMenuListItemMenuButtonContainer>
      </AdminMenuListItemMenuContainer>
      {menu.items.length > 0 && (
        <AdminMenuListItemSubMenuContainer style={{ marginLeft: menu.depth * 30 }}>
          <SortableContext items={menu.items}>
            {menu.items.map((subMenu) => (
              <AdminMenuListItem
                key={subMenu.id}
                menu={subMenu}
                dragging={dragging}
                sortChanged={sortChanged}
                onEdit={onEdit}
                onRemove={onRemove}
                onAddSubMenu={onAddSubMenu}
              />
            ))}
          </SortableContext>
        </AdminMenuListItemSubMenuContainer>
      )}
    </AdminMenuListItemContainer>
  );
};

export default AdminMenuListItem;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const AdminMenuListItemContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AdminMenuListItemMenuContainer = styled('div')`
  flex: 1;
  display: flex;
  padding: 5px;
  border: 1px solid #efefef;
  background-color: #fafafa;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
`;

const AdminMenuListItemMenuTitle = styled('div')`
  margin-left: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;

  > * {
    margin-right: 5px;
  }
`;

const AdminMenuListItemMenuButtonContainer = styled('div')``;

const AdminMenuListItemMenuButton = styled(PButton)`
  margin-left: 10px;
  font-weight: 600;

  &:first-of-type {
    margin-left: 0;
  }

  &.MuiButton-contained {
    border: 1px solid transparent;
  }

  .PButton-StartIcon {
    margin-right: 3px;
    .material-icons {
      font-size: 15px;
    }
  }
`;

const AdminMenuListItemSubMenuContainer = styled('div')``;
