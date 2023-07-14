import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DetailViewCard = ({item}) => {
  console.log(typeof item.units);
  return (
    <View>
      <Image
        source={{uri: item.social_image_url}}
        style={{width: '80%', height: 200}}
      />
      <Text style={{color: 'black'}}>{item.title}</Text>
      <Text style={{color: 'black'}}>{item.summary}</Text>
      <Text style={{color: 'black'}}>{item.levels}</Text>
      <Text style={{color: 'black'}}>{item.roles}</Text>
      <Text style={{color: 'black'}}>{item.duration_in_minutes}</Text>
      {item.units.map((unit, index) => {
        return (
          <Text style={{color: 'black'}} key={index + 1}>
            {index + 1}: {unit}
          </Text>
        );
      })}
    </View>
  );
};

export default DetailViewCard;

const styles = StyleSheet.create({});
