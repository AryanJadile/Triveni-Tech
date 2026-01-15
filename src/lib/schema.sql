-- Enable Row Level Security (RLS) on all tables is recommended
-- You can run this entire script in the SQL Editor of your Supabase Dashboard

-- 1. Create 'quote_requests' table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  organization TEXT,
  phone TEXT,
  service TEXT,
  complexity TEXT
);

-- Enable RLS for quote_requests
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT quote requests
CREATE POLICY "Allow public insert for quotes" 
ON quote_requests FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated (service role/admin) to READ quote requests
CREATE POLICY "Allow admin read for quotes" 
ON quote_requests FOR SELECT 
TO service_role 
USING (true);


-- 2. Create 'contact_messages' table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable RLS for contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT messages
CREATE POLICY "Allow public insert for messages" 
ON contact_messages FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated (service role/admin) to READ messages
CREATE POLICY "Allow admin read for messages" 
ON contact_messages FOR SELECT 
TO service_role 
USING (true);


-- 3. Create 'internship_applications' table
CREATE TABLE IF NOT EXISTS internship_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  college TEXT NOT NULL,
  domain TEXT NOT NULL,
  cover_letter TEXT,
  resume_url TEXT
);

-- Enable RLS for internship_applications
ALTER TABLE internship_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT applications
CREATE POLICY "Allow public insert for applications" 
ON internship_applications FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated (service role/admin) to READ applications
CREATE POLICY "Allow admin read for applications" 
ON internship_applications FOR SELECT 
TO service_role 
USING (true);

-- 4. Create Storage Bucket for Resumes
-- Note: Buckets are usually created via the UI, but this SQL creates a public bucket
-- You might also need to set specific storage policies via the UI or SQL
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true) ON CONFLICT DO NOTHING;

-- Policy to allow public to upload resumes
CREATE POLICY "Allow public upload resumes"
ON storage.objects FOR INSERT
TO anon
WITH CHECK ( bucket_id = 'resumes' );

-- Policy to allow admin to view resumes
CREATE POLICY "Allow public read resumes"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id = 'resumes' );
