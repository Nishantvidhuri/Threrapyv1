"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import emailjs from 'emailjs-com'; // npm install emailjs-com

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "This field is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredSlot: z.string().min(1, "Preferred time slot is required"),
  agree: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_v5ma1dr', // provided EmailJS service ID
        'template_n8csemo', // provided EmailJS template ID
        {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          message: data.message,
          preferredDate: data.preferredDate,
          preferredSlot: data.preferredSlot,
        },
        'zcL4jj0QhEChPRS1V' // provided EmailJS public key
      );
      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      reset();
    } catch {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Name */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && <p className="mt-2 text-sm text-red-400">{errors.firstName.message}</p>}
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && <p className="mt-2 text-sm text-red-400">{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      {/* What brings you here? */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          What brings you here?
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      {/* Preferred time to reach you */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-1">
            Preferred Date
          </label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className={`block w-full px-3 py-2 rounded-md bg-white/10 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              errors.preferredDate ? "border-red-500" : ""
            }`}
          />
          {errors.preferredDate && <p className="mt-2 text-sm text-red-400">{errors.preferredDate.message}</p>}
        </div>
        <div className="w-full">
          <label htmlFor="preferredSlot" className="block text-sm font-medium text-gray-300 mb-1">
            Preferred Time Slot
          </label>
          <select
            id="preferredSlot"
            {...register("preferredSlot")}
            className={`block w-full px-3 py-2 rounded-md bg-gray-800 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 hover:bg-gray-700 transition-colors duration-150 ${
              errors.preferredSlot ? "border-red-500" : ""
            }`}
          >
            <option value="">Select a time slot</option>
            <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
            <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
            <option value="Evening (4pm-8pm)">Evening (4pm-8pm)</option>
          </select>
          {errors.preferredSlot && <p className="mt-2 text-sm text-red-400">{errors.preferredSlot.message}</p>}
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agree"
            type="checkbox"
            {...register("agree")}
            className={`w-5 h-5 rounded bg-white/20 border-white/30 text-indigo-500 focus:ring-indigo-500/50 ${
              errors.agree ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="agree" className="font-medium text-gray-300">
            I agree to be contacted
          </label>
        </div>
      </div>
      {errors.agree && <p className="mt-1 text-sm text-red-400">{errors.agree.message}</p>}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>

      {submitMessage && (
        <p className="text-center text-green-400 mt-4">{submitMessage}</p>
      )}
    </form>
  );
}