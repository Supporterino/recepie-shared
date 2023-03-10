import {
  type Measure,
  type Unit,
} from '../units';

export type MassUnits = MassImperialUnits | MassMetricUnits;
export type MassSystems = 'imperial' | 'metric';

export type MassMetricUnits = 'g' | 'kg';
export type MassImperialUnits = 'lb' | 'oz';

const metric: Record<MassMetricUnits, Unit> = {
  g: {
    name: {
      plural: 'Grams',
      singular: 'Gram',
    },
    toAnchor: 1,
  },
  kg: {
    name: {
      plural: 'Kilograms',
      singular: 'Kilogram',
    },
    toAnchor: 1_000,
  },
};

const imperial: Record<MassImperialUnits, Unit> = {
  lb: {
    name: {
      plural: 'Pounds',
      singular: 'Pound',
    },
    toAnchor: 1,
  },
  oz: {
    name: {
      plural: 'Ounces',
      singular: 'Ounce',
    },
    toAnchor: 1 / 16,
  },
};

const mass: Measure<MassSystems, MassUnits> = {
  anchors: {
    imperial: {
      metric: {
        ratio: 453.592,
      },
    },
    metric: {
      imperial: {
        ratio: 1 / 453.592,
      },
    },
  },
  systems: {
    imperial,
    metric,
  },
};

export default mass;
