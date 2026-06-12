import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Hrflow() {
   const navigation = useRouter();

   const onboard = () => {
    navigation.push("/onboard")
   }



   return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
        <View style={{justifyContent: 'flex-start'}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("/onboard")}>
            <Ionicons name='chevron-back' size={25} color={'blue'}/>
            </TouchableOpacity>
        </View>
        <View>
            <Image source={require("/assets/images/Hrflow1.jpeg")}
            style={{width: 250, height: 250}}/>
        </View>
        <View style={styles.butt}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Work Better, Together</Text>
        </View>
    </SafeAreaView>
   )
}