import l from '@loadable/component';

const RootLayout = l(() => import(/* webpackChunkName: "root-layout" */ './RootLayout'));

export { RootLayout };

export default RootLayout;
