
const distanceFromHqInBlocks = (distance) => {
	let pickupLocation = distance > 42? distance - 42 : 42 - distance;
	return pickupLocation;
}


const distanceFromHqInFeet = (pickupLocation) => {
	let difference = distanceFromHqInBlocks(pickupLocation) ;
	return difference * 264;
}


const distanceTravelledInFeet = (start, destination) => {
	let travel = destination > start? (destination - start ) * 264 :( start - destination) * 264 
    return travel;
}



const calculatesFarePrice = (start, destination) => {
	let pricing = distanceTravelledInFeet(start, destination);
	switch(true) {
	  case pricing <= 400:
		return 0;
	  case pricing > 400 && pricing < 2000:
		return 2.56;
	  case pricing > 2000:
		switch(true) {
		  case pricing > 2500:
			return `cannot travel that far`;
		  default:
			return 25;
		}
	}
}
