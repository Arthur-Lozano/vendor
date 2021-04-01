'use strict';


const io = require('socket.io-client');
const host = 'http://localhost:3331';
const caps = io.connect(host);//caps could be named socket and emits connection event
const faker = require('faker');

let storeName = process.env.STORENAME || 'HOOBS';

caps.on('delivered', delivered);


setInterval(() => {
  let yourOrder = {
    storeName: faker.company.companyName(),
    orderId: faker.commerce.department(),
    customerName: faker.name.findName(),
    address: faker.address.state()
  }
  console.log('your order', yourOrder);
  caps.emit('pickup', yourOrder);
}, 5000)



function delivered(payload) {
  console.log(`Package ID ${payload.orderId} has been delivered`);
}
module.exports = delivered;
