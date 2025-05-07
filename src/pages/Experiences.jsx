import Container from "../components/common/Container";
import SwiperComp from "../components/common/SwiperComp";
import useExperiencesData from "../hooks/useExperiencesData";
const ExperiencesPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { experiencesData } = useExperiencesData();
  return (
    <section className="experiences-container text-mainColor">
      <Container>
        {experiencesData && (
          <div className="w-full flex flex-col-reverse md:flex-row justify-center items-stretch border border-identityColor">
            {experiencesData?.img && (
              <div className="relative aspect-[1/.8] max-h-[350px] md:aspect-square md:max-h-full md:h-[450px] md:w-1/3 order-2 md:order-1 md:border-r xl:border-r-0 border-identityColor">
                <img
                  src={apiUrl + experiencesData?.img?.url}
                  alt="muhammed abo lila portfolio image"
                  className="w-full h-full "
                />
                <a href={experiencesData?.cv?.name} download>
                  <button className="download-cv absolute bottom-0 left-0 right-0 uppercase text-lg font-semibold text-mainColor bg-firstBgColor py-2 hover:bg-identityColor hover:text-white transition-all duration-300 ease-in-out">
                    download cv
                  </button>
                </a>
              </div>
            )}
            <SwiperComp swiperData={experiencesData?.experiencesData} />
          </div>
        )}
      </Container>
    </section>
  );
};

export default ExperiencesPage;
