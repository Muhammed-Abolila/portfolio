const ContactInput = ({type,placeholder}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-firstBgColor text-mainColor w-full p-2 rounded-lg border-b-2 border-firstBgColor focus:outline-none focus:border-b-2 focus:border-identityColor"
    />
  );
};
export default ContactInput;