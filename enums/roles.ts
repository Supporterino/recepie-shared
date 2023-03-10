export enum Role {
  USER = 0,
  MODERATOR = 1,
  ADMIN = 2,
  SUPERADMIN = 3
}

export const getRoleKeyName = (value: Role) => {
  return Role[value];
};

export type RoleType = keyof typeof Role;
