package repositories

import javax.inject.Inject
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import models.User
import java.util.UUID

import scala.concurrent.{ExecutionContext, Future}

class UserRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(
    implicit ec: ExecutionContext
) {
  private val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig._
  import profile.api._

  private class UserTable(tag: Tag) extends Table[User](tag, "user") {
    def id = column[UUID]("id", O.PrimaryKey)
    def name = column[String]("name")
    def email = column[String]("email")
    def password = column[String]("password")

    def * = (id, name, email, password) <> ((User.apply _).tupled, User.unapply)
  }

  private val users = TableQuery[UserTable]

  def getById(id: UUID): Future[Option[User]] = db.run {
    users.filter(_.id === id).result.headOption
  }

  def getByEmail(email: String): Future[Option[User]] = db.run {
    users.filter(_.email === email).result.headOption
  }

  def getAll(): Future[Seq[User]] = db.run {
    users.result
  }

  def create(user: User): Future[Unit] = db
    .run {
      users += user
    }
    .map(_ => ())

  def update(user: User): Future[Unit] = db
    .run {
      users.filter(_.id === user.id).update(user)
    }
    .map(_ => ())

  def delete(id: UUID): Future[Unit] = db
    .run {
      users.filter(_.id === id).delete
    }
    .map(_ => ())
}
