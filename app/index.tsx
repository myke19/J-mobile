import styles from "@/styles/main";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
//import { useSQLiteContext } from 'expo-sqlite';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
     

    const navigator = useRouter();


    return (
        <SafeAreaView style={{ backgroundColor: "blue"}}>
        <ScrollView>
            <View style={{flex: 1}}>
                <View style={styles.ground}>
                    
                <Text style={{fontWeight: 'bold', color: '#fff'}}>Welcome!</Text>
                <Text style={{color: '#fff'}}>Please, click on the above arrow<MaterialCommunityIcons name='hand-wave' size={25} color={'orange'}/></Text>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}