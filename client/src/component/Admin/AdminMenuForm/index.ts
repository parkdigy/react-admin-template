import l from '@loadable/component';
import { loadable } from '@common';

const AdminMenuForm = l(() => import('./AdminMenuForm'), loadable.options);

export { AdminMenuForm };

export * from './AdminMenuForm.types';
