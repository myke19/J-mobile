import styles from "@/styles/main";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const navigator = useRouter();

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

                <View style={ styles.navBar}>
                <Image source={require("@/assets/images/face.jpg")}
                style={{ width: 30, height: 30, borderRadius: 15, overflow: 'hidden', marginTop: 15}}/>
                <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 10}}> Good Morning,<br>
                </br><Text style={{fontWeight: 'bold', fontSize: 18}}> Emeka Charles <MaterialCommunityIcons name='hand-wave' size={20} color={'orange'}/></Text></Text>
                </View>
                <Ionicons style={{marginLeft: 250, marginTop: 15}}name='notifications-outline' size={28}  color={'black'} />
            </View>


            <View>
                <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10, marginLeft: 17}}>Today's OverView</Text>
            </View>
            <View style={styles.screen}>
                 <View style={styles.container}>
                    <Ionicons name= 'checkbox' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                    <Text style={{marginRight: 100}}>Check-in<br></br>
                    09:02 AM<br></br><small style={{color: 'green', fontSize: 12}}>On time</small></Text>
                </View>
                    <View style={styles.container}>
                        <Ionicons name='calendar' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{marginRight: 50}}>Leave Balance<br></br>
                        12.5<br></br>Days</Text>
                    </View>
            </View>
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Ionicons name='star' size={24} color={'orange'} style={{padding: 3, backgroundColor: 'yellow'}}/>
                    <Text style={{marginRight: 50}}>My Performance<br></br>
                    4.6/5<br></br>
                    <small>Excellent</small></Text>
                </View>
                <View style={styles.container}>
                    <Ionicons name='menu' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                    <Text style={{marginRight: 50}}>Pending Tasks<br></br>
                    3<br></br>
                    <small>Tasks</small></Text>
                </View>
            </View>


            <View style={styles.bar}>
                    <View style={styles.msv}>
                <Text style={{fontWeight: 'bold', marginLeft: 5}}>My Schedule</Text>
                <Text style={{color: 'blue', marginRight: 10}}> View All</Text>
                </View>
                <View style={styles.ki}>
                        <View style={styles.green}/>
                        <Text style={{marginRight: 250, marginLeft: 5}}>Team Standup<br></br>
                        10:00-10:30AM</Text>
                        <Ionicons name='chevron-forward' size={20} color={'black'}
                        />
                        </View>

                        <View style={styles.ki}>
                        <View style={styles.red}/>
                        <Text style={{marginRight: 250, marginLeft: 5}}>Project Review<br></br>
                        02:00-03:30PM</Text>
                        <Ionicons name='chevron-forward' size={20} color={'black'}/>
                        </View>
                        <View style={styles.ki}>
                        <View style={styles.orange}/>
                        <Text style={{marginRight: 250, marginLeft: 5}}>With Manager<br></br>
                        04:00-04:30PM</Text>
                        <Ionicons name='chevron-forward' size={20} color={'black'}/>
                        </View>
                   </View>


                      <View style={styles.row}>
                        <View style={{flex: 1, justifyContent: 'flex-start'}}>
                        <Text style={{fontWeight: 'bold', marginRight: 325, marginTop: 5}}>Quick Actions</Text>
                        </View>
                        <View style={styles.wrap}>
                        <View style={styles.roll}>
                        <Ionicons name='calendar' size={20} color={'blue'}/>
                        <Text style={styles.itemtext}>Request<br></br> Leave</Text>
                        </View>
                        <View style={styles.roll}>
                         <Ionicons name='copy' size={20} color={'blue'}/>
                        <Text style={styles.itemtext}> View<br></br> Payslip</Text>
                        </View>
                        <View style={styles.roll}>
                        <Ionicons name='download' size={20} color={'blue'}/>
                        <Text style={styles.itemtext}> Upload<br></br>Document</Text>
                        </View>
                        <View style={styles.roll}>
                        <Ionicons name='person' size={20} color={'blue'}/>
                        <Text style={styles.itemtext}>Directory</Text>
                        </View>
                        </View>
                      </View>
        </ScrollView>
        </SafeAreaView>
    );
}