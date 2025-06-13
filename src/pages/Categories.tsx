
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import CategoryList from "../components/sections/CategoryList";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PartnerWithUs from "../components/sections/PartnerWithUs";

const Categories = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryList />
      <WhyChooseUs />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default Categories;
