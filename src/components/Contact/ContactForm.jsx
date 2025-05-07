import ContactInput from "./ContactInput";
const ContactForm = () => {
  return (
    <form className="order-1 flex flex-col justify-between items-center gap-3 lg:gap-0 lg:w-[40%]">
      <ContactInput type="text" placeholder="Name" />
      <ContactInput type="text" placeholder="E-mail" />
      <ContactInput type="text" placeholder="Subject" />
      <textarea
        placeholder="your Message"
        className="max-h-[160px] min-h-[160px] bg-firstBgColor text-mainColor w-full p-2 rounded-lg border-b-2 border-firstBgColor focus:outline-none focus:border-b-2 focus:border-identityColor"
      ></textarea>
      <div className="w-full">
        <button
          type="submit"
          className=" text-mainColor bg-firstBgColor border border-identityColor py-1 px-3 rounded-lg hover:bg-identityColor hover:text-white transition-all duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
    </form>
  );
};
export default ContactForm;