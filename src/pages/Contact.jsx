import React from "react";
import contactImage from "../assets/images/contact-cover.webp";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md my-6">
      <header className="mb-4">
        <h1 className="text-yellow-400 text-3xl font-bold mb-2">
          Contact Batman News
        </h1>
      </header>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg lg:mr-6 mb-6 lg:mb-0 my-16"
        />
        <article className="text-gray-300 leading-loose lg:w-1/2">
          <p className="mb-8 text-xl">
            We would love to hear from you! Whether you have questions,
            feedback, or just want to share your love for Batman, feel free to
            reach out to us. Our team is always eager to connect with fellow
            Batman enthusiasts.
          </p>
          <p className="mb-8 text-xl">
            You can contact us via the following methods:
          </p>
          <ul className="list-disc list-inside mb-8 text-xl">
            <li>Email: info@batmannews.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Gotham Street, Gotham City</li>
          </ul>
          <p className="mb-8 text-xl">
            Follow us on social media for the latest updates:
          </p>
          <ul className="list-disc list-inside mb-8 text-xl">
            <li>Facebook: facebook.com/batmannews</li>
            <li>Twitter: twitter.com/batmannews</li>
            <li>Instagram: instagram.com/batmannews</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Contact;
