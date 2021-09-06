import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  useWindowDimensions,
} from 'react-native';
const img1 = require('./images/fashion_image_1.jpeg');
const img2 = require('./images/fashion_image_2.jpeg');
const img3 = require('./images/fashion_image_3.jpeg');

const AllItems = [
  {
    title: 'V Neck Shirt - Pink',
    price: '$24.99',
    image: img1,
  },
  {
    title: 'V Neck Shirt - Green',
    price: '$24.99',
    image: img2,
  },
  {
    title: 'V Neck Shirt - Grey',
    price: '$24.99',
    image: img3,
  },
  {
    title: 'V Neck Shirt - Red',
    price: '$24.99',
    image: img1,
  },
  {
    title: 'V Neck Shirt - Yellow',
    price: '$24.99',
    image: img2,
  },
];

export default Items = () => {
  const { width } = useWindowDimensions();
  let defaultGroup = 2;
  if (width > 480) defaultGroup = 3;
  if (width > 768) defaultGroup = 4;
  if (width > 1024) defaultGroup = 5;
  const rows = AllItems.reduce((r, key, index) => {
    return (
      (index % defaultGroup == 0 ? r.push([key]) : r[r.length - 1].push(key)) &&
      r
    );
  }, []);
  return (
    <View style={{ flex: 1, margin: 10, padding: 10 }}>
      <ScrollView>
        {rows.map((row, i) => {
          return (
            <View
              key={i}
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {row.map((item) => {
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      margin: 10,
                      padding: 10,
                      width: 160,
                    }}
                    key={item.title}
                  >
                    <Image
                      style={{ width: 120, height: 120 }}
                      source={item.image}
                    />
                    <Text style={{ marginTop: 10 }}>{item.title}</Text>
                    <Text style={{ marginTop: 10 }}>{item.price}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
