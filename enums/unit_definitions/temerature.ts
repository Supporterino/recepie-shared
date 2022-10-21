import { Unit, Measure } from "../units";

export type TemperatureUnits = TemperatureMetricUnits | TemperatureImperialUnits;
export type TemperatureSystems = "metric" | "imperial";

export type TemperatureMetricUnits = "C" | "K";
export type TemperatureImperialUnits = "F" | "R";

const metric: Record<TemperatureMetricUnits, Unit> = {
  C: {
    name: {
      singular: "degree Celsius",
      plural: "degrees Celsius",
    },
    toAnchor: 1,
    anchorShift: 0,
  },
  K: {
    name: {
      singular: "degree Kelvin",
      plural: "degrees Kelvin",
    },
    toAnchor: 1,
    anchorShift: 273.15,
  },
};

const imperial: Record<TemperatureImperialUnits, Unit> = {
  F: {
    name: {
      singular: "degree Fahrenheit",
      plural: "degrees Fahrenheit",
    },
    toAnchor: 1,
  },
  R: {
    name: {
      singular: "degree Rankine",
      plural: "degrees Rankine",
    },
    toAnchor: 1,
    anchorShift: 459.67,
  },
};

const measure: Measure<TemperatureSystems, TemperatureUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        transform: (C: number): number => C / (5 / 9) + 32,
      },
    },
    imperial: {
      metric: {
        transform: (F: number): number => (F - 32) * (5 / 9),
      },
    },
  },
};

export default measure;
