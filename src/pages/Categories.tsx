
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryList from "../components/sections/CategoryList";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PartnerWithUs from "../components/sections/PartnerWithUs";

const Categories = () => {
  return (
    <>
      <Navbar />
      <CategoryList />
      <WhyChooseUs />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default Categories;
