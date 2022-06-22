import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './product.screen.style';
import colors from '../../themes/colors.config';
import {Divider, Button} from 'react-native-paper';
import {BaseButton} from 'react-native-gesture-handler';

export default function Product() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <ScrollView
              styles={styles.productScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{paddingRight: 17, flexDirection: 'row'}}>
                <View style={styles.contentImg}>
                  <Image
                    style={styles.productImg}
                    source={require('../../assets/vignes.jpeg')}
                  />
                </View>
                <View style={styles.contentImg}>
                  <Image
                    style={styles.productImg}
                    source={require('../../assets/vignes.jpeg')}
                  />
                </View>
                <View style={styles.contentImg}>
                  <Image
                    style={styles.productImg}
                    source={require('../../assets/vignes.jpeg')}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.wineName}> Nom Vin </Text>
            <Text style={styles.wineYear}> Année du vin </Text>
            <Text style={styles.wineCondition}> état du Vin </Text>
            <Text style={styles.winePrice}> Prix du Vin </Text>
            <Text style={styles.wineDescription}> Description: </Text>
            <Text>
              {' '}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt.{' '}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.wineNote}>
            <View style={styles.webInfoContainer}>
              <Text style={styles.wineInfo}>Nom vin </Text>
              <Text style={styles.wineInfo}> Note du vin </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.buyButton}
              onPress={() => console.log('Pressed')}>
              ACHETER
            </Button>
            <Button
              mode="contained"
              style={styles.exchangeButton}
              onPress={() => console.log('Pressed')}>
              <Text style={{color: colors.lightPurple}}> ECHANGER</Text>
            </Button>
          </View>
          <TouchableOpacity>
            <View style={styles.userBox}>
              <Image
                style={styles.accountImg}
                source={require('../../assets/vignes.jpeg')}
              />
              <View style={styles.messagePreview}>
                <Text style={styles.userName}>Andrea Musso</Text>
                <Text style={styles.userNote}>"Note"</Text>
                <Text style={styles.userBottle}>nombres d'annonces</Text>
              </View>
              <View>
                <Button icon="chevron-right" style={styles.iconTo} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
