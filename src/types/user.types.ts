type CompanyType = {
  address: object;
  department: string;
  name: string;
  title: string;
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: CompanyType;
};

export type UserResponse = {
  limit: number;
  skip: number;
  total: number;
  users: UserType[];
};
