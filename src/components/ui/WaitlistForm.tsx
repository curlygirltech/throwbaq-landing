"use client";

import { useState, type FormEvent } from "react";
import type { Role } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";
type Variant = "full" | "compact";

interface WaitlistFormProps {
  variant?: Variant;
}

export default function WaitlistForm({ variant = "full" }: WaitlistFormProps) {
  const [role, setRole] = useState<Role>("shopper");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [company, setCompany] = useState("");
  const [submittedRoles, setSubmittedRoles] = useState<Role[]>([]);

  const otherRole: Role = role === "shopper" ? "runner" : "shopper";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!zip || !/^\d{5}$/.test(zip)) {
      setErrorMsg("Please enter a valid 5-digit zip code.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          zip,
          city: variant === "full" ? city : "",
          role,
          company,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmittedRoles((prev) => [...prev, role]);
      setStatus("success");
      setZip("");
      if (variant === "full") {
        setCity("");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  const handleSignUpOtherRole = () => {
    setRole(otherRole);
    setStatus("idle");
    setErrorMsg("");
  };

  if (status === "success") {
    const signedUpBoth = submittedRoles.length >= 2;
    const lastSubmittedRole = submittedRoles[submittedRoles.length - 1];
    const otherRoleLabel = lastSubmittedRole === "shopper" ? "Runner" : "Shopper";

    if (signedUpBoth) {
      return (
        <div className="text-center">
          <div className="mb-3 text-4xl">🎉</div>
          <h3 className="font-syne text-2xl font-bold text-linen">
            You&apos;re signed up for both!
          </h3>
          <p className="mt-2 text-linen/70">
            We&apos;ll reach out when it&apos;s time. No spam, ever.
          </p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <div className="mb-3 text-4xl">🎉</div>
        <h3 className="font-syne text-2xl font-bold text-linen">
          You&apos;re on the list!
        </h3>
        <p className="mt-2 text-linen/70">
          We&apos;ll reach out when it&apos;s time. No spam, ever.
        </p>
        <button
          type="button"
          onClick={handleSignUpOtherRole}
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-tangelo/20 px-5 py-2.5 text-sm font-semibold text-tangelo transition-colors hover:bg-tangelo/30 cursor-pointer"
        >
          Also sign up as a {otherRoleLabel} &rarr;
        </button>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-3">
        {/* Role toggle */}
        <div className="flex rounded-full bg-chocolate/30 p-1">
          <button
            type="button"
            onClick={() => setRole("shopper")}
            className={`flex-1 rounded-full py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
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
            className={`flex-1 rounded-full py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              role === "runner"
                ? "bg-tangelo text-white"
                : "text-linen/70 hover:text-linen"
            }`}
          >
            I want to be a Runner
          </button>
        </div>

        {/* Email + Zip + Submit */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-xl bg-chocolate/20 px-4 py-3 text-linen placeholder:text-chocolate/60 outline-none focus:ring-2 focus:ring-tangelo"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              maxLength={5}
              inputMode="numeric"
              required
              className="flex-1 sm:w-20 sm:flex-initial rounded-xl bg-chocolate/20 px-3 py-3 text-linen placeholder:text-chocolate/60 outline-none focus:ring-2 focus:ring-tangelo"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-xl bg-tangelo px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-tangelo-hover disabled:opacity-60 cursor-pointer whitespace-nowrap"
            >
              {status === "submitting" ? "Joining..." : "Join →"}
            </button>
          </div>
        </div>

        {/* Honeypot field — hidden from real users */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        {/* Error message */}
        {errorMsg && (
          <p className="text-sm text-red-400">{errorMsg}</p>
        )}

        <p className="text-center text-xs text-linen/50">
          No spam, ever. We&apos;ll only reach out when it&apos;s time.
        </p>
      </form>
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
          required
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

      {/* Honeypot field — hidden from real users */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

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
        {status === "submitting" ? "Joining..." : "Join the Waitlist →"}
      </button>

      <p className="text-center text-sm text-linen/50">
        No spam, ever. We&apos;ll only reach out when it&apos;s time.
      </p>
    </form>
  );
}
