import { defineStore } from 'pinia';

import Character from '@/Class/Character.ts';
import { characterList } from '@/Class/Character.ts';

import { MapData } from '@/Process/CreateDungeon.ts';

let partyData = {
  characters: [1, 2, 3, 6],
  gold: 100000,
  location: [570, 180],
  home: [500, 200],
};

export const usePartyStore = defineStore('party', {
  state: () => ({
    characters: [] as Character[],
    gold: partyData.gold as number,
    location: partyData.location as number[],
    home: partyData.location as number[],
    map: [] as number[][],
  }),
  actions: {
    setParty() {
      this.characters =  characterList.filter(character =>  partyData.characters.includes(character.cha_id));
      // this.characters =  character_json.map((characterData: any, index: number) => new Character(characterData, index));
      this.map = MapData;
    },
  },
});