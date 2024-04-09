/********************************************************************************************************************
 * 기본 레이아웃 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import * as AdminLayout from '@pdg/react-admin-layout';
import MainRouter from '../../router';
import { Admin, AdminUserMenuInfo, Auth } from '@const';
import { useAppState } from '@context';
import app, { MenuRoles } from '@app';
import { config } from '@common';

const DefaultLayout = () => {
  const { removeHtmlLoading } = useAppState();
  const location = useLocation();
  const navigate = useNavigate();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [menu, setMenu] = useState<AdminLayout.MenuItem[]>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadMenuList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({ top: app.getNavigateScrollTopPos() });
    app.setNavigateScrollTopPos(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 메뉴 목록 불러오기 */
  const loadMenuList = () => {
    Admin.User.menuList().then(({ data: items }) => {
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

      app.setMenuRoles(
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
  };

  /** 로그아웃 */
  const signOut = useCallback(() => {
    Auth.signOut().then(() => {
      window.location.href = '/auth/signin';
    });
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 메뉴 클릭 - AdminLayout.onMenuClick */
  const handleMenuClick = (menuItem: AdminLayout.MenuItem) => {
    if (menuItem.uri) {
      navigate(menuItem.uri);
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const logo = useMemo(
    () => (
      <span style={{ color: config.env === 'staging' ? 'magenta' : config.env === 'production' ? undefined : 'red' }}>
        {config.title}
      </span>
    ),
    []
  );

  return menu ? (
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
      onMenuClick={handleMenuClick}
    >
      <MainRouter />
    </AdminLayout.DefaultLayout>
  ) : null;
};

export default DefaultLayout;
