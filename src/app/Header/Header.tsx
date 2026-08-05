import NavigationBar from "../../components/navigation/NavigationBar";

export default function Header({itemColour}: {itemColour?: string}) {
  return (
      <NavigationBar itemColour={itemColour}/>
  );
}
