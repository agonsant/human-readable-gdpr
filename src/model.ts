/**
 * Type definition to represent the different types
 */

export type UserData = {
  title: string;
  iconURL: string;
};

export type DataUsage = {
  title: string;
  description: string;
  iconURL: string;
};

export type DataManagement = {
  title: string;
  action: (ev: Event) => void;
};

export type ProtectionData = {
  title: string;
  description: string;
  iconURL: string;
};
