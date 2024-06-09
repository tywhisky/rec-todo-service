defmodule TodoServiceWeb.Resolvers.AccountsResolver do
  alias TodoService.Accounts

  def all_users(_root, _args, _info) do
    {:ok, Accounts.list_users()}
  end

  def create_user(_root, args, _info) do
    Accounts.create_user(args)
  end
end
