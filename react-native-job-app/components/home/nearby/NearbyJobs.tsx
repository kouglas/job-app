//@ts-nocheck
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from './nearbyJobs.style';
import { COLORS } from "../../../constants";
// import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from '../../../hooks/useFetch';
import nearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { NearbyJobCard } from "../..";


export default function NearbyJobs() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  })

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
          ))
        )}

      </View>
      
    </View>
  )
}