import {
  type Measure,
  type Unit,
} from '../units';

export type PiecesUnits = PiecesUnitUnits;
export type PiecesSystems = 'unit';

export type PiecesUnitUnits =
    'bk-doz' | 'cp' | 'doz-doz' | 'doz' | 'gr-gr' | 'gros' | 'half-dozen' | 'long-hundred' | 'pcs' | 'ream' | 'scores' | 'sm-gr' | 'trio';

const unit: Record<PiecesUnitUnits, Unit> = {
  'bk-doz': {
    name: {
      plural: 'Bakers Dozen',
      singular: 'Bakers Dozen',
    },
    toAnchor: 13,
  },
  cp: {
    name: {
      plural: 'Couples',
      singular: 'Couple',
    },
    toAnchor: 2,
  },
  doz: {
    name: {
      plural: 'Dozens',
      singular: 'Dozen',
    },
    toAnchor: 12,
  },
  'doz-doz': {
    name: {
      plural: 'Dozen Dozen',
      singular: 'Dozen Dozen',
    },
    toAnchor: 144,
  },
  'gr-gr': {
    name: {
      plural: 'Great Gross',
      singular: 'Great Gross',
    },
    toAnchor: 1_728,
  },
  gros: {
    name: {
      plural: 'Gross',
      singular: 'Gross',
    },
    toAnchor: 144,
  },
  'half-dozen': {
    name: {
      plural: 'Half Dozen',
      singular: 'Half Dozen',
    },
    toAnchor: 6,
  },
  'long-hundred': {
    name: {
      plural: 'Long Hundred',
      singular: 'Long Hundred',
    },
    toAnchor: 120,
  },
  pcs: {
    name: {
      plural: 'Pieces',
      singular: 'Piece',
    },
    toAnchor: 1,
  },
  ream: {
    name: {
      plural: 'Reams',
      singular: 'Reams',
    },
    toAnchor: 500,
  },
  scores: {
    name: {
      plural: 'Scores',
      singular: 'Scores',
    },
    toAnchor: 20,
  },
  'sm-gr': {
    name: {
      plural: 'Small Gross',
      singular: 'Small Gross',
    },
    toAnchor: 120,
  },
  trio: {
    name: {
      plural: 'Trio',
      singular: 'Trio',
    },
    toAnchor: 3,
  },
};

const pieces: Measure<PiecesSystems, PiecesUnits> = {
  systems: {
    unit,
  },
};

export default pieces;
