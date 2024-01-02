// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { 
  COLORS, 
  icons, 
  images, 
  SIZES } from '../../constants';
import { 
  NearbyJobs, 
  PopularJobs, 
  ScreenHeaderBtn, 
  Welcome} from '../../components';

export default function Home() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          // headerStyle: { backgroundColor: COLORS.lightWhite },
          // headerShadowVisible: false,
        }}
      />
    </SafeAreaView>
  );
}

