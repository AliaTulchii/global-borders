import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowIcon from "../components/svg/ArrowIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Enter minimum 2 symbols").required("Required field"),
      lastName: Yup.string().min(2, "Enter minimum 2 symbols").required("Required field"),
      email: Yup.string().email('Incorrect email').required("Required field"),
      phone: Yup.string().matches(/^\+?\d{10,15}$/, "Incorrect phone number").required("Required field"),
      message: Yup.string().min(10, "There must be at least 10 characters").required("Required field"),
    }),
    onSubmit: (values, { resetForm }) => {
        console.log("Form submitted with values:", values); 
        toast.success("Your message has been sent successfully!");
      resetForm();
    },
  });

  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__img"></div>
        <div className="contact__content">
          <h2 className="contact__title">Your First Step to Collaboration</h2>
          <p className="contact__text">
            We are always ready to answer your questions and provide detailed 
            information about our services. Contact us, and we will help you 
            find the best solutions for your needs, explain our work processes,
            and provide all the necessary details for collaboration.
          </p>
          <form className="contact__form" onSubmit={formik.handleSubmit}>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="firstName">Name</label>
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
              <label className="contact__label" htmlFor="lastName">Last Name</label>
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
              <label className="contact__label" htmlFor="email">Email</label>
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
              <label className="contact__label" htmlFor="phone">Phone number</label>
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
              <label className="contact__label" htmlFor="message">Your message</label>
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

            <button type="submit" className="contact__btn">
              Submit
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
