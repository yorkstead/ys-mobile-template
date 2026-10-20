import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#047857" }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
