/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// create three fake promise
const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 1000, 'Resolved Promise 1'),
);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 500, 'Resolved Promise 2'),
);
const promise3 = new Promise((reject) =>
  setTimeout(reject, 1000, 'Resolved Promise 1'),
);

// initialize the promise race
Promise.race([promise1, promise2, promise3])
  .then((data) => console.log('First Resolved Position goes to: ', data))
  .catch((err) => console.error('First Rjected error goes to: ', err));

// Promise2 should be the first
