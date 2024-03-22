
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components /Navbar';
import Home from './components /pages/Home';
import Services from './components /pages/Services';
import About from './components /pages/About';
import Projects from './components /pages/Projects/Projects';
import Review from './components /pages/Review';
import "./index.css"
import Skills from "./components /pages/Skills";
import Contact from "./components /pages/Contact";
import { useEffect, useState } from "react";
import portfolioService from "./servicesProvider/portfolioService";


function App() {
  const[data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await portfolioService.getUserData();
        setData(response.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("totaldata",data);
  
  return (
    <div className="bg-black bg-gradient">
      <BrowserRouter>
        <Navbar />
        {!loading && data ? (
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route
              path="/services"
              element={<Services data={data?.services} />}
            />
            <Route path="/about" element={<About data={data?.about} />} />
            <Route path="/skills" element={<Skills data={data?.skills} />} />
            <Route
              path="/projects"
              element={<Projects data={data?.projects} />}
            />
            <Route
              path="/review"
              element={<Review data={data?.testimonials} />}
            />
            <Route
              path="/contact"
              element={<Contact data={data?.social_handles} />}
            />
          </Routes>
        ) : (
          <div className="text-white text-center mt-5 vh-100">
            <h1>Loading...</h1>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
