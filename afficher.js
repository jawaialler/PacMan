
//definition de la zone de jeu
var largeur = 600;
var hauteur = 570;
var largeurdeco = 20;
var hauteurdeco = 19;

//définition des images
var hauteur_images = 30;
var largeur_images = 30;

//maze
function maze()
{																	


	decor = new Array(hauteurdeco);
	for (i = 0; i <= hauteurdeco; i = i + 1) {
		decor[i] = new Array(largeurdeco);
	}
                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                																			
decor[1][1] = 3;	decor[1][2] = 1;	decor[1][3] = 1;	decor[1][4] = 1;	decor[1][5] = 1;	decor[1][6] = 1;	decor[1][7] = 4;	decor[1][8] = 7;	decor[1][9] = 7;	decor[1][10] = 7;	decor[1][11] = 7;	decor[1][12] = 7;	decor[1][13] = 7;	decor[1][14] = 3;	decor[1][15] = 1;	decor[1][16] = 1;	decor[1][17] = 1;	decor[1][18] = 1;	decor[1][19] = 1;	decor[1][20] = 4;
decor[2][1] = 2;	decor[2][2] = 0;	decor[2][3] = 0;	decor[2][4] = 0;	decor[2][5] = 0;	decor[2][6] = 0;	decor[2][7] = 6;	decor[2][8] = 1;	decor[2][9] = 1;	decor[2][10] = 1;	decor[2][11] = 1;	decor[2][12] = 1;	decor[2][13] = 1;	decor[2][14] = 5;	decor[2][15] = 0;	decor[2][16] = 0;	decor[2][17] = 0;	decor[2][18] = 0;	decor[2][19] = 0;	decor[2][20] = 2;
decor[3][1] = 2;	decor[3][2] = 0;	decor[3][3] = 3;	decor[3][4] = 1;	decor[3][5] = 1;	decor[3][6] = 0;	decor[3][7] = 0;	decor[3][8] = 0;	decor[3][9] = 0;	decor[3][10] = 0;	decor[3][11] = 0;	decor[3][12] = 0;	decor[3][13] = 0;	decor[3][14] = 0;	decor[3][15] = 0;	decor[3][16] = 1;	decor[3][17] = 1;	decor[3][18] = 4;	decor[3][19] = 0;	decor[3][20] = 2;
decor[4][1] = 2;	decor[4][2] = 0;	decor[4][3] = 2;	decor[4][4] = 0;	decor[4][5] = 0;	decor[4][6] = 0;	decor[4][7] = 1;	decor[4][8] = 1;	decor[4][9] = 4;	decor[4][10] = 0;	decor[4][11] = 0;	decor[4][12] = 3;	decor[4][13] = 1;	decor[4][14] = 1;	decor[4][15] = 0;	decor[4][16] = 0;	decor[4][17] = 0;	decor[4][18] = 2;	decor[4][19] = 0;	decor[4][20] = 2;
decor[5][1] = 2;	decor[5][2] = 0;	decor[5][3] = 2;	decor[5][4] = 0;	decor[5][5] = 2;	decor[5][6] = 0;	decor[5][7] = 0;	decor[5][8] = 0;	decor[5][9] = 2;	decor[5][10] = 0;	decor[5][11] = 0;	decor[5][12] = 2;	decor[5][13] = 0;	decor[5][14] = 0;	decor[5][15] = 0;	decor[5][16] = 2;	decor[5][17] = 0;	decor[5][18] = 2;	decor[5][19] = 0;	decor[5][20] = 2;
decor[6][1] = 2;	decor[6][2] = 0;	decor[6][3] = 0;	decor[6][4] = 0;	decor[6][5] = 2;	decor[6][6] = 0;	decor[6][7] = 2;	decor[6][8] = 0;	decor[6][9] = 6;	decor[6][10] = 1;	decor[6][11] = 1;	decor[6][12] = 5;	decor[6][13] = 0;	decor[6][14] = 2;	decor[6][15] = 0;	decor[6][16] = 2;	decor[6][17] = 0;	decor[6][18] = 0;	decor[6][19] = 0;	decor[6][20] = 2;
decor[7][1] = 2;	decor[7][2] = 0;	decor[7][3] = 3;	decor[7][4] = 1;	decor[7][5] = 5;	decor[7][6] = 0;	decor[7][7] = 2;	decor[7][8] = 0;	decor[7][9] = 0;	decor[7][10] = 0;	decor[7][11] = 0;	decor[7][12] = 0;	decor[7][13] = 0;	decor[7][14] = 2;	decor[7][15] = 0;	decor[7][16] = 6;	decor[7][17] = 1;	decor[7][18] = 4;	decor[7][19] = 0;	decor[7][20] = 2;
decor[8][1] = 2;	decor[8][2] = 0;	decor[8][3] = 2;	decor[8][4] = 0;	decor[8][5] = 0;	decor[8][6] = 0;	decor[8][7] = 2;	decor[8][8] = 0;	decor[8][9] = 3;	decor[8][10] = 1;	decor[8][11] = 1;	decor[8][12] = 4;	decor[8][13] = 0;	decor[8][14] = 2;	decor[8][15] = 0;	decor[8][16] = 0;	decor[8][17] = 0;	decor[8][18] = 2;	decor[8][19] = 0;	decor[8][20] = 2;
decor[9][1] = 2;	decor[9][2] = 0;	decor[9][3] = 2;	decor[9][4] = 0;	decor[9][5] = 2;	decor[9][6] = 0;	decor[9][7] = 2;	decor[9][8] = 0;	decor[9][9] = 2;	decor[9][10] = 0;	decor[9][11] = 0;	decor[9][12] = 0;	decor[9][13] = 0;	decor[9][14] = 2;	decor[9][15] = 0;	decor[9][16] = 2;	decor[9][17] = 0;	decor[9][18] = 2;	decor[9][19] = 0;	decor[9][20] = 2;
decor[10][1] = 2;	decor[10][2] = 0;	decor[10][3] = 0;	decor[10][4] = 0;	decor[10][5] = 2;	decor[10][6] = 0;	decor[10][7] = 0;	decor[10][8] = 0;	decor[10][9] = 2;	decor[10][10] = 0;	decor[10][11] = 0;	decor[10][12] = 0;	decor[10][13] = 0;	decor[10][14] = 0;	decor[10][15] = 0;	decor[10][16] = 2;	decor[10][17] = 0;	decor[10][18] = 0;	decor[10][19] = 0;	decor[10][20] = 2;
decor[11][1] = 2;	decor[11][2] = 0;	decor[11][3] = 2;	decor[11][4] = 0;	decor[11][5] = 2;	decor[11][6] = 0;	decor[11][7] = 2;	decor[11][8] = 0;	decor[11][9] = 2;	decor[11][10] = 0;	decor[11][11] = 0;	decor[11][12] = 0;	decor[11][13] = 0;	decor[11][14] = 2;	decor[11][15] = 0;	decor[11][16] = 2;	decor[11][17] = 0;	decor[11][18] = 2;	decor[11][19] = 0;	decor[11][20] = 2;
decor[12][1] = 2;	decor[12][2] = 0;	decor[12][3] = 2;	decor[12][4] = 0;	decor[12][5] = 0;	decor[12][6] = 0;	decor[12][7] = 2;	decor[12][8] = 0;	decor[12][9] = 6;	decor[12][10] = 1;	decor[12][11] = 1;	decor[12][12] = 5;	decor[12][13] = 0;	decor[12][14] = 2;	decor[12][15] = 0;	decor[12][16] = 0;	decor[12][17] = 0;	decor[12][18] = 2;	decor[12][19] = 0;	decor[12][20] = 2;
decor[13][1] = 2;	decor[13][2] = 0;	decor[13][3] = 6;	decor[13][4] = 1;	decor[13][5] = 4;	decor[13][6] = 0;	decor[13][7] = 2;	decor[13][8] = 0;	decor[13][9] = 0;	decor[13][10] = 0;	decor[13][11] = 0;	decor[13][12] = 0;	decor[13][13] = 0;	decor[13][14] = 2;	decor[13][15] = 0;	decor[13][16] = 3;	decor[13][17] = 1;	decor[13][18] = 5;	decor[13][19] = 0;	decor[13][20] = 2;
decor[14][1] = 2;	decor[14][2] = 0;	decor[14][3] = 0;	decor[14][4] = 0;	decor[14][5] = 2;	decor[14][6] = 0;	decor[14][7] = 2;	decor[14][8] = 0;	decor[14][9] = 3;	decor[14][10] = 1;	decor[14][11] = 1;	decor[14][12] = 4;	decor[14][13] = 0;	decor[14][14] = 2;	decor[14][15] = 0;	decor[14][16] = 2;	decor[14][17] = 0;	decor[14][18] = 0;	decor[14][19] = 0;	decor[14][20] = 2;
decor[15][1] = 2;	decor[15][2] = 0;	decor[15][3] = 2;	decor[15][4] = 0;	decor[15][5] = 2;	decor[15][6] = 0;	decor[15][7] = 0;	decor[15][8] = 0;	decor[15][9] = 2;	decor[15][10] = 0;	decor[15][11] = 0;	decor[15][12] = 2;	decor[15][13] = 0;	decor[15][14] = 0;	decor[15][15] = 0;	decor[15][16] = 2;	decor[15][17] = 0;	decor[15][18] = 2;	decor[15][19] = 0;	decor[15][20] = 2;
decor[16][1] = 2;	decor[16][2] = 0;	decor[16][3] = 2;	decor[16][4] = 0;	decor[16][5] = 0;	decor[16][6] = 0;	decor[16][7] = 1;	decor[16][8] = 1;	decor[16][9] = 5;	decor[16][10] = 0;	decor[16][11] = 0;	decor[16][12] = 6;	decor[16][13] = 1;	decor[16][14] = 1;	decor[16][15] = 0;	decor[16][16] = 0;	decor[16][17] = 0;	decor[16][18] = 2;	decor[16][19] = 0;	decor[16][20] = 2;
decor[17][1] = 2;	decor[17][2] = 0;	decor[17][3] = 6;	decor[17][4] = 1;	decor[17][5] = 1;	decor[17][6] = 0;	decor[17][7] = 0;	decor[17][8] = 0;	decor[17][9] = 0;	decor[17][10] = 0;	decor[17][11] = 0;	decor[17][12] = 0;	decor[17][13] = 0;	decor[17][14] = 0;	decor[17][15] = 0;	decor[17][16] = 1;	decor[17][17] = 1;	decor[17][18] = 5;	decor[17][19] = 0;	decor[17][20] = 2;
decor[18][1] = 2;	decor[18][2] = 0;	decor[18][3] = 0;	decor[18][4] = 0;	decor[18][5] = 0;	decor[18][6] = 0;	decor[18][7] = 3;	decor[18][8] = 1;	decor[18][9] = 1;	decor[18][10] = 1;	decor[18][11] = 1;	decor[18][12] = 1;	decor[18][13] = 1;	decor[18][14] = 4;	decor[18][15] = 0;	decor[18][16] = 0;	decor[18][17] = 0;	decor[18][18] = 0;	decor[18][19] = 0;	decor[18][20] = 2;
decor[19][1] = 6;	decor[19][2] = 1;	decor[19][3] = 1;	decor[19][4] = 1;	decor[19][5] = 1;	decor[19][6] = 1;	decor[19][7] = 5;	decor[19][8] = 7;	decor[19][9] = 7;	decor[19][10] = 7;	decor[19][11] = 7;	decor[19][12] = 7;	decor[19][13] = 7;	decor[19][14] = 6;	decor[19][15] = 1;	decor[19][16] = 1;	decor[19][17] = 1;	decor[19][18] = 1;	decor[19][19] = 1;	decor[19][20] = 5;

}



