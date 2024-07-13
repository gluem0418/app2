import Dungeon_json from '@/assets/json/Dungeon.json';

export interface Layer {
  treasureRank: number[];
  monsterRank: number;
  midBoss: number[];
  numBoss: number;
}

export default class Dungeon {
  name: string;
  info: string;
  wallUrl: string;
  floorUrl: string;
  ceilUrl: string;
  skyUrl: string;
  light: string;
  mapHeight: number;
  mapWidth: number;
  roomCountMin: number;
  roomCountMax: number;
  roomMinHeight: number;
  roomMaxHeight: number;
  roomMinWidth: number;
  roomMaxWidth: number;
  meetPointCount: number;
  music: string;
  numLayers: number;
  layers: Layer[];

  constructor(data: Dungeon) {
    this.name = data.name;
    this.info = data.info;
    this.wallUrl = data.wallUrl;
    this.floorUrl = data.floorUrl;
    this.ceilUrl = data.ceilUrl;
    this.skyUrl = data.skyUrl;
    this.light = data.light;
    this.mapHeight = data.mapHeight;
    this.mapWidth = data.mapWidth;
    this.roomCountMin = data.roomCountMin;
    this.roomCountMax = data.roomCountMax;
    this.roomMinHeight = data.roomMinHeight;
    this.roomMaxHeight = data.roomMaxHeight;
    this.roomMinWidth = data.roomMinWidth;
    this.roomMaxWidth = data.roomMaxWidth;
    this.meetPointCount = data.meetPointCount;
    this.music = data.music;
    this.numLayers = data.numLayers;
    this.layers = data.layers;
  }
}

export const dungeons = Dungeon_json.map((data: any) => new Dungeon(data))