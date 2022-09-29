import './App.css';
import {YanMap} from "./components/YanMap";

function App() {
    return (
        <YanMap center={[59.957023, 30.308154]} zoom={18}/>
    );
}

export default App;
