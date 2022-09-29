import './App.css';
import {YanMap} from "./components/YanMap";
import AppHeadBar from "./components/AppBar";

function App() {
    const ITMOpos = [59.957023, 30.308154];
    return (
        <div>
            <AppHeadBar />
            <YanMap center={ITMOpos} zoom={18}/>
        </div>
    );
}

export default App;
