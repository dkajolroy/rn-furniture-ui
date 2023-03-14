import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';
import {DetailsProps, RootState} from '../interface/navigationType';

export default function ProductDetails({navigation, route}: DetailsProps) {
  const item = route.params;
  const {COLORS} = useSelector((state: RootState) => state.theme);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}>
      <View>
        <Image
          style={{
            height: SIZES.height / 2,
            width: SIZES.width - 20,
            alignSelf: 'center',
            borderRadius: SIZES.radius * 2,
          }}
          source={item.image}
        />
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.dark,
            marginLeft: 10,
            marginVertical: 20,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            marginLeft: 10,
            color: COLORS.primary,
          }}>
          Price ${item.price.toString()}
        </Text>
      </View>
    </SafeAreaView>
  );
}
