import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import Hero from "components/Hero/Hero";
import ImagesSwiper from "components/Swiper/Swiper";


const HomePage = () => {
  return (
    <Section type="hero">
      <Container>
        <Hero/>
        <ImagesSwiper/>
      </Container>
    </Section>
  );
};

export default HomePage;
