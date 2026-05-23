"use server";

import { z } from "zod";

import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("A valid email is required."),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  service_interest: z.string().min(2, "Select a service."),
  monthly_budget: z.string().optional(),
  message: z.string().min(10, "Share a little more context."),
});

export type InquiryFormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitInquiry(
  _previousState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const parsed = inquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    website: formData.get("website"),
    service_interest: formData.get("service_interest"),
    monthly_budget: formData.get("monthly_budget"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      ok: true,
      message:
        "Demo mode: inquiry validated locally. Add Supabase environment variables to persist leads.",
    };
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("contact_inquiries").insert(parsed.data);

  if (error) {
    return {
      ok: false,
      message: "The inquiry could not be saved. Please try WhatsApp or email.",
    };
  }

  return {
    ok: true,
    message: "Thanks. Your inquiry has been received.",
  };
}
