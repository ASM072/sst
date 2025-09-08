import React, { useEffect } from "react";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../images/hero-bg-es.jpg";
import streamlineIcon from "../images/streamline.png";
import productivityIcon from "../images/productivity.svg";
import scaleIcon from "../images/scales.png";
import caIcon from "../images/ca.png";
import paIcon from "../images/pa.png";
import siIcon from "../images/si.png";
import arIcon from "../images/ar.png";

// import "../App.css"; // your custom CSS with .animate-fadeInUp

const EnterpriseSolutions = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Intersection Observer for cards (custom animation)
    const cards = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div
        className="relative h-[90vh] flex items-center justify-center text-center text-xl text-black text-opactity-70 font-semibold"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0"></div> */}
        
      </div>

      {/* Service Overview */}
      <section className="py-20 px-6 md:px-16 bg-gray-300 text-center">
      <div className="relative z-10 px-4">
        {/* <img className="hero-img" src={img7}></img>  */}
          <h1 data-aos="fade-down" className="text-5xl font-bold fade-up mb-4 text-green-700">
            Enterprise Solutions
          </h1>
          <div className='flex justify-center'>
          <div className='w-24 border-b-4 border-green-700 mb-2'></div>
        </div>
          <p data-aos="fade-up" className="text-xl mt-4 fade-up text-gray-500 mb-6 font-bold">
            Custom software and applications to optimize business operations
            and enhance productivity.
          </p>
        </div>
        <h2 data-aos="fade-down" className="text-4xl font-extrabold mb-2 fade-up text-green-700">
          Optimize Your Business
        </h2>
        <div className='flex justify-center'>
          <div className='w-24 border-b-4 border-green-700 mb-4'></div>
        </div>
        <p
          data-aos="fade-up"
          className="text-gray-500 font-bold text-lg max-w-3xl mx-auto mb-12 fade-up"
        >
          We develop high-quality, customized software and enterprise
          applications that streamline operations, enhance productivity, and
          support long-term growth.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={streamlineIcon}
              alt="Streamline"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold">Smooth Operations</h3>
          </div>
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={productivityIcon}
              alt="Productivity"
              className="h-26 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold">Boost Productivity</h3>
          </div>
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={scaleIcon}
              alt="Scalable"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold">Scalable Solutions</h3>
          </div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 data-aos="fade-down" className="text-4xl font-bold mb-4 fade-up text-green-700">
          Our Enterprise Offerings
        </h2>
        <div className='flex justify-center'>
          <div className='w-24 border-b-4 border-green-700 mb-12'></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="fade-up bg-green-700 bg-opacity-50 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={caIcon}
              alt="Custom Apps"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Custom Applications</h3>
            <p>Tailored software solutions built to meet your unique business needs.</p>
          </div>
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={siIcon}
              alt="Integration"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">System Integration</h3>
            <p>Seamlessly connect existing tools and applications to improve workflow.</p>
          </div>
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={paIcon}
              alt="Automation"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
            <p>Automate repetitive tasks to save time and reduce errors.</p>
          </div>
          <div className="fade-up bg-green-700 bg-opacity-50 p-6 rounded-xl shadow-lg w-60 hover:scale-105 transition-transform duration-300">
            <img
              src={arIcon}
              alt="Analytics"
              className="h-30 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Analytics & Reports</h3>
            <p>Gain insights into operations with actionable data and reporting tools.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 bg-green-700 text-white text-center">
        <h2 data-aos="fade-down" className="text-4xl font-bold mb-4 fade-up">
          Ready to Transform Your Business?
        </h2>
        <p data-aos="fade-up" className="text-lg max-w-3xl mx-auto mb-8 fade-up">
          Contact us today to discuss your enterprise solution requirements and
          accelerate your business growth.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 inline-block"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
