import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState();
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    let obj = {
      name: data.name, 
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      message: data.message
    }

    setFormData(obj);
  }

  return (
    <div className="contact">
      <div className="contact-main">
        <div className="contact-main_info">
        <h3 className="contact-main_info__title"> Contact us!</h3>
        <p className="contact-main_info__text"> If you need our help or need to tell us somenthing about us feel free to send us a message, we will contact you as soon as possible! </p>
        </div>
        <form className="contact-main_form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            className="contact-main_form__input"
            type="text"
            placeholder="Your name..."
            {...register("name", {required: true})}
          />
          {errors.name?.type === 'required' && "Name is required"}
          <label>Surname</label>
          <input
            className="contact-main_form__input"
            type="text"
            placeholder="Your surname..."
            {...register("surname", {required: true})}
          />
           {errors.surname?.type === 'required' && "Surname is required"}
          <label>Email</label>
          <input
            className="contact-main_form__input"
            type="email"
            placeholder="Your email..."
            {...register("email", {required: true})}
          />
           {errors.email?.type === 'required' && "Email is required"}
          <label>Phone</label>
          <input
            className="contact-main_form__input"
            type="number"
            placeholder="Your phone..."
            {...register("phone", {required: false})}
          />
          <label>Message</label>
          <textarea
            className="contact-main_form__textarea"
            placeholder="Your message..."
            {...register("message", {required: true})}
          />
           {errors.message?.type === 'required' && "Message is required"}
          <button className="contact-main_form__btn">Send</button>
          {formData && <p className="message-sent">Message sent!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
