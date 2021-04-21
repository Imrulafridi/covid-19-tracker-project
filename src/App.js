import Image from './components/Image'
import Card from "./components/Card";
import Chart from "./components/Chart";
import CountrySelector from "./components/CountrySelector";
import { GlobalProvider } from "./context/GlobalContext";


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Image/>
        <Card />
        <CountrySelector />
        <Chart />
      </div>
    </GlobalProvider>
  );
}

export default App;