//afficher maze on page 
function afficher() 
{
var deco = null;
for (i=1; i<=hauteurdeco; i++)
    {
    for (j=1; j<=largeurdeco; j++)
        {
        deco = document.createElement("img");
        deco.setAttribute("src", "images\\Maze" + decor[i][j] + ".png");
        deco.setAttribute("alt", "images\\Maze" + decor[i][j]);
        deco.style.position = "absolute";
        deco.style.height = hauteur_images + "px";
        deco.style.width = largeur_images + "px";
        deco.style.top = i* hauteur_images + "px";
        deco.style.left = j* largeur_images + "px";
        document.getElementById("afficher").appendChild(deco);
    
    
        }
    }
    
}
    
//vars pour les placements au début de la partie
function initialiserpartie() {

x_pac = 300;
y_pac = 90;

x_food = 0
y_food = 0

x_kill = 0
y_kill = 0

touche = 0;
myscore = 0;
killer = false;
foodtest = false
killtest = false

        x_ghost1 = Math.ceil(largeur/2);
        y_ghost1 = Math.ceil((hauteur - hauteur_images)/2);
        x_ghost1_vise = x_ghost1;
        y_ghost1_vise = y_ghost1;
        
        x_ghost2 = Math.ceil(largeur/2);
        y_ghost2 = Math.ceil((hauteur + hauteur_images)/2);
        x_ghost2_vise = x_ghost2;
        y_ghost2_vise = y_ghost2;
        
        x_ghost3 = Math.ceil(largeur/2);
        y_ghost3 = Math.ceil((hauteur+ 3*hauteur_images)/2);
        x_ghost3_vise = x_ghost3;
        y_ghost3_vise = y_ghost3;
}

