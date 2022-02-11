package controller

import io.gatling.core.Predef.{bodyString, repeat, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class States {

  def verifyStates(): ChainBuilder = {
    repeat ( 1 ) {
         exec ( http ( "Verify States" )
        .get ( "https://cadastro.pagseguro.uol.com.br/location/states" )
        .header ( "Accept", "application/json")
           .check ( status.is ( 200 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [Object] );
          session
        }
    }
  }
}
