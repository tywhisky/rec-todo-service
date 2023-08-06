package models

import java.util.UUID
import play.api.libs.json._

case class User(id: UUID, name: String, email: String, password: String)

object User {
  implicit val userFormat: OFormat[User] = Json.format[User]
}
