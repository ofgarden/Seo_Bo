import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Home from './components/Home';

function Router() {
  return (
    // TODO: BIOGRAPHY
    // TODO: EXHIBITON -> MAP!

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/late" element={<Gallery category={'late'} />}></Route>
      <Route path="/mid" element={<Gallery category={'mid'} />}></Route>
      <Route path="/early" element={<Gallery category={'early'} />}></Route>
    </Routes>
  );
}

export default Router;
