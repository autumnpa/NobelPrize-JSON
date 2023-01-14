import data from '../json/nobelprize.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
for (let i = 0; i < data.prizes.length; i++) {
    console.log(i);
    html += `<p>${data.prizes[i].year}: ${data.prizes[i].category}</p>`;
}
output.innerHTML = html;