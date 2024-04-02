import Config from '@/config.ts';

export default class Monster {
  mon_id: number;
  mon_type: number;
  name: string;
  GraphicUrl: string;
  LV: number;
  HP: number;
  MP: number;
  ATK: number;
  MGC: number;
  DEF: number;
  MDF: number;
  DEX: number;
  SPD: number;
  HitRate: number;
  CritRate: number;
  nowHP: number;
  nowMP: number;
  GOLD: number;
  EXP: number;
  order: number | undefined;

  constructor(monsterData: any) {
    this.mon_id = monsterData.mon_id;
    this.mon_type = monsterData.mon_type;
    this.name = monsterData.name;
    this.GraphicUrl = monsterData.GraphicUrl;
    this.LV = monsterData.LV;
    this.HP = monsterData.HP,
    this.MP = monsterData.MP,
    this.ATK = monsterData.ATK,
    this.MGC = monsterData.MGC,
    this.DEF = monsterData.DEF,
    this.MDF = monsterData.MDF,
    this.DEX = monsterData.DEX,
    this.SPD = monsterData.SPD,
    this.HitRate = Config.monsterHitRate + Math.floor(this.DEX / 10),
    this.CritRate = Math.floor(this.DEX / 8)
    this.nowHP = monsterData.HP,
    this.nowMP = monsterData.MP,
    this.GOLD = monsterData.GOLD;
    this.EXP = monsterData.EXP;
    this.order = undefined;
  }

}