import { api } from '@/api/api';

export type DataStore = {
  api: typeof api.user;
  user: {};
};
