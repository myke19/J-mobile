import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountSuccessScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View>
                <View style={styles.wifi}>
                    <Text style={{fontWeight: 'bold'}}>9:41</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name='cellular-outline' size={20}/>
                    <Ionicons name='wifi' size={20} style={{marginLeft: 5}}/>
                    <Ionicons name='battery-full' size={20} style={{marginLeft: 5}}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 210, marginLeft: 15, marginTop: 15}}>
                    <TouchableOpacity
           onPress={() => navigation.navigate("/(tabs)/flash")}>
            <Text style={{fontSize:15}}><Ionicons name='chevron-back' size={24} color={'black'}/></Text>
           </TouchableOpacity>
                    <View>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                    style={{width: 100, height:30}}/>
                    </View>
                </View>
                </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 24,
            paddingTop: 80,
          }}
        >
          <Text
            style={{
              fontSize: 100,
            }}
          >
            ✅
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 22,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Account Created Successfully
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{
              backgroundColor: "blue",
              marginTop: 60,
              width: "100%",
              borderRadius: 10,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}