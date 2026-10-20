import { useLocalSearchParams } from "expo-router";
import { Body, Heading, Screen, StateMessage } from "@/components/ui";
import { findProject, projects } from "@/features/projects/data";
export default function ProjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const project = findProject(id);
  return (
    <Screen>
      {project ? (
        <>
          <Heading>{project.title}</Heading>
          <Body>{project.summary}</Body>
          <Body>
            Start in specs/ with a specification, plan and independently
            verifiable tasks.
          </Body>
        </>
      ) : (
        <StateMessage kind="empty" message="This project was not found." />
      )}
    </Screen>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
