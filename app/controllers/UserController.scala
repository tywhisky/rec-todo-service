package controllers

import javax.inject.Inject
import play.api.mvc.{AbstractController, ControllerComponents}
import repositories.UserRepository
import scala.concurrent.ExecutionContext
import play.api.libs.json.Json

class UserController @Inject() (
    cc: ControllerComponents,
    userRepository: UserRepository
)(implicit ec: ExecutionContext)
    extends AbstractController(cc) {
  def getById(id: String) = Action.async { implicit request =>
    val userId = java.util.UUID.fromString(id)
    userRepository.getById(userId).map {
      case Some(user) => Ok(Json.toJson(user))
      case None       => NotFound
    }
  }

  def getAll() = Action.async { implicit request =>
    userRepository.getAll().map { users =>
      Ok(Json.toJson(users))
    }
  }

  def create() = Action.async { implicit request =>
    val json = request.body.asJson.get
    val id = java.util.UUID.randomUUID()
    val name = (json \ "name").as[String]
    val email = (json \ "email").as[String]
    val password = (json \ "password").as[String]

    val user = models.User(id, name, email, password)
    userRepository.create(user).map { _ =>
      Ok(Json.toJson(user))
    }
  }

  def update(id: String) = Action.async { implicit request =>
    val userId = java.util.UUID.fromString(id)
    val json = request.body.asJson.get
    val name = (json \ "name").as[String]
    val email = (json \ "email").as[String]
    val password = (json \ "password").as[String]

    val user = models.User(userId, name, email, password)
    userRepository.update(user).map { _ =>
      Ok(Json.toJson(user))
    }
  }

  def delete(id: String) = Action.async { implicit request =>
    val userId = java.util.UUID.fromString(id)
    userRepository.delete(userId).map { _ =>
      NoContent
    }
  }
}
