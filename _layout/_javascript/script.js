'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const open = document.querySelector('.open');
const container = document.querySelector('.container');
const close = document.querySelector('.close');

open.addEventListener('click', function () {
  container.classList.toggle('show-nav');
});

close.addEventListener('click', function () {
  container.classList.toggle('show-nav');
});
