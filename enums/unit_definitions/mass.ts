import { Measure, Unit } from '../units';

export type MassUnits = MassMetricUnits | MassImperialUnits;
export type MassSystems = 'metric' | 'imperial';

export type MassMetricUnits = 'g' | 'kg'; //"mcg" | "mg" | "g" | "kg" | "mt";
export type MassImperialUnits = 'oz' | 'lb'; //| "t";

const metric: Record<MassMetricUnits, Unit> = {
    // mcg: {
    //   name: {
    //     singular: "Microgram",
    //     plural: "Micrograms",
    //   },
    //   toAnchor: 1 / 1000000,
    // },
    // mg: {
    //   name: {
    //     singular: "Milligram",
    //     plural: "Milligrams",
    //   },
    //   toAnchor: 1 / 1000,
    // },
    g: {
        name: {
            singular: 'Gram',
            plural: 'Grams',
        },
        toAnchor: 1,
    },
    kg: {
        name: {
            singular: 'Kilogram',
            plural: 'Kilograms',
        },
        toAnchor: 1000,
    },
    // mt: {
    //   name: {
    //     singular: "Metric Tonne",
    //     plural: "Metric Tonnes",
    //   },
    //   toAnchor: 1000000,
    // },
};

const imperial: Record<MassImperialUnits, Unit> = {
    oz: {
        name: {
            singular: 'Ounce',
            plural: 'Ounces',
        },
        toAnchor: 1 / 16,
    },
    lb: {
        name: {
            singular: 'Pound',
            plural: 'Pounds',
        },
        toAnchor: 1,
    },
    // t: {
    //   name: {
    //     singular: "Ton",
    //     plural: "Tons",
    //   },
    //   toAnchor: 2000,
    // },
};

const measure: Measure<MassSystems, MassUnits> = {
    systems: {
        metric,
        imperial,
    },
    anchors: {
        metric: {
            imperial: {
                ratio: 1 / 453.592,
            },
        },
        imperial: {
            metric: {
                ratio: 453.592,
            },
        },
    },
};

export default measure;
