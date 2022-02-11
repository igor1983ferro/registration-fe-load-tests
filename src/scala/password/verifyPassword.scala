package password

import controller.Password
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.{StringBody, bodyString, csv, feed, repeat, scenario, _}
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.structure.ChainBuilder
import scala.concurrent.duration._
import scala.language.postfixOps

class verifyPassword extends Simulation{

  val verifyPassword = new Password();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyPasswordTest(): ChainBuilder = {
    verifyPassword.verifyPassword();
  }

  val scn = scenario("Verify Password")
    .exec(verifyPasswordTest())

  setUp(
    scn.inject(
      // rampUsers (10 ) during (1 seconds),
      // rampUsers (10 ) during (1 seconds),
      //rampUsers (144000 ) during (14400 seconds)
      constantUsersPerSec(10) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)

}
