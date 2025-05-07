import Container from "./../components/common/Container";
import useEducationData from "../hooks/useEducationData";
import SwiperComp from "../components/common/SwiperComp";
const EducationPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { educationData } = useEducationData();
  return (
    <section className="experiences-container text-mainColor">
      <Container>
        {educationData && (
          <div className="w-full flex flex-col-reverse md:flex-row justify-center items-stretch border border-identityColor">
            {educationData?.img && (
              <div className="aspect-[1/.8] max-h-[350px] md:aspect-square md:max-h-full md:h-[450px] md:w-1/3 order-2 md:order-1 md:border-r xl:border-r-0 border-identityColor">
                <img
                  src={apiUrl + educationData?.img?.url}
                  alt="muhammed abo lila portfolio image"
                  className="w-full h-full "
                />
              </div>
            )}
            <SwiperComp swiperData={educationData?.educationData} />
          </div>
        )}
      </Container>
    </section>
  );
};
export default EducationPage;
