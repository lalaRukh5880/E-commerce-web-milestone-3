
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ProductList from "./components/ProductList";
import Progressor from "./components/Progressor";
import Reservation from "./components/Reservation";
import Hero from "./components/Hero";
import IceCream from "./components/IceCream";
import Menuitem from "./components/Menuitem";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to grey-700 min-h-screen">

      <Navbar />
      <Hero />
      <Progressor />
      <IceCream />
      <Banner />
      <ProductList />
      <Menuitem />
      <Offer />
      <Reservation />
      <Footer />


    </div>
  );
}
