import * as React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './chatComponents.style';
import {Button} from 'react-native-paper';

function MyChat() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.messageBox}>
            <Image
              style={styles.accountImg}
              source={require('../../../assets/vignes.jpeg')}
            />
            <View style={styles.messagePreview}>
              <Text>Test message lol </Text>
            </View>
            <View>
              <Button icon="chevron-right" style={styles.iconTo} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageBox}>
            <Image
              style={styles.accountImg}
              source={require('../../../assets/vignes.jpeg')}
            />
            <View style={styles.messagePreview}>
              <Text>Test message lol </Text>
            </View>
            <View>
              <Button icon="chevron-right" style={styles.iconTo} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageBox}>
            <Image
              style={styles.accountImg}
              source={require('../../../assets/vignes.jpeg')}
            />
            <View style={styles.messagePreview}>
              <Text>Test message lol </Text>
            </View>
            <View>
              <View>
                <Button icon="chevron-right" style={styles.iconTo} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageBox}>
            <Image
              style={styles.accountImg}
              source={require('../../../assets/vignes.jpeg')}
            />
            <View style={styles.messagePreview}>
              <Text>Test message lol </Text>
            </View>
            <View>
              <Button icon="chevron-right" style={styles.iconTo} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default MyChat;
