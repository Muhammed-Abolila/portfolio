const SkillsTitle = ({ title }) => {
  return (
    <h2 className="w-full text-center py-4  text-2xl font-semibold capitalize relative after:absolute after:content-[' '] after:h-[1px] after:bottom-0 after:w-2/3 after:right-1/2 after:translate-x-1/2 after:bg-identityColor">
      {title}
    </h2>
  );
};

export default SkillsTitle;
