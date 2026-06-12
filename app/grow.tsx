import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





export default function Grow() {
    const navigation = useRouter();



    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <ScrollView>
                <View>
                    <Image source={require("@/assets/images/slide1.jpg")}
                    style={{width: "100%", height: 250}}/>
                </View>

                <View style={{marginTop: 30, marginLeft: 15}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Grow Together</Text>
                    <Text style={{marginTop: 10}}>Track your performance, achieve your goals and<br></br>
                    grow with your organization.</Text>
                </View>

                <View>
                    <TouchableOpacity
                           onPress={() => navigation.navigate("/invite")}
                           style={{ alignSelf: "center", marginTop: 50, padding: 10, paddingLeft: 120, paddingRight: 120, borderRadius: 8, backgroundColor: 'blue', borderWidth: 2, borderColor: 'blue'}}>
                            <Text style={{ color: '#fff', fontSize:15}}>Let's Go!</Text>
                     </TouchableOpacity>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}