//@ts-nocheck
import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from './popularJobs.style';
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";


export default function PopularJobs() {
  const Router = useRouter();

  const isLoading = false

  const error = false

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />  
        ) : error ? (
          <Text>theres a problem</Text>
        ) : (
          <FlatList
            data={[1,2,3,4,5,6,7,8]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
          />
        )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium  }}
              horizontal
           />
        )}

      </View>
      
    </View>
  )
}