--- !Ups

create table "task" (
  "id" uuid not null primary key,
  "title" varchar not null,
  "description" text,
  "prev_completed_at" timestamp,
  "completed_at" timestamp,
  "cycle_value" int,
  "cycle_unit" cycle_unit_enum,
  "userid" uuid not null,
  foreign key ("userid") references "user"("id")
);

create type cycle_unit_enum as enum ('day', 'week', 'month', 'year');

--- !Downs

drop table "task" if exists;

drop type cycle_unit_enum if exists;
