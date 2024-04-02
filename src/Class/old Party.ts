import Character from './Character.ts';
import Equipment from './Equipment.ts';

import character_json from '@/assets/json/Character.json';

export default class Party {
  characters: Character[];
  gold: number;
  location: string;
  home: string;
  map: any;  // マップデータの型に応じて変更してください

  constructor(data: any, equipmentList: Equipment[]) {
  // constructor(data: any, equipmentList: Equipment[] | any) {
      // Equipmentクラスのインスタンスを作成
    // let equipmentList = equipment_json.map((equipmentData: any) => new Equipment(equipmentData));
    // Characterクラスのインスタンスより各Characterの情報を作成
    this.characters = character_json.map((characterData: any) => new Character(characterData, equipmentList));
    this.gold = data.gold;
    this.location = data.location;
    this.home = data.home;
    this.map = data.map;
  }
}