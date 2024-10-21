let total = 0.00;
let ordered = [];
let toSubmit = [];

const buttons = document.querySelectorAll('.add');
document.getElementById('restoname').value = "Kurt's Kusina";


const totalText = document.getElementById("total");
totalText.innerHTML = total.toFixed(2);


buttons.forEach(button => {
    button.addEventListener('click', addItem);
});

function addItem(event) {
    
    const parentDiv = event.target.closest('.item');
        const foodname = parentDiv.getAttribute('data-foodname');
        const foodprice = parseFloat(parentDiv.getAttribute('data-foodprice'));
        const meta = parentDiv.getAttribute('data-meta');
    
        addToCart(foodname, foodprice, meta);
}

function addToCart(foodName, foodPrice, meta) {
    if (document.contains(document.getElementById('no-items'))) {
        document.getElementById('no-items').remove();
    }
    let ul = document.querySelector('ul');

    if (!ul) {
        ul = document.createElement('ul');
        const cart = document.getElementById("cart");
        cart.appendChild(ul);
    }

    const existOrder = ordered.find(item => item.fName === foodName);

    if (existOrder) {
        existOrder.quantity += 1;
        existOrder.fPrice += foodPrice;
        total += foodPrice;

        const order = document.getElementById(`name-${meta}`);

        if (order) {
            document.getElementById(`quantity-${meta}`).innerHTML = "x" + existOrder.quantity;
            document.getElementById(`price-${meta}`).innerHTML = existOrder.fPrice.toFixed(2);
        }
    } else {
        const li = document.createElement('li');
        const name = document.createElement('p');
        const quantity = document.createElement('p');
        const price = document.createElement('p');

        const order = {fName: foodName, fPrice: foodPrice, quantity: 1};
        
        ordered.push(order);

        const details = document.createElement('div');
        details.setAttribute("style","display:flex;justify-content:space-between;width:90%");

        const nameText = document.createTextNode(foodName);
        const quanText = document.createTextNode("x" + order.quantity);
        const priceText = document.createTextNode(foodPrice.toFixed(2));

        total += parseFloat(foodPrice);

        name.appendChild(nameText);
        name.setAttribute("id", `name-${meta}`);
        quantity.appendChild(quanText);
        quantity.setAttribute("id", `quantity-${meta}`);
        price.appendChild(priceText);
        price.setAttribute("id", `price-${meta}`);

        details.appendChild(name);
        details.appendChild(price);

        li.appendChild(quantity);
        li.appendChild(details);

        ul.appendChild(li);
    }
    totalText.innerHTML = total.toFixed(2);

    toSubmit.push({foodname:foodName, foodprice:foodPrice});
    const string = JSON.stringify(toSubmit);
    document.getElementById('foodcart').value = string;
}