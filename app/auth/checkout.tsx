import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Checkout() {
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
                
                <View style={styles.tea}>
                    <Ionicons name='chevron-back' size={24} color={'black'}/>
                    <Image source={require('@/assets/images/Hrflow.png')}
                    style={{width: 100, height: 30, marginRight: 180}}/>
                </View>
                <View style={styles.nav}>
                    <Ionicons name='chevron-back' size={24} color={'black'}/>
                    <Text style={{fontWeight: 'bold'}}>May28, 2026</Text>
                    <Ionicons name='chevron-forward' size={24}/>
                </View>
                <View style={styles.ate}>
                    <Text style={{borderWidth: 1, borderColor:'lightgrey',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Mon<br></br>
                    25</Text>
                    <Text style={{borderWidth: 1, borderColor:'lightgrey',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Tue<br></br>
                    26</Text>
                    <Text style={{borderWidth: 1, borderColor:'lightgrey',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Wed<br></br>
                    27</Text>
                    <Text style={{borderWidth: 1, borderColor:'lightgrey',
                        borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4, color:'#fff', backgroundColor:'blue'}}>Thu<br></br>
                    28</Text>
                    <Text style={{borderWidth: 1, borderColor:'lightgrey',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Fri<br></br>
                    29</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={{overflow:'hidden'}}>09:02:15 AM<br></br><small style={{color:'green'}}>You're checked in</small></Text>
                    </View>
                    < View style={styles.nav}>
                    <Text>Check -in<br></br><Text style={{fontWeight: 'bold'}}>
                    09:02 AM</Text></Text>
                    <Text>Location<br></br><Text style={{fontWeight: 'bold'}}>
                    Office<View style={styles.gre}/></Text></Text>
                    </View>
                    <View style={styles.chek}>
                        <View style={styles.box}>
                        <Text style={{color: '#fff'}}>Check-Out</Text>
                        </View>
                    </View>
                    <View style={styles.bar}>
                        <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 10}}>Today's Timeline</Text>
                        <View style={styles.jb}>
                        <View style={styles.cicle}/>
                        <Text style={{marginRight: 270}}>Check-in</Text>
                            <Text>--:--AM</Text>
                        </View>
                        <View style={styles.jb}>
                        <View style={styles.cic}/>
                        <View style={{ flexDirection: 'row', backgroundColor: 'lightgrey', borderRadius: 6, padding: 3}}>
                        <Text style={{marginRight: 255}}>Break Start</Text>
                            <Text>01:00PM</Text>
                            </View>
                        </View>

                        <View style={styles.jb}>
                        <View style={styles.cic}/>
                        <Text style={{marginRight: 260}}>Break End</Text>
                            <Text>01:30PM</Text>
                            </View>

                            <View style={styles.jb}>
                        <View style={styles.cic}/>
                        <Text style={{marginRight: 255}}>Check-out</Text>
                            <Text>05:00PM</Text>
                            </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}
