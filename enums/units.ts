export enum MetricWeights {
	GRAM = "g",
	KILOGRAM = "kg"
}

export enum ImperialWeights {
	DRAM = "dr",
	OUNCE = "oz",
	POUND = "lb"
}

export enum MetricVolume {
	LITRE = "l",
	DECILITRE = "dl",
	MILLILITRE = "ml"
}

export enum ImperialVolume {
	FLUID_OUNCE = "fl oz",
	PINT = "pt",
	QUART = "qt",
	GALLON = "gal",
}

export enum MetricTemperature {
	CELSIUS = "°C"
}

export enum ImperialTemperature {
	FAHRENHEIT = "°F"
}

export const Units = { ...MetricWeights, ...MetricTemperature, ...MetricVolume, ...ImperialWeights, ...ImperialTemperature, ...ImperialVolume };
export type Units = MetricWeights | MetricTemperature | MetricVolume | ImperialWeights | ImperialTemperature | ImperialVolume;
