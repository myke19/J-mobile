import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";



export default function TabLayout()  {

  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: 'green', tabBarActiveTintColor: "#007aff"}}>
    <Tabs.Screen 
    name="dashboard"
    options={{
      title: "Dashboard",
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <Ionicons name="home" size={28}  color={color} />
      ),
    }}
      />
      <Tabs.Screen 
       name="profile"
       options={{
        title: "Profile",
          tabBarIcon: ({ color }) => (
          <Ionicons name="person" size={28} color={color} />
        ),  
      }}
      />
      </Tabs>
  );
}