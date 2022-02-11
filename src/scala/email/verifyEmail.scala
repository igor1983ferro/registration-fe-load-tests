package email

import controller.Email
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.{StringBody, bodyString, csv, feed, repeat, scenario, _}
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.structure.ChainBuilder
import scala.concurrent.duration._
import scala.language.postfixOps

class verifyEmail extends Simulation{

val verifyEmail = new Email();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyEmailTest(): ChainBuilder = {
    verifyEmail.verifyEmail();
  }

  val scn = scenario("Verify Email")
    .exec(verifyEmailTest())


  setUp(
    scn.inject(
      // rampUsers (10 ) during (1 seconds),
      // rampUsers (10 ) during (1 seconds),
      //rampUsers (144000 ) during (14400 seconds)
      constantUsersPerSec(10) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)
}
