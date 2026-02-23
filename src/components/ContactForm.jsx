import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const location = useLocation();

  // 👇 YAHI DATA AATA HAI
  const serviceData = location.state || {};

  return (
    <section>
      <h1>Contact Us</h1>

      {/* DEBUG LINE — pehle check karne ke liye */}
      {/* <pre>{JSON.stringify(serviceData, null, 2)}</pre> */}

      <ContactForm serviceData={serviceData} />
    </section>
  );
}
