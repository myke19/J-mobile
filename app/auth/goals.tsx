import styles from "@/styles/tablestyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Goals() {
    const navigator = useRouter();
    const navigation = useRouter();

    const OverView = () => {
        navigation.push("/(tabs)/performance")
    }

    const Feedback = () => {
        navigation.push("/auth/feedback")
    }


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1}}>
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
                        <TouchableOpacity
                         onPress={() => navigation.navigate("/(tabs)/performance")}>
                        <Text>Overview</Text>
                        </TouchableOpacity>
                    <Text style={styles.line}>Goals and Feedback</Text>
                </View>

                <View style={styles.viewall}>
                    <Text style={{fontWeight: 'bold'}}>My Goals</Text>
                    <Text style={{fontWeight: 'bold'}}>View All</Text>
                </View>

                <View style={styles.overall}>
                <View style={styles.complete}>
                    <Text style={{marginLeft: 25, marginTop: 5, fontWeight: 'bold'}}>7/8<br></br></Text>
                     <small style={{marginLeft: 25, marginTop: 5}}>goals</small>
                    <small style={{marginLeft:10}}>Completed</small>
                    
                     <View style={{ flexDirection: 'row'}}>
                    <Ionicons name='star' size={15} color={'orange'}/>
                    <Text style={{color: 'green'}}>Excellent</Text>
                    </View>
                    </View>
                    <View style={styles.pro}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.ball}/>
                            <Text style={{marginLeft: 10}}>Completed    7(88%)</Text>
                            </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.smallball}/>
                            <Text style={{marginLeft: 10}}>In Progess    1(12%)</Text>
                            </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.handball}/>
                            <Text style={{ marginLeft: 10}}>No Started    0 (0%)</Text>
                            </View>
                    </View>
                    </View>

                    <View style={styles.reseach}>
                    <View style={styles.user}>
                        <View style={{marginLeft: 10}}>
                        <Ionicons name='person' size={20} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        </View>
                        <View style={{marginRight: 140}}>
                        <Text style={{fontWeight: 'bold'}}>User Reseach and Testing</Text>
                            <View style={{ flex: 1, flexDirection: 'row'}}>
                                <View style={{height: 15, width: 65, backgroundColor: 'blue', borderRadius: 5, marginTop: 3}}/>
                        <View style={styles.percent}/>
                            <Text style={{fontWeight: 'bold'}}>90%</Text>
                            </View>
                            <small>Due: 01 Jun 2026</small>
                            </View>
                          <View style={styles.up}>
                            <small style={{color: 'blue',fontSize: 8 }}>In Progress</small>
                            </View>  
                    </View>

                    <View style={styles.user}>
                        <View style={{marginLeft: 10}}>
                        <Ionicons name='copy' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        </View>
                        <View style={{marginRight: 140}}>
                        <Text style={{fontWeight: 'bold'}}>Improvw UI Design Process</Text>
                            <View style={{ flex: 1, flexDirection: 'row'}}>
                                <View style={{height: 15, width: 90, backgroundColor: 'green', borderRadius: 5, marginTop: 3}}/>
                        <View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>100%</Text>
                            </View>
                            </View>
                            <small>Due: 28 May 2026</small>
                            </View>
                          <View style={styles.up}>
                            <small style={{color: 'green', fontSize: 8 }}>Completed</small>
                            </View>  
                    </View>

                    <View style={styles.user}>
                        <View style={{marginLeft: 10}}>
                        <Ionicons name='copy' size={20} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        </View>
                        <View style={{marginRight: 140}}>
                        <Text style={{fontWeight: 'bold'}}>Complete Redesign Project</Text>
                            <View style={{ flex: 1, flexDirection: 'row'}}>
                                <View style={{height: 15, width: 90, backgroundColor: 'green', borderRadius: 5, marginTop: 3}}/>
                        <View>
                            <Text style={{fontWeight: 'bold', marginLeft: 5}}>100%</Text>
                            </View>
                            </View>
                            <small>Due: 28 May 2026</small>
                            </View>
                          <View style={styles.up}>
                            <small style={{color: 'green', fontSize: 8}}>Completed</small>
                            </View>  
                    </View>
                    </View>

                    <View style={styles.fed}>
                        <View style={styles.all}>
                            <Text style={{fontWeight: 'bold'}}>Feedback</Text>
                            <TouchableOpacity
                               onPress={() => navigation.navigate("/auth/feedback")}>
                                <Text style={{fontWeight: 'bold', color: 'blue'}}>View All</Text>
                               </TouchableOpacity>
                        </View>
                           <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/msuit.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Joshua Opaleke<small style={styles.man}>Manager</small>
                                <br></br>
                                <Text style={{fontSize: 12}}>Great work on the redesign! Your attention<br></br>
                                to detail and user focus is outstanding.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 80}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={10} color={'orange'} style={styles.icon}/>
                                4.8</Text>
                            </View>
                            </View>

                            <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/wsuit.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Ojo Joy<small style={styles.man}>Team Lead</small>
                                <br></br>
                                <Text style={{fontSize: 12}}>You consistently deliver high quality work<br></br>
                                and take initiative.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 85}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={10} color={'orange'} style={styles.icon}/>
                                4.5</Text>
                            </View>
                            </View>
                    </View>
                    </ScrollView>
        </SafeAreaView>
    );
}