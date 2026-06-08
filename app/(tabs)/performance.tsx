import styles from "@/styles/tablestyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Performance() {
    const navigator = useRouter();
    const navigation = useRouter();

    const Feedback = () => {
        navigation.push("/auth/goals")
    }

    const Reviews = () => {
        navigation.push("/auth/reviews")
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

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                         style={{width: 100, height:30}}/>
                    </View>
                
                <View style={styles.per}>
                    <Text style={styles.line}>Overview</Text>
                    <View>
                                <TouchableOpacity
                               onPress={() => navigation.navigate("/auth/goals")}>
                                <Text>Goals and Feedback</Text>
                               </TouchableOpacity>
                                    </View>
                </View>

                <View style={styles.rate}>
                    <Text style={{fontWeight: 'bold', marginLeft: 15, marginTop: 10}}>Overall Rating</Text>
                <View style={styles.exc}>
                    <Text style={{marginLeft: 17, marginTop: 20, fontWeight: 'bold', fontSize: 18}}>4.6<br></br>
                     <small> /5</small></Text>
                     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: 20}}>
                    <Ionicons name='star' size={20} color={'orange'}/>
                    <Text>Excellent</Text>
                </View>
                </View>
                <View style={styles.go}>
                    <View style={{marginLeft: 10}}>
                   <Ionicons name='checkbox' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                   </View>
                   <Text style={{marginLeft: 15}}>Goals Completed<br></br>
                   <Text style={{fontWeight: 'bold'}}>7/8</Text></Text> 
                </View>
                <View style={styles.go}>
                    <View style={{marginLeft: 10}}>
                   <Ionicons name='bar-chart' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                   </View>
                   <Text style={{marginLeft: 15}}>KPI Achievement<br></br>
                   <Text style={{fontWeight: 'bold'}}>92%</Text></Text> 
                </View>
                </View>


                <View style={styles.rev}>
                    <View style={styles.msv}>
                    <Text style={{fontWeight: 'bold'}}>Reviews</Text>
                                <TouchableOpacity
                               onPress={() => navigation.navigate("/auth/reviews")}>
                                <Text style={{fontWeight: 'bold', color: 'blue'}}>View All</Text>
                               </TouchableOpacity>
                    </View>
                    <View style={styles.mid}>
                        <View style={{marginLeft: 15}}>
                         <Ionicons name='calendar' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                         </View>
                         <View style={{marginRight: 130}}>
                         <Text style={{fontWeight: 'bold'}}>Mid Year Review</Text>
                         <small>Review: Period Jan - Jun 2026<br></br>
                         Review Date: 01 Jun 2026</small>
                         </View>
                         <View style={styles.up}>
                            <small style={{color: 'blue'}}>Upcoming</small>
                         </View>
                         </View>
                         <View style={styles.mid}>
                         <View style={{marginLeft:15}}>
                            <Ionicons name='checkbox' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                         </View>
                         <View style={{marginRight: 130}}>
                            <Text style={{fontWeight: 'bold'}}>Q1 Review</Text>
                            <br></br><small>Review Period: Jan - Mar 2026</small>
                         </View>
                         <View style={styles.com}>
                            <small style={{color: 'green'}}>Completed</small>
                         </View>
                         </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}