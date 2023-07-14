import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getData} from '../api/index';

const OverviewScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result.modules);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => {
        navigation.navigate('DetailView', {item});
      }}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.social_image_url}}
          style={{width: '80%', height: 200}}
        />
        <Text style={{color: 'black'}}>{item.title}</Text>
        <Text style={{color: 'black'}}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Text>Loading..</Text>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.uid.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    height: '25%',
  },
});
