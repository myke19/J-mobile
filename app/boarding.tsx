import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Boarding() {
    const navigation = useRouter();

    


    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <ScrollView>
            <View>
                <Image source={require("@/assets/images/hr.jpg")}
                style={{width: "100%", height: 250}}/>
            </View>
            <View style={{marginTop: 20, marginLeft: 15}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 10}}>Stay Organized</Text>
                <Text style={{marginTop: 10}}>Access attendance, request leaves, check<br></br>
                updates and never miss important notification.</Text>
            </View>

            <View style={{padding: 20, width: "100%"}}>
                <TouchableOpacity
                           onPress={() => navigation.navigate("/grow")}
                           style={{ alignSelf: "center", marginTop: 50, padding: 10, paddingLeft: 150, paddingRight: 150, borderRadius: 8, backgroundColor: 'blue'}}>
                            <Text style={{ color: '#fff', fontSize:15}}>Next</Text>
                           </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}