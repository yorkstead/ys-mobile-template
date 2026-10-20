import { Link } from "expo-router";
import { Body, Heading, Screen } from "@/components/ui";
export default function NotFound() {
  return (
    <Screen>
      <Heading>Page not found.</Heading>
      <Body>This route is unavailable.</Body>
      <Link href="/" accessibilityRole="link">
        Return home
      </Link>
    </Screen>
  );
}
