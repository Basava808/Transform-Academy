"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Enquiry sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <input className="w-full p-2 text-black" placeholder="Name"
          onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="w-full p-2 text-black" type="email" placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})} required />
        <textarea className="w-full p-2 text-black" placeholder="Message"
          onChange={e=>setForm({...form,message:e.target.value})} required />
        <button className="bg-primary px-4 py-2">Send</button>
      </form>
    </div>
  );
}