defmodule TodoService.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:name, :email, :password])
    |> validate_length(:password, min: 8)
    |> hash_password()
  end

  defp hash_password(chset) do
    password_hash =
      chset
      |> get_change(:password)
      |> Argon2.hash_pwd_salt()

    put_change(chset, :password_hash, password_hash)
  end
end
