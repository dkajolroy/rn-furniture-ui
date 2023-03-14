import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {allCategory, product} from '../constants/dummyData';
import FONTS from '../constants/fonts';
import icons from '../constants/icons';
import SIZES from '../constants/sizes';
import {CategoryType, ProductType} from '../interface/dataInterface';
import {Props, RootState} from '../interface/navigationType';
export default function HomeScreen({navigation, route}: Props) {
  const {COLORS} = useSelector((state: RootState) => state.theme);

  const [category, setCategory] = React.useState(allCategory[0]);

  const products = product.filter(item => item.category === category.slug);

  //Render Category Data
  const renderCategory = ({item}: {item: CategoryType}) => {
    return (
      <TouchableOpacity
        onPress={() => setCategory(item)}
        style={{
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.gray,
          }}>
          {item.name}
        </Text>
        {category.slug === item.slug && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.primary,
            }}></View>
        )}
      </TouchableOpacity>
    );
  };

  //Render Product
  const renderProduct = ({item}: {item: ProductType}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: SIZES.padding,
        }}>
        <View
          style={{
            width: SIZES.width / 2,
          }}>
          <Image
            style={{
              resizeMode: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: COLORS.lightGray,
              borderRadius: SIZES.radius * 2,
            }}
            source={item.image}
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }}>
            <Text style={{...FONTS.h3, color: COLORS.light}}>
              {item.category}
            </Text>
            <Text style={{...FONTS.h2, color: COLORS.light}}>{item.name}</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}>
            <Text
              style={{
                backgroundColor: COLORS.lightGray,
                padding: SIZES.base,
                borderRadius: SIZES.base,
                ...FONTS.h3,
              }}>
              Price ${item.price.toString()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.light, flex: 1}}>
      {/* Top Bars */}
      <View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginVertical: SIZES.base,
            }}>
            <TouchableOpacity>
              <Image
                source={icons.bar}
                style={{
                  height: 30,
                  width: 30,
                  transform: [{rotate: '90deg'}],
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.cart}
                style={{height: 40, width: 40, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          {/* Title */}
          <View>
            <Text
              style={{
                ...FONTS.largeTitle,
                color: COLORS.dark,
                fontWeight: '900',
              }}>
              Collection Of {'\n'}
              {category.name}
            </Text>
          </View>
        </View>
        {/* render Category */}
        <View style={{marginVertical: 20}}>
          <FlatList
            horizontal
            data={allCategory}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCategory}
          />
        </View>

        {/* Render Product */}
        <View style={{height: '55%'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={renderProduct}
          />
        </View>
        {/* Footer */}
        <View>
          <Text>Light</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
