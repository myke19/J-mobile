import useStore from "@/store/useStore";
import { ScrollView, Text, View } from "react-native";

export default function Profile() {

    const user = useStore((state: any) => 
    state.user);

    return (
        <ScrollView>
            <View>
                <Text>Welcome To The Tabs Profile Page</Text>
                <Text>
                    {user.email}
                </Text>
            </View>
        </ScrollView>
    )
}