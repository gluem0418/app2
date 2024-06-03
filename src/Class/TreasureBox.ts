import TreasureBox_json from '@/assets/json/TreasureBox.json';

import Item from './Item.ts';
import { items } from './Item.ts';
import Equipment from './Equipment.ts';
import { equipmentList } from './Equipment.ts';

export default class TreasureBox {
  rank: number;
  count: number;
  treasures: (Item | Equipment)[];

  constructor(data: TreasureBox) {
    this.rank = data.rank;
    this.count = data.count;
    this.treasures = data.treasures.map((treasure: any) => {
      if (treasure.kind === 1) {
        // アイテムの場合
        // return items.find(item => item.item_id === treasure.id);
        const returnItem = items.find(item => item.item_id === treasure.id);
        if (!returnItem) {
          throw new Error(`item_id ${treasure.id} does not exist in items.`);
        } else {
          return returnItem
        }
      } else {
        // 装備の場合
        // return equipmentList.find(equipment => equipment.eqp_id === treasure.id);
        const returnItem = equipmentList.find(equipment => equipment.eqp_id === treasure.id);
        if (!returnItem) {
          throw new Error(`eqp_id ${treasure.id} does not exist in equipmentList.`);
        } else {
          return returnItem
        }
      }
    });
  }
  //指定したランクのtreasureを取得
  // static getRandomTreasures(rank: number, count: number): (Item | Equipment | undefined)[] {
  static getRandomTreasures(rank: number): (Item | Equipment)[] {
    // 指定したランクのTreasureBoxを取得
    const selectedTreasureBox = treasureBoxs.find(treasureBox => treasureBox.rank === rank);

    if (!selectedTreasureBox) {
      throw new Error(`Rank ${rank} does not exist in treasureBoxs.`);
    }

    // treasuresからランダムにcountの数だけ取得
    const randomTreasures: (Item | Equipment)[] = [];
    const treasuresCopy = [...selectedTreasureBox.treasures]; // treasuresのコピーを作成

    for (let i = 0; i < selectedTreasureBox.count; i++) {
      if (treasuresCopy.length === 0) {
        throw new Error(`The count ${selectedTreasureBox.count} exceeds the number of treasures in the rank ${rank}.`);
      }

      const randomIndex = Math.floor(Math.random() * treasuresCopy.length);
      randomTreasures.push(treasuresCopy[randomIndex]);
      treasuresCopy.splice(randomIndex, 1); // 選択したtreasureを削除
    }

    return randomTreasures;
  }

}

export const treasureBoxs = TreasureBox_json.map((data: any) => new TreasureBox(data))