//gestion des déplacements des fantomes
function random() {

    return Math.random();
   }


function ghost1move() {  
   if ((x_ghost1_vise == x_ghost1) && (y_ghost1_vise == y_ghost1))
    {
        //Faire 10 essais
        compteur = 0;
        while (compteur < 10)
        {
            r = Math.random();
            if ((r < 0.25) && (decor[Math.round(y_ghost1/30)][Math.floor(x_ghost1/30) +1] == 0)) {                        //Aller à droite
              x_ghost1_vise = x_ghost1_vise + 30;
              return;
              }
            else if ((r >= 0.25) && (r < 0.5) && (decor[Math.round(y_ghost1/30)][Math.ceil(x_ghost1/30) - 1] == 0)) {       //Aller à gauche
              x_ghost1_vise = x_ghost1_vise - 30;
              return;
              }
           else if ((r >= 0.5) && (r < 0.75) && (decor[Math.floor(y_ghost1/30) +1][Math.round(x_ghost1/30)] == 0) ) {       //Aller en bas
              y_ghost1_vise = y_ghost1_vise + 30;
              return;
              }
            else if (decor[Math.ceil(y_ghost1/30) -1][Math.round(x_ghost1/30)] == 0){                                      //Aller en haut
              y_ghost1_vise = y_ghost1_vise - 30;
              return;
              }  
           }  
            compteur++;
        }
        
        //Lui donner un nouveau cap.
   else
     {
         
        x_ghost1 = x_ghost1 + Math.sign(x_ghost1_vise-x_ghost1);
        y_ghost1 = y_ghost1 + Math.sign(y_ghost1_vise-y_ghost1);
        ecrire_ghost1();
        test_contact_PAC_GHOSTS();
    }
}

