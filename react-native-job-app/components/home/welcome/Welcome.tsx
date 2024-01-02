//@ts-nocheck
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";

export default function Welcome(){
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Kari</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}/>

        </View>

      </View>
    </View>
  )
}