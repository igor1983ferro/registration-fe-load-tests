package controller

import io.gatling.core.Predef.{bodyString, repeat, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class Enterprise {

  def verifyEnterprise(): ChainBuilder = {
    repeat ( 1 ) {
        // exec(addCookie(Cookie("Cookie", "psonb_ab={}")))
         exec ( http ( "Validate Enterprise" )
        .post ( "https://cadastro.pagseguro.uol.com.br/register/kyc/enterprise" )
        .header ( "Accept", "application/json")
           .body(
             StringBody(
               """{ "document": "09323712000116",
                 |"birth_date": "02/12/1920",
                 |"company_name": "Sky Net Corporation",
                 |"email": "helio_vendedor@porto.com",
                 |"recaptchaToken": "fake_token"
                 | }""".stripMargin)
           )
        .check ( status.is ( 400 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [Object] );
          session
        }
    }
  }
}
