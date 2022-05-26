'use strict'

const elClick = document.getElementById('click');
const colors = ['Egyptian', 'Teal', 'Air Force', 'Navy', 'Tiffany', 'black'];
let color = 0;
elClick.addEventListener('click', function() {
 elClick.style.backgroundColor = colors[color++];
 if (color === colors.length) {
     color = 0;
 }
});