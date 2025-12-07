import { useState } from "react";
import Model from "../components/Model";

export default function Signup() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true); // ✅ show popup
  };

  // ✅ Close popup and refresh page
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <section className="pt-20 px-6 text-center">
      {/* Centered heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Sign Up</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-4 border border-blue-200"
      >
        <input
          required
          name="fullName"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name"
        />
        <input
          required
          type="email"
          name="email"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email address"
        />
        <input
          required
          type="password"
          name="password"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        <input
          required
          type="password"
          name="confirmPassword"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm password"
        />

        {/* Styled button */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>

      {/* ✅ Popup modal */}
      <Model
        open={open}
        title="Success"
        message="🎉 Signup successful! Welcome aboard."
        onClose={handleClose} // refresh after closing
      />
    </section>
  );
}