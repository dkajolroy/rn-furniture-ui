import {ImageRequireSource} from 'react-native';
export type CategoryType = {
  id: Number;
  name: String;
  slug: String;
};

export type ProductType = {
  id: Number;
  name: String;
  price: Number;
  category: String;
  image: ImageRequireSource;
};
