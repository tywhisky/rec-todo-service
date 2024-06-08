import Config

config :todo_service, TodoService.Repo,
  database: "todo_service_repo",
  username: "postgres",
  password: "postgres",
  hostname: "localhost"

config :todo_service, ecto_repos: [TodoService.Repo]
