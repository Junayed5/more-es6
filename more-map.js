const friends = ['Sariat','Mujahid','Neser','Tariful'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    {name:'Mouse', color:'sky-blue', price:380},
    {name:'Mobile', color:'black', price:10000},
    {name:'Head phone', color:'Ash', price:800}
]

// console.log(products);

const productName  = products.map(product => product.name);
console.log(productName);
const productPrice = products.map(product => product.price);
console.log(productPrice);

const productColor = products.forEach(product => product.color);
console.log(productColor);