import "../global.css";
import { useState } from "react";
import { Stack, DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

export default function RootLayout() {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60_000, retry: 1 } },
      }),
  );
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="projects/[id]" options={{ title: "Project" }} />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
