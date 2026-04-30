import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const navigator= useRouter();

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
        <ScrollView>
            <View>
                <Text>Welcome To The Tabs Main Page</Text>
                <Button onPressIn={() => {
                    navigator.push("/");
                }}
                >Go To Home Page</Button>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}