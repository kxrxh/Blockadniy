import YanMap from "./components/YanMap";
import MyAppBar from "./components/MyAppBar";
import "./styles/app.css"
import {ITMOpos} from "./constants/constants";

function App() {
    return (
        <div className='app'>
            <MyAppBar/>
            <YanMap center={ITMOpos} zoom={18}/>
        </div>
    );
}

export default App;
