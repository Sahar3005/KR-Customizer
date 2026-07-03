import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import EmpoweringBrands from "./components/EmpoweringBrands/EmpoweringBrands";
import StartCustomizing from "./components/StartCustomizing/StartCustomizing";
import Integration from "./components/Integraion/Integration";
import ProductTour from "./components/ProductTour/ProductTour";
import Industry from "./components/Industry/Industry";
import Testimonials from "./components/Testmonial/Testmonial";
import Faq from "./components/FAQ/Faq";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <EmpoweringBrands/>
      <StartCustomizing/>
      <Integration/>
      <ProductTour/>
      <Industry/>
      <Testimonials/>
      <Faq/>
      <News/>
      <Footer/>
    </>
  );
}

export default App;