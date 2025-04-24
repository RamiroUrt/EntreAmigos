import Hero from "../../components/Hero"
import SliderTex from "../../components/SliderText/SliderText"		
import Recommended from "../Sections/Recommended/Recommended"
import SliderPic from '../../components/SliderPic/SliderPic'
import Offers from "../Sections/Offers/Offers"
import ComponentVideo from "../../components/ComponentVideo"
import SectionProd from "../../components/SectionProd"
import Footer from "../../components/layout/Footer/Footer"


const Home = () => {
  return (
    <>
      <Hero />
      <SliderTex />
      <Recommended/>
      <SliderPic />
      <Offers />
      <ComponentVideo />
      <SectionProd />
      <Footer />
    </>
  )
}

export default Home