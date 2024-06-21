import character_json from '@/assets/json/Character.json';

import Equipment from './Equipment.ts';
import { EquipmentType } from './Equipment.ts';

import ActiveSkill from './ActiveSkill.ts';
import PassiveSkill from './PassiveSkill.ts';

import { equipmentList } from '@/class/Equipment.ts';
import { activeSkills } from '@/class/ActiveSkill.ts';
import { passiveSkills } from '@/class/PassiveSkill.ts';

import config from '@/config/commonConfig.ts';

export default class Character {
  cha_id: number;
  name: string;
  class: string;
  faceGraphicUrl: string;
  poseGraphicUrl: string;
  backgroundUrl: string;
  LV: number;
  exp: number;
  nextLvExp: number;
  baseStatus: { [key: string]: number };
  equipment: { [key: string]: Equipment | null };
  totalStatus: { [key: string]: number };
  buffs: { name: string, status: string, value: number, duration: number }[] = [];
  conditions: { name: string, status: string, value: number, duration: number }[] = [];
  nowHP: number;
  nowMP: number;
  activeSkill: ActiveSkill[];
  passiveCost: number;
  passiveSkill: PassiveSkill[];

  // constructor(data: any, equipmentList: Equipment[], activeSkills: ActiveSkill[], passiveSkills: PassiveSkill[]) {
  constructor(data: any, index: number) {
    this.cha_id = data.cha_id;
    this.name = data.name;
    this.class = data.class;
    this.faceGraphicUrl = data.faceGraphicUrl;
    this.poseGraphicUrl = data.poseGraphicUrl;
    this.backgroundUrl = data.backgroundUrl;
    this.LV = data.LV;
    this.exp = data.exp;
    this.nextLvExp = data.nextLvExp;
    this.baseStatus = {
      HP: data.HP,
      MP: data.MP,
      ATK: data.ATK,
      MGC: data.MGC,
      DEF: data.DEF,
      MDF: data.MDF,
      DEX: data.DEX,
      SPD: data.SPD,
      //
      HitRate: 0,
      CritRate: 0,
      Hate: 1 - index * 0.1,
      //
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
    this.equipment = {
      WEP: equipmentList.find(equipment => equipment.eqp_id === data.equipment.WEP) ?? null,
      ARM: equipmentList.find(equipment => equipment.eqp_id === data.equipment.ARM) ?? null,
      ACC: equipmentList.find(equipment => equipment.eqp_id === data.equipment.ACC) ?? null,
    };
    this.totalStatus = this.calculateTotalStatus();
    this.nowHP = this.totalStatus.HP;
    this.nowMP = this.totalStatus.MP;

    // this.HitRate = this.calculateHitRate()
    // this.CritRate = Math.floor(this.totalStatus.DEX / 8)

    this.activeSkill = data.activeSkill.map((id: number) => activeSkills.find(skill => skill.skill_id === id));
    this.passiveCost = data.passiveCost;
    this.passiveSkill = data.passiveSkill.map((id: number) => {
      const skillData = passiveSkills.find(skill => skill.skill_id === id);
      let skill: PassiveSkill | undefined;
      if (skillData) {
        skill = new PassiveSkill(skillData);
        // data.equipSkillとskill_idが一致するスキルのequipプロパティをtrueに設定
        skill.equip = data.equipSkill.includes(id);
      }
      return skill;
    }).filter((skill: PassiveSkill | undefined) => skill !== undefined);  // undefinedのスキルを除去
  }

  changeEquipment(type: EquipmentType, newEquipment: Equipment | null) {
    this.equipment[type] = newEquipment;
    this.totalStatus = this.calculateTotalStatus();
    // this.HitRate = this.calculateHitRate()
  }

  calculateTotalStatus() {
    let totalStatus = { ...this.baseStatus };
    for (let key in this.equipment) {
      let equipment = this.equipment[key];
      if (equipment) {  // 装備が存在することを確認
        for (let status in equipment.status) {
          totalStatus[status] += equipment.status[status];
        }
      }
    }
    //
    totalStatus.HitRate = this.calculateHitRate(totalStatus.DEX)
    totalStatus.CritRate = Math.floor(totalStatus.DEX / 8)
    // バフによるステータスの増加を計算
    for (let buff of this.buffs.values()) {
      totalStatus[buff.status] += buff.value;
    }
    return totalStatus;
  }

  calculateHitRate(DEX: number) {
    let wepHitRate = this.equipment.WEP?.status.HitRate ? this.equipment.WEP?.status.HitRate : config.initHitRate;
    return wepHitRate + Math.floor(DEX / 10)
  }

  updateHate(index: number) {
    this.baseStatus.Hate = 1 - index * 0.1
    this.totalStatus = this.calculateTotalStatus();
  }

  addBuff(name: string, status: string, value: number, duration: number) {
    const existingBuffIndex = this.buffs.findIndex(buff => buff.name === name && buff.status === status);
    if (existingBuffIndex !== -1) {
      // 既存のバフを更新
      this.buffs[existingBuffIndex].value = value;
      this.buffs[existingBuffIndex].duration = duration;
    } else {
      // 新しいバフを追加
      this.buffs.push({ name, status, value, duration });
    }
  }

  removeBuff(name: string, status: string) {
    this.buffs = this.buffs.filter(buff => !(buff.name === name && buff.status === status));
  }

  updateBuffs() {
    this.buffs = this.buffs.map(buff => {
      buff.duration--;
      if (buff.duration <= 0) {
        return null;
      }
      return buff;
    }).filter(buff => buff !== null)  as { name: string; status: string; value: number; duration: number; }[]; // 型を明示的に指定
    this.totalStatus = this.calculateTotalStatus();
  }

  addCondition(name: string, status: string, value: number, duration: number) {
    const existingConditionIndex = this.conditions.findIndex(condition => condition.name === name && condition.status === status);
    if (existingConditionIndex !== -1) {
      // 既存のコンディションを更新
      this.conditions[existingConditionIndex].value = value;
      this.conditions[existingConditionIndex].duration = duration;
    } else {
      // 新しいコンディションを追加
      this.conditions.push({ name, status, value, duration });
    }
  }

  removeCondition(name: string, status: string) {
    this.conditions = this.conditions.filter(condition => !(condition.name === name && condition.status === status));
  }

  updateConditions() {
    this.conditions = this.conditions.map(condition => {
      condition.duration--;
      if (condition.duration <= 0) {
        return null;
      }
      return condition;
    }).filter(condition => condition !== null) as { name: string; status: string; value: number; duration: number; }[]; // 型を明示的に指定
  }

}

export interface if_Character extends Character { }

export const characterList =  character_json.map((characterData: any, index: number) => new Character(characterData, index));
