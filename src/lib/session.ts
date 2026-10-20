import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

const KEY = "yorkstead.session";
function requireNative() {
  if (Platform.OS === "web")
    throw new Error(
      "Configure secure HTTP-only cookie sessions for web; tokens are not stored in localStorage.",
    );
}
export async function readSessionToken() {
  requireNative();
  return SecureStore.getItemAsync(KEY);
}
export async function saveSessionToken(token: string) {
  requireNative();
  await SecureStore.setItemAsync(KEY, token, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}
export async function clearSessionToken() {
  requireNative();
  await SecureStore.deleteItemAsync(KEY);
}
