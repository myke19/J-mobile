import styles from "@/styles/tablestyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Balance() {
    const navigator = useRouter();
    const navigation = useRouter();

    const Click = () => {
       navigator.push("/(tabs)/leave")
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
                    <TouchableOpacity
           onPress={() => navigation.navigate("/(tabs)/leave")}>
            <Text style={{fontSize:15}}><Ionicons name='chevron-back' size={24} color={'black'}/></Text>
           </TouchableOpacity>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                     style={{width: 100, height: 30,marginRight: 180}}
                     />
                </View>
                <View style={styles.req}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate("/(tabs)/leave")}>
                     <Text>My Requests</Text>
                    </TouchableOpacity>
                    <Text style={styles.line}>Leave Balance</Text>
                </View>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollcon}
                    >
                        <View style={styles.hor}>
                            <View style={{marginLeft: 5,marginTop: 10}}>
                            <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                            </View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>Annual Leave</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 18}}>3</Text>
                            <Text style={{marginLeft: 10}}>Days<br></br>Available</Text>
                        </View>
                        <View style={{marginLeft: 15}}>
                            <Text>Used: 18days<br></br>
                            <Text style={{fontWeight: 'bold'}}>Total: 21 days</Text></Text>
                        </View>
                        </View>
                        <View style={styles.hor}>
                            <View style={{marginLeft: 5,marginTop: 10}}>
                            <Ionicons name='code' size={20} color={'orange'} style={{padding: 3, backgroundColor: 'yellow'}}/>
                            </View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>Casual Leave</Text>
                            
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                                <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 18}}>3</Text>
                                <Text style={{marginLeft: 10}}>Days<br></br>Available</Text>
                            </View >
                            <View style={{marginLeft: 15}}>
                                <Text>Used: 3days<br></br>
                                <Text style={{fontWeight: 'bold'}}>Total: 21days</Text></Text>
                        </View>
                        </View>
                        <View style={styles.hor}>
                            <View style={{marginLeft: 5,marginTop: 10}}>
                            <Ionicons name='person' size={20} color={'orange'} style={{padding: 3, backgroundColor: 'yellow'}}/>
                            </View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>Sick Leave</Text>
                            
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                                <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 18}}>6</Text>
                                <Text style={{marginLeft: 10}}>Days<br></br>Available</Text>
                                </View>
                            <View style={{marginLeft: 15}}>
                                <Text>Used: 15days<br></br>
                                <Text style={{fontWeight: 'bold'}}>Total: 21days</Text></Text>
                                </View>
                        </View>
                        <View style={styles.hor}>
                            <View style={{marginTop: 10}}>
                            <Ionicons name='copy' size={20} color={'red'} style={{padding: 3, borderRadius:3, backgroundColor: 'lightpink'}}/>
                            </View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>Annual Leave</Text>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>Rejected</Text>
                            </View>
                            <View style={{marginLeft: 15}}>
                                <Text>Used: none<br></br>
                                <Text style={{fontWeight: 'bold'}}>Total: none</Text></Text>
                        </View>
                        </View>
                    </ScrollView>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight: 'bold', marginLeft: 15}}>Recent Leave</Text>
                        <Text style={{color: 'blue', marginRight: 30}}>View All</Text>
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
                        <Ionicons name='person' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
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
                </View>
                    
                    <View style={{marginTop: 30}}>
                    <TouchableOpacity
           onPress={() => navigation.navigate("/auth/request")}
           style={{ alignSelf: "center", marginTop: 5, padding: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 8, backgroundColor: 'blue'}}>
            <Text style={{ color: '#fff', fontSize:15}}>Request New Leave</Text>
           </TouchableOpacity>
                </View>
               {/*} <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          {/*} <Button style={styles.but}onPressIn={Click}>Request New Leave
              </Button>*/}
                

            </ScrollView>
        </SafeAreaView>
    );
}