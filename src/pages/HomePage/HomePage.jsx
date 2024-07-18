import css from "./HomePage.module.css";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import AnimatedTitle from "components/common/AnimatedTitle/AnimatedTitle";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <AnimatedTitle>HELLO</AnimatedTitle>
      </Container>
    </Section>
  );
};

export default HomePage;
