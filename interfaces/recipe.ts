import { User } from "..";
import { Ingredients } from "./ingredients";
import { RatingInfo } from "./ratingInfo";

export interface Recipe {
  id: string;
  name: string;
  description: string;
  picture: string;
  steps: string[];
  tags: string[];
  additionalPictures?: string[];
  myRating: number;
  isCookList: boolean;
  isFavorite: boolean;
  updateTimestamp: Date;
  creationTimestamp: Date;
  rating: RatingInfo;
  owner: User;
  ingredients: Ingredients;
}
