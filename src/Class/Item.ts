import Item_json from '@/assets/json/Item.json';

import { SkillEffect } from '@/class/ActiveSkill'

export default class Item {
  item_id: number;
  name: string;
  use: number;
  info: string;
  consume: number;
  attribute: number;
  purchase_amount: number;
  selling_price: string;
  effect_number: number;
  skill_effect: SkillEffect[];

  constructor(data: Item) {
    this.item_id = data.item_id;
    this.name = data.name;
    this.use = data.use;
    this.info = data.info;
    this.consume = data.consume;
    this.attribute = data.attribute;
    this.purchase_amount = data.purchase_amount;
    this.selling_price = data.selling_price;
    this.effect_number = data.effect_number;
    this.skill_effect = data.skill_effect;
  }
}

export const items = Item_json.map((data: any) => new Item(data))