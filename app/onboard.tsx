import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Onboard() {
    const navigation = useRouter();


    const Click = () => {
        navigation.push("/")
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require("@/assets/images/Hrflow1.jpeg")}
                style={{width: 250, height: 250}}/>
            </View>
            <View style={{ flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to<br></br><Text style={{color: 'blue'}}>
                    HRflow Africa</Text></Text>
            <View>
            <Text>Your all-in-one HR solution to simplify work,<br></br>
                empower teams and drive perfomance. </Text>
            </View>
            </View>
            <View>
                <TouchableOpacity
                           onPress={() => navigation.navigate("/boarding")}
                           style={{ alignSelf: "center", marginTop: 30, padding: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 8, backgroundColor: 'blue'}}>
                            <Text style={{ color: '#fff', fontSize:15}}>Get Started</Text>
                           </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
           onPress={() => navigation.navigate("/invite")}
           style={{ alignSelf: "center", marginTop: 5, padding: 10, paddingLeft: 120, paddingRight: 120, borderRadius: 8, backgroundColor: '#fff', borderWidth: 2, borderColor: 'blue'}}>
            <Text style={{ color: 'blue', fontSize:15}}>Skip</Text>
           </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                <Text>Already have an account?<Text style={{color: 'blue', fontWeight: 'bold'}}>Log In</Text></Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const stykes = StyleSheet.create( {

})