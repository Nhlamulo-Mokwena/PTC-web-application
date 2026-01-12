import React from "react";
import NewsLetter from '../components/NewsLetter'

const ContactPage = () => {
  return (
    <div className="bg-light-blue p-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="bg-white p-5 shadow rounded-lg">
          <h1 className="text-2xl font-semibold mb-3">Contact Details</h1>
          <div className="flex flex-col space-y-3.5">
            <p>
              <b>Address:</b> 32 Tana St, Doorn, Welkom, 9459
            </p>
            <p>
              <b>Phone:</b> 057 352 6313
            </p>
            <p>
              <b>Email:</b> info@pulakgadi.co.za
            </p>
            <p>
              <b>Hours:</b> Mon – Fri: 8:00 – 17:00
            </p>
          </div>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h1 className="text-2xl font-semibold">Send us a message</h1>
          <div className="w-full m-auto p-5">
            <form action="">
              <div className="flex flex-col mb-4">
                <label htmlFor="name">Your Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={""}
                  onChange={""}
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email">Email Address: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={""}
                  onChange={""}
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message">Message: </label>
                <textarea
                  name="message"
                  id="message"
                  value={""}
                  onChange={""}
                  rows={6}
                  className="border border-gray-300"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-gold-yellow p-2 text-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps?q=32%20Tana%20St,%20Doorn,%20Welkom,%209459&output=embed"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
       <a 
        class="whatsapp-btn" 
        href="https://wa.me/27739615082" 
        target="_blank" 
        title="Chat with us on WhatsApp"
        className="fixed right-20 bottom-20 bg-[#25D366] text-white p-4 rounded-4xl 
        text-center shadow"
      >
      🟢
       </a>
      <NewsLetter/>
    </div>
  );
};

export default ContactPage;
