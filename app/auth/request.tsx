import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Request() {
    const navigator = useRouter();
    const navigation= useRouter();

    const [startDate, setStartDate] = useState("");
    const [stopDate, setStopDate] = useState("");
    const [leave, setLeave] = useState("");
    const [upload, setUpload] = useState("");

    const For = () => {
    navigation.push("/auth/checked")
  }

  const Request = () => {
    navigation.push("/(tabs)/leave")
  }



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
                    <TouchableOpacity
                         onPress={() => navigation.navigate("/(tabs)/leave")}>
                        <Text><Ionicons name='chevron-back' size={25}/></Text>
                        </TouchableOpacity>
                    <View style={{backgroundColor: 'blue'}}>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                    style={{width: 100, height:30}}/>
                    </View>
                </View>


                <View style={styles.in}>
                    <View>
                    <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5}}>Leave Request</Text>
                </View>

                
                <View>
                    <Text style= {styles.start}>Start Date</Text>
                    <View style={styles.inside}>
                        <Ionicons name='calendar-outline' size={20}/>
          <TextInput
           value={startDate} 
           onChangeText={(val) => {
           setStartDate(val);
          }}
           placeholder="28 May 2026"
           style={styles.jos}
           />
                </View>
                </View>

                    <View>
                    <Text style= {styles.stop}>Stop Date</Text>
                    <View style={styles.inside}>
                    <Ionicons name='calendar-outline' size={20}/>
          <TextInput
           value={stopDate} 
           onChangeText={(val) => {
           setStopDate(val);
          }}
           placeholder="28 May 2026"
           style={styles.jos}
           />
           </View>
           </View>

                <View>
                    <Text style= {styles.reason}>Reason for Leave</Text>
          <TextInput
           value={leave} 
           onChangeText={(val) => {
           setLeave(val);
          }}
           placeholder="Enter reason for leave"
           style={styles.wide}
           />
                </View>

                <View style={{marginTop: 20}}>
                    <Text style= {styles.doc}>Upload Document</Text>
                    <View style={styles.inside}>
                        <Ionicons name='download' size={20}/>
          <TextInput
           value={upload} 
           onChangeText={(val) => {
           setUpload(val);
          }}
           placeholder="Upload medical report, etc"
           style={styles.jos}
           />
                </View>
                </View>

                <View style={{marginTop: 30}}>
                    <TouchableOpacity
           onPress={() => navigation.navigate("/auth/submitted")}
           style={{ alignSelf: "center", marginTop: 5, padding: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 8, backgroundColor: 'blue'}}>
            <Text style={{ color: '#fff', fontSize:15}}>Submit Request</Text>
           </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
