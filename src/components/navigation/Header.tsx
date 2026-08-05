import NavigationBar from "./NavigationBar";

export default function Header({ itemColour }: { itemColour?: string }) {
  return <NavigationBar itemColour={itemColour} />;
}
