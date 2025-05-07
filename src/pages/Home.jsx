import Container from "../components/common/Container";
import CaptionContainer from "../components/common/CaptionContainer";
import HomeImage from "./../components/Home/HomeImage";
import useHomeData from "../hooks/useHomeData";
export default function Home() {
  const { homeData } = useHomeData();
  return (
    <section className="home-container text-mainColor">
      {homeData && (
        <Container>
          <CaptionContainer data={homeData} />
          <HomeImage imageData={homeData?.img} />
        </Container>
      )}
    </section>
  );
}
