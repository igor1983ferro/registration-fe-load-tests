package person

import controller.Person
import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef.{StringBody, bodyString, csv, feed, repeat, scenario, _}
import io.gatling.http.Predef.{http, status, _}
import io.gatling.core.structure.ChainBuilder
import scala.concurrent.duration._
import scala.language.postfixOps

class verifyPerson extends Simulation{

  val verifyPerson = new Person();

  val httpConf = http.baseUrl("https://cadastro.pagseguro.uol.com.br/register/kyc/customer")
    .header("Accept", "application/json")

  def verifyPersonTest(): ChainBuilder = {
    verifyPerson.verifyPerson();
  }

  val scn = scenario("Verify Person")
    .exec(verifyPersonTest())

  setUp(
    scn.inject(
      constantUsersPerSec(10) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)

}
