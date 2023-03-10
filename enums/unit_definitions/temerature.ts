import {
  type Measure,
  type Unit,
} from '../units';

export type TemperatureUnits = TemperatureImperialUnits | TemperatureMetricUnits;
export type TemperatureSystems = 'imperial' | 'metric';

export type TemperatureMetricUnits = 'C' | 'K';
export type TemperatureImperialUnits = 'F' | 'R';

const metric: Record<TemperatureMetricUnits, Unit> = {
  C: {
    anchorShift: 0,
    name: {
      plural: 'degrees Celsius',
      singular: 'degree Celsius',
    },
    toAnchor: 1,
  },
  K: {
    anchorShift: 273.15,
    name: {
      plural: 'degrees Kelvin',
      singular: 'degree Kelvin',
    },
    toAnchor: 1,
  },
};

const imperial: Record<TemperatureImperialUnits, Unit> = {
  F: {
    name: {
      plural: 'degrees Fahrenheit',
      singular: 'degree Fahrenheit',
    },
    toAnchor: 1,
  },
  R: {
    anchorShift: 459.67,
    name: {
      plural: 'degrees Rankine',
      singular: 'degree Rankine',
    },
    toAnchor: 1,
  },
};

const temerature: Measure<TemperatureSystems, TemperatureUnits> = {
  anchors: {
    imperial: {
      metric: {
        transform: (F: number): number => {
          return (F - 32) * (5 / 9);
        },
      },
    },
    metric: {
      imperial: {
        transform: (C: number): number => {
          return C / (5 / 9) + 32;
        },
      },
    },
  },
  systems: {
    imperial,
    metric,
  },
};

export default temerature;
