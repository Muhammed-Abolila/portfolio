import Container from './../components/common/Container';
import CaptionContainer from './../components/common/CaptionContainer';
import useContactData from '../hooks/useContactData';
import ContactForm from '../components/Contact/ContactForm';
const ContactPage = () => {
    const {contactData}=useContactData()
  return (
    <section className="contact-container text-mainColor">
      {contactData && (
        <Container>
          <CaptionContainer data={contactData} style="order-2 lg:order-1" />
          <ContactForm/>
        </Container>
      )}
    </section>
  );
};
export default ContactPage;