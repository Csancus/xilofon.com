create table if not exists contacts (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz default now(),
  name        text not null,
  email       text not null,
  phone       text,
  message     text not null,
  source      text default 'website'
);

-- Csak a service_role olvashat (RLS bekapcsolva)
alter table contacts enable row level security;
create policy "service role full access" on contacts
  using (true)
  with check (true);
