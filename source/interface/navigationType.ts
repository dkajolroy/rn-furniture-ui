import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {store} from '../store/store';
import {ProductType} from './dataInterface';

export type RootStackParamList = {
  HOME: undefined;
  PROFILE: undefined;
  DETAILS: ProductType;
};
export type Props = NativeStackScreenProps<RootStackParamList>;
export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'DETAILS'
>;

export type RootState = ReturnType<typeof store.getState>;
