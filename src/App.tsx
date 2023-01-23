import { Routes, Route } from 'react-router-dom';
import { Home } from "../src/pages/Home/Home";
import { Bk } from '../src/pages/Booking/Bk';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Booking" element={<Bk />} />
    </Routes>
  );
}

export default App;