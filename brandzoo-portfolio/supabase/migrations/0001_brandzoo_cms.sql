create extension if not exists pgcrypto;

create type content_status as enum ('draft', 'review', 'published', 'archived');
create type inquiry_status as enum ('new', 'contacted', 'qualified', 'won', 'lost', 'spam');

create table admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text not null,
  description jsonb default '{}'::jsonb,
  icon text,
  benefits text[] default '{}',
  deliverables text[] default '{}',
  featured_metric_label text,
  featured_metric_value text,
  sort_order int default 0,
  status content_status default 'draft',
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  client_name text,
  industry text,
  summary text,
  cover_image_url text,
  gallery jsonb default '[]'::jsonb,
  services text[] default '{}',
  status content_status default 'draft',
  published_at timestamptz,
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table case_studies (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete set null,
  title text not null,
  slug text unique not null,
  client_name text,
  industry text,
  objective text,
  problem jsonb default '{}'::jsonb,
  strategy jsonb default '{}'::jsonb,
  execution jsonb default '{}'::jsonb,
  results_summary text,
  cover_image_url text,
  screenshots jsonb default '[]'::jsonb,
  charts jsonb default '[]'::jsonb,
  before_stats jsonb default '{}'::jsonb,
  after_stats jsonb default '{}'::jsonb,
  status content_status default 'draft',
  published_at timestamptz,
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table case_study_metrics (
  id uuid primary key default gen_random_uuid(),
  case_study_id uuid not null references case_studies(id) on delete cascade,
  label text not null,
  value numeric,
  display_value text not null,
  unit text,
  trend text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table certifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text not null,
  credential_id text,
  credential_url text,
  file_url text,
  issued_at date,
  expires_at date,
  description text,
  status content_status default 'draft',
  sort_order int default 0,
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table achievements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  achieved_at date,
  media_url text,
  link_url text,
  status content_status default 'draft',
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_role text,
  company_name text,
  industry text,
  quote text not null,
  rating int check (rating between 1 and 5),
  photo_url text,
  logo_url text,
  video_url text,
  result_tag text,
  status content_status default 'draft',
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  proficiency int check (proficiency between 0 and 100),
  icon text,
  description text,
  sort_order int default 0,
  status content_status default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content jsonb not null default '{}'::jsonb,
  cover_image_url text,
  category text,
  tags text[] default '{}',
  reading_time_minutes int,
  status content_status default 'draft',
  published_at timestamptz,
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table media_assets (
  id uuid primary key default gen_random_uuid(),
  bucket text not null,
  path text not null,
  public_url text,
  filename text not null,
  mime_type text,
  size_bytes bigint,
  alt_text text,
  caption text,
  created_at timestamptz default now()
);

create table contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  website text,
  service_interest text,
  monthly_budget text,
  message text not null,
  preferred_contact text,
  source text default 'website',
  status inquiry_status default 'new',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table seo_settings (
  id uuid primary key default gen_random_uuid(),
  route text unique not null,
  title text not null,
  description text not null,
  keywords text[] default '{}',
  canonical_url text,
  og_image_url text,
  robots jsonb default '{"index": true, "follow": true}'::jsonb,
  schema jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from admin_users where user_id = auth.uid()
  );
$$;

alter table services enable row level security;
alter table projects enable row level security;
alter table case_studies enable row level security;
alter table case_study_metrics enable row level security;
alter table certifications enable row level security;
alter table achievements enable row level security;
alter table testimonials enable row level security;
alter table skills enable row level security;
alter table blog_posts enable row level security;
alter table media_assets enable row level security;
alter table contact_inquiries enable row level security;
alter table seo_settings enable row level security;

create policy "public read published services" on services for select using (status = 'published');
create policy "public read published projects" on projects for select using (status = 'published');
create policy "public read published case studies" on case_studies for select using (status = 'published');
create policy "public read published certifications" on certifications for select using (status = 'published');
create policy "public read published achievements" on achievements for select using (status = 'published');
create policy "public read published testimonials" on testimonials for select using (status = 'published');
create policy "public read published skills" on skills for select using (status = 'published');
create policy "public read published blog posts" on blog_posts for select using (status = 'published');
create policy "public create inquiries" on contact_inquiries for insert with check (true);

create policy "admin manage services" on services for all using (is_admin()) with check (is_admin());
create policy "admin manage projects" on projects for all using (is_admin()) with check (is_admin());
create policy "admin manage case studies" on case_studies for all using (is_admin()) with check (is_admin());
create policy "admin manage metrics" on case_study_metrics for all using (is_admin()) with check (is_admin());
create policy "admin manage certifications" on certifications for all using (is_admin()) with check (is_admin());
create policy "admin manage achievements" on achievements for all using (is_admin()) with check (is_admin());
create policy "admin manage testimonials" on testimonials for all using (is_admin()) with check (is_admin());
create policy "admin manage skills" on skills for all using (is_admin()) with check (is_admin());
create policy "admin manage blog posts" on blog_posts for all using (is_admin()) with check (is_admin());
create policy "admin manage media" on media_assets for all using (is_admin()) with check (is_admin());
create policy "admin manage inquiries" on contact_inquiries for all using (is_admin()) with check (is_admin());
create policy "admin manage seo" on seo_settings for all using (is_admin()) with check (is_admin());
