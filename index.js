var customerName = 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
  window.bestCustomer = bestCustomer; 
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer; 
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new least favorite';
}
