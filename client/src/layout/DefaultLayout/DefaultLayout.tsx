/********************************************************************************************************************
 * 기본 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import * as AdminLayout from '@pdg/react-admin-layout';
import MainRouter from '../../router';
import { type AdminUserMenuInfo } from '@const';

const DefaultLayout = () => {
  const { removeHtmlLoading } = useAppState();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [menu, setMenu] = useState<AdminLayout.MenuItem[]>();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 메뉴 목록 불러오기 */
  const loadMenuList = useCallback(() => {
    Const.Admin.User.menuList().then(({ data: items }) => {
      const makeMenuRoles = (menuRoles: MenuRoles, info: AdminUserMenuInfo) => {
        if (info.uri) {
          menuRoles[info.id] = { read: info.read, write: info.write, export: info.export };
        }
        if (notEmpty(info.items)) {
          info.items.map((subInfo) => {
            makeMenuRoles(menuRoles, subInfo);
          });
        }
      };

      g.menu.setRoles(
        items.reduce((res, info) => {
          makeMenuRoles(res, info);
          return res;
        }, {} as MenuRoles)
      );

      setMenu([
        {
          id: 'dashboard',
          name: 'Dashboard',
          depth: 1,
          uri: '/',
          icon: 'Dashboard',
        },
        ...items.map<AdminLayout.MenuItem>((info) => {
          const menuItem: AdminLayout.MenuItem = {
            id: info.id,
            name: info.name,
            depth: info.depth,
            uri: info.uri,
            icon: info.icon,
          };
          if (info.items) {
            menuItem.items = [];
            info.items.forEach((subInfo) => {
              menuItem.items?.push({
                id: subInfo.id,
                name: subInfo.name,
                depth: subInfo.depth,
                uri: subInfo.uri || '',
              });
            });
          }
          return menuItem;
        }),
      ]);

      removeHtmlLoading();
    });
  }, [removeHtmlLoading]);

  /** 로그아웃 */
  const signOut = useCallback(() => {
    Const.Auth.signOut().then(() => {
      window.location.href = '/auth/signin';
    });
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    loadMenuList();
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const logo = useMemo(
    () => (
      <div>
        <span style={{ color: env.isStaging ? 'magenta' : env.isProduction ? undefined : 'red' }}>{env.title}</span>
      </div>
    ),
    []
  );

  return menu ? (
    <>
      <AdminLayout.DefaultLayout
        logo={logo}
        menu={menu}
        appBarControl={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant='text' onClick={signOut}>
              로그아웃
            </Button>
          </Box>
        }
      >
        <MainRouter />
      </AdminLayout.DefaultLayout>
      {env.isLocal && (
        <div style={{ position: 'fixed', zIndex: 1201, left: 0, bottom: 0, display: 'flex' }}>
          <div style={{ height: 3, backgroundColor: '#9C27B0', width: 600 }}></div>
          <div style={{ height: 3, backgroundColor: '#1E88E5', width: 300 }}></div>
          <div style={{ height: 3, backgroundColor: '#FF5722', width: 300 }}></div>
          <div style={{ height: 3, backgroundColor: '#43A047', width: 336 }}></div>
        </div>
      )}
    </>
  ) : null;
};

export default DefaultLayout;
