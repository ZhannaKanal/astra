import { api } from "@/api/api";
import { type CategoryItem } from "@/api/controllers/types";

export type DataStore = {
  api: typeof api.user;
  user: {};
  categoryList: CategoryItem[];
};
