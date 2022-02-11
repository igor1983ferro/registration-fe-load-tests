package enterprise

import controller.Enterprise
import io.gatling.core.Predef.{scenario, _}
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.http

import scala.concurrent.duration._
import scala.language.postfixOps

class verifyEnterprise extends Simulation{

  val verifyEnterprise = new Enterprise();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyEnterpriseTest(): ChainBuilder = {
    verifyEnterprise.verifyEnterprise()
  }

  val scn = scenario("Verify Enterprise")
    .exec(verifyEnterpriseTest())

  setUp(
    scn.inject(
      constantUsersPerSec(10) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)

}
