package controller

import io.gatling.core.Predef.{bodyString, repeat, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}

class Categories {

  def verifyCategories(): ChainBuilder = {
    repeat ( 1 ) {
         exec ( http ( "Verify Categories" )
        .get ( "https://cadastro.pagseguro.uol.com.br/categories" )
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
