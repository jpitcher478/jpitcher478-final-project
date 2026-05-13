function filterProducts() {

    let filter = document.getElementById("productFilter").value;

    let cards = document.getElementsByClassName("product-card");

    for (let i = 0; i < cards.length; i++) {

        if (filter === "all") {
            cards[i].style.display = "block";
        }

        else if (cards[i].classList.contains(filter)) {
            cards[i].style.display = "block";
        }

        else {
            cards[i].style.display = "none";
        }
    }
}