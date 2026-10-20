import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Body, Heading, Screen, StateMessage } from "@/components/ui";
import { listProjects } from "@/features/projects/data";

export default function HomeScreen() {
  const query = useQuery({ queryKey: ["projects"], queryFn: listProjects });
  return (
    <Screen>
      <Text className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
        Yorkstead Systems
      </Text>
      <Heading>Build with purpose.</Heading>
      <Body>A calm starting point for your next mobile project.</Body>
      <View className="gap-4">
        {query.isPending ? (
          <StateMessage kind="loading" message="Loading projects…" />
        ) : query.isError ? (
          <StateMessage
            kind="error"
            message="Projects could not be loaded."
            onRetry={() => {
              void query.refetch();
            }}
          />
        ) : query.data.length === 0 ? (
          <StateMessage kind="empty" message="No projects yet." />
        ) : (
          query.data.map((project) => (
            <Link
              key={project.id}
              href={{ pathname: "/projects/[id]", params: { id: project.id } }}
              asChild
            >
              <Pressable
                accessibilityRole="link"
                className="gap-3 rounded-2xl border border-stone-300 bg-white p-6 active:bg-stone-100 dark:border-stone-700 dark:bg-stone-900"
              >
                <Text className="text-xl font-semibold text-stone-950 dark:text-stone-50">
                  {project.title}
                </Text>
                <Body>{project.summary}</Body>
                <Text className="text-base font-semibold text-emerald-800 dark:text-emerald-400">
                  Open project →
                </Text>
              </Pressable>
            </Link>
          ))
        )}
      </View>
    </Screen>
  );
}
