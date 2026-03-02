import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold mb-8">Create your account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded-md text-white font-medium hover:bg-blue-500 transition-colors"
        >
          Sign Up
        </button>

      </form>

      <p className="text-sm text-zinc-400 mt-6 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </AuthLayout>
  );
};

export default Signup;