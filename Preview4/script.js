'use strict';

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map ();

shops.forEach((shop, i) => {
    map.set(shops[0], 5000);
})

console.log(map);

// map.delete(key);
// map.clear();
// map.size;
// map.keys();

const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[])
};

console.log(goods);