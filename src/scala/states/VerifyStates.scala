package states

import controller.States
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.{StringBody, bodyString, csv, feed, repeat, scenario, _}
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.structure.ChainBuilder
import scala.concurrent.duration._
import scala.language.postfixOps

class VerifyStates extends Simulation{

  val verifyStates = new States();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyStatesTest(): ChainBuilder = {
    verifyStates.verifyStates()
  }

  val scn = scenario("Verify States")
    .exec(verifyStatesTest())


  setUp(
    scn.inject(
      // rampUsers (10 ) during (1 seconds),
      // rampUsers (10 ) during (1 seconds),
      //rampUsers (144000 ) during (14400 seconds)
      constantUsersPerSec(50) during (3 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)


}
