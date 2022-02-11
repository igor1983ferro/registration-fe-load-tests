package cep

import controller.Cep
import io.gatling.core.Predef.{scenario, _}
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.http

import scala.concurrent.duration._
import scala.language.postfixOps

class verifyCep extends Simulation{

  val verifyCep = new Cep();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyCepTest(): ChainBuilder = {
    verifyCep.verifyCep()
  }

  val scn = scenario("Verify Cep")
    .exec(verifyCepTest())

  setUp(
    scn.inject(
      constantUsersPerSec(20) during (2 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)

}
