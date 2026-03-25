let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* Ajouter produit */
function add(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Produit ajouté au panier ✅");
}

/* Affichage panier */
function displayCart() {
    let cartList = document.getElementById("cart");
    let total = 0;

    if (!cartList) return;

    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " DH";
        cartList.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = total;
}

/* Commande */
function sendOrder(e) {
    e.preventDefault();

    let message = "Commande reçue:\\n";

    cart.forEach(item => {
        message += item.name + " - " + item.price + " DH\\n";
    });

    alert(message);

    localStorage.removeItem("cart");
    cart = [];
}

/* Charger panier */
window.onload = displayCart;