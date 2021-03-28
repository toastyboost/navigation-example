import './App.scss';

import { cities } from "./mocks/navigation.json";
import { Navigation } from "./ui/nav";

const App = () =>{
  return (
    <div className="app">
      <Navigation items={cities} />
     </div>
  );
}

export default App