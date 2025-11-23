import { useState } from "react";
import Model from "../components/Model";

export default function Contact () {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="pt-20 px-6">
      <h2 className="text-2xl font-bold text-brand-600 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Reach us for any query. We respond within 24 hours.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-md p-6 space-y-2">
          <h4 className="font-semibold mb-2">Support</h4>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong> info@autorent.com
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, City, State 12345
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-md p-6 space-y-4"
        >
          <input
            required
            name="name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
            placeholder="Your name"
          />
          <input
            required
            type="email"
            name="email"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
            placeholder="Email address"
          />
          <textarea
            required
            name="message"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-brand-600 text-white rounded-md py-2 px-4 w-full hover:bg-brand-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <Model
        open={open}
        title="Message Sent!"
        message="✅ Thank you for contacting us. We'll get back to you shortly."
        onClose={() => setOpen(false)}
      />
    </section>
  );
}