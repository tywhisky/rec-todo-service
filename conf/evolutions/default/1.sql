# --- !Ups

create table "user" (
  "id" uuid not null primary key,
  "name" varchar not null,
  "email" varchar not null,
  "password" varchar not null
);

# --- !Downs

drop table "user" if exists;
