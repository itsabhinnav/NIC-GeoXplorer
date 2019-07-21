var faker = require('faker');

var database = { customers: [] };

for (var i = 1; i <= 300; i++) {
    database.customers.push({
        id: i,
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        city: faker.address.city(),
        country: faker.address.country(),
        title: faker.name.title()
    });
}

console.log(JSON.stringify(database));