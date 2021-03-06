import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './home.style';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

const baseUrl = 'https://master-wine-api.herokuapp.com/api';

const Stack = createStackNavigator();

export default function Home() {
  useEffect(() => {
    axios
      .get(`${baseUrl}/wines`)
      .then(response => setWines(response.data.wines));
  }, []);
  const navigate = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <View style={styles.homeHead}>
          <Text style={styles.homeTitle}>LeBonVin</Text>
        </View>
        <View>
          <Text style={styles.titleHome}> Par regions :</Text>
          <ScrollView
            style={styles.catScrollview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={{paddingRight: 17, flexDirection: 'row'}}>
              <TouchableOpacity>
                <View style={styles.content_view_offers}>
                  <Image
                    style={styles.longContentViewOffersImg}
                    source={require('../../assets/corse.jpeg')}
                  />
                  <Text style={styles.content_view_offers_txt}>Corse</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.content_view_offers}>
                  <Image
                    style={styles.longContentViewOffersImg}
                    source={require('../../assets/alsace.jpg')}
                  />
                  <Text style={styles.content_view_offers_txt}>Alsace</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.content_view_offers}>
                  <Image
                    style={styles.longContentViewOffersImg}
                    source={require('../../assets/loire.jpeg')}
                  />
                  <Text style={styles.content_view_offers_txt}>Loire</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.titleHome}> Derni??res annonces :</Text>
        </View>

        <View style={styles.colContainer}>
          <ScrollView style={styles.scrollCol}>
            <View style={styles.wineCard}>
              <View style={styles.scrollContainer}>
                <ScrollView
                  styles={styles.productScroll}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{paddingRight: 17, flexDirection: 'row'}}>
                    <View style={styles.contentImg}>
                      <Image
                        style={styles.productImg}
                        source={require('../../assets/vin3.jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                        style={styles.productImg}
                        source={require('../../assets/vin3(1).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                        style={styles.productImg}
                        source={require('../../assets/vin3(2).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                        style={styles.productImg}
                        source={require('../../assets/vin3(3).jpeg')}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.wineInfo}>
                  <Text style={styles.titleDescription}> Nom du vin </Text>
                  <Text style={styles.yearDescription}> Ann??e </Text>
                  <Text style={styles.useDescription}> ??tat </Text>
                  <Text style={styles.priceDescription}> Prix </Text>
                  <View style={styles.echangeIcon}>
                    <MaterialCommunityIcons
                      style={styles.iconEchange}
                      name={'compare-horizontal'}
                      color={'#694BC0'}
                      size={40}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.iconHolder}
                  onPress={() => navigate.navigate('Product')}>
                  <View>
                    <Button
                      icon="chevron-right"
                      style={styles.iconTo}
                      color={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wineCard}>
              <View style={styles.scrollContainer}>
                <ScrollView
                    styles={styles.productScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                  <View style={{paddingRight: 17, flexDirection: 'row'}}>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3.jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(1).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(2).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(3).jpeg')}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.wineInfo}>
                  <Text style={styles.titleDescription}> Nom du vin </Text>
                  <Text style={styles.yearDescription}> Ann??e </Text>
                  <Text style={styles.useDescription}> ??tat </Text>
                  <Text style={styles.priceDescription}> Prix </Text>
                  <View style={styles.echangeIcon}>
                    <MaterialCommunityIcons
                        style={styles.iconEchange}
                        name={'compare-horizontal'}
                        color={'#694BC0'}
                        size={40}
                    />
                  </View>
                </View>
                <TouchableOpacity
                    style={styles.iconHolder}
                    onPress={() => navigate.navigate('Product')}>
                  <View>
                    <Button
                        icon="chevron-right"
                        style={styles.iconTo}
                        color={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wineCard}>
              <View style={styles.scrollContainer}>
                <ScrollView
                    styles={styles.productScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                  <View style={{paddingRight: 17, flexDirection: 'row'}}>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3.jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(1).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(2).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(3).jpeg')}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.wineInfo}>
                  <Text style={styles.titleDescription}> Nom du vin </Text>
                  <Text style={styles.yearDescription}> Ann??e </Text>
                  <Text style={styles.useDescription}> ??tat </Text>
                  <Text style={styles.priceDescription}> Prix </Text>
                  <View style={styles.echangeIcon}>
                    <MaterialCommunityIcons
                        style={styles.iconEchange}
                        name={'compare-horizontal'}
                        color={'#694BC0'}
                        size={40}
                    />
                  </View>
                </View>
                <TouchableOpacity
                    style={styles.iconHolder}
                    onPress={() => navigate.navigate('Product')}>
                  <View>
                    <Button
                        icon="chevron-right"
                        style={styles.iconTo}
                        color={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.wineCard}>
              <View style={styles.scrollContainer}>
                <ScrollView
                    styles={styles.productScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                  <View style={{paddingRight: 17, flexDirection: 'row'}}>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3.jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(1).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(2).jpeg')}
                      />
                    </View>
                    <View style={styles.contentImg}>
                      <Image
                          style={styles.productImg}
                          source={require('../../assets/vin3(3).jpeg')}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.wineInfo}>
                  <Text style={styles.titleDescription}> Nom du vin </Text>
                  <Text style={styles.yearDescription}> Ann??e </Text>
                  <Text style={styles.useDescription}> ??tat </Text>
                  <Text style={styles.priceDescription}> Prix </Text>
                  <View style={styles.echangeIcon}>
                    <MaterialCommunityIcons
                        style={styles.iconEchange}
                        name={'compare-horizontal'}
                        color={'#694BC0'}
                        size={40}
                    />
                  </View>
                </View>
                <TouchableOpacity
                    style={styles.iconHolder}
                    onPress={() => navigate.navigate('Product')}>
                  <View>
                    <Button
                        icon="chevron-right"
                        style={styles.iconTo}
                        color={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
