defmodule TodoService.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add(:usersname, :string)
      add(:email, :string)
      add(:password_hash, :string)
      add(:first_name, :string)
      add(:last_name, :string)
      add(:age, :integer)

      timestamps()
    end

    create unique_index(:users, [:email])
    create unique_index(:users, [:usersname])
  end
end
