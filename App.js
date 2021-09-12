import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { ColorsList } from './constants/colors';

const deleteIcon = require('./images/delete.png');
// import Items from './Items';

const App = () => {
  const [rows, setRows] = useState([]);

  const addRow = (color) => {
    setRows((r) => [...r, color]);
  };

  const removeRow = (color) => {
    let removed = false;
    const newRows = rows.reduce((acc, curr) => {
      if (curr !== color || removed) {
        acc.push(curr);
        return acc;
      }
      removed = true;
      return acc;
    }, []);
    setRows(newRows);
  };

  return (
    <>
      {/* <Items /> */}
      <View style={{ margin: 10, padding: 20 }}>
        <Text style={{ margin: 10 }}>Color List</Text>
        <FlatList
          data={rows}
          style={{ height: '80%' }}
          keyExtractor={(item, i) => `${item}-${i}`}
          renderItem={({ item: r }) => {
            return (
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: r,
                    height: 20,
                    borderRadius: 5,
                  }}
                />
                <TouchableOpacity onPress={() => removeRow(r)}>
                  <Image
                    style={{ width: 20, height: 20, marginLeft: 10 }}
                    source={deleteIcon}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <FlatList
          data={ColorsList}
          numColumns={ColorsList.length}
          keyExtractor={(item) => item}
          renderItem={({ item: color }) => {
            return (
              <TouchableOpacity
                style={{
                  height: 30,
                  backgroundColor: color,
                  width: 30,
                  borderRadius: 20,
                  margin: 8,
                }}
                onPress={() => addRow(color)}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default App;
