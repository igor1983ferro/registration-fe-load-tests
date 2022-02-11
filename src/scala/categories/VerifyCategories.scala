package categories

import controller.Categories
import io.gatling.core.Predef.{scenario, _}
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef.http

import scala.concurrent.duration._
import scala.language.postfixOps

class VerifyCategories extends Simulation{

  val verifyCategories = new Categories();

  val httpConf = http.baseUrl("")
    .header("Accept", "application/json")

  def verifyCategoriesTest(): ChainBuilder = {
    verifyCategories.verifyCategories()
  }

  val scn = scenario("Verify Categories")
    .exec(verifyCategoriesTest())


  setUp(
    scn.inject(
      // rampUsers (10 ) during (1 seconds),
      // rampUsers (10 ) during (1 seconds),
      //rampUsers (144000 ) during (14400 seconds)
      constantUsersPerSec(10) during (1 seconds)
    ).protocols(httpConf))//.maxDuration(60 minutes)


}
