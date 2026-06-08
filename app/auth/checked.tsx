import styles from "@/styles/main";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Checked() {
    const navigator = useRouter();
    const navigation= useRouter();

    const CheckIn = () => {
        navigation.push("/auth/checkout")

    }

   // const [date, setDate] = useState("");
    //const [time, setTime] = useState("");
   // const [location, setLocation] = useState("");
    //const [number, setNumber] = useState("");




    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
            <ScrollView style={styles.dim}>
                <View >
                <View style={styles.wifi}>
                    <Text style={{fontWeight: 'bold'}}>9:41</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name='cellular-outline' size={20}/>
                    <Ionicons name='wifi' size={20} style={{marginLeft: 5}}/>
                    <Ionicons name='battery-full' size={20} style={{marginLeft: 5}}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 180, marginLeft: 15, marginTop: 15}}>
                    <Ionicons name='chevron-back' size={25}/>
                    <View style={{backgroundColor: 'blue'}}>
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

                <View style={styles.fully}>
                    <View style={styles.suc}>
                        <Ionicons name='checkbox' size={90} color={'green'}/>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>Checked In Successfully</Text>
                        
                        <View style={{marginTop: 20}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("/auth/checkout")}>
                    <Text style={{fontWeight: 'bold', color: 'blue'}}>Go To<Ionicons name='chevron-forward' size={20} color={'blue'}/></Text>
                    </TouchableOpacity>
                    </View>
                    </View>

            </ScrollView>
        </SafeAreaView>
    )
}
