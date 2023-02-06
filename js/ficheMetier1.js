const fiche1 = document.getElementById("fiche1")

const I = dessiner_cadre(fiche1, 530, 310, 340, 100, "#a1467e")
ecrire(fiche1, "INGÉNIEUR EN CONCEPTION", I.coordonneesCentre[0], I.coordonneesCentre[1], "white")

// Description

const D1 = dessiner_cadre(fiche1, 860, 150, 200, 60, "#8d1d75")
ecrire(fiche1, "Description", D1.coordonneesCentre[0], D1.coordonneesCentre[1], "white")
const D2 = dessiner_cadre(fiche1, 860, 250, 200, 60, "#8d1d75")
ecrire(fiche1, "Poser", D2.coordonneesCentre[0], D2.coordonneesCentre[1], "white")
const D3 = dessiner_cadre(fiche1, 860, 350, 200, 60, "#8d1d75")
ecrire(fiche1, "Étudier", D3.coordonneesCentre[0], D3.coordonneesCentre[1], "white")
const D4 = dessiner_cadre(fiche1, 860, 450, 200, 60, "#8d1d75")
ecrire(fiche1, "Résoudre", D4.coordonneesCentre[0], D4.coordonneesCentre[1], "white")

dessiner_fleche(fiche1, I.coordonneesNE, D1.coordonneesW)
dessiner_fleche(fiche1, D1.coordonneesS, D2.coordonneesN)
dessiner_fleche(fiche1, D2.coordonneesS, D3.coordonneesN)
dessiner_fleche(fiche1, D3.coordonneesS, D4.coordonneesN)

// Qualités

const Q1 = dessiner_cadre(fiche1, 500, 430, 200, 60, "#b457c4")
ecrire(fiche1, "Qualité nécessaires", Q1.coordonneesCentre[0], Q1.coordonneesCentre[1], "white")
const Q2 = dessiner_cadre(fiche1, 500, 550, 200, 60, "#b457c4")
ecrire(fiche1, "Rigueur", Q2.coordonneesCentre[0], Q2.coordonneesCentre[1], "white")
const Q3 = dessiner_cadre(fiche1, 250, 520, 200, 60, "#b457c4")
ecrire(fiche1, "Précision", Q3.coordonneesCentre[0], Q3.coordonneesCentre[1], "white")
const Q4 = dessiner_cadre(fiche1, 200, 420, 200, 60, "#b457c4")
ecrire(fiche1, "Expertise", Q4.coordonneesCentre[0], Q4.coordonneesCentre[1], "white")

dessiner_fleche(fiche1, I.coordonneesS, Q1.coordonneesN)
dessiner_fleche(fiche1, Q1.coordonneesS, Q2.coordonneesN)
dessiner_fleche(fiche1, Q1.coordonneesSW, Q3.coordonneesE)
dessiner_fleche(fiche1, Q1.coordonneesW, Q4.coordonneesE)

// Formation

const F1 = dessiner_cadre(fiche1, 500, 100, 200, 60, "#650953")
ecrire(fiche1, "Formation / Diplôme", F1.coordonneesCentre[0], F1.coordonneesCentre[1], "white")
const F2 = dessiner_cadre(fiche1, 360, 200, 200, 60, "#650953")
ecrire(fiche1, "Licence", F2.coordonneesCentre[0], F2.coordonneesCentre[1], "white")
const F3 = dessiner_cadre(fiche1, 180, 320, 200, 60, "#650953")
ecrire(fiche1, "Master", F3.coordonneesCentre[0], F3.coordonneesCentre[1], "white")
const F4 = dessiner_cadre(fiche1, 200, 80, 200, 60, "#650953")
ecrire(fiche1, "Classe préparatoire", F4.coordonneesCentre[0], F4.coordonneesCentre[1], "white")
const F5 = dessiner_cadre(fiche1, 130, 200, 200, 60, "#650953")
ecrire(fiche1, "École d'Ingénieur", F5.coordonneesCentre[0], F5.coordonneesCentre[1], "white")

dessiner_fleche(fiche1, I.coordonneesN, F1.coordonneesS)
dessiner_fleche(fiche1, F1.coordonneesSW, F2.coordonneesN)
dessiner_fleche(fiche1, F2.coordonneesSW, F3.coordonneesN)
dessiner_fleche(fiche1, F1.coordonneesW, F4.coordonneesE)
dessiner_fleche(fiche1, F4.coordonneesS, F5.coordonneesN)
