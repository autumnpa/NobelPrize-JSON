import data from '../json/nobelprize.json' assert { type: 'json' };
const output = document.getElementById("output");

// const laureates = data.prizes[2].laureates;

let html = "";

// Calculate stuff here
// Variables to hold the data collected in the loop

// for (let i = 0; i < data.prizes.length; i++) {
//     html += `
//     <div>
//     <h1>
//     ${data.prizes[i].year} - ${data.prizes[i].category}</h1> 
//     </div>`
// }

// This gives me total number of laureates but HOW can I get the total number PER YEAR?!
let totalLaurs = 0;

for (var _ in data.prizes[0].laureates) totalLaurs++;
console.log(totalLaurs);

for (let i = 0; i < data.prizes.length; i++) {
    html += `
    <div class="category">
        <h1>${data.prizes[i].category}
            <span>${data.prizes[i].year}</span>
         </h1>
    </div>
    `


    if (data.prizes[i].laureates !== undefined) {
        // Object is undefined

        for (let j = 0; j < data.prizes[i].laureates.length; j++) {

            html += `
            <div class="center">
                <div class="card colour">
                    <div class="general">
                        <p class = "large">${(data.prizes[i].laureates[j].firstname) ? data.prizes[i].laureates[j].firstname : ""} ${(data.prizes[i].laureates[j].surname) ? data.prizes[i].laureates[j].surname : ""}
                        </p>
                        <h3 class = "small">Motivation</h3>
                        <p class = "small">${data.prizes[i].laureates[j].motivation}</p>
                        <span class="more">More info +</span>
                    </div>
                    <div class="additional">
                        <div class="more-info">
                        <p class = "large">${(data.prizes[i].laureates[j].firstname) ? data.prizes[i].laureates[j].firstname : ""} ${(data.prizes[i].laureates[j].surname) ? data.prizes[i].laureates[j].surname : ""}
                        </p>
                            <div class="stats">
                                <div>
                                    <div class="title">ID</div>
                                    <div class="value">${data.prizes[i].laureates[j].id}</div>
                                </div>
                                <div>
                                    <div class="title">Share</div>
                                    <div class="value">${data.prizes[i].laureates[j].share}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }

}
output.innerHTML = html;