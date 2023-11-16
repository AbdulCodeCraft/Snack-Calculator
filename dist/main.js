

//Input Snacks (KG) Elements
const dhodhalKgEl = document.getElementById('dhodhalKg');
const paniyamKgEl = document.getElementById('paniyamKg');
const kalakalaKgEl = document.getElementById('kalakalaKg');
const elluKgEl = document.getElementById('elluKg');
const murukkuKgEl = document.getElementById('murukkuKg');
const oattumaavuKgEl = document.getElementById("oattumaavuKg");
const profitEl = document.getElementById("profit");



function calculate(){
    //Input snack user entered.
const dhodhalKg = Number(dhodhalKgEl.value);
const paniyamKg = Number(paniyamKgEl.value);
const kalakalaKg = Number(kalakalaKgEl.value);
const elluKg = Number(elluKgEl.value);
const murukkuKg = Number(murukkuKgEl.value);
const oattumaavuKg = Number(oattumaavuKgEl.value);


const profit = ((dhodhalKg + kalakalaKg + elluKg+ murukkuKg + oattumaavuKg)*100) + (paniyamKg*95);


profitEl.textContent ="Today's profit = " + profit;
}



// //Per (KG) Selling Price
// const dhodhalSP = 250;
// const paniyamSP = 240;
// const kalakalaSP = 250;
// const elluSP = 250;
// const murukkuSP = 250;

// //Per (KG) Cost Price
// const dhodhalCP = 150;
// const paniyamCP = 145;
// const kalakalaCP = 150;
// const elluCP = 150;
// const murukkuCP = 150;



// //TotalAmountSold
// const totalAmountSold = ((dhodhalKg+kalakalaKg+elluKG+murukkuKg)*250) + (paniyamKg*240);

// //TotalAmountBuyed
// const totalAmountBuyed = ((dhodhalKg+kalakalaKg+elluKg+murukkuKg)*150) + (paniyamKg*145);


// //Total Profit
// const totalProfit = total*100;



