import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <FirstPart />
      <SecondPart />
    </div>
  );
}

export default App;
