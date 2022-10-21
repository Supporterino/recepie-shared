import { Unit, Measure } from "../units";

export type PiecesUnits = PiecesUnitUnits;
export type PiecesSystems = "unit";

export type PiecesUnitUnits =
  | "pcs"
  | "bk-doz"
  | "cp"
  | "doz-doz"
  | "doz"
  | "gr-gr"
  | "gros"
  | "half-dozen"
  | "long-hundred"
  | "ream"
  | "scores"
  | "sm-gr"
  | "trio";

const unit: Record<PiecesUnitUnits, Unit> = {
  pcs: {
    name: {
      singular: "Piece",
      plural: "Pieces",
    },
    toAnchor: 1,
  },
  "bk-doz": {
    name: {
      singular: "Bakers Dozen",
      plural: "Bakers Dozen",
    },
    toAnchor: 13,
  },
  cp: {
    name: {
      singular: "Couple",
      plural: "Couples",
    },
    toAnchor: 2,
  },
  "doz-doz": {
    name: {
      singular: "Dozen Dozen",
      plural: "Dozen Dozen",
    },
    toAnchor: 144,
  },
  doz: {
    name: {
      singular: "Dozen",
      plural: "Dozens",
    },
    toAnchor: 12,
  },
  "gr-gr": {
    name: {
      singular: "Great Gross",
      plural: "Great Gross",
    },
    toAnchor: 1728,
  },
  gros: {
    name: {
      singular: "Gross",
      plural: "Gross",
    },
    toAnchor: 144,
  },
  "half-dozen": {
    name: {
      singular: "Half Dozen",
      plural: "Half Dozen",
    },
    toAnchor: 6,
  },
  "long-hundred": {
    name: {
      singular: "Long Hundred",
      plural: "Long Hundred",
    },
    toAnchor: 120,
  },
  ream: {
    name: {
      singular: "Reams",
      plural: "Reams",
    },
    toAnchor: 500,
  },
  scores: {
    name: {
      singular: "Scores",
      plural: "Scores",
    },
    toAnchor: 20,
  },
  "sm-gr": {
    name: {
      singular: "Small Gross",
      plural: "Small Gross",
    },
    toAnchor: 120,
  },
  trio: {
    name: {
      singular: "Trio",
      plural: "Trio",
    },
    toAnchor: 3,
  },
};

const measure: Measure<PiecesSystems, PiecesUnits> = {
  systems: {
    unit,
  },
};

export default measure;