function ghost2move() {  
   if ((x_ghost2_vise == x_ghost2) && (y_ghost2_vise == y_ghost2))
    {
        //Faire 10 essais
        compteur = 0;
        while (compteur < 10)
        {
            r2 = Math.random();
            if ((r2 < 0.25) && (decor[Math.round(y_ghost2/30)][Math.floor(x_ghost2/30) +1] == 0)) {                        //Aller à droite
              x_ghost2_vise = x_ghost2_vise + 30;
              return;
              }
            else if ((r2 >= 0.25) && (r2 < 0.5) && (decor[Math.round(y_ghost2/30)][Math.ceil(x_ghost2/30) - 1] == 0)) {       //Aller à gauche
              x_ghost2_vise = x_ghost2_vise - 30;
              return;
              }
           else if ((r2 >= 0.5) && (r2 < 0.75) && (decor[Math.floor(y_ghost2/30) +1][Math.round(x_ghost2/30)] == 0) ) {       //Aller en bas
              y_ghost2_vise = y_ghost2_vise + 30;
              return;
              }
            else if (decor[Math.ceil(y_ghost2/30) -1][Math.round(x_ghost2/30)] == 0){                                      //Aller en haut
              y_ghost2_vise = y_ghost2_vise - 30;
              return;
              }  
           }  
            compteur++;
        }
        
        //Lui donner un nouveau cap.
   else
     {
         
        x_ghost2 = x_ghost2 + Math.sign(x_ghost2_vise-x_ghost2);
        y_ghost2 = y_ghost2 + Math.sign(y_ghost2_vise-y_ghost2);
        ecrire_ghost2();
        test_contact_PAC_GHOSTS();
    }
}


