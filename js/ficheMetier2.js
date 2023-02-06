const fiche2 = document.getElementById("fiche2")

const In = dessiner_cadre(fiche2, 530, 250, 340, 100, "#a1467e")
ecrire(fiche2, "INGÉNIEUR EN CONCEPTION", In.coordonneesCentre[0], In.coordonneesCentre[1], "white")

// Carrière

const C1 = dessiner_cadre(fiche2, 500, 70, 200, 60, "#b457c4")
ecrire(fiche2, "Carrière", C1.coordonneesCentre[0], C1.coordonneesCentre[1], "white")
const C2 = dessiner_cadre(fiche2, 800, 50, 220, 60, "#b457c4")
ecrire(fiche2, "Possibilité d’évolution", C2.coordonneesCentre[0], C2.coordonneesCentre[1], "white")
const C3 = dessiner_cadre(fiche2, 870, 170, 200, 60, "#b457c4")
ecrire(fiche2, "Docteur", C3.coordonneesCentre[0], C3.coordonneesCentre[1], "white")
const C4 = dessiner_cadre(fiche2, 200, 50, 280, 60, "#b457c4")
ecrire(fiche2, "Rémunération annuelle brute", C4.coordonneesCentre[0], C4.coordonneesCentre[1], "white")
const C5 = dessiner_cadre(fiche2, 130, 170, 250, 60, "#b457c4")
ecrire(fiche2, "Débutants :", C5.coordonneesCentre[0], C5.coordonneesCentre[1]-12, "white")
ecrire(fiche2, "de 35 000 € à 40 000 €", C5.coordonneesCentre[0], C5.coordonneesCentre[1]+12, "white")

dessiner_fleche(fiche2, In.coordonneesN, C1.coordonneesS)
dessiner_fleche(fiche2, C1.coordonneesE, C2.coordonneesW)
dessiner_fleche(fiche2, C2.coordonneesS, C3.coordonneesN)
dessiner_fleche(fiche2, C1.coordonneesW, C4.coordonneesE)
dessiner_fleche(fiche2, C4.coordonneesS, C5.coordonneesN)

// Conditions de Travail

const T1 = dessiner_cadre(fiche2, 500, 400, 200, 60, "#650953")
ecrire(fiche2, "Conditions de travail", T1.coordonneesCentre[0], T1.coordonneesCentre[1], "white")
const T2 = dessiner_cadre(fiche2, 870, 420, 200, 60, "#650953")
ecrire(fiche2, "Combien de temps", T2.coordonneesCentre[0], T2.coordonneesCentre[1], "white")
const T3 = dessiner_cadre(fiche2, 870, 520, 220, 60, "#650953")
ecrire(fiche2, "40 heures par semaine", T3.coordonneesCentre[0], T3.coordonneesCentre[1], "white")
const T4 = dessiner_cadre(fiche2, 130, 420, 200, 60, "#650953")
ecrire(fiche2, "Avec qui", T4.coordonneesCentre[0], T4.coordonneesCentre[1], "white")
const T5 = dessiner_cadre(fiche2, 130, 520, 230, 60, "#650953")
ecrire(fiche2, "Une équipe d'ingénieurs", T5.coordonneesCentre[0], T5.coordonneesCentre[1], "white")
const T6 = dessiner_cadre(fiche2, 390, 490, 200, 60, "#650953")
ecrire(fiche2, "Où", T6.coordonneesCentre[0], T6.coordonneesCentre[1], "white")
const T7 = dessiner_cadre(fiche2, 620, 520, 200, 60, "#650953")
ecrire(fiche2, "En entreprise", T7.coordonneesCentre[0], T7.coordonneesCentre[1], "white")

dessiner_fleche(fiche2, In.coordonneesS, T1.coordonneesN)
dessiner_fleche(fiche2, T1.coordonneesE, T2.coordonneesW)
dessiner_fleche(fiche2, T2.coordonneesS, T3.coordonneesN)
dessiner_fleche(fiche2, T1.coordonneesW, T4.coordonneesE)
dessiner_fleche(fiche2, T4.coordonneesS, T5.coordonneesN)
dessiner_fleche(fiche2, T1.coordonneesSW, T6.coordonneesN)
dessiner_fleche(fiche2, T6.coordonneesE, T7.coordonneesW)
