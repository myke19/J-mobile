import styles from "@/styles/tablestyle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
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

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                    style={{width: 100, height:30}}/>
                    </View>

                <View style={styles.feedback}>
                        <View style={styles.all}>
                            <Ionicons name='chevron-back' size={25} color={'blue'}/>
                            <Text style={{fontWeight: 'bold'}}>Feedback</Text>
                        </View>

                           <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/msuit.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Joshua Opaleke<small style={styles.man}>Manager</small>
                                <br></br>
                                <Text style={{fontSize: 10}}>Great work on the redesign! Your attention<br></br>
                                to detail and user focus is outstanding.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 80}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                4.8</Text>
                            </View>
                            </View>
                            

                            <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/wsuit1.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Rebecca Karian<small style={styles.man}>Sales</small>
                                <br></br>
                                <Text style={{fontSize: 10}}>The UX feedback is really excellent.<br></br>
                                Customers are able to make payment easily.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 80}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                4.7</Text>
                            </View>
                            </View>

                            <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/msuit1.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Onifade Adeola<small style={styles.man}>Product Designer</small>
                                <br></br>
                                <Text style={{fontSize: 11}}>I love the redesign of the splash screen.<br></br>
                                Great work.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 85}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                5.0</Text>
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
                                <Text style={{fontSize: 10.5}}>You consistently deliver high quality work<br></br>
                                and take initiative.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 85}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                4.5</Text>
                            </View>
                            </View>

                            
                           <View style={styles.josh}>
                            <View style={{marginLeft: 10}}>
                            <Image source={require('@/assets/images/msuit2.jpg')}
                            style={{width: 30, height: 30, borderRadius: 6}}/>
                            </View>

                            <View>
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>Samuel Goodwill<small style={styles.man}>Frontend Developer</small>
                                <br></br>
                                <Text style={{fontSize: 1}}>Nice work, keep it up.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 80}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                4.5</Text>
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
                                <Text style={{fontSize: 10.5}}>Weldone Charles. I appreciate the effort.<br></br>
                                2 days ago</Text></Text>
                                </View>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 85}}>
                                <Text style={styles.star}>
                                <Ionicons name='star' size={15} color={'orange'} style={styles.icon}/>
                                4.9</Text>
                            </View>
                            </View>
                    </View>

                
                         
        </ScrollView>
    </SafeAreaView>
    )
}