function ghost3move() {  
   if ((x_ghost3_vise == x_ghost3) && (y_ghost3_vise == y_ghost3))
    {
        //Faire 10 essais
        compteur = 0;
        while (compteur < 10)
        {
            r3 = Math.random();
            if ((r3 < 0.25) && (decor[Math.round(y_ghost3/30)][Math.floor(x_ghost3/30) +1] == 0)) {                        //Aller à droite
              x_ghost3_vise = x_ghost3_vise + 30;
              return;
              }
            else if ((r3 >= 0.25) && (r3 < 0.5) && (decor[Math.round(y_ghost3/30)][Math.ceil(x_ghost3/30) - 1] == 0)) {       //Aller à gauche
              x_ghost3_vise = x_ghost3_vise - 30;
              return;
              }
           else if ((r3 >= 0.5) && (r3 < 0.75) && (decor[Math.floor(y_ghost3/30) +1][Math.round(x_ghost3/30)] == 0) ) {       //Aller en bas
              y_ghost3_vise = y_ghost3_vise + 30;
              return;
              }
            else if (decor[Math.ceil(y_ghost3/30) -1][Math.round(x_ghost3/30)] == 0){                                      //Aller en haut
              y_ghost3_vise = y_ghost3_vise - 30;
              return;
              }  
           }  
            compteur++;
        }
        
        //Lui donner un nouveau cap.
   else
     {
         
        x_ghost3 = x_ghost3 + Math.sign(x_ghost3_vise-x_ghost3);
        y_ghost3 = y_ghost3 + Math.sign(y_ghost3_vise-y_ghost3);
        ecrire_ghost3();
        test_contact_PAC_GHOSTS();
    }
}



//ici on essaie d'associer les images avec les déplacements

function ecrire_pac() {
	if (document.getElementById("pac"))
	{
		pac.style.top = y_pac;
                pac.style.left = x_pac;
                pac.setAttribute("src", "images\\PB" + touche + ".gif");
                pac.setAttribute("alt", "images\\PB" + touche +".gif");
                
	}
	else
	{
		
    pac = document.createElement("img");
        pac.setAttribute("id", "pac");
        pac.setAttribute("src", "images\\PB40.gif");
        pac.setAttribute("alt", "images\\PB40.gif");
        pac.style.position = "absolute";
        pac.style.height = hauteur_images + "px";
        pac.style.width = largeur_images + "px";
        pac.style.top = y_pac;
        pac.style.left = x_pac;
        document.getElementById("afficher").appendChild(pac);
	}
}

function ecrire_ghost1() {
    if (document.getElementById("ghost1"))
	{
		ghost1.style.top = y_ghost1;
                ghost1.style.left = x_ghost1;
	}
    else {
    
    ghost1 = document.createElement("img");
        ghost1.setAttribute("id", "ghost1");
        ghost1.setAttribute("src","images\\G1.gif");
        ghost1.setAttribute("alt", "images\\G1.gif");
        ghost1.style.position = "absolute";
        ghost1.style.height = hauteur_images + "px";
        ghost1.style.width = largeur_images + "px";
        ghost1.style.opacity = "1"
        ghost1.style.top = y_ghost1;
        ghost1.style.left = x_ghost1;
	document.getElementById("afficher").appendChild(ghost1);
        }
}

