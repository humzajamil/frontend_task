import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailViewCard from './DetailViewCard';

const DetailViewScreen = ({route}) => {
  console.log(route);
  return <DetailViewCard item={route.params.item} />;
};

export default DetailViewScreen;

const styles = StyleSheet.create({});
