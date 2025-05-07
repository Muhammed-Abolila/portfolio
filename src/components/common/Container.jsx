const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center w-[95%] max-w-[1280px] m-auto lg:my-0">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-stretch w-full min-h-[450px] gap-3">
        {children}
      </div>
    </div>
  );
};

export default Container;
