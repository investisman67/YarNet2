document.addEventListener('DOMContentLoaded', function() {
  // Gérer l'affichage du menu
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');
  menuButton.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });

  // Simulation des données des produits
  const products = [
    { name: 'Produit 1', description: 'Description du produit 1', price: '10$', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Produit 2', description: 'Description du produit 2', price: '20$', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Produit 3', description: 'Description du produit 3', price: '30$', imageUrl: 'https://via.placeholder.com/150' }
  ];

  // Générer la liste des produits
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.imageUrl;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const price = document.createElement('p');
    price.textContent = product.price;

    const button = document.createElement('button');
    button.textContent = 'Ajouter au panier';

    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(description);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    productList.appendChild(productDiv);
  });
});
