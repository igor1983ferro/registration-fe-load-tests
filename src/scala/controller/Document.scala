package controller

import io.gatling.core.Predef.{bodyString, repeat, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class Document {
//Adicionar CSV com os CPF
  def verifyRegisterDocument(): ChainBuilder = {
    repeat ( 1 ) {
         exec ( http ( "Verify Registration Limit" )
        .post ( "https://cadastro.pagseguro.uol.com.br/register/document" )
        .header ( "Accept", "application/json")
           .body(
             StringBody(
               """{ "document": "047.635.551-62"}""")
           ).asJson
        .check ( status.is ( 200 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [Object] );
          session
        }
    }
  }
}
