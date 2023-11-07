/**********************************************************
this is basically a javascript version of Q2 code
But prompt is not vanilla JS so I originally wrote
in PY (not my favoriate). but anyways P'Patr said
pure JS so I rewrote it

*** Note ****
Please install npm prompt-sync first

By: Paul J.
***********************************************************/

const prompt = require("prompt-sync")();


/************************************************************************
 this function is for getting the coordinates or the point, this will
 catch error. 
 ************************************************************************/
function getCoordinates() {
    const coordinates = [];

    while (true) {
        const xStr = prompt("Enter x coordinate (or 'done' to finish):");

        if (xStr.toLowerCase() === 'done') {
            break;
        }

        const yStr = prompt("Enter y coordinate:");

        try {
            const x = parseFloat(xStr);
            const y = parseFloat(yStr);
            coordinates.push([x, y]);
        //catch error and tell user
        } catch (error) {
            console.log("Invalid input. Please enter valid numeric coordinates.");
        }
    }

    return coordinates;
}

/************************************************************************
 similar function to the top but for getting the x y and radius of circle
 ************************************************************************/
function getCircles() {
    const circles = [];

    while (true) {
        const xStr = prompt("Enter x coordinate (or 'done' to finish):");

        if (xStr.toLowerCase() === 'done') {
            break;
        }

        const yStr = prompt("Enter y coordinate:");
        const radiusStr = prompt("Enter radius:");

        try {
            const x = parseFloat(xStr);
            const y = parseFloat(yStr);
            const radius = parseFloat(radiusStr);
            circles.push([x, y, radius]);
        } catch (error) {
            console.log("Invalid input. Please enter valid numeric coordinates.");
        }
    }

    return circles;
}

/************************************************************************
 this function is for checking whether point is in the circle or not
 use for the function below
 ************************************************************************/
function isInsideCircle(point, circle) {
    const [x, y, r] = circle;
    //Euclidean distance between the given point and the center of the circle using the Pythagorean theorem.
    const distance = Math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2);
    return distance <= r;
}

/************************************************************************
 this function is for looping and check for circle in array of circles
 and while we are at that circle we check for the point in the array of
 points using the function above
 ************************************************************************/
function pointsInsideCircles(points, circles) {
    const result = [];

    for (const circle of circles) {
        const pointsInside = [];

        for (const point of points) {
            if (isInsideCircle(point, circle)) {
                pointsInside.push(point);
            }
        }

        result.push(pointsInside);
    }

    return result;
}


//ask for points
console.log("\nPlease input coordinates for points:\n");
const points = getCoordinates();
//ask for cirlces
console.log("\nPlease input coordinates for circles:\n");
const circles = getCircles();
//put those points and circle into this function to return a array
const result = pointsInsideCircles(points, circles);
//here in JS we cannot print object, the returned value is a JSON so we need to make it a string first
for (let i = 0; i < result.length; i++) {
    console.log(`Points inside Circle ${i + 1}: ${JSON.stringify(result[i])}`);
}
