import PassiveSkill_json from '@/assets/json/PassiveSkill.json';

interface SkillEffect {
  effect_type: number;
  effect_target: string;
  effect_amount: number;
  target: number;
}

export default class PassiveSkill {
  skill_id: number;
  name: string;
  info: string;
  skill_cost: number;
  condition: any;
  effect_number: number;
  skill_effect: SkillEffect[];
  equip: boolean;
  

  constructor(data: PassiveSkill) {
    this.skill_id = data.skill_id;
    this.name = data.name;
    this.info = data.info;
    this.skill_cost = data.skill_cost;
    this.condition = data.condition;
    this.effect_number = data.effect_number;
    this.skill_effect = data.skill_effect;
    this.equip = false;
  }
}

export const passiveSkills = PassiveSkill_json.map((data: any) => new PassiveSkill(data))