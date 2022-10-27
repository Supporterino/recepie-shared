export enum Role {
  USER,
  MODERATOR,
  ADMIN,
  SUPERADMIN,
}

export const getRoleKeyName = (value: Role) => {
  return Role[value];
};
