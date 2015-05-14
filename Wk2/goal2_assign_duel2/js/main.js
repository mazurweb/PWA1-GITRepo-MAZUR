/**
 * Name: Michael Mazur
 * Date: 05/09/2015
 * Assignment: Goal1: Duel1
 */

(function(){                                                                                                            //Start of the self executing function for the fight application

    console.log("FIGHT!!!");                                                                                            //Log FIGHT to console

    var playerOne = ['Spiderman', 20, 100];                                                                             //Array variable for player one [name, damage, health]
    var playerTwo = ['Batman', 20, 100];                                                                                //Array variable for player two [name, damage, health]

    //initiate round
    var round=0;                                                                                                        //Variable round set to the value of 0

    function fight(){                                                                                                   //Creation of function Fight()
        alert(playerOne[0]+":"+ playerOne[2] +"  *START*  "+ playerTwo[0] +":"+ playerTwo[2]);                          //Alert the user that the fight has started and displays playerone name and health *START*  playertwo name and health
        for (var i = 0; i < 10; i++)                                                                                    //Loop that runs 10 times until there is a clear winner or no more rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;                                                                         //Create and set variable minDamage1 to half the value of playerOne[damage]
            var minDamage2 = playerTwo[1] * .5;                                                                         //Create and set variable minDamage2 to half the value of playerTwo[damage]
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);                                    //Create and set variable f1 to either 0 or 1 multiplied by playerOne[damage] minus minDamage1 then add minDamage1 to that value
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);                                    //Create and set variable f2 to either 0 or 1 multiplied by playerTwo[damage] minus minDamage2 then add minDamage2 to that value

            //inflict damage
            playerOne[2]-=f1;                                                                                           //After the variables are created the function will then subtract the damage from both players health each time the loop has ran through
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0] +":"+playerTwo[2]);                         //Log each players name and new health value to the console

            //check for victor                                                                                          //After each deduction of health via damage it will then check for a victor
            var result = winnerCheck();                                                                                 //Variable Result will be set to the function winnerCheck()
            console.log(result);                                                                                        //Log the result to the console

            if (result==="no winner")                                                                                   //IF the result is no winner
            {
                round++;                                                                                                //increment 1 to round
                alert(playerOne[0]+":"+playerOne[2] +"  *ROUND "+round+" OVER"+"*  "+ playerTwo[0]+":"+ playerTwo[2]);  //and alert the user with each players name and current health and shows that the round is over

            } else{                                                                                                     //ELSE
                alert(result);                                                                                          //alert the user with the result
                break;
            };

        };
    };                                                                                                                  //END OF FIGHT FUNCTION

    function winnerCheck(){                                                                                             //Creation of Function winnerCheck()
        var result="no winner";                                                                                         //Set variable result to no winner
        if (playerOne[2]<1 && playerTwo[2]<1)                                                                           //IF playerOne[health] is less than 1 AND playerTwo[health] is less than 1
        {
            result = "You Both Die";                                                                                    //set variable result to the value of You Both Die
        } else if(playerOne[2]<1){                                                                                      //ELSEIF playerOne[health] is less than 1
            result =playerTwo[0]+" WINS!!!"                                                                             //result is set to playerTwo[name] WINS!!!
        } else if (playerTwo[2]<1)                                                                                      //ELSEIF playerTwo[health] is less than 1
        {
            result = playerOne[0]+" WINS!!!"                                                                            //result is set to playerOne[name] WINS!!!
        };
        return result;                                                                                                  //After winner is determined return result
    };                                                                                                                  //END OF WINNERCHECK FUNCTION

    /*******  The program gets started below *******/
    fight();                                                                                                            //Call fight function to start program

})();
























