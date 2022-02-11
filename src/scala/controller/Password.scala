package controller

import io.gatling.core.Predef.{StringBody, bodyString, csv, rampUsers, repeat, scenario, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class Password {

  val customFeeder = Iterator.continually(Map(
    "cellphone" -> "11)99999-9999",
    "email" -> "helio_vendedor@mock.com",
    "document" -> "075.834.286-10",
    "birth_date" -> "01/01/1990",
    "password" -> "1234",

  ))


  def verifyPassword(): ChainBuilder = {
    repeat ( 1 ) {
      exec ( http ( "Validate Password" )
        .post ( "https://cadastro.pagseguro.uol.com.br/validate-password" )
        .header ( "Accept", "application/json")
        .body(
          StringBody(
            """{ "cellphone": "(11)99999-9999",
              |"email": "helio_vendedor@mock.com",
              |"document": "075.834.286-10",
              |"birth_date": "01/01/1990",
              |"password": "1234"
              | }""".stripMargin)
        ).asJson
        .check ( status.is ( 400 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [String] );
          session
        }
    }
  }

}
