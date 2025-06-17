import { Stack } from 'expo-router';


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
    swipeEdgeWidth: 300,
  }}
 >
        <Drawer.Screen name="(tabs)" options={{ 
          drawerLabel: 'Home',
          title: 'Home'
           }}/>
        <Drawer.Screen name="profile" options={{ 
          drawerLabel: 'Profile',
          title: 'My profile'
           }}/>
        <Drawer.Screen name="settings" options={{ 
          drawerLabel: 'Settings',
          
           }}/>
      </Drawer>
    </GestureHandlerRootView>
  );
}
