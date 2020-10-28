var slices = 1;
var budget = 0;
var totalfinal = 0

var shape_prices = new Array();
shape_prices['round']   = 20;
shape_prices['oval']    = 40;
shape_prices['square']  = 30;
shape_prices['rect']    = 20;
shape_prices['heart']   = 50;
shape_prices['sheet']   = 40;
shape_prices['tieredC'] = 50;
shape_prices['tieredS'] = 40;
shape_prices['cupCakes'] = 20;


function calculateTotal() {
    setSlices();
    setBudget();
    var subT = 10 * slices + 20 * slices + 5 * slices + getShape();
    document.getElementById("subtotal").innerHTML = "$" + subT.toFixed(2);
    var tax = (subT * 0.13);
    document.getElementById('tax').innerHTML = "$" + tax.toFixed(2);
    totalfinal = (tax + subT);
    document.getElementById('totalfinal').innerHTML = "$" + totalfinal.toFixed(2);
}

function submit() {
    calculateTotal();
    if (totalfinal > budget) {
        alert("ERROR:\n Your total exceeds your budget");
    }
    return;
}

function getShape() {
    var shapePrice = 0;
    var frm = document.forms['cakeForm']
    var selectedShape = frm.elements["shape"]
    for (var i = 0; i < selectedShape.length; i++){
        if (selectedShape[i].checked == true)
            shapePrice = shape_prices[selectedShape[i].value];
    }
    
    return shapePrice;
}

function setSlices() {
    slices = document.getElementById('nSlices').value;
}
function setBudget(){
    budget = parseFloat(document.getElementById('budget').value);
}

