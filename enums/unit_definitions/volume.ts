import { Unit, Measure } from "../units";

export type VolumeUnits = VolumeMetricUnits | VolumeImperialUnits;
export type VolumeSystems = "metric" | "imperial";

export type VolumeMetricUnits =
  | "mm3"
  | "cm3"
  | "ml"
  | "l"
  | "kl"
  | "Ml"
  | "Gl"
  | "m3"
  | "km3"
  | "cl"
  | "dl"
  | "krm"
  | "tsk"
  | "msk"
  | "kkp"
  | "glas"
  | "kanna";

export type VolumeImperialUnits =
  | "tsp"
  | "Tbs"
  | "in3"
  | "fl-oz"
  | "cup"
  | "pnt"
  | "qt"
  | "gal"
  | "ft3"
  | "yd3";

const metric: Record<VolumeMetricUnits, Unit> = {
  mm3: {
    name: {
      singular: "Cubic Millimeter",
      plural: "Cubic Millimeters",
    },
    toAnchor: 1 / 1000000,
  },
  cm3: {
    name: {
      singular: "Cubic Centimeter",
      plural: "Cubic Centimeters",
    },
    toAnchor: 1 / 1000,
  },
  ml: {
    name: {
      singular: "Millilitre",
      plural: "Millilitres",
    },
    toAnchor: 1 / 1000,
  },
  cl: {
    name: {
      singular: "Centilitre",
      plural: "Centilitres",
    },
    toAnchor: 1 / 100,
  },
  dl: {
    name: {
      singular: "Decilitre",
      plural: "Decilitres",
    },
    toAnchor: 1 / 10,
  },
  l: {
    name: {
      singular: "Litre",
      plural: "Litres",
    },
    toAnchor: 1,
  },
  kl: {
    name: {
      singular: "Kilolitre",
      plural: "Kilolitres",
    },
    toAnchor: 1000,
  },
  Ml: {
    name: {
      singular: "Megalitre",
      plural: "Megalitres",
    },
    toAnchor: 1_000_000,
  },
  Gl: {
    name: {
      singular: "Gigalitre",
      plural: "Gigalitres",
    },
    toAnchor: 1_000_000_000,
  },
  m3: {
    name: {
      singular: "Cubic meter",
      plural: "Cubic meters",
    },
    toAnchor: 1000,
  },
  km3: {
    name: {
      singular: "Cubic kilometer",
      plural: "Cubic kilometers",
    },
    toAnchor: 1000000000000,
  },

  // Swedish units
  krm: {
    name: {
      singular: "Kryddmått",
      plural: "Kryddmått",
    },
    toAnchor: 1 / 1000,
  },
  tsk: {
    name: {
      singular: "Tesked",
      plural: "Teskedar",
    },
    toAnchor: 5 / 1000,
  },
  msk: {
    name: {
      singular: "Matsked",
      plural: "Matskedar",
    },
    toAnchor: 15 / 1000,
  },
  kkp: {
    name: {
      singular: "Kaffekopp",
      plural: "Kaffekoppar",
    },
    toAnchor: 150 / 1000,
  },
  glas: {
    name: {
      singular: "Glas",
      plural: "Glas",
    },
    toAnchor: 200 / 1000,
  },
  kanna: {
    name: {
      singular: "Kanna",
      plural: "Kannor",
    },
    toAnchor: 2.617,
  },
};

const imperial: Record<VolumeImperialUnits, Unit> = {
  "tsp": {
    name: {
      singular: "Teaspoon",
      plural: "Teaspoons",
    },
    toAnchor: 1 / 6,
  },
  "Tbs": {
    name: {
      singular: "Tablespoon",
      plural: "Tablespoons",
    },
    toAnchor: 1 / 2,
  },
  "in3": {
    name: {
      singular: "Cubic inch",
      plural: "Cubic inches",
    },
    toAnchor: 0.55411,
  },
  "fl-oz": {
    name: {
      singular: "Fluid Ounce",
      plural: "Fluid Ounces",
    },
    toAnchor: 1,
  },
  "cup": {
    name: {
      singular: "Cup",
      plural: "Cups",
    },
    toAnchor: 8,
  },
  "pnt": {
    name: {
      singular: "Pint",
      plural: "Pints",
    },
    toAnchor: 16,
  },
  "qt": {
    name: {
      singular: "Quart",
      plural: "Quarts",
    },
    toAnchor: 32,
  },
  "gal": {
    name: {
      singular: "Gallon",
      plural: "Gallons",
    },
    toAnchor: 128,
  },
  "ft3": {
    name: {
      singular: "Cubic foot",
      plural: "Cubic feet",
    },
    toAnchor: 957.506,
  },
  "yd3": {
    name: {
      singular: "Cubic yard",
      plural: "Cubic yards",
    },
    toAnchor: 25852.7,
  },
};

const measure: Measure<VolumeSystems, VolumeUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 33.8140226,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 33.8140226,
      },
    },
  },
};

export default measure;
