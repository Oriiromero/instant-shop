import React from "react";
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <h2 className="about-main_title">Welcome to Instant Shop!</h2>
        <p className="about-main_p">
          At Instant Shop, we believe in the power of convenience and
          efficiency. We understand that in today's fast-paced world, time is
          precious, and people are constantly seeking ways to simplify their
          lives. That's why we have created a unique shopping experience that is
          designed to save you time and effort, without compromising on quality.
        </p>
        <div className="about-main_box">
          <h3 className="about-main_box__title">Our Vision</h3>
          <p className="about-main_box__p">
            Our vision is to revolutionize the way people shop by providing an
            instant and hassle-free solution. We want to redefine convenience by
            offering a curated selection of products that cater to your everyday
            needs, all available at your fingertips.
          </p>
        </div>
        <div className="about-main_box">
          <h3 className="about-main_box__title">Customer Satisfaction</h3>
          <p className="about-main_box__p">
            At Instant Shop, your satisfaction is our top priority. We are
            dedicated to providing exceptional customer service and support,
            ensuring that your shopping experience is smooth and enjoyable. If
            you have any questions, concerns, or feedback, our friendly customer
            support team is always ready to assist you.
          </p>
        </div>
        <div className="about-main_box">
          <h3 className="about-main_box__title">Join the Instant Shop Community</h3>
          <p className="about-main_box__p">
            We invite you to join our growing community of savvy shoppers who
            have discovered the convenience and efficiency of Instant Shop.
            Experience the joy of saving time and effort, and enjoy the peace of
            mind that comes with knowing your shopping needs are taken care of.
          </p>
        </div>
        <p className="about-main__p">
          Thank you for choosing Instant Shop. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
