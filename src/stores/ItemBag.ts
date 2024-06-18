import { defineStore } from 'pinia';
import Itembag_json from '@/assets/json/ItemBag.json';
import Item from '@/class/Item';
import { items } from '@/class/Item';

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
  }),
  actions: {
    //item追加（存在する場合は個数追加）
    getItem(item: Item) {
      const existingItem = this.itemBag.find((i) => i.item_id === item.item_id);
      if (existingItem) {
        existingItem.number += 1;
      } else {
        this.itemBag.push({
          item_id: item.item_id,
          use: item.use,
          number: 1, // 新しいアイテムの初期数量は1とします
          item: item
        });
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
