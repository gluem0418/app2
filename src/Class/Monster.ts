import config from '@/config/commonConfig.ts';

import ActiveSkill from './ActiveSkill.ts';
import { activeSkills } from '@/class/ActiveSkill.ts';

export default class Monster {
  mon_id: number;
  mon_type: number;
  Rank: number;
  name: string;
  GraphicUrl: string;
  LV: number;
  baseStatus: { [key: string]: number };
  totalStatus: { [key: string]: number };
  buffs: { name: string, status: string, value: number, duration: number }[] = [];
  conditions: { name: string, status: string, value: number, duration: number }[] = [];
  nowHP: number;
  nowMP: number;
  GOLD: number;
  EXP: number;
  activeSkill: ActiveSkill[];
  order: number | undefined;

  constructor(data: any) {
    this.mon_id = data.mon_id
    this.mon_type = data.mon_type
    this.Rank =  data.Rank;
    this.name = data.name;
    this.GraphicUrl = data.GraphicUrl;
    this.LV = data.LV
    this.baseStatus = {
      HP: data.HP,
      MP: data.MP,
      ATK: data.ATK,
      MGC: data.MGC,
      DEF: data.DEF,
      MDF: data.MDF,
      DEX: data.DEX,
      SPD: data.SPD,
      HitRate: 0,
      CritRate: 0,
      Slash: data.Slash,
      Pierce: data.Pierce,
      Hit: data.Hit,
      Fire: data.Fire,
      Water: data.Water,
      Earth: data.Earth,
      Wind: data.Wind,
      Light: data.Light,
      Dark: data.Dark,
    };
    this.totalStatus = this.calculateTotalStatus();
    this.nowHP = data.HP
    this.nowMP = data.MP
    this.GOLD = data.GOLD
    this.EXP = data.EXP
    this.activeSkill = data.activeSkill.map((id: number) => activeSkills.find(skill => skill.skill_id === id));
    this.order = undefined;
  }

  calculateTotalStatus() {
    let totalStatus = { ...this.baseStatus };
    totalStatus.HitRate = config.monsterHitRate + Math.floor(totalStatus.DEX / 10)
    totalStatus.CritRate = Math.floor(totalStatus.DEX / 8)
    // バフによるステータスの増加を計算
    for (let buff of this.buffs.values()) {
      totalStatus[buff.status] += buff.value;
    }
    return totalStatus;
  }

}