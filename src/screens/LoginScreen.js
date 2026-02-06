import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Back!</Text>
      <View style={{ marginTop: 20, width: '90%' , padding: 10,justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          placeholder="Email"
          style={{ width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 5 }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{ width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}
        />
        <TouchableOpacity style={{ width: '100%', padding: 10, backgroundColor: '#7c3aed', borderRadius: 20, marginTop: 20 }}>
            <Text style={{ color: 'white', textAlign: 'center',margin:5 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}