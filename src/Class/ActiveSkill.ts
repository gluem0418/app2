import ActiveSkill_json from '@/assets/json/ActiveSkill.json';

export interface SkillEffect {
  effect_type: string;
  effect_kind: string;
  effect_times: number;
  base_status: string;
  effect_amount: number;
  target: number;
  target_type: string;
  skill_anime: string;
  anime_time: number;
}

export default class ActiveSkill {
  skill_id: number;
  name: string;
  use: number;
  info: string;
  attribute: number;
  interval: number;
  consume_type: string;
  consume_amount: number;
  effect_number: number;
  skill_effect: SkillEffect[];

  constructor(data: ActiveSkill) {
    this.skill_id = data.skill_id;
    this.name = data.name;
    this.use = data.use;
    this.info = data.info;
    this.attribute = data.attribute;
    this.interval = data.interval;
    this.consume_type = data.consume_type;
    this.consume_amount = data.consume_amount;
    this.effect_number = data.effect_number;
    this.skill_effect = data.skill_effect;
  }
}

export const activeSkills = ActiveSkill_json.map((data: any) => new ActiveSkill(data))