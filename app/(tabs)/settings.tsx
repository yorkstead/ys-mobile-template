import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useColorScheme } from "nativewind";
import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Body, Button, Heading, Screen } from "@/components/ui";
import { profileSchema, type ProfileInput } from "@/features/profile/schema";
import { usePreferences } from "@/features/preferences/store";

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [savedName, setSavedName] = useState("");
  const { control, handleSubmit } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "" },
  });
  const visits = usePreferences((state) => state.visits);
  const increment = usePreferences((state) => state.increment);
  return (
    <Screen>
      <Heading>Make it yours.</Heading>
      <Body>
        Choose your appearance and try a local profile form. This example stays
        in memory and does not create an account.
      </Body>
      <Button
        label={`Use ${colorScheme === "dark" ? "light" : "dark"} theme`}
        onPress={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
      />
      <Button
        label="Use device theme"
        onPress={() => setColorScheme("system")}
      />
      <View className="gap-3">
        <Text className="text-base text-stone-950 dark:text-stone-50">
          Display name
        </Text>
        <Controller
          control={control}
          name="name"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                accessibilityLabel="Display name"
                autoComplete="name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                maxLength={60}
                className="min-h-12 rounded-xl border border-stone-400 p-3 text-base text-stone-950 dark:text-stone-50"
              />
              {error && (
                <Text
                  accessibilityRole="alert"
                  className="text-base text-red-700 dark:text-red-300"
                >
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
        <Button
          label="Save locally"
          onPress={() => {
            void handleSubmit((values) => {
              setSavedName(values.name);
              increment();
            })();
          }}
        />
        {savedName && (
          <Body>
            Saved {savedName}. Local updates: {visits}.
          </Body>
        )}
      </View>
    </Screen>
  );
}
