import { Measure } from "../units";
import each, { EachSystems, EachUnits } from "./each";
import mass, { MassSystems, MassUnits } from "./mass";
import pieces, { PiecesSystems, PiecesUnits } from "./pieces";
import temperature, { TemperatureSystems, TemperatureUnits } from "./temerature";
import volume, { VolumeSystems, VolumeUnits } from "./volume";

export type AllMeasuresSystems =
  | EachSystems
  | MassSystems
  | PiecesSystems
  | TemperatureSystems
  | VolumeSystems;

export type AllMeasuresUnits = EachUnits | MassUnits | PiecesUnits | TemperatureUnits | VolumeUnits;

export type AllMeasures = "each" | "mass" | "pieces" | "temperature" | "volume";

export const allMeasures: Record<AllMeasures, Measure<AllMeasuresSystems, AllMeasuresUnits>> = {
  each,
  mass,
  pieces,
  temperature,
  volume,
};

export type {
  EachSystems,
  MassSystems,
  PiecesSystems,
  TemperatureSystems,
  VolumeSystems,
  EachUnits,
  MassUnits,
  PiecesUnits,
  TemperatureUnits,
  VolumeUnits,
};
export { each, mass, pieces, temperature, volume };
