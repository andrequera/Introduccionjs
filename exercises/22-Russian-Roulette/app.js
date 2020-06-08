var bulletPosition = 4;
// camara de giro 
const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition; //posicion de la ruleta
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    console.log(spinnerPosition)
    if (bulletPosition==spinnerPosition) 
    return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));