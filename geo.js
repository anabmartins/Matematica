// Calcular a distância entre dois pontos 


xB = parseInt(prompt("Valor x de B"))
yB = parseInt(prompt("Valor y de B"))
xA = parseInt(prompt("Valor x de A"))
yA = parseInt(prompt("Valor y de A"))
dAB = Math.sqrt(Math.pow((xB - xA),2) + Math.pow((yB - yA),2))
console.log(`Distância entre A e B é ${dAB}`);
