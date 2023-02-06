function dessiner_cadre(dessin, x, y, l, h, couleur) {
    const polygone = document.createElementNS('http://www.w3.org/2000/svg',"polygon");
    polygone.setAttributeNS(null, 'points', `${x-0.5*l},${y-0.5*h} ${x-0.5*l},${y+0.3*h} ${x-0.5*l+0.4*h},${y+0.5*h} ${x+0.5*l},${y+0.5*h} ${x+0.5*l},${y-0.3*h} ${x+0.5*l-0.4*h},${y-0.5*h}`)
    polygone.style.fill = couleur
    polygone.coordonneesN = [x, y-0.5*h]
    polygone.coordonneesS = [x, y+0.5*h]
    polygone.coordonneesE = [x+0.5*l, y]
    polygone.coordonneesW = [x-0.5*l, y]
    polygone.coordonneesNE = [x+0.5*l-0.6*h, y-0.5*h]
    polygone.coordonneesNW = [x-0.5*l+0.6*h, y-0.5*h]
    polygone.coordonneesSE = [x+0.5*l-0.6*h, y+0.5*h]
    polygone.coordonneesSW = [x-0.5*l+0.6*h, y+0.5*h]
    polygone.coordonneesCentre = [x, y]
    dessin.appendChild(polygone)
    return polygone
}

function ecrire(dessin, texte, x, y, couleur) {
    const etiquette = document.createElementNS('http://www.w3.org/2000/svg',"text");
    etiquette.setAttributeNS(null, 'x', x)
    etiquette.setAttributeNS(null, 'y', y)
    etiquette.textContent = texte
    etiquette.style.fill = couleur
    dessin.appendChild(etiquette)
}

function dessiner_fleche(dessin, A, B) {
    const fleche = document.createElementNS('http://www.w3.org/2000/svg',"line");
    fleche.setAttributeNS(null, 'x1', A[0])
    fleche.setAttributeNS(null, 'y1', A[1])
    fleche.setAttributeNS(null, 'x2', B[0])
    fleche.setAttributeNS(null, 'y2', B[1])
    fleche.setAttributeNS(null, 'class', "fleche")
    dessin.appendChild(fleche)
}
