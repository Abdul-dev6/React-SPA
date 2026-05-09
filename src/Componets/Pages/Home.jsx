import Header from "../Views/Homeviewpage/header";
import Alert from "../Views/Homeviewpage/alert";
import Card from "../Views/Homeviewpage/card";
import FAQAccordion from "../Views/Homeviewpage/faqs";
import ImageCarousel from "../Views/Homeviewpage/imagescroll";
import UserCard from "../Views/Homeviewpage/usercard";
import ProductCard from "../Views/Homeviewpage/productcard";
import Dynamic from "../Views/Homeviewpage/Dynamic";
import Search from "../Views/Homeviewpage/seacrch";
import CardImg from "../Views/Homeviewpage/cardimg";
import Form from "../Views/Homeviewpage/Form";

function Home() {
  return (
    <div>
      <Header />
      <Alert />
      <Card />
      <FAQAccordion />
      <ImageCarousel />
      <Search />
      <CardImg />
      <ProductCard />
      <Dynamic />
      <Form />
    </div>
  );
}

export default Home;
