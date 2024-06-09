# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TodoService.Repo.insert!(%TodoService.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias TodoService.Accounts.User
alias TodoService.Repo

%User{name: "admin", email: "admin@gmail.com", password_hash: "xxx"}
|> Repo.insert!()
