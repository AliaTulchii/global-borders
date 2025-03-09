import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowIcon from "../components/svg/ArrowIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";


const Contact = () => {
      const [t] = useTranslation("global");
    
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Enter minimum 2 symbols").required("Enter your first name"),
      lastName: Yup.string().min(2, "Enter minimum 2 symbols").required("Enter your last name"),
      email: Yup.string().email('Incorrect email').required("Enter your email address"),
      phone: Yup.string().matches(/^\+?\d{10,15}$/, "Incorrect phone number").required("Enter your phone number"),
      message: Yup.string().min(10, "There must be at least 10 characters").required("Enter your message"),
    }),
    onSubmit: async (values, { resetForm }) => {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              access_key: "370d35e2-06d5-46ba-a290-fced8f772174",
              ...values, 
            }),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error("Error sending the form");
          }
      
          const responseData = await response.json(); 
          console.log("Form submission response:", responseData);
          
          toast.success("Your message has been sent successfully!");
          resetForm();
        } catch (error) {
          console.error("Error sending the form:", error);
          toast.error("There was an error sending your message.");
        }
      }
  });

  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__img"></div>
        <div className="contact__content">
          <h2 className="contact__title">{t("contacts.title")}</h2>
          <p className="contact__text">{t("contacts.text")}</p>
          <form className="contact__form"  onSubmit={formik.handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="firstName">{t("contacts.name")}</label>
              <input
                className="contact__input"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="contact__error">
                  <svg width="10" height="10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="none" stroke="#FF0002" strokeWidth="2"/>
                    <line x1="25" y1="10" x2="25" y2="30" stroke="#FF0002" strokeWidth="3"/>
                    <circle cx="25" cy="35" r="2" fill="#FF0002"/>
                  </svg>
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>


            <div className="contact__form-group">
              <label className="contact__label" htmlFor="lastName">{t("contacts.lastName")}</label>
              <input
                className="contact__input"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="contact__error">
                  <svg width="10" height="10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="none" stroke="#FF0002" strokeWidth="2"/>
                    <line x1="25" y1="10" x2="25" y2="30" stroke="#FF0002" strokeWidth="3"/>
                    <circle cx="25" cy="35" r="2" fill="#FF0002"/>
                  </svg>
                  {formik.errors.lastName}
                </p>
              ) : null}
            </div>


            <div className="contact__form-group">
              <label className="contact__label" htmlFor="email">{t("contacts.email")}</label>
              <input
                className="contact__input"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="contact__error">
                  <svg width="10" height="10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="none" stroke="#FF0002" strokeWidth="2"/>
                    <line x1="25" y1="10" x2="25" y2="30" stroke="#FF0002" strokeWidth="3"/>
                    <circle cx="25" cy="35" r="2" fill="#FF0002"/>
                  </svg>
                  {formik.errors.email}
                </p>
              ) : null}
            </div>


            <div className="contact__form-group">
              <label className="contact__label" htmlFor="phone">{t("contacts.phone")}</label>
              <input
                className="contact__input"
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className="contact__error">
                  <svg width="10" height="10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="none" stroke="#FF0002" strokeWidth="2"/>
                    <line x1="25" y1="10" x2="25" y2="30" stroke="#FF0002" strokeWidth="3"/>
                    <circle cx="25" cy="35" r="2" fill="#FF0002"/>
                  </svg>
                  {formik.errors.phone}
                </p>
              ) : null}
            </div>

            <div className="contact__form-group">
              <label className="contact__label" htmlFor="message">{t("contacts.message")}</label>
              <textarea
                className="contact__textarea"
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="contact__error">
                  <svg width="10" height="10" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23" fill="none" stroke="#FF0002" strokeWidth="2"/>
                    <line x1="25" y1="10" x2="25" y2="30" stroke="#FF0002" strokeWidth="3"/>
                    <circle cx="25" cy="35" r="2" fill="#FF0002"/>
                  </svg>
                  {formik.errors.message}
                </p>
                
              ) : null}
            </div>
            {/* <input type="hidden" name="redirect" value="https://www.estatefoto.pl/"></input> */}
            <button type="submit" className="contact__btn">
            {t("contacts.btn")}
              <ArrowIcon className={"btn__submit"} />
            </button>
            
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
