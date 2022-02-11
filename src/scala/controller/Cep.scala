package controller

import io.gatling.core.Predef.{StringBody, bodyString, repeat, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}
//import org.json4s.jackson.Json

import scala.util.Random

class Cep {

  val cep = csv(fileName = "cep.csv").circular

  def verifyCep(): ChainBuilder = {
      repeat ( 1 ) {
      feed(cep)
      .exec ( http ( "Verify Cep" )
        .get ( "https://cadastro.pagseguro.uol.com.br/location/${Cep}" )
        .header ( "Accept", "aplication/json" )
        .check ( status.is ( 200 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [String] );
          session
        }
    }
  }

  def verifyCepByAddress(): ChainBuilder = {
    repeat ( 1 ) {
      exec ( http ( "Verify Cep By Address" )
        .get ( "https://cadastro.pagseguro.uol.com.br/location/26/S%C3%A3o%20Paulo/Faria%20Lima" )
        .header ( "Accept", "aplication/json" )
        .check ( status.is ( 200 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [String] );
          session
        }
    }
  }
}
