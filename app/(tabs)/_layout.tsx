import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (

    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen
      name="index"
      options={{
        title:"Home",
        tabBarLabel:"Home",
        tabBarActiveTintColor:"pink",
        tabBarIcon:()=><Ionicons name="home" style={[styles.icon]} />
        
      }}
      />
      <Tabs.Screen
      name="Courses"
      options={{
        title:"Courses",
        tabBarLabel:"Courses",
        tabBarActiveTintColor:"pink",
        tabBarIcon:()=><Ionicons name="book" style={[styles.icon]} />
      }}
      />
      <Tabs.Screen
      name="Leaderboard"
      options={{
        title:"Leaderboard",
        tabBarLabel:"Leaderboard",
        tabBarActiveTintColor:"pink",
        tabBarIcon:()=><Ionicons name="trophy" style={[styles.icon]} />
      }}
      />
      <Tabs.Screen
      name="Tools"
      options={{
        title:"Tools",
        tabBarLabel:"Tools",
        tabBarActiveTintColor:"pink",
        tabBarIcon:()=><Ionicons name="hammer" style={[styles.icon]} />
      }}
      />

    </Tabs>

  );
}

const styles = StyleSheet.create({
  icon:{

  }
})