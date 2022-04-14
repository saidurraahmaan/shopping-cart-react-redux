import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<>Hi</>}/>
                {/*<Route path='/add' element={<>add</>}/>*/}
            </Routes>
        </>
    );
}

export default App;
