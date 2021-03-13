/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
function onClick() {
    var razhod = [5.7, 4.6, 3.5, 10.4];
    razhod[2] = 1000 * (razhod[2] / 416);
    var emisions = [0.13, 0.121, 0.094, 0.169];
    var distance = document.getElementById("distance").value;
    var fuel = document.getElementById("fuel").value;
    var i = document.getElementById("fuel_type").value;
    var result = distance * (fuel / razhod[i]) * emisions[i];
    result = result.toFixed(2);
    document.getElementById('ResultCO2').innerHTML = 'Количесвото на CO2 емисии на вашата кола през този пробег е: ' + result + ' kg';
}