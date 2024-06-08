defmodule TodoService.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field(:username, :string)
    field(:email, :string)
    field(:password_hash, :string)
    field(:first_name, :string)
    field(:last_name, :string)
    field(:age, :integer)

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :password_hash, :first_name, :last_name, :age])
    |> validate_required([:username, :email, :password_hash])
    |> validate_format(:email, ~r/@/)
    |> validate_length(:username, min: 1, max: 50)
    |> validate_length(:password_hash, min: 6)
    |> validate_number(:age, greater_than_or_equal_to: 0)
    |> unique_constraint(:email)
    |> unique_constraint(:username)
  end
end
