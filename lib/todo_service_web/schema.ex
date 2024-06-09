defmodule TodoServiceWeb.Schema do
  use Absinthe.Schema

  alias TodoServiceWeb.Resolvers.AccountsResolver

  object :user do
    field :id, non_null(:id)
    field :name, non_null(:string)
    field :email, non_null(:string)
  end

  query do
    @desc "Get all users"
    field :all_users, non_null(list_of(non_null(:user))) do
      resolve(&AccountsResolver.all_users/3)
    end
  end
end
