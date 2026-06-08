import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Submitted() {
    const navigator = useRouter();
    const navigation = useRouter();


    



    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
            <ScrollView style={styles.dim}>

                <View style={styles.wifi}>
                    <Text style={{fontWeight: 'bold'}}>9:41</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name='cellular-outline' size={20}/>
                    <Ionicons name='wifi' size={20} style={{marginLeft: 5}}/>
                    <Ionicons name='battery-full' size={20} style={{marginLeft: 5}}/>
                    </View>
                </View>

                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 180, marginLeft: 15, marginTop: 15}}>
                    <Ionicons name='chevron-back' size={25}/>
                    <View>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                    style={{width: 100, height:30}}/>
                    </View>
                </View>

                <View style={styles.req}>
                <TouchableOpacity
                               onPress={() => navigation.navigate("/auth/balance")}>
                                <Text style={styles.line}>My Requests</Text>
                               </TouchableOpacity>
                    <Text>Leave Balance</Text>
                </View>

                <View style={styles.cas}>
                    <View style={styles.saul}>
                        <Ionicons name='code' size={20} color={'orange'}/>
                        <Text style={{marginRight: 260}}>Casaul Leave<br></br>
                        4 June 2026<br></br>
                        Today</Text>
                        <small style={{color: 'orange'}}>Pending</small>
                    </View>
                    </View>

                    <View style={styles.fully}>
                    <View style={styles.suc}>
                        <Ionicons name='checkbox' size={90} color={'green'}/>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>           Request<br></br>
                         Submitted Successfully</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
