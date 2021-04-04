
/*declaration et initialisation des variables */

var  ScoreTour, joueurActuel, randomNumber1, score;
joueurActuel =0;
ScoreTour = 0;
score = [0,0];

/* creation d'un nouveau jeu , creation d'un listener sur l'evenement click du boutton et  appel à la fonction init qui initialise les parametres du jeu */

document.querySelector('.btn-new').addEventListener('click', init); 


// fonction init 

function init() 

{

    ScoreTour = 0;
    score = [0, 0];  
    joueurActuel =0;
    document.getElementById('score1').textContent = '0';
    document.getElementById('score0').textContent = '0';

    document.getElementById("actuel0").textContent = '0';
    document.getElementById("actuel1").textContent = '0';
    document.getElementById('joueur1-nom').textContent = 'Joueur 1';
    document.getElementById('joueur2-nom').textContent = 'Joueur 2';
    document.querySelector('joueur1').classList.remove('gagant');
    document.querySelector('joueur2').classList.remove('gagant');
    document.querySelector('joueur1').classList.remove('active');
    document.querySelector('joueur2').classList.remove('active');
    document.querySelector('joueur1').classList.add('active');
}


// click sur le boutton lancement du jeu => creation d'un listener sur l'evenement clik  
//usage de la fonction random(), pour recuperer aleatoirement des images de dé

document.querySelector('.btn-roll').addEventListener('click', function ()

{

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

//si la valeur aleatoire est différente de 1 alors , ajouter le score dans le bloc actif 

    if( randomNumber1!==1)
    {
        ScoreTour = ScoreTour + randomNumber1;
        document.querySelector("#actuel" + joueurActuel).textContent = ScoreTour;  
       
    }

//sinon, passage au deuxième joueur 

    else {       
        
        AutreJoueur();

    }


   

});  


/* ajouter le score actuel au score global dans la page HTML et tester si le joueur a gagné, sinon passage au deuxième joueur*/

document.querySelector('.btn-hold').addEventListener('click', function () 
{
    score[joueurActuel] += ScoreTour; 
    document.querySelector('#score' + joueurActuel).textContent = score[joueurActuel] ;
    if (score[joueurActuel] >= 100)
    {
          document.querySelector('.joueur' + joueurActuel + '-nom').textContent = "Bravo , vous avez gagné !" ;
          document.querySelector('.img').style.display ='none';
          document.querySelector('.joueur' + joueurActuel + '-nom' ).classList.add('222+');
          document.querySelector('.joueur' + joueurActuel ).classList.remove('active');
    } 

    else
    {
        AutreJoueur();
    }



});



// fonction passage au deuxième joueur

function AutreJoueur() {

    joueurActuel === 0 ? joueurActuel = 1 : joueurActuel = 0;
    ScoreTour = 0;
    document.getElementById('actuel0').textContent = '0';
    document.getElementById('actuel1').textContent = '0';
    document.querySelector('.joueur0').classList.toggle('active');
    document.querySelector('.joueur1').classList.toggle('active');

}

