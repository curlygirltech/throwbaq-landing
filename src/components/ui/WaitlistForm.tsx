"use client";

import { useState, type FormEvent } from "react";
import type { Role } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [role, setRole] = useState<Role>("shopper");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (zip && !/^\d{5}$/.test(zip)) {
      setErrorMsg("Please enter a valid 5-digit zip code.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip, city, role }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
      setZip("");
      setCity("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="mb-3 text-4xl">🎉</div>
        <h3 className="font-syne text-2xl font-bold text-linen">
          You&apos;re on the list!
        </h3>
        <p className="mt-2 text-linen/70">
          We&apos;ll reach out when it&apos;s time. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      {/* Role toggle */}
      <div className="flex rounded-full bg-chocolate/30 p-1">
        <button
          type="button"
          onClick={() => setRole("shopper")}
          className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
            role === "shopper"
              ? "bg-tangelo text-white"
              : "text-linen/70 hover:text-linen"
          }`}
        >
          I need returns handled
        </button>
        <button
          type="button"
          onClick={() => setRole("runner")}
          className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
            role === "runner"
              ? "bg-tangelo text-white"
              : "text-linen/70 hover:text-linen"
          }`}
        >
          I want to be a Runner
        </button>
      </div>

      {/* Inputs */}
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-xl bg-chocolate/20 px-4 py-3 text-linen placeholder:text-linen/40 outline-none focus:ring-2 focus:ring-tangelo"
      />
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Zip code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          maxLength={5}
          inputMode="numeric"
          className="w-1/2 rounded-xl bg-chocolate/20 px-4 py-3 text-linen placeholder:text-linen/40 outline-none focus:ring-2 focus:ring-tangelo"
        />
        <input
          type="text"
          placeholder="City (optional)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-1/2 rounded-xl bg-chocolate/20 px-4 py-3 text-linen placeholder:text-linen/40 outline-none focus:ring-2 focus:ring-tangelo"
        />
      </div>

      {/* Error message */}
      {errorMsg && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-tangelo py-3.5 text-base font-semibold text-white transition-colors hover:bg-tangelo-hover disabled:opacity-60 cursor-pointer"
      >
        {status === "submitting" ? "Joining..." : "Join the Waitlist \u2192"}
      </button>

      <p className="text-center text-sm text-linen/50">
        No spam, ever. We&apos;ll only reach out when it&apos;s time.
      </p>
    </form>
  );
}
