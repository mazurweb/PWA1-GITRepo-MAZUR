/**
 * Name: Michael Mazur
 * Date: 05/09/2015
 * Assignment: Goal1: Duel1
 */

//Start of the self executing function for the fight application

//log FIGHT!!! to the console

//Variable playerOneName set to the value of Spiderman
//Variable playerOneHealth set to the value of 100
//Variable playerOneDamage set to the value of 50

//Variable playerTwoName set to the value of Batman
//Variable playerTwoHealth set to the value of 100
//Variable playerTwoDamage set to the value of 50

//Variable round set to the value of 0

//Creation of function Fight()
//Alert the user that the fight has started and displays player1 name and health *START*  player2 name and health

//Loop that runs 10 times until there is a clear winner or no more rounds
    //Create and set variable minDamage1 to half the value of player1Damage
    //Create and set variable minDamage2 to half the value of player2Damage
    //Create and set variable f1 to either 0 or 1 multiplied by player1Damage minus minDamage1 then add minDamage1 to that value
    //Create and set variable f2 to either 0 or 1 multiplied by player2Damage minus minDamage2 then add minDamage2 to that value

    //After the variables are created the function will then subtract the damage from both players health each time the loop has ran through
    //Log each players name and new health value to the console

    //After each deduction of health via damage it will then check for a victor
    //Variable Result will be set to the function winnerCheck()
    //Log the result to the console

    //IF the result is no winner
        //increment 1 to round
        //and alert the user with each players name and current health and shows that the round is over
    //ELSE
        //alert the user with the result

//END OF FIGHT FUNCTION

//Creation of Function winnerCheck()
//Set variable result to no winner

//IF player1 health is less than 1 AND player2 health is less than 1
    //set variable result to the value of You Both Die
//ELSEIF player1 health is less than 1
    //result is set to playerTwoName WINS!!!
//ELSEIF player2 health is less than 1
    //result is set to playerOneName WINS!!!

//After winner is determined return result

//END OF WINNERCHECK FUNCTION

//Call fight function to start program


