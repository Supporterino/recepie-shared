import {
  type User,
} from '..';
import {
  type Ingredients,
} from './ingredients';
import {
  type RatingInfo,
} from './ratingInfo';

export type Recipe = {
  additionalPictures?: string[],
  creationTimestamp: Date,
  description: string,
  id: string,
  ingredients: Ingredients,
  isCookList: boolean,
  isFavorite: boolean,
  myRating: number,
  name: string,
  owner: User,
  picture: string,
  rating: RatingInfo,
  steps: string[],
  tags: string[],
  updateTimestamp: Date,
};
