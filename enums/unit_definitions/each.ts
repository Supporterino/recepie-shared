import {
  type Measure,
  type Unit,
} from '../units';

export type EachUnits = EachMetricUnits;
export type EachSystems = 'metric';

export type EachMetricUnits = 'dz' | 'ea';

const metric: Record<EachMetricUnits, Unit> = {
  dz: {
    name: {
      plural: 'Dozens',
      singular: 'Dozen',
    },
    toAnchor: 12,
  },
  ea: {
    name: {
      plural: 'Each',
      singular: 'Each',
    },
    toAnchor: 1,
  },
};

const each: Measure<EachSystems, EachUnits> = {
  systems: {
    metric,
  },
};

export default each;
