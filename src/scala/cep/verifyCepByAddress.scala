package cep

import controller.Cep
import io.gatling.core.Predef.{scenario, _}
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.http

import scala.concurrent.duration._
import scala.language.postfixOps

class verifyCepByAddress extends Simulation{

  val verifyCepByAddress = new Cep();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyCepByAddressTest(): ChainBuilder = {
    verifyCepByAddress.verifyCep()
  }

  val scn = scenario("Verify Cep")
    .exec(verifyCepByAddressTest())

  setUp(
    scn.inject(
      constantUsersPerSec(1) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)

}
