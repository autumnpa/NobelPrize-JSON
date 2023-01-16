import data from '../json/nobelprize.json' assert { type: 'json' };
const output = document.getElementById("output");

const laureates = data.prizes[2].laureates;
console.log(laureates);

let html = "";
// Maybe change this into a table for better formatting?
for (let i = 0; i < data.prizes.length; i++) {
    // html += `<p>${data.prizes[i].year}: ${data.prizes[i].category}</p>`;
    console.log(data.prizes[i].laureates);
    html += `
    <div class = "category">
    <h1>
    ${data.prizes[i].year} - ${data.prizes[i].category} - `

    if (data.prizes[i].laureates !== undefined) {
        // Object is undefined
        for (let j = 0; j < data.prizes[i].laureates.length; j++) {

            html += `${data.prizes[i].laureates[j].firstname} - `
        }
    }

    html += `
    </h1 >
            <div class="laureates">
            </div>
    </div >
            `
}

// for (let i = 0; i < data.laureates.length; i++) {

//     html += `
// <div class = "category">
// <div class = "laureates">
// ${data.laureates[i].firstname}
// </div>
// </div>
// `
// }
output.innerHTML = html;