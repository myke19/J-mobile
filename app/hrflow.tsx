import styles from "@/styles/main";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Hrflow() {
   const navigation = useRouter();



   return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
            <Image source={require("@/assets/images/Hrflow1.jpeg")}
            style={{width: 250, height: 250}}/>
        </View>
        <View style={styles.butt}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Work Better, Together</Text>
        </View>
    </SafeAreaView>
   )
} 