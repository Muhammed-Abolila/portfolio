const apiUrl = import.meta.env.VITE_API_URL;
const HomeImage = ({imageData}) => {
  return (
    <div className="overflow-hidden lg:w-[40%] rounded-[20%] flex justify-center items-center">
      <img
        src={`${apiUrl}${imageData?.url}`}
        alt="muhammed abo lila portfolio image"
        className="md:w-[450px] lg:w-[500px]"
      />
    </div>
  );
};
export default HomeImage;