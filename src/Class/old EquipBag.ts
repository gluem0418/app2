export default class EquipmentBag {
  equipmentType: {
    [type: string]: {
      eqpbag_id: number,
      eqp_id: number,
      name: string,
      equippedBy: number | null
    }[]
  };

  equipmentItem: {
    [eqpbag_id: number]: {
      eqp_id: number,
      type: string,
      name: string,
      equippedBy: number | null
    }
  };

  constructor(equipmentData: { eqpbag_id: number, eqp_id: number, type: string, name: string, equippedBy: number | null }[]) {
    this.equipmentType = {};
    this.equipmentItem = {};
    for (let item of equipmentData) {
      this.addEquipment(item.eqpbag_id, item.eqp_id, item.type, item.name, item.equippedBy);
    }
  }

  // 装備を追加するメソッド
  addEquipment(eqpbag_id: number, eqp_id: number, type: string, name: string, equippedBy: number | null) {
    if (!this.equipmentType[type]) {
      this.equipmentType[type] = [];
    }
    const equipment = { eqpbag_id: eqpbag_id, eqp_id: eqp_id, type: type, name: name, equippedBy: equippedBy };
    this.equipmentType[type].push(equipment);
    this.equipmentItem[eqpbag_id] = equipment;
  }
  
  // 装備を削除するメソッド
  removeEquipment(eqpbag_id: number) {
    if (!this.equipmentItem[eqpbag_id] ) {
      throw new Error(`装備 ${eqpbag_id} は存在しません。`);
    }
    // equipmentBag = equipmentBag.filter(equipment => equipment.eqpbag_id !== eqpbag_id);
    delete this.equipmentItem[eqpbag_id];
  }

  // 指定したtypeの装備リストを取得するメソッド
  getEquipmentByType(type: string) {
    return this.equipmentType[type] || [];
  }

  // eqp_idとequippedByを指定して装備を取得するメソッド
  findEquipment(eqp_id: number, cha_id: number | null) {
    const key = `${eqp_id}_${cha_id === null ? 'null' : cha_id}`;
    return this.equipmentItem[key];
  }

  // 装備のequippedByを更新
  equipEquipment(eqpbag_id: number, cha_id: number | null) {
    const equipment = this.equipmentItem[eqpbag_id];
    if (!equipment) {
      throw new Error(`装備 ${eqpbag_id} は存在しません。`);
    }
    equipment.equippedBy = cha_id;
    this.equipmentItem[eqpbag_id] = equipment;  // 新しいキーで装備を追加
  }

  // typeとcha_idよりequippedByを更新
  unequipOldEquipment(type: string , cha_id : number) {
    const equipment = this.equipmentType[type].find(item => item.equippedBy === cha_id)
    if (!equipment) {
      throw new Error(`装備 ${type} ${cha_id} は存在しません。`);
    }
    equipment.equippedBy = null;
    // this.equipmentType[type].push(equipment);
  }
}