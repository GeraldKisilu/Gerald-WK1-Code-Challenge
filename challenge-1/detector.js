// declare function

function SpeedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritLimit = 0;
    if (speed <= speedLimit) {
        return "Ok";
    } 
    const excessSpeed = speed - speedLimit
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
        if (demeritPoints > demeritLimit) {
            alert ("License suspended");
        } else {
            console.log(demeritPoints);
            return "Points:" + demeritPoints;
        }
    
}

console.log(SpeedDetector);
