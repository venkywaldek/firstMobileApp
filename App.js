import React, {useState} from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';

export default function App() {
  const [biodata, setBiodata] = useState('');
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={{margin: 10}}>
        <Image
          source={require('./assets/img.jpg')}
          style={{width: '100%', height: 300}}
          fadeDuration={2000}
          resizeMode="cover"
        />

        <View
          style={{
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'PoppinsBold',
              textAlign: 'center',
            }}>
            venkat-rosalie
          </Text>
        </View>
        <View
          style={{
            height: 100,
            margin: 10,
          }}>
          <Text style={{fontSize: 20}} numberOfLines={2}>
            {biodata.length > 0 ? biodata : 'Please enter your biodata'}{' '}
          </Text>
        </View>
        <TextInput
          onChangeText={text => setBiodata(text)}
          placeholder="Enter your biodata"
          onFocus={() => console.log('edited')}
          multiline
          editable={true}
          keyboardType="email-address"
          style={{
            margin: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            padding: 10,
          }}
        />
      </View>
    </ScrollView>
  );
}
