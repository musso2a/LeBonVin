import React, {useState, useEffect, useRef} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './form.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {Divider, Switch} from 'react-native-paper';

const condition = ['Excellent', 'Bon', 'Moyen', 'Mauvais'];

export default class Form extends React.Component {
  render() {
    // const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
      <View style={styles.main}>
        <View style={styles.addContainer}>
          <TouchableOpacity style={{justifySelf: 'center'}}>
            <View style={{justifySelf: 'center'}}>
              <Image
                style={styles.accountImg}
                source={require('../../assets/plus.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.secondSection}>
          <View style={styles.optionContainer}>
            <Text style={styles.titleText}>Nom :</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Ex: Petrus ,Cheval Blanc'}
              selectionColor={'#694BC0'}
              clearButtonMode={'while-editing'}
            />
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.titleText}>Prix :</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.titleText}>Année :</Text>
            <TextInput style={styles.textInput} keyboardType={'number-pad'} />
          </View>
          <View style={styles.selectContainer}>
            <Text style={styles.titleState}>état : *</Text>
            <SelectDropdown
              data={condition}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Choisir...'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#694BC0'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.titleText}>Description : (optionnel)</Text>
            <TextInput
              style={styles.descriptionInput}
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={styles.switchContainer}>
            <Switch
              // value={isSwitchOn}
              //onValueChange={onToggleSwitch}
              color={'#694BC0'}
              style={styles.switch}
            />
            <View style={styles.switchTextCtn}>
              <Text style={styles.switchText}>
                Je suis ouvert a l’échange pour cette bouteille
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Ajouter dans ma cave</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
