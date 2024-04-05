const tripDistanceEl = document.getElementById("trip-distance");
const fuelEffEl = document.querySelector("#fuel-efficiency");
const fuelCostEl = document.querySelector("#fuel-cost");
const calculateBtn = document.querySelector("#calculate-btn");
const clearBtn = document.querySelector("#clear-btn");

function submitBtn() {
    calculateBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (tripDistanceEl.value === "" || fuelEffEl.value === "" || fuelCostEl.value === "") {
            alert( "Please fill out this field " )
        } else {
            const distanceValue = tripDistanceEl.value;
            const fuelValue = fuelEffEl.value;
            const costValue = fuelCostEl.value;
        
            const finalCalculate = Math.floor((distanceValue / fuelValue) * costValue);
        
            const finalMsg = "Your fuel cost will be arround :₹ " + finalCalculate;
    
            alert(finalMsg);
    
        }
    })
}
submitBtn();

function clearValue() {
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (tripDistanceEl.value === "") {
            document.location.reload();
        } else {
            alert("remove");
        }
        
    })
    
}