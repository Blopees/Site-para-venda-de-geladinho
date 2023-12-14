document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    checkoutButton.addEventListener('click', checkout);

    function addToCart(event) {
        const product = event.target.parentNode;
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        };

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(cartItem);
        }

        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = '';

        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x ${item.quantity} - R$ ${item.price * item.quantity.toFixed(2)}`;
            cartItemsList.appendChild(li);

            total += item.price * item.quantity;
        });

        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    function checkout() {
        // Aqui você pode implementar a lógica para processar o pedido no servidor
        // e redirecionar o usuário para uma página de pagamento, por exemplo.
        alert('Pedido finalizado! Implemente a lógica de pagamento no servidor.');
    }
});
