import data from '../json/nobelprize.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";

// Calculate stuff here
// Variables to hold the data collected in the loop

// Calculates the numbers
let totalLaurs = {};

for (let i = 0; i < data.prizes.length; i++) {
    let prize = data.prizes[i];
    if (totalLaurs[prize.year] && prize.laureates) {
        totalLaurs[prize.year] += prize.laureates.length;
    } else if (prize.laureates) {
        totalLaurs[data.prizes[i].year] = prize.laureates.length;
    }
    // console.log(data.prizes[i].year);
}

// Find which year has most/least laureates

let keys = Object.keys(totalLaurs);
let arr = Object.values(totalLaurs);
let least = Math.min(...arr);
let most = Math.max(...arr);

html += `
<div class="data-card">
  <p class="data-card-title">The least laureates per year is ${least}.</p>
  <p>The most laureates per year is ${most}.</p>
</div>
`


// This gives me total number of laureates but HOW can I get the total number PER YEAR?!
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