import { AllMeasuresUnits } from '../enums';

export interface Ingredient {
    name: string;
    amount: number;
    unit: AllMeasuresUnits;
}
