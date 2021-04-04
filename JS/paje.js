
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
