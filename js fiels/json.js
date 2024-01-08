const user = { id: 1, name: "ramsay", job: "chef" };
/*
    JSON => javascript object notation.
    */
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/*
{ id: 1, name: 'ramsay', job: 'chef' } => js format
{"id":1,"name":"ramsay","job":"chef"} => json format1
*/

const shop = {
  owner: "jamil",
  address: {
    street: "lan/440road",
    city: 'bristol',
    country: 'uk'
  },
  products: ['laptop', 'pc', 'mobile'],
  revenue: 12500,
  isOpen: true,
  isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
