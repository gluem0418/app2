import { defineStore } from 'pinia';
import { cloneDeep } from 'lodash';

import Monster from '@/class/Monster';
import monster_json from '@/assets/json/Monster.json';

import { randomNum, random } from '@/process/Common';
import Config from '@/config.ts';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';

export const useSetMonsterStore = defineStore('setMonster', {
  state: () => ({
    monsterList: monster_json.map((monsterData: any) => new Monster(monsterData)),
    selectedMonsters: [] as Monster[],
    isBoss: false,
    music: ''
  }),
  actions: {
    //通常モンスターの設定
    setMonster(rank: number) {
      // 出現モンスターを作成
      this.isBoss = false
      this.selectedMonsters = []
      const numMonsters = randomNum(Config.monNumMin, Config.monNumMax)

      // ランクに一致するモンスターのリストを作成
      const monstersOfRank = this.monsterList.filter(monster => monster.Rank === rank);

      for (let i = 0; i < numMonsters; i++) {
        // ランクに一致するモンスターからランダムに選択
        const newMonster: Monster = cloneDeep(monstersOfRank[random(monstersOfRank.length)]);
        this.selectedMonsters.push(newMonster);
      }
      console.log("setMonster_selectedMonsters", this.selectedMonsters)
    },
    //ボス戦の設定
    setBoss(id: number) {
      this.isBoss = true
      this.selectedMonsters = []
      const monster = this.monsterList.find(monster => monster.mon_id === id);

      if (monster) {
        // モンスターが見つかった場合、selectedMonstersに追加
        const newMonster: Monster = cloneDeep(monster);
        this.selectedMonsters.push(newMonster);
        this.setMusic(monster)
      } else {
        // モンスターが見つからなかった場合、エラーメッセージを表示
        console.error(`No monster found with id ${id}`);
      }
    },
    //ボス戦の音楽を設定
    setMusic(monster: Monster) {
      //中ボスの場合、ダンジョン毎の音楽を設定
      const statusStore = useStatusStore()
      if (monster.mon_type == 3) {
        switch (statusStore.whichDungeon) {
          case Config.nameDungeon1:
          case Config.nameDungeon2:
          case Config.nameDungeon3:
            this.music = Config.mscMidBoss1
            break
          case Config.nameDungeon4:
          case Config.nameDungeon5:
            this.music = Config.mscMidBoss2
            break
          case Config.nameDungeon6:
          case Config.nameDungeon7:
            this.music = Config.mscMidBoss3
            break
        }
      } else {
        this.music = Config.mscBoss1
      }
    }
  }
});