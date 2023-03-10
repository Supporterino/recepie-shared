import {
  type Measure,
  type Unit,
} from '../units';

export type VolumeUnits = VolumeImperialUnits | VolumeMetricUnits;
export type VolumeSystems = 'imperial' | 'metric';

export type VolumeMetricUnits =
    'l' | 'ml';

export type VolumeImperialUnits =
    'cup' | 'fl-oz' | 'gal' | 'Tbs' | 'tsp';

const metric: Record<VolumeMetricUnits, Unit> = {
  l: {
    name: {
      plural: 'Litres',
      singular: 'Litre',
    },
    toAnchor: 1,
  },
  ml: {
    name: {
      plural: 'Millilitres',
      singular: 'Millilitre',
    },
    toAnchor: 1 / 1_000,
  },
};

const imperial: Record<VolumeImperialUnits, Unit> = {
  cup: {
    name: {
      plural: 'Cups',
      singular: 'Cup',
    },
    toAnchor: 8,
  },
  'fl-oz': {
    name: {
      plural: 'Fluid Ounces',
      singular: 'Fluid Ounce',
    },
    toAnchor: 1,
  },
  gal: {
    name: {
      plural: 'Gallons',
      singular: 'Gallon',
    },
    toAnchor: 128,
  },

  Tbs: {
    name: {
      plural: 'Tablespoons',
      singular: 'Tablespoon',
    },
    toAnchor: 1 / 2,
  },

  tsp: {
    name: {
      plural: 'Teaspoons',
      singular: 'Teaspoon',
    },
    toAnchor: 1 / 6,
  },
};

const volume: Measure<VolumeSystems, VolumeUnits> = {
  anchors: {
    imperial: {
      metric: {
        ratio: 1 / 33.814_022_6,
      },
    },
    metric: {
      imperial: {
        ratio: 33.814_022_6,
      },
    },
  },
  systems: {
    imperial,
    metric,
  },
};

export default volume;
