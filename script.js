window.onload = function(){
    document.getElementById('output').style.visibility = 'hidden';
    document.getElementById('lbsInput').addEventListener('input', function (e) {
        document.getElementById('output').style.visibility = 'visible';
        let lbs = e.target.value;
        document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
        document.getElementById('KgmOutput').innerHTML = lbs / 2.2046;
        document.getElementById('OzOutput').innerHTML = lbs / 16;
    });
    document.getElementById('output-2').style.visibility = 'hidden';
    document.getElementById('KgsInput').addEventListener('input', function (e) {
        document.getElementById('output-2').style.visibility = 'visible';
        let kgs = e.target.value;
        document.getElementById('gramsOutput2').innerHTML = kgs * 1000;
        document.getElementById('lbsOutput2').innerHTML = kgs * 2.20462;
        document.getElementById('OzOutput2').innerHTML = kgs * 35.274;
    });
    document.getElementById('output-3').style.visibility = 'hidden';
    document.getElementById('OzInput').addEventListener('input', function (e) {
        document.getElementById('output-3').style.visibility = 'visible';
        let oz = e.target.value;
        document.getElementById('gramsOutput3').innerHTML = oz * 28.3495;
        document.getElementById('KgsOutput3').innerHTML = oz * 0.0283495;
        document.getElementById('lbsOutput3').innerHTML = oz * 0.0625;
    });

}