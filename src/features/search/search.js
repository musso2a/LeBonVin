import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Divider, Searchbar} from 'react-native-paper';
import styles from './search.style';

export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.main}>
      <View style={styles.searchBox}>
        <Searchbar
          placeholder="Rechercher un vin..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <Text style={styles.titleText}>Par couleurs :</Text>
      <View style={styles.searchContainer}>
        <View style={styles.firstRow}>
          <TouchableOpacity>
            <View style={styles.wineColor}>
              <Image
                source={require('../../assets/corse.jpeg')}
                style={styles.wineColorImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.wineColor}>
              <Image
                source={require('../../assets/corse.jpeg')}
                style={styles.wineColorImg}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.firstRow}>
          <TouchableOpacity>
            <View style={styles.wineColor}>
              <Image
                source={require('../../assets/corse.jpeg')}
                style={styles.wineColorImg}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.wineColor}>
              <Image
                source={require('../../assets/corse.jpeg')}
                style={styles.wineColorImg}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.randomContainer}>
        <Text>Au hasard</Text>
        <TouchableOpacity>
          <View style={styles.randomButton}>
            <Image
              source={require('../../assets/corse.jpeg')}
              style={styles.randomWineImg}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
