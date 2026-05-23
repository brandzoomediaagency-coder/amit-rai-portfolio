"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/server";

const serviceSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  summary: z.string().min(10),
  status: z.enum(["draft", "review", "published", "archived"]).default("draft"),
});

export type CmsActionState = {
  ok: boolean;
  message: string;
};

export async function upsertService(
  _previousState: CmsActionState,
  formData: FormData,
): Promise<CmsActionState> {
  const parsed = serviceSchema.safeParse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    summary: formData.get("summary"),
    status: formData.get("status") || "draft",
  });

  if (!parsed.success) {
    return { ok: false, message: "Service content is incomplete." };
  }

  if (!isSupabaseConfigured() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      ok: true,
      message: "Demo mode: service validated. Connect Supabase to persist CMS changes.",
    };
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("services").upsert(parsed.data, {
    onConflict: "slug",
  });

  if (error) {
    return { ok: false, message: error.message };
  }

  revalidatePath("/services");
  revalidatePath("/");

  return { ok: true, message: "Service saved." };
}

export async function deleteCmsEntry(table: string, id: string): Promise<CmsActionState> {
  const allowedTables = new Set([
    "services",
    "projects",
    "case_studies",
    "certifications",
    "achievements",
    "testimonials",
    "skills",
    "blog_posts",
    "media_assets",
    "seo_settings",
  ]);

  if (!allowedTables.has(table)) {
    return { ok: false, message: "Unsupported CMS table." };
  }

  if (!isSupabaseConfigured() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      ok: true,
      message: "Demo mode: delete action validated. Connect Supabase to persist CMS changes.",
    };
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from(table).delete().eq("id", id);

  if (error) {
    return { ok: false, message: error.message };
  }

  revalidatePath("/");

  return { ok: true, message: "Entry deleted." };
}
