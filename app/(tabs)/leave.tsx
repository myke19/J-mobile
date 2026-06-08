import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function LeaveScreen() {
    const navigator = useRouter();
    const navigation = useRouter();

    const Click = () => {
        navigator.push("/auth/request")
    }

    const Request = () => {
        navigation.push("/auth/balance")
    }



    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
            <ScrollView>
                <View style={styles.wifi}>
                    <Text style={{fontWeight: 'bold'}}>9:41</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='cellular-outline' size={20}/>
                    <Ionicons name='wifi' size={20} style={{marginLeft: 5}}/>
                    <Ionicons name='battery-full' size={20} style={{marginLeft: 5}}/>
                    </View>
                </View>

                <View style={styles.leav}>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                     style={{width: 100, height: 30,}}
                     />
                </View>

                <View style={styles.req}>
                    <Text style={styles.line}>My Requests</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("/auth/balance")}>
                    <Text>Leave Balance</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cas}>
                    <View style={styles.saul}>
                        <Ionicons name='code' size={20} color={'orange'} style={{padding: 3, backgroundColor: 'yellow'}}/>
                        <Text style={{marginRight: 260}}>Casaul Leave<br></br>
                        4 June 2026<br></br>
                        Today</Text>
                        <small style={{color: 'orange'}}>Pending</small>
                    </View>
                    <View style={styles.saul}>
                        <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{marginRight: 200}}>Annual Leave<br></br>
                        20 May- 23 May 2026<br></br>
                        3 days</Text>
                        <small style={{color: 'green'}}>Approved</small>
                    </View>
                    <View style={styles.saul}>
                        <Ionicons name='person-outline' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{marginRight: 210}}>Sick Leave<br></br>
                        12 Apr- 16 Apr 2026<br></br>
                        4 days</Text>
                        <small style={{color: 'green'}}>Approved</small>
                    </View>
                    <View style={styles.saul}>
                        <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{marginRight: 215}}>Annual Leave<br></br>
                        01 Apr- 04 Apr 2026<br></br>
                        3 days</Text>
                        <small style={{color: 'red'}}>Rejected</small>
                    </View>
                    <View style={styles.saul}>
                        <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{marginRight: 215}}>Annual Leave<br></br>
                        11 Jan- 13 Jan 2026<br></br>
                        3 days</Text>
                        <small style={{color: 'green'}}>Approved</small>
                    </View>
                    <View style={styles.saul}>
                        <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{marginRight: 210}}>Annual Leave<br></br>
                        19  Oct- 23 Oct 2025<br></br>
                        4 days</Text>
                        <small style={{color: 'green'}}>Approved</small>
                    </View>

                    <View style={{marginTop: 30}}>
                    <TouchableOpacity
           onPress={() => navigation.navigate("/auth/request")}
           style={{ alignSelf: "center", marginTop: 5, padding: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 8, backgroundColor: 'blue'}}>
            <Text style={{ color: '#fff', fontSize:15}}>Request New Leave</Text>
           </TouchableOpacity>
                </View>
                </View>
                  {/*}  <View style={{marginTop: 20,}}>
           <Button style={styles.but}onPressIn={Click}>Request New Leave
              </Button>
                </View>*/}
                

            </ScrollView>
        </SafeAreaView>
    );
}