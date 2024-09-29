export type LoginData = {
  password: string;
  phoneNumber: string;
};

export type RegisterData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
};

export type ProfileData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type Bonusdata = {
  bonuses: number;
};

export type Categoriesdata = {
  pageSize: number;
  orderBy: string[];
};

export type CategoryResponse = {
  data: CategoryItem[];
};

export type CategoryItem = {
  id: string;
  name: string;
  localizedName: string;
  imagePath: string;
  bannerImagePath: string;
};
