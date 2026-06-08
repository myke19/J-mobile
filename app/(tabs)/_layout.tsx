import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout()  {

  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, tabBarActiveBackgroundColor: 'blue', tabBarActiveTintColor: "#007aff"}}>
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
       name="flash"
       options={{
        title: "Attendance",
        headerShown: false,
          tabBarIcon: ({ color }) => (
          <Ionicons name="book" size={28} color={color} />
        ),  
      }}
      />
          <Tabs.Screen 
    name="leave"
    options={{
      title: "Leave",
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <Ionicons name="calendar" size={28}  color={color} />
      ),
    }}
    />
        <Tabs.Screen 
    name="performance"
    options={{
      title: "Performance",
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <Ionicons name="bar-chart" size={28}  color={color} />
      ),
    }}
    />
        <Tabs.Screen 
    name="profile"
    options={{
      title: "Profile",
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <Ionicons name="person" size={28}  color={color} />
      ),
    }}
    />
      </Tabs>
  );
}