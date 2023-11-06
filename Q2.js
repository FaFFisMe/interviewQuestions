/**********************************************************
this is basically a javascript version of Q2 code
But prompt is not vanilla JS so I originally wrote
in PY (shitty language). but anyways P'Patr said
pure JS so I rewrote it

By: Paul J.
***********************************************************/

const prompt = require("prompt-sync")();

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
        } catch (error) {
            console.log("Invalid input. Please enter valid numeric coordinates.");
        }
    }

    return coordinates;
}

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

function isInsideCircle(point, circle) {
    const [x, y, r] = circle;
    const distance = Math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2);
    return distance <= r;
}

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

console.log("\nPlease input coordinates for points:\n");
const points = getCoordinates();

console.log("\nPlease input coordinates for circles:\n");
const circles = getCircles();

const result = pointsInsideCircles(points, circles);

for (let i = 0; i < result.length; i++) {
    console.log(`Points inside Circle ${i + 1}: ${JSON.stringify(result[i])}`);
}
