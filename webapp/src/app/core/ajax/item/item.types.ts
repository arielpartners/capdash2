export const ITEM_TYPES = {
  INFO: 'info',
  TOKEN: 'user_token',
  USER: 'user',
};

// TODO: is there a way to improve this?
export type ItemType = string;

export interface IItem {
  error: any;
  item: any;
  itemType: ItemType;
  loading: boolean;
}