function ecrire_ghost2() {
    
     if (document.getElementById("ghost2"))
	{
		ghost2.style.top = y_ghost2;
                ghost2.style.left = x_ghost2;
	}
    else {
    
    ghost2 = document.createElement("img");
        ghost2.setAttribute("id", "ghost2");
        ghost2.setAttribute("src","images\\G2.gif");
        ghost2.setAttribute("alt", "images\\G2.gif");
        ghost2.style.position = "absolute";
        ghost2.style.height = hauteur_images + "px";
        ghost2.style.width = largeur_images + "px";
        ghost2.style.opacity = "1"
        ghost2.style.top = y_ghost2;
        ghost2.style.left = x_ghost2;
	document.getElementById("afficher").appendChild(ghost2);
        
        }
}

function ecrire_ghost3() {
    
     if (document.getElementById("ghost3"))
	{
		ghost3.style.top = y_ghost3;
                ghost3.style.left = x_ghost3;
	}
    else {
    
    ghost3 = document.createElement("img");
        ghost3.setAttribute("id", "ghost3");
        ghost3.setAttribute("src","images\\G3.gif");
        ghost3.setAttribute("alt", "images\\G3.gif");
        ghost3.style.position = "absolute";
        ghost3.style.height = hauteur_images + "px";
        ghost3.style.width = largeur_images + "px";
        ghost3.style.opacity = "1"
        ghost3.style.top = y_ghost3;
        ghost3.style.left = x_ghost3;
	document.getElementById("afficher").appendChild(ghost3);
}
}

//gestion du clavier, touches etc, comment le pac se déplace en fonction de ce que l'utilisateur appuie

function gestion_clavier(event) {

KEY_DOWN = 40;
KEY_UP = 38;
KEY_LEFT = 37;
KEY_RIGHT = 39;

touche = window.event ? event.keyCode : event.which;
                
                
	if (touche == 37 && decor[Math.round(y_pac/30)][Math.ceil(x_pac/30) - 1] == 0) {
		//touche de gauche
		x_pac = x_pac - 10;
		ecrire_pac();
                test_contact_PAC_GHOSTS();
                testing_food()
	}
        else if (touche == 39 && decor[Math.round(y_pac/30)][Math.floor(x_pac/30) +1] == 0) {
		//touche de droite
		x_pac = x_pac + 10;
		ecrire_pac();
                test_contact_PAC_GHOSTS();
                testing_food()
	} 
        else if (touche == 38 && decor[Math.ceil(y_pac/30) -1][Math.round(x_pac/30)] == 0) {
		//touche de haut
		y_pac = y_pac - 10;
		ecrire_pac();
                test_contact_PAC_GHOSTS();
                testing_food()
	} 
        else if (touche == 40 && decor[Math.floor(y_pac/30) +1][Math.round(x_pac/30)] == 0) {
		//touche du bas
                y_pac = y_pac + 10;
                ecrire_pac();
                test_contact_PAC_GHOSTS();
                testing_food()
	}
}

 
 //on introduit les éléments de nourriture
function ecrire_food() {

        if (document.getElementById("food"))
	{
        food.style.top = y_food;
        food.style.left = x_food;
	}
	else
	{
        food = document.createElement("img");
            food.setAttribute("id", "food");
            food.setAttribute("src", "images\\food.gif");
            food.setAttribute("alt", "images\\food.gif");
            food.style.position = "absolute";
            food.style.height = hauteur_images + "px";
            food.style.width = largeur_images + "px";
            food.style.top = y_food;
            food.style.left = x_food;
            document.getElementById("afficher").appendChild(food);
	}
}   
	 

        
function ecrire_kill() {
        
        if (document.getElementById("kill"))
	{
		kill.style.top = y_kill;
                kill.style.left = x_kill;
	}
	else
	{
        kill = document.createElement("img");
            kill.setAttribute("id", "kill");
            kill.setAttribute("src", "images\\kill.gif");
            kill.setAttribute("alt", "images\\kill.gif");
            kill.style.position = "absolute";
            kill.style.height = hauteur_images + "px";
            kill.style.width = largeur_images + "px";
            kill.style.top = y_kill;
            kill.style.left = x_kill;
            document.getElementById("afficher").appendChild(kill);
	}
        
}
		
