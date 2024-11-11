import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className=" w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            With nearly 300,000 sites already using its software across the
            globe, PrestaShop is the leading open source ecommerce solution in
            Europe and Latin America.
          </p>
          <p>
            In 2021, PrestaShop sites generated more than 24 billion euros in
            online sales. Starting from November 2021 PrestaShop became part of
            the global family of MBE Worldwide to accelerate its growth and
            become together the leading global ecommerce and logistics platforms
            for businesses. »
          </p>
          <b className=" text-gray-800 text-3xl">Our Misson</b>
          <p>
            We build a truly inclusive solution for commerce to fully express
            its potential.
            <br />
            <br />
            We believe that commerce is more than a platform. We believe that
            commerce is a human activity. To respect the business reality of
            each of our clients, to express the singularity and creativity of
            each of our users, we build the most inclusive solution.
            <br />
            <br />
            One that allows everyone to express their potential rather than
            enforcing a one-size fits all approach.
            <br />
            <br />
            With PrestaShop (Hosted, Classic, and Custom offers), the PrestaShop
            essentials and PrestaShop Hosting, we enable companies to easily
            deploy their business on a larger scale, and with infinite
            customization possibilities.
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We appreciate a1qa’s amazing job, proactive approach, and
            willingness to deliver high-quality testing services, which are
            reflected in the ability to find defects in complex scenarios that
            show great understanding of the solution.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            Convenience is the backbone of e-commerce and a huge reason that
            online shopping has boomed over the last few years. Shopping online
            offers the convenience of purchasing items when and where it suits
            you, via a payment method of your choice while also having your item
            delivered via a method that suits you.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            It's when you provide a positive, helpful, and timely experience for
            your customers. It happens when a company goes above and beyond what
            its customers expect. This is often done through the use of
            exceptional communication skills, superior knowledge of products or
            services, and an overall sense of sincerity
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
