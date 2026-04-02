console.log(`Ready now...`)

petdata =
    {
        "1": {
            "Chance_of_illness": "6%",
            "Average_cost_of_treatment": 800
        },
        "2": {
            "Chance_of_illness": "5%",
            "Average_cost_of_treatment": 700
        },
        "3": {
            "Chance_of_illness": "4%",
            "Average_cost_of_treatment": 600
        }
    }

function jcp(){
    // console.log(`Clicked`);
    age = document.getElementById("agedd").value;
    gender = document.getElementById("genderdd").value;
    breed = document.getElementById("btdd").value;
    // console.log(`Age selected: ${age}`);
    // console.log("Gender:",gender);

    avg = petdata[age]["Average_cost_of_treatment"];
    ill = parseFloat(petdata[age]["Chance_of_illness"])/100;
    // console.log(`ill: ${ill}`)

    prem = (avg * ill) * (1+gender) * (1+breed)
    prem = prem.toFixed(2)
    // console.log(`Premium Value: ${prem}`)
    document.getElementById("prem").innerText = prem;
}

document.getElementById("agedd").addEventListener("change", jcp)