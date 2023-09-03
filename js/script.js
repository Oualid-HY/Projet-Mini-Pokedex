// Récupération de la référence aux objets représentés par la classe pokeicon, on obtient une collection d'objets que l'on pourra parcourir
        // avec une itération.
        const pokeicon = document.getElementsByClassName("pokeicon");
        for (let i = 0; i < pokeicon.length; i++) {

                // Pour chaque objet de la collection on lui associe un gestionnaire d'évènements
                // A chaque objet on fait appel à l'objet event qui lui est lié dans ce contexte (représenté ici par la variable e afin d'accèder à la propriété 
                // target de cet objet.

                pokeicon[i].addEventListener("click", function (e) {

                        console.log(e.target.src);
                        // On ne conserve que la fin de la chaîne renvoyée par la propriété e.target.src (Pokemon01.png)
                        let srcBigImg = e.target.src.substring((e.target.src.lastIndexOf('/') + 1));
                        console.log(srcBigImg);

                        document.getElementById("maGrandeImage").src = "img/" + srcBigImg;
                        document.getElementById("titreGrandeImage").innerHTML = e.target.title;
                        document.getElementById("texteGrandeImage").innerHTML = e.target.alt;

                });
        }