import Section from "components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import HomePageSwiper from "components/HomePageComponents/HomePageSwiper/HomePageSwiper";

const HomePage = () => {
  return (
    <Section type="hero">
      <Container>
        <HomePageSwiper />
      </Container>
    </Section>
  );
};

export default HomePage;
