function Info({ task, value }: any) {
  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="font-normal ml-3">{task}</h1>
      <h2 className="font-medium ml-3">{value}</h2>
    </div>
  );
}

export default function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-row justify-center mt-4 items-start border-t-4 border-black"
    >
      <Info task={"Phone"} value={"+1(709)-853-2123"} />
      <Info task={"Email"} value={"sigbekuhonour@gmail.com"} />
    </div>
  );
}
