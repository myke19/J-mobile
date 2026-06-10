import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Checkin() {
    const navigator = useRouter();
    const navigation= useRouter();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [number, setNumber] = useState("");

    const For = () => {
    navigation.push("/auth/checked")
  }



    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
            <ScrollView style={styles.dim}>
                <View>
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
           onPress={() => navigation.navigate("/(tabs)/flash")}>
            <Text style={{fontSize:15}}><Ionicons name='chevron-back' size={24} color={'black'}/></Text>
           </TouchableOpacity>
                    <View>
                    <Image source={require('@/assets/images/Hrflow1.jpeg')}
                    style={{width: 100, height:30}}/>
                    </View>
                </View>

                <View style={styles.ate}>
                    <Text style={{borderWidth: 1, borderColor:'light',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Mon<br></br>
                    25</Text>
                    <Text style={{borderWidth: 1, borderColor:'light',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Tue<br></br>
                    26</Text>
                    <Text style={{borderWidth: 1, borderColor:'light',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Wed<br></br>
                    27</Text>
                    <Text style={{borderWidth: 1, borderColor:'light',
                        borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4, color:'#fff', backgroundColor:'blue'}}>Thu<br></br>
                    28</Text>
                    <Text style={{borderWidth: 1, borderColor:'light',borderRadius: 5, paddingVertical: 4, paddingHorizontal: 4}}>Fri<br></br>
                    29</Text>
                </View>
                </View>

                <View style={styles.in}>
                    <View>
                    <Text style={{fontWeight: 'bold', marginLeft: 10, marginTop: 5}}>Chech In</Text>
                </View>

                <View style={styles.datim}>
                <View>
                    <Text style= {styles.date}>Date</Text>
                    <View style={styles.inside}>
                        <Ionicons name='calendar-outline' size={20}style={{marginLeft: 5}}/>
          <TextInput
           value={date} 
           onChangeText={(val) => {
           setDate(val);
          }}
           placeholder="28 May 2026"
           style={styles.put}
           />
                </View>
                </View>

                    <View>
                    <Text style= {styles.tim}>Time</Text>
                    <View style={styles.inside}>
                        <Ionicons name='time-outline' size={20}style={{marginLeft: 5}}/>
          <TextInput
           value={time} 
           onChangeText={(val) => {
           setTime(val);
          }}
           placeholder="09:02 AM"
           style={styles.put}
           />
           </View>
           </View>
           </View>

                <View>
                    <Text style= {styles.locate}>Location</Text>
          <TextInput
           value={location} 
           onChangeText={(val) => {
           setLocation(val);
          }}
           placeholder="Current Location"
           style={styles.input}
           />
           <small style={{marginLeft: 20}}>Location is auto detected</small>
                </View>

                <View>
                    <Text style= {styles.num}>ID Number</Text>
          <TextInput
           value={number} 
           onChangeText={(val) => {
           setNumber(val);
          }}
           placeholder="Enter employee identity numbr"
           style={styles.input}
           />
                </View>

                <View style={{marginTop: 30}}>
                    <TouchableOpacity
           onPress={() => navigation.navigate("/auth/checked")}
           style={{ alignSelf: "center", marginTop: 5, padding: 10, paddingLeft: 100, paddingRight: 100, borderRadius: 8, backgroundColor: 'blue'}}>
            <Text style={{ color: '#fff', fontSize:15}}>Confirm</Text>
           </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}