function placementfood () {
	
    x_food = Math.ceil(hauteurdeco * Math.random())*30;
    y_food = Math.ceil(largeurdeco * Math.random())*30;
	
        
    while (decor[Math.round(y_food/30)][Math.round(x_food/30)] != 0)
    {
            x_food = Math.ceil(hauteurdeco * Math.random())*30;
            y_food = Math.ceil(largeurdeco * Math.random())*30;
    }
	
    x_kill = Math.ceil(hauteurdeco * Math.random())*30;
    y_kill = Math.ceil(largeurdeco * Math.random())*30;

        
    while (decor[Math.round(y_kill/30)][Math.round(x_kill/30)] != 0){
            
            x_kill = Math.ceil(hauteurdeco * Math.random())*30;
            y_kill = Math.ceil(largeurdeco * Math.random())*30;
	}

    ecrire_food();	
    ecrire_kill();
}


function scoring(){
    
        window.document.getElementById("score").style.width = "50px";
	window.document.getElementById("score").style.height = "50px";
	window.document.getElementById("score").style.left = "630px";
	window.document.getElementById("score").style.top = "50px";
	window.document.getElementById("score").style.color = "black";
        window.document.getElementById("score").innerHTML= myscore;
}



function stop_kill() {
    
    if (killer == true){
        
        killer = false;
        window.document.getElementById("ghost1").style.opacity = "1";
        window.document.getElementById("ghost2").style.opacity = "1";
        window.document.getElementById("ghost3").style.opacity = "1";
        ecrire_ghost1();
        ecrire_ghost2();
        ecrire_ghost3();
        }
}
        

function test_contact(X1,Y1,X2,Y2)
{
    return (X1-X2)*(X1-X2)+(Y1-Y2)*(Y1-Y2)<900;
}

function test_contact_PAC_GHOSTS()
{
    TEST = false
    TEST1 = false;
    TEST2 = false;
    TEST3 = false;
    if (test_contact(x_pac,y_pac,x_ghost1,y_ghost1))
    {   TEST = true;
        TEST1 = true;
        }
    else if (test_contact(x_pac,y_pac,x_ghost2,y_ghost2))
      {  TEST = true
      TEST2 = true;
      }
    else if (test_contact(x_pac,y_pac,x_ghost3,y_ghost3))
      { TEST = true
        TEST3 = true;
        }
        
    if (TEST == true && killer == false)
    {
        clearInterval(int_food);
        clearInterval(int_kill);
        clearInterval(int_ghost1);
        clearInterval(int_ghost2);
        clearInterval(int_ghost3);
        alert("game over");
    }
    if (TEST1 == true && killer == true)
    {
        window.document.getElementById("ghost1").style.opacity = "0.3";
        ghost1move();
       } 
    if (TEST2 == true && killer == true)
    {
        window.document.getElementById("ghost2").style.opacity = "0.3";
        ghost2move();
       } 
    if (TEST3 == true && killer == true)
    {
        window.document.getElementById("ghost3").style.opacity = "0.3";
        ghost3move();
       } 
    
}


function test_foodcontact(X1,Y1,X2,Y2)
{
    return (X1-X2)*(X1-X2)+(Y1-Y2)*(Y1-Y2)<225;
}


function testing_food()

{
    if (test_foodcontact(x_pac,y_pac,x_food,y_food))
       {
           foodtest = true;
        } 
        
    if (foodtest == true)
    {
        myscore = myscore+1;
        scoring()
        placementfood();
        foodtest = false
    }
        
    if (test_foodcontact(x_pac,y_pac,x_kill,y_kill))
        {
            killtest = true
        }
    if (killtest == true)
       { 
            killer = true;
            placementfood();
            killtest = false;
    }
}


maze();
afficher();
initialiserpartie();
testing_food()
ecrire_pac();
ecrire_ghost1();
ecrire_ghost2();
ecrire_ghost3();
scoring();

int_food = setInterval(placementfood, 10000);
int_kill = setInterval(stop_kill,30000);
int_ghost1 = setInterval(ghost1move,50);
int_ghost2 = setInterval(ghost2move,50);
int_ghost3 = setInterval(ghost3move,50);