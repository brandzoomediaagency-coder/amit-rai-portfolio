"use client";

import { useActionState } from "react";

import { submitInquiry, type InquiryFormState } from "@/lib/actions/inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const initialState: InquiryFormState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitInquiry, initialState);

  return (
    <form action={action} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" error={state.errors?.name?.[0]} />
        <Field label="Email" name="email" type="email" error={state.errors?.email?.[0]} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" error={state.errors?.phone?.[0]} />
        <Field label="Company" name="company" error={state.errors?.company?.[0]} />
      </div>
      <Field label="Website" name="website" error={state.errors?.website?.[0]} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="service_interest" className="text-white/70">
            Service Interest
          </Label>
          <Select name="service_interest" required>
            <SelectTrigger
              id="service_interest"
              className="border-white/10 bg-white/[0.04] text-white"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Performance Marketing">Performance Marketing</SelectItem>
              <SelectItem value="Meta Ads">Meta Ads</SelectItem>
              <SelectItem value="Google Ads">Google Ads</SelectItem>
              <SelectItem value="PPC Campaigns">PPC Campaigns</SelectItem>
              <SelectItem value="SEO & AI Optimization">SEO & AI Optimization</SelectItem>
              <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
              <SelectItem value="UGC Video Production">UGC Video Production</SelectItem>
              <SelectItem value="Influencer Marketing">Influencer Marketing</SelectItem>
              <SelectItem value="Website Development">Website Development</SelectItem>
              <SelectItem value="E-commerce Website">E-commerce Website</SelectItem>
              <SelectItem value="Google Business Profile">Google Business Profile</SelectItem>
              <SelectItem value="Lead Generation">Lead Generation</SelectItem>
              <SelectItem value="Funnel Optimization">Funnel Optimization</SelectItem>
              <SelectItem value="App Marketing">App Marketing</SelectItem>
              <SelectItem value="Branding & Growth Strategy">Branding & Growth Strategy</SelectItem>
            </SelectContent>
          </Select>
          {state.errors?.service_interest?.[0] ? (
            <p className="text-xs text-rose-300">{state.errors.service_interest[0]}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="monthly_budget" className="text-white/70">
            Monthly Budget
          </Label>
          <Select name="monthly_budget">
            <SelectTrigger
              id="monthly_budget"
              className="border-white/10 bg-white/[0.04] text-white"
            >
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Under 50K">Under 50K</SelectItem>
              <SelectItem value="50K - 1L">50K - 1L</SelectItem>
              <SelectItem value="1L - 5L">1L - 5L</SelectItem>
              <SelectItem value="5L+">5L+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className="text-white/70">
          Growth Challenge
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what you want to improve, scale, or fix."
          className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
        />
        {state.errors?.message?.[0] ? (
          <p className="text-xs text-rose-300">{state.errors.message[0]}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={pending}
        className="h-12 rounded-md bg-cyan-300 text-slate-950 hover:bg-cyan-200"
      >
        {pending ? "Sending..." : "Request Growth Consultation"}
      </Button>
      {state.message ? (
        <p className={state.ok ? "text-sm text-lime-200" : "text-sm text-rose-300"}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name} className="text-white/70">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
      />
      {error ? <p className="text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}
