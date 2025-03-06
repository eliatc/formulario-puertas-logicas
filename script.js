function actualizarResultados() {
    let cb1 = document.getElementById('checkbox1').checked;
    let cb2 = document.getElementById('checkbox2').checked;
    
    document.getElementById('andResult').textContent = cb1 && cb2;
    document.getElementById('orResult').textContent = cb1 || cb2;
    document.getElementById('xorResult').textContent = cb1 !== cb2;
}

document.getElementById('checkbox1').addEventListener('change', actualizarResultados);
document.getElementById('checkbox2').addEventListener('change', actualizarResultados);
