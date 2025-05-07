import SocialLinks from "./SocialLinks";
const CaptionContainer = ({ data ,style}) => {
  return (
    <div className={`caption-container border-2 border-dashed border-identityColor lg:w-[60%] ${style}`}>
      <div className="caption bg-firstBgColor p-4 lg:p-6 min-h-[80%]">
        {data?.heading1 && (
          <h2 className="uppercase text-identityColor text-xl font-semibold lg:font-bold sm:text-2xl sm:font-semibold">
            {data?.heading1}
          </h2>
        )}
        <div className="uppercase text-xl font-semibold lg:font-bold flex justify-start items-center gap-1 sm:text-2xl sm:font-semibold">
          {data?.heading2 && <span>{data?.heading2}</span>}
          {data?.heading3 && (
            <h1 className="text-identityColor">{data?.heading3}</h1>
          )}
        </div>
        {data?.textData?.length > 0 &&
          data?.textData.map((item, index) => (
            <p key={index} className="text-sm font-medium my-2 lg:my-3 ml-3 lg:leading-7">
              {item.text}
            </p>
          ))}
      </div>
      <SocialLinks/>
    </div>
  );
};

export default CaptionContainer;
