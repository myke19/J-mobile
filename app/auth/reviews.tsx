import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Reviews() {
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

                <View style={styles.sac}>
                    <Ionicons name='chevron-back' size={25} color={'blue'}/>
                    <Text style={{fontWeight: 'bold'}}>Reviews</Text>
                </View>

                <View style={styles.cas}>
                    <View style={styles.saul}>
                        <Ionicons name='calendar-outline' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{marginRight: 150}}>Mid Year Review<br></br>
                        Review Period Jan - Jun 2026<br></br>
                        Review Date: 01 Jun 2026</Text>
                        <small style={{color: 'blue', padding: 3, backgroundColor: 'lightskyblue', borderRadius: 10}}>Upcoming</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>Q1 Request<br></br>
                        Review Period Jan - Mar 2026</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>End of the Year Review<br></br>
                        Review Period Jan - Dec 2025</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>Q4 Review<br></br>
                        Review Period Oct - Dec 2025</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>Q3 Review<br></br>
                        Review Period Jul - Sep 2025</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>Q2 Review<br></br>
                        Review Period Apr - Jul 2025</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>

                    <View style={styles.saul}>
                        <Ionicons name='checkbox' size={20} color={'green'} style={styles.checkbox}/>
                        <Text style={{marginRight: 150}}>Q1 Review<br></br>
                        Review Period Jan - Mar 2025</Text>
                        <small style={{color: 'green', padding: 3, backgroundColor: 'lightgreen', borderRadius: 10}}>Completed</small>
                    </View>
                    </View>
                         
        </ScrollView>
    </SafeAreaView>
    )
}
