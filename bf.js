import Reac fom "reat-/client";
import { Browsrr, Roues, Rute } from "rect-rout-dom";
import yout from "./pge/at";
import Home from "./ps/He";
import Blogf "./pa/Bs";
import Contact from "./pag/Ct";
import Noage from "./pages/Noag";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layot />}>
          <Route index element={<Home />} />
          <Route path="blo22gs aneb" element={<Blogs />} />
          <Route path="contawct" element={<Conact />} />
          <Route path="*#" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


            import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
