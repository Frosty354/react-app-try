
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import TrendingAssets from './Components/TrendingAssets'


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/trendingAssets" element={<TrendingAssets/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
