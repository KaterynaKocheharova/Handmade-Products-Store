import css from "./HomePage.module.css";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import Hero from "components/Hero/Hero";
import AnimatedTitle from "components/common/AnimatedTitle/AnimatedTitle";


const HomePage = () => {
  return (
    <Section type="hero">
      <Container>
        <Hero/>
      </Container>
    </Section>
  );
};

export default HomePage;
