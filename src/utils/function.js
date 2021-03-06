
export const getTextColor = (type) => {
    switch (type) {

        case "Fairy":

            return "#FAD7DD";

        case "Fire":

            return "#F7BF97";

        case "Normal":

            return "#E1E1D1";

        case "Poison":

            return "#CF9FCF";

        case "Flying":

            return "#A890F0";

        case "Grass":

            return "#BBE3A7";

        case "Bug":

            return "#D3DB8F";

        case "Ground":

            return "#EFDFB3";

        case "Water":

            return "#B3C7F7";

        case "Electric":

            return "#FBE384";

        case "Ice":

            return "#CBEBEB";

        case "Fighting":

            return "#DF9793";

        case "Psychic":

            return "#FBABC3";

        case "Rock":

            return "#DBCF9B";

        case "Ghost":

            return "#B7ABCB";

        case "Dragon":

            return "#B79BFB";

        case "Dark":

            return "#B7ABA3";

        case "Steel":

            return "#DBDBE7"

        default:

            return "#A2A2A2";

    }
}

export const getBackgroundColor = (type) => {
    switch (type) {

        case "Fairy":

            return "#FFA9C3";

        case "Fire":

            return "#F08030";

        case "Normal":

            return "#A8A878";

        case "Poison":

            return "#A040A0";

        case "Flying":

            return "#D3C7F7";

        case "Grass":

            return "#78C850";

        case "Bug":

            return "#A8B820";

        case "Ground":

            return "#E0C068";

        case "Water":

            return "#6890F0";

        case "Electric":

            return "#F8D030";

        case "Ice":

            return "#98D8D8";

        case "Fighting":

            return "#C03028";

        case "Psychic":

            return "#F85888";

        case "Rock":

            return "#B8A038";

        case "Ghost":

            return "#705898";

        case "Dragon":

            return "#7038F8";

        case "Dark":

            return "#705848";

        case "Steel":

            return "#B8B8D0"

        default:

            return "#A2A2A2";



    }
}