/********************************************************************************************************************
 * 어드민 메뉴 리스트 컴포넌트
 * ******************************************************************************************************************/

import { type AdminMenuListProps as Props } from './AdminMenuList.types';
import { type AdminMenuListData, type AdminMenuListDataItem } from '@const';
import { AdminMenuFormDialog } from '@dialog';
import { AdminMenuListItem } from './controls';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';

export const AdminMenuList = ({}: Props) => {
  const id = useId();

  const { setNodeRef } = useDroppable({ id });

  /********************************************************************************************************************
   * Dialog
   * ******************************************************************************************************************/

  const formDialog = useDialog(AdminMenuFormDialog);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [list, setList] = useState<AdminMenuListData>();
  const [adminList, setAdminList] = useState<AdminMenuListData>();
  const [otherList, setOtherList] = useState<AdminMenuListData>();
  const [dragging, setDragging] = useState(false);
  const [sortChanged, setSortChanged] = useState(false);

  /********************************************************************************************************************
   * State - listIdMap
   * ******************************************************************************************************************/

  const getListIdMap = useCallback((l: AdminMenuListData | undefined) => {
    const newListIdMap: Dict<AdminMenuListDataItem> = {};
    if (l) {
      const makeListIdMap = (items: AdminMenuListDataItem[]) => {
        items.map((info) => {
          newListIdMap[info.id] = info;
          makeListIdMap(info.items);
        });
      };
      makeListIdMap(l);
    }
    return newListIdMap;
  }, []);

  const [listIdMap, setListIdMap] = useState<Dict<AdminMenuListDataItem>>(getListIdMap(list));
  useFirstSkipChanged(() => setListIdMap(getListIdMap(list)), [list]);

  /********************************************************************************************************************
   * Changed
   * ******************************************************************************************************************/

  /** '어드민 관리' 메뉴와 기타 메뉴 분리하여 저장 */
  useChanged(() => {
    if (list) {
      setAdminList(list.filter((info) => info.id === 'admin'));
      setOtherList(list.filter((info) => info.id !== 'admin'));
    } else {
      setAdminList(undefined);
      setOtherList(undefined);
    }
  }, [list]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 메뉴 목록 불러오기 */
  const loadMenuList = useCallback(() => {
    Const.Admin.Menu.list().then(({ data }) => {
      setList(data);
      setSortChanged(false);
    });
  }, []);

  /** 서브 메뉴 추가 */
  const addSubMenu = useCallback(
    (parentMenu?: AdminMenuListDataItem) => {
      formDialog({
        parentMenu,
        onSuccess() {
          loadMenuList();
        },
      });
    },
    [formDialog, loadMenuList]
  );

  /** 메뉴 수정 */
  const editMenu = useCallback(
    (menu: AdminMenuListDataItem) => {
      formDialog({
        id: menu.id,
        onSuccess() {
          loadMenuList();
        },
      });
    },
    [formDialog, loadMenuList]
  );

  /** 메뉴 삭제 */
  const removeMenu = useCallback(
    (menu: AdminMenuListDataItem) => {
      Const.Admin.Menu.remove(`'${menu.name}' 메뉴를 삭제하시겠습니까?`, menu.id).then(() => {
        loadMenuList();
      });
    },
    [loadMenuList]
  );

  /** 메뉴 순서 저장 */
  const saveSeq = useCallback(() => {
    if (list) {
      const data: { id: string; seq: number }[] = [];

      const makeData = (items: AdminMenuListDataItem[]) => {
        let seq = 0;
        for (const item of items) {
          seq += 10;
          data.push({ id: item.id, seq });

          makeData(item.items);
        }
      };
      makeData(list);

      Const.Admin.Menu.editSeq(JSON.stringify(data)).then(() => {
        loadMenuList();
      });
    }
  }, [list, loadMenuList]);

  /********************************************************************************************************************
   * 최초 메뉴 목록 로드
   * ******************************************************************************************************************/

  useEventEffect(() => {
    loadMenuList();
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 드래그 종료 - list 의 실제 위치를 변경 - DndContext.onDragEnd */
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const activeMenu = listIdMap[active.id];
        const overMenu = listIdMap[over.id];

        if (activeMenu && overMenu && activeMenu.parent_id === overMenu.parent_id && list && listIdMap) {
          if (activeMenu.parent_id === null) {
            const oldIndex = list.indexOf(activeMenu);
            const newIndex = list.indexOf(overMenu);

            setSortChanged(true);
            setList(arrayMove(list, oldIndex, newIndex));
          } else {
            const parentMenu = listIdMap[activeMenu.parent_id];
            if (parentMenu) {
              const oldIndex = parentMenu.items.indexOf(activeMenu);
              const newIndex = parentMenu.items.indexOf(overMenu);

              setListIdMap((prev) => {
                const newMap = { ...prev };
                listIdMap[parentMenu.id].items = arrayMove(parentMenu.items, oldIndex, newIndex);
                return newMap;
              });

              setSortChanged(true);
              setList(copy(list));
            }
          }
        }
      }

      setDragging(false);
    },
    [list, listIdMap]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return adminList && otherList ? (
    <AdminMenuContainer>
      <AdminMenuButtonsContainer style={{ marginBottom: 10 }}>
        {sortChanged ? (
          <>
            <Button variant='outlined' color='secondary' startIcon='Replay' onClick={() => loadMenuList()}>
              순서 초기화
            </Button>
            <Button variant='contained' color='secondary' startIcon='SaveAlt' onClick={saveSeq}>
              순서 저장
            </Button>
          </>
        ) : (
          <Button variant='contained' startIcon='Add' onClick={() => addSubMenu()}>
            새 메인 메뉴
          </Button>
        )}
      </AdminMenuButtonsContainer>

      <DndContext onDragStart={() => setDragging(true)} onDragEnd={handleDragEnd}>
        <AdminMenuListContainer ref={setNodeRef}>
          {/* 어드민 관리 메뉴를 우선 표시 */}
          {adminList.map((info) => (
            <AdminMenuListItem
              key={info.id}
              menu={info}
              dragging={dragging}
              sortChanged={sortChanged}
              onEdit={editMenu}
              onRemove={removeMenu}
              onAddSubMenu={addSubMenu}
            />
          ))}
          <SortableContext items={otherList}>
            {/* 어드민 관리 메뉴를 제외한 나머지 메뉴 표시 */}
            {otherList.map((info) => (
              <AdminMenuListItem
                key={info.id}
                menu={info}
                dragging={dragging}
                sortChanged={sortChanged}
                onEdit={editMenu}
                onRemove={removeMenu}
                onAddSubMenu={addSubMenu}
              />
            ))}
          </SortableContext>
        </AdminMenuListContainer>
      </DndContext>
    </AdminMenuContainer>
  ) : null;
};

export default AdminMenuList;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const AdminMenuContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const AdminMenuButtonsContainer = styled('div')`
  display: flex;
  margin-left: -5px;
  margin-right: -5px;

  > .MuiButtonBase-root {
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const AdminMenuListContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
