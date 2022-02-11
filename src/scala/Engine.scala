import io.gatling.core.config.GatlingPropertiesBuilder
import email.verifyEmail
import person.verifyPerson
import password.verifyPassword
import enterprise.verifyEnterprise
import cep.{verifyCep,verifyCepByAddress}
import document.VerifyRegistrationLimit
import states.VerifyStates
import categories.VerifyCategories
import io.gatling.app.Gatling

object Engine {

  def main(args: Array[String]): Unit = {

    //Set the class for running
    val simClass1 = classOf[verifyEmail].getName
    val simClass2 = classOf[verifyPassword].getName
    val simClass3 = classOf[verifyPerson].getName
    val simClass4 = classOf[verifyEnterprise].getName
    val simClass5 = classOf[verifyCep].getName
    val simClass6 = classOf[verifyCepByAddress].getName
    val simClass7 = classOf[VerifyRegistrationLimit].getName
    val simClass8 = classOf[VerifyStates].getName
    val simClass9 = classOf[VerifyCategories].getName

    val props = new GatlingPropertiesBuilder
    props.simulationClass(simClass8)


    Gatling.fromMap(props.build)

  }
}
