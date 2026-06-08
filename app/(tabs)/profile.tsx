import styles from "@/styles/tablestyle";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  

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

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>My Profile</Text>
            </View>
            <View style={styles.my}>
                <View style={styles.ima}>
                    <Image source={require('@/assets/images/face.jpg')}
                    style={{width: 50, height: 50, borderRadius: 25, overflow: 'hidden'}}/>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Emeka Charles<small style={styles.emp}>Employee ID: EMP12456</small><br></br>
                    <br></br>
                    <Text>Product Designer</Text><br></br>
                    <br></br><Ionicons name='person' size={20} color={''}/>Product Team
                    <Text style={styles.time}>Full Time</Text></Text>
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 15, alignItems: 'center'}}>
                    <Ionicons name='person-circle' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                    <Text style={{fontWeight: 'bold', marginLeft: 10}}>Personal Information</Text>
                </View>
            </View>
            <View style={styles.info}>
                <View style={styles.mail}>
                    <Ionicons name='mail' size={25} color={'lightpink'} style={{padding: 3, backgroundColor: 'orange'}}/>
                    <Text style={{fontWeight: 'bold', marginRight: 180}}>Email<br></br>
                    <small style={{fontSize: 10}}>emekacharles1@gmail.com</small></Text>
                    <Ionicons name='chevron-forward' size={20} color={''} style={{marginRight: 50}}/>
                </View>
            
                    <View style={styles.mail}>
                        <Ionicons name='call' size={25} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 190}}>Personal Number<br></br>
                        <small style={{fontSize: 10}}>+2348135996666</small></Text>
                        <Ionicons name="chevron-forward" size={20} color={''} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='card' size={25} color={'orange'} style={{padding: 3, backgroundColor: 'yellow'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 220}}>Employee ID<br></br>
                        <small style={{fontSize: 10}}>EMP1246</small></Text>
                        <Ionicons name="chevron-forward" size={20} color={''} style={{marginRight: 50}}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 15, alignItems: 'center'}}>
                        <Ionicons name='bag' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>Work Imformation</Text>
                </View>

                <View style={styles.workinfo}>
                    <View style={styles.mail}>
                        <Ionicons name='person-circle' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 230}}>Manager<br></br>
                        <small style={{fontSize: 10}}>Joshua Opaleke</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='arrow-undo' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 230}}>Department<br></br>
                        <small style={{fontSize: 10}}>Product</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>
                    <View style={styles.mail}>
                        <Ionicons name='calendar' size={25} color={'lightpink'} style={{padding: 3, backgroundColor: 'orange'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 230}}>Date Joined<br></br>
                        <small style={{fontSize: 10}}>12 Jan 2023</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>
                    <View style={styles.mail}>
                        <Ionicons name='time' size={25} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 240}}>Work Mode<br></br>
                        <small style={{fontSize: 10}}>Hybrid</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 15, alignItems: 'center'}}>
                        <Ionicons name='settings-outline' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>Account Settings</Text>
                </View>

                <View style={styles.info}>
                    <View style={styles.mail}>
                        <Ionicons name='notifications' size={25} color={'light'} style={{padding: 3, backgroundColor: 'purple'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 150}}>Notification<br></br>
                        <small style={{fontSize: 10}}>Manage your alerts and preference</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='shield' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 150}}>Security<br></br>
                        <small style={{fontSize: 10}}>Password, 2FA and account security</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='cog' size={25} color={''} style={{padding: 3, backgroundColor: 'lightpink'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 120}}>Preference<br></br>
                        <small style={{fontSize: 10}}>Language, theme, and other preferences</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>
                    </View>

                    <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 15, alignItems: 'center'}}>
                        <Ionicons name='help-circle' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginLeft: 10}}>Help & Support</Text>
                    </View>

                    <View style={styles.info}>
                    <View style={styles.mail}>
                        <Ionicons name='information-circle' size={25} color={'blue'} style={{padding: 3, backgroundColor: 'lightblue'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 235}}>Help Center<br></br>
                        <small style={{fontSize: 10}}>FAQs and guides</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='text' size={25} color={'green'} style={{padding: 3, backgroundColor: 'lightgreen'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 190}}>Contact HR<br></br>
                        <small style={{fontSize: 10}}>Get in touch with HR team</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>

                    <View style={styles.mail}>
                        <Ionicons name='triangle' size={25} color={''} style={{padding: 3, backgroundColor: 'orange'}}/>
                        <Text style={{fontWeight: 'bold', marginRight: 195}}>Report an Issue<br></br>
                        <small style={{fontSize: 10}}>Report a bug or problem</small></Text>
                        <Ionicons name='chevron-forward' size={20} style={{marginRight: 50}}/>
                    </View>
                    </View>

                    <View style={styles.log}>
                        <Ionicons name='log-out' size={25} color={'#fff'}/>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Log Out<br></br>
                       <small style={{fontSize: 10, color: 'lightgrey'}}>Sign out from your account</small></Text>
                    </View>
    
        </ScrollView>
        </SafeAreaView>
    );
}

