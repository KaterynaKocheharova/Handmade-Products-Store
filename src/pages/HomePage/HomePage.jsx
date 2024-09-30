import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import Section from "components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import HomePageSwiper from "components/HomePageComponents/HomePageSwiper/HomePageSwiper";

const HomePage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(
  //     toggleSidebar({
  //       type: "filtration",
  //       forceClose: true,  
  //     })
  //   );
  // }, [dispatch]);

  return (
    <Section type="hero">
      <Container>
        <HomePageSwiper />
      </Container>
    </Section>
  );
};

export default HomePage;
