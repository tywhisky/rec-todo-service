defmodule TodoServiceTest do
  use ExUnit.Case
  doctest TodoService

  test "greets the world" do
    assert TodoService.hello() == :world
  end
end
