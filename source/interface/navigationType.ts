import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {store} from '../store/store';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;

export type RootState = ReturnType<typeof store.getState>;
