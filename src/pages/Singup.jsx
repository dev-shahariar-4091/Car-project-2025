import { useState } from "react";
import Model from "../components/Model";

export default function Signup() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="pt-20 px-6">
      <h2 className="text-2xl font-bold text-brand-600 mb-4">Sign Up</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 space-y-4"
      >
        <input
          required
          name="fullName"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
          placeholder="Full name"
        />
        <input
          required
          type="email"
          name="email"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
          placeholder="Email address"
        />
        <input
          required
          type="password"
          name="password"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
          placeholder="Password"
        />
        <input
          required
          type="password"
          name="confirmPassword"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-brand-600"
          placeholder="Confirm password"
        />
        <button
          type="submit"
          className="bg-brand-600 text-white rounded-md py-2 px-4 w-full hover:bg-brand-700"
        >
          Create Account
        </button>
      </form>

      <Model
        open={open}
        title="Success"
        message="🎉 Signup successful! Welcome aboard."
        onClose={() => setOpen(false)}
      />
    </section>
  );
}