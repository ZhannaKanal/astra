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
