CREATE TABLE page_views (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  visitor_id UUID NOT NULL,
  session_id UUID NOT NULL,
  path TEXT NOT NULL,
  location_city TEXT,
  location_country TEXT,
  referrer TEXT,
  user_agent TEXT,
  screen_width INT,
  screen_height INT
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public read access" ON public.page_views
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable public insert access" ON public.page_views
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (true);