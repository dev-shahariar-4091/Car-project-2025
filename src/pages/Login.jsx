import { useState } from "react";
import Model from "../components/Model";

export default function Login() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true); 
  };

 
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <section className="pt-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Login</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-4 border border-blue-200 text-left"
      >
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

       
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

   
      <Model
        open={open}
        title="Success"
        message="🎉 Login successful! Welcome back."
        onClose={handleClose} 
      />
    </section>
  );
}