import ContactForm from "../components/info/ContactForm";
import Information from "../components/info/Information";
import { contactData } from "../components/info/data";



const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 py-4">
      <div className="flex w-full">
        <Information data={contactData} />
      </div>
      <div className="w-1 bg-secondary" />
      <div className="flex w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
