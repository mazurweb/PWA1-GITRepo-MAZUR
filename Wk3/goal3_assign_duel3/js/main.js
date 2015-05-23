/**
 * Name: Michael Mazur
 * Date: 05/21/2015
 * Assignment: Goal3: Duel3
 */

(function(){                                                                                                            //Start of the self executing function for the fight application

    console.log("FIGHT!!!");                                                                                            //Log FIGHT to console

    var fighter1_txt = document.querySelector('#spiderman').querySelector('p');                                         //Declares fighter1_txt and selects the p element in #spiderman div
    console.log(fighter1_txt);
    var fighter2_txt = document.querySelector('#batman').querySelector('p');                                            //Declares fighter2_txt and selects the p element in #batman div
    console.log(fighter2_txt);
    var round_txt = document.querySelector('h2');                                                                       //Declares round_txt and selects the h2 element in the #fight_btn div
    console.log(round_txt);
    var button = document.querySelector('#fight_btn');                                                                  //Declares button and selects the button element in the #fight_btn div
    console.log(button);
    button.addEventListener("click", fight, false);                                                                     //Sets up fight button with click event to call fight function

    var fighters = [                                                                                                    //Fighter array storing fighter objects that stores properties for both fighters.
        {                                                                                                               //Fighter1
            name: "Spiderman",                                                                                          //Fighter1 name stored at key name
            damage: 20,                                                                                                 //Fighter1 damage stored at key damage
            health: 100                                                                                                 //Fighter1 health stored at key health
        },
        {                                                                                                               //Fighter2
            name: "Batman",                                                                                             //Fighter2 name stored at key name
            damage: 20,                                                                                                 //Fighter2 damage stored at key damage
            health: 100                                                                                                 //Fighter2 health stored at key health
        }
    ];


    //initiate round
    var round=0;                                                                                                        //Variable round set to the value of 0

    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";                                                               //Changes Round html to Click button to start
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;                                             //pulls name and health from fighter at index 0
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;                                             //pulls name and health from fighter at index 1

    function fight(){                                                                                                   //Creation of function Fight()

                                                                                                                        //random formula is - Math.floor(Math.random() * (max - min) + min);
            fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

            var minDamage1 = fighters[0].damage * .5;                                                                   //Create and set variable minDamage1 to half the value of playerOne[damage]
            var minDamage2 = fighters[1].damage * .5;                                                                   //Create and set variable minDamage2 to half the value of playerTwo[damage]
            var f1 = Math.floor(Math.random()*(fighters[0].damage - minDamage1)+minDamage1);                            //Create and set variable f1 to either 0 or 1 multiplied by playerOne[damage] minus minDamage1 then add minDamage1 to that value
            var f2 = Math.floor(Math.random()*(fighters[1].damage - minDamage2)+minDamage2);                            //Create and set variable f2 to either 0 or 1 multiplied by playerTwo[damage] minus minDamage2 then add minDamage2 to that value

            //inflict damage
            fighters[0].health-=f1;                                                                                     //After the variables are created the function will then subtract the damage from both players health each time the loop has ran through
            fighters[1].health-=f2;

            //check for victor                                                                                          //After each deduction of health via damage it will then check for a victor
            var result = winnerCheck();                                                                                 //Variable Result will be set to the function winnerCheck()
            round++;
            round_txt.innerHTML = "ROUND #" + round + " Results:";
            if (result==="no winner")                                                                                   //IF the result is no winner
            {
                fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;                                 //Sets html for fighter1 to updated health of fighter1
                fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;                                 //sets html for fighter2 to updated health of fighter2

            } else{                                                                                                     //ELSE
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                button.removeEventListener("click", fight, false);

                button.innerHTML = "DONE!!!";
            }
    };                                                                                                                 //END OF FIGHT FUNCTION

    function winnerCheck(){                                                                                             //Creation of Function winnerCheck()
        var result="no winner";                                                                                         //Set variable result to no winner
        if (fighters[0].health<1 && fighters[1].health<1)                                                               //IF playerOne[health] is less than 1 AND playerTwo[health] is less than 1
        {
            result = "You Both Die - GAME OVER!";                                                                       //set variable result to the value of You Both Die
        } else if(fighters[0].health<1){                                                                                //ELSEIF playerOne[health] is less than 1
            result =fighters[1].name+" WINS!!!";                                                                        //result is set to playerTwo[name] WINS!!!
        } else if (fighters[1].health<1)                                                                                //ELSEIF playerTwo[health] is less than 1
        {
            result = fighters[0].name+" WINS!!!";                                                                       //result is set to playerOne[name] WINS!!!
        }
        return result;                                                                                                  //After winner is determined return result
    };                                                                                                                  //END OF WINNERCHECK FUNCTION

})();
























