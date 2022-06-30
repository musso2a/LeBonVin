import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './user.style';
import {mdiCog} from '@mdi/js';
import NoUser from '../onboarding/login/components/auth.error.link';
import {Button, Divider} from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function User() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function Logout() {
    auth()
      .signOut()
      .then(() => this.props.navigation.navigate('User'))
      .then(() => console.log('User signed out!'));
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }
  if (!user) {
    return (
      <View>
        <NoUser />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.accountContainer}>
          <View style={styles.parameterContainer}>
            <TouchableOpacity style={styles.iconCog} onPress={Logout}>
              <View>
                <IonIcons name="settings-sharp" color={'#694BC0'} size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.profilPicContainer}>
            <View style={styles.profilContainerLeft}>
              <Image
                style={styles.accountImg}
                source={require('../../assets/wineman.jpeg')}
              />
            </View>
            <View style={styles.profilContainerRight}>
              <Text style={styles.nameTitle}>Andrea Musso</Text>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.userNote}>Note</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.caveTitle}>Ma Cave:</Text>
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
                  <Text style={styles.titleDescription}> name </Text>
                  <Text style={styles.yearDescription}> Année </Text>
                  <Text style={styles.useDescription}> état </Text>
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
                <TouchableOpacity style={styles.iconHolder}>
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
