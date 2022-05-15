const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
let fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);


const customer2 = {
  firstName: 'Kauan',
  age: 18,
  job: 'Web Developer',
}
newKey = 'lastName';
lastName = 'Leite'
customer2[newKey] = lastName;
newKey = 'fullName';
fullName = `${customer2.firstName} ${customer2.lastName}`
customer2[newKey] = fullName;
console.log(customer2);
