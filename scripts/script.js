import data from '../json/nobelprize.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
for (let i = 0; i < data.length; i++) {
    html += `<p>${data[i].name}: ${data[i].value}</p>`;
}
output.innerHTML = html;