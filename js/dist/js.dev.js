"use strict";

document.getElementById('scrollBlock').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});