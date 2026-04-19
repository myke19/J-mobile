import { MyContext } from "@/context/AuthContext";
import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const { user } = useContext(MyContext)
    return (
        <SafeAreaView>
        <ScrollView>
            <View>
                <Text>Welcome To The Tabs Main Page</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}