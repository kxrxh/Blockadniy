import YanMap from "./components/YanMap";
import MyAppBar from "./components/MyAppBar";

function App() {
    const ITMOpos = [59.957023, 30.308154];
    return (
        <div>
            <MyAppBar/>
            <YanMap center={ITMOpos} zoom={18}/>
        </div>
    );
}

export default App;
