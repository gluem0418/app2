import { defineStore } from 'pinia';
import Itembag_json from '@/assets/json/ItemBag.json';
import Item from '@/Class/Item';
import { items } from '@/Class/Item';

export interface ItemBag {
  item_id: number;
  use: number;
  number: number;
  item: Item;
}

export const useItemBagStore = defineStore('itemBag', {
  state: () => ({
    itemBag: Itembag_json.map((bagItem: any) => ({
      ...bagItem,
      item: items.find((item) => item.item_id === bagItem.item_id), // item_idに基づいてItemクラスのインスタンスを追加
    })) as ItemBag[],
    // itemBag: Itembag_json as ItemBag[],
  }),
  actions: {
    //item追加（存在する場合は個数追加）
    addItem(item: ItemBag) {
      const existingItem = this.itemBag.find((i) => i.item_id === item.item_id);
      if (existingItem) {
        existingItem.number += item.number;
      } else {
        this.itemBag.push(item);
      }
    },
    //item減少（0の場合、削除）
    useItem(itemId: number) {
      const existingItem = this.itemBag.find((i) => i.item_id === itemId);
      if (existingItem && existingItem.number > 0) {
        existingItem.number -= 1;
        if (existingItem.number === 0) {
          this.removeItem(itemId);
        }
      }
    },
    //item削除
    removeItem(itemId: number) {
      const itemIndex = this.itemBag.findIndex((i) => i.item_id === itemId);
      if (itemIndex !== -1) {
        this.itemBag.splice(itemIndex, 1);
      }
    }

  }
});
