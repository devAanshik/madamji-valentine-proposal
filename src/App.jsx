import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen.jsx";
import SecondScreen from "./screens/ILoveYouScreen.jsx";
import ValentineScreen from "./screens/ValentineScreen.jsx";
import AcceptedScreen from "./screens/AcceptedScreen.jsx";
import NotFound from "./screens/NotFound.jsx";

function App() {
  return (
    <main className="h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/ily" element={<SecondScreen />} />
          <Route path="/bmv" element={<ValentineScreen />} />
          <Route path="/accepted" element={<AcceptedScreen />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
