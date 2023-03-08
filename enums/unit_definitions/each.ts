import { Measure, Unit } from "../units";

export type EachUnits = EachMetricUnits;
export type EachSystems = "metric";

export type EachMetricUnits = "ea" | "dz";

const metric: Record<EachMetricUnits, Unit> = {
    ea: {
        name: {
            singular: "Each",
            plural: "Each",
        },
        toAnchor: 1,
    },
    dz: {
        name: {
            singular: "Dozen",
            plural: "Dozens",
        },
        toAnchor: 12,
    },
};

const measure: Measure<EachSystems, EachUnits> = {
    systems: {
        metric,
    },
};

export default measure;
