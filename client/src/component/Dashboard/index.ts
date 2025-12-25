import l from '@loadable/component';

const Dashboard = l(() => import('./Dashboard'), loadable.options) as unknown as typeof import('./Dashboard').default;

export { Dashboard };

export default Dashboard;
