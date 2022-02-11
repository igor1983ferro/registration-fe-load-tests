package controller

import io.gatling.core.Predef.{StringBody, bodyString, csv, rampUsers, repeat, scenario, _}
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.Predef._
//import org.json4s.jackson.Json

import scala.util.Random

class Email {

  val rnd = new Random()
  def randomString(length: Int) = {
    rnd.alphanumeric.filter(_.isLetter).take(length).mkString
  }

  def verifyEmail(): ChainBuilder = {
    repeat ( 1 ) {
      exec ( http ( "Verify Email" )
        .post ( "https://cadastro.pagseguro.uol.com.br/register/email" )
        .header ( "Accept", "aplication/json" )
        .body ( StringBody (
          "{" +
            s"\n\t\"email\":\"${randomString(9)}+@testedecarga.com\"" +
            "\n}" )
        ).asJson
        .check ( status.is ( 200 ) )
        check bodyString.saveAs ( "responseBody" ) )
        .exec { session =>
          println ( session ( "responseBody" ).as [String] );
          session
        }
    }
  }
}
