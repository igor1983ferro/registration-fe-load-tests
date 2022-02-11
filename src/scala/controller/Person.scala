package controller

import io.gatling.core.Predef.{StringBody, bodyString, csv, rampUsers, repeat, scenario, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class Person {

  def verifyPerson(): ChainBuilder = {
    repeat ( 1 ) {
        // exec(addCookie(Cookie("Cookie", "psonb_ab={}")))
         exec ( http ( "Validate Person" )
        .post ( "https://cadastro.pagseguro.uol.com.br/register/kyc/customer" )
        .header ( "Accept", "application/json")
           .body(
             StringBody(
               """{ "document": "047.635.551-62",
                 |"full_name": "John Connor",
                 |"birth_date": "01/01/1991",
                 |"email": "helio_vendedor@porto.com",
                 |"recaptchaToken": "fake_token"
                 | }""".stripMargin)
           ).asJson
        .check ( status.is ( 400 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [Object] );
          session
        }
    }
  }
}
