import { fireEvent, render } from "@testing-library/react-native";
import { Button, StateMessage } from "../components/ui";

test("button exposes its action and respects disabled state", () => {
  const press = jest.fn();
  const ui = render(<Button label="Continue" onPress={press} />);
  fireEvent.press(ui.getByRole("button", { name: "Continue" }));
  expect(press).toHaveBeenCalledTimes(1);
  ui.rerender(<Button label="Continue" onPress={press} disabled />);
  fireEvent.press(ui.getByRole("button", { name: "Continue" }));
  expect(press).toHaveBeenCalledTimes(1);
});
test("error state retries and loading state announces progress", () => {
  const retry = jest.fn();
  const ui = render(
    <StateMessage kind="error" message="Offline" onRetry={retry} />,
  );
  fireEvent.press(ui.getByRole("button", { name: "Try again" }));
  expect(retry).toHaveBeenCalledTimes(1);
  ui.rerender(<StateMessage kind="loading" message="Loading projects" />);
  expect(ui.getByLabelText("Loading")).toBeTruthy();
  ui.rerender(<StateMessage kind="empty" message="No projects" />);
  expect(ui.getByText("No projects")).toBeTruthy();
});
