
import SkillsTitle from '../components/Skills/SkillsTitle';
import useSkillsData from '../hooks/useSkillsData';
import Container from './../components/common/Container';
const apiUrl = import.meta.env.VITE_API_URL;
const SkillsPage = () => {
    const {skillsData}=useSkillsData()
  return (
    <section className="skills-container">
      <Container>
        {skillsData && (
          <div className="w-full flex justify-start items-stretch flex-wrap border border-identityColor rounded-lg overflow-hidden">
            {skillsData?.tech &&
              skillsData?.tech?.length > 0 &&
              skillsData?.tech?.map((skill, index) => (
                <div
                  key={index}
                  className="h-full w-full md:w-1/2 lg:w-1/4 border-b lg:border-b-0 lg:border-r border-identityColor"
                >
                  <SkillsTitle title={skill?.title} />
                  <div className="skills-container h-[calc(100%-65px)] flex justify-center items-start flex-wrap gap-y-4 lg:gap-y-2 py-4">
                    {skill?.techSkills &&
                      skill?.techSkills?.length > 0 &&
                      skill?.techSkills?.map((item, index) => (
                        <div
                          key={index}
                          className="w-1/4 lg:w-1/2 text-center flex justify-center items-center"
                        >
                          <img
                            src={apiUrl+item?.img?.url}
                            className='w-[70px] h-[70px]'
                            alt={item?.name}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}

            {skillsData?.soft && (
              <div className=" h-full w-full md:w-1/2 lg:w-1/4">
                <SkillsTitle title={skillsData?.soft?.title} />
                <div className="skills-container h-[calc(100%-65px)] flex justify-center items-start py-4">
                  <ul className="w-full flex justify-center items-center flex-col gap-y-5">
                    {skillsData?.soft?.skills &&
                      skillsData?.soft?.skills?.length > 0 &&
                      skillsData?.soft?.skills?.map((item, index) => (
                        <li key={index} className="text-lg font-medium ">
                          {item?.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
export default SkillsPage;
