import type { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView
      edges={["top", "left", "right", "bottom"]}
      className="flex-1 bg-stone-50 dark:bg-stone-950"
    >
      <ScrollView contentContainerStyle={{ padding: 24, gap: 20, flexGrow: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
export function Heading({ children }: { children: ReactNode }) {
  return (
    <Text
      accessibilityRole="header"
      className="text-3xl font-semibold text-stone-950 dark:text-stone-50"
    >
      {children}
    </Text>
  );
}
export function Body({ children }: { children: ReactNode }) {
  return (
    <Text className="text-base leading-6 text-stone-700 dark:text-stone-300">
      {children}
    </Text>
  );
}
export function Button({
  label,
  onPress,
  disabled = false,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      className="min-h-12 justify-center rounded-xl bg-emerald-800 px-5 py-3 active:bg-emerald-900 disabled:opacity-50"
    >
      <Text className="text-center text-base font-semibold text-white">
        {label}
      </Text>
    </Pressable>
  );
}
export function StateMessage({
  kind,
  message,
  onRetry,
}: {
  kind: "loading" | "empty" | "error";
  message: string;
  onRetry?: () => void;
}) {
  return (
    <View
      accessibilityLiveRegion="polite"
      className="gap-4 rounded-xl border border-stone-300 p-5 dark:border-stone-700"
    >
      {kind === "loading" && <ActivityIndicator accessibilityLabel="Loading" />}
      <Body>{message}</Body>
      {kind === "error" && onRetry && (
        <Button label="Try again" onPress={onRetry} />
      )}
    </View>
  );
}
