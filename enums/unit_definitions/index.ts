import {
  type Measure,
} from '../units';
import {
  type EachSystems,
  type EachUnits,
} from './each';
import each from './each';
import {
  type MassSystems,
  type MassUnits,
} from './mass';
import mass from './mass';
import {
  type PiecesSystems,
  type PiecesUnits,
} from './pieces';
import pieces from './pieces';
import {
  type TemperatureSystems,
  type TemperatureUnits,
} from './temerature';
import temperature from './temerature';
import {
  type VolumeSystems,
  type VolumeUnits,
} from './volume';
import volume from './volume';

export type AllMeasuresSystems = EachSystems | MassSystems | PiecesSystems | TemperatureSystems | VolumeSystems;

export type AllMeasuresUnits = EachUnits | MassUnits | PiecesUnits | TemperatureUnits | VolumeUnits;

export type AllMeasures = 'each' | 'mass' | 'pieces' | 'temperature' | 'volume';

export const allMeasures: Record<AllMeasures, Measure<AllMeasuresSystems, AllMeasuresUnits>> = {
  each,
  mass,
  pieces,
  temperature,
  volume,
};

export {
  default as each,
  type EachSystems,
  type EachUnits,
} from './each';
export {
  default as mass,
  type MassSystems,
  type MassUnits,
} from './mass';
export {
  default as pieces,
  type PiecesSystems,
  type PiecesUnits,
} from './pieces';
export {
  default as temperature,
  type TemperatureSystems,
  type TemperatureUnits,
} from './temerature';
export {
  default as volume,
  type VolumeSystems,
  type VolumeUnits,
} from './volume';
