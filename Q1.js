/**********************************************************
this is basically a javascript version of Q1 code
But prompt is not vanilla JS so I originally wrote
in PY (not my favoriate). but anyways P'Patr said
pure JS so I rewrote it

By: Paul J.
***********************************************************/

const prompt = require("prompt-sync")();


/**********************************************************
just so that I can write all this by calling the function
***********************************************************/
function statement() {
    console.log("\n\n\n\n\n 'Red' ○ Red set 50 THB/set");
    console.log(" 'Green' ○ Green set 40 THB/set");
    console.log(" 'Blue' ○ Blue set 30 THB/set");
    console.log(" 'Yellow' ○ Yellow set 50 THB/set");
    console.log(" 'Pink' ○ Pink set 80 THB/set");
    console.log(" 'Purple' ○ Purple set 90 THB/set");
    console.log(" 'Orange' ○ Orange set 120 THB/set");
    console.log("\n Type 'done' to calculate");
}

/**********************************************************
the start function to ask for membership then pass the answer
to the order function
***********************************************************/
function start() {
    let hasMember = false;
    console.log("\n\n\n\n\n\n\n\n\n\n");
    while (true) {
        let member = prompt("Welcome to my shop. Do you have a member card?:");
        if (member.toLowerCase() === "yes") {
            hasMember = true;
            break;
        } else if (member.toLowerCase() === "no") {
            hasMember = false;
            break;
        } else {
            console.log("Sorry, the answer must be 'yes' or 'no'");
        }
    }
    order(hasMember);
}

/**********************************************************
here in this function to ask for what the customer wants
***********************************************************/
function order(hasMember) {
    let redSet = 0;
    let greenSet = 0;
    let blueSet = 0;
    let yellowSet = 0;
    let pinkSet = 0;
    let purpleSet = 0;
    let orangeSet = 0;

    statement();

    while (true) {
        let choice = prompt(":").toLowerCase();
        //in this code i uses switch case instead of if else like my previous py code
        switch (choice) {
            case "red":
                redSet++;
                statement();
                break;
            case "green":
                greenSet++;
                statement();
                break;
            case "blue":
                blueSet++;
                statement();
                break;
            case "yellow":
                yellowSet++;
                statement();
                break;
            case "pink":
                pinkSet++;
                statement();
                break;
            case "purple":
                purpleSet++;
                statement();
                break;
            case "orange":
                orangeSet++;
                statement();
                break;
            case "done":
                return calculation(
                    redSet,
                    greenSet,
                    blueSet,
                    yellowSet,
                    pinkSet,
                    purpleSet,
                    orangeSet,
                    hasMember
                );
            default:
                statement();
                console.log("Invalid option. Please input only: red, green, blue, yellow, pink, purple, orange, or done");
                console.log("\n\n\n\n")
        }
    }
}

/**********************************************************
for all the discount calculations and return the result
***********************************************************/
function calculation(redSet, greenSet, blueSet, yellowSet, pinkSet, purpleSet, orangeSet, hasMember) {
    let discount = 0;

    if (greenSet > 1 || pinkSet > 1 || orangeSet > 1) {
        if (greenSet > 1) {
            console.log("5% discount is applied to green set");
            greenSet = greenSet * 40;
            discount = (greenSet * 5) / 100;
            greenSet -= discount;
        } else {
            greenSet = greenSet * 40;
        }
        if (pinkSet > 1) {
            console.log("5% discount is applied to pink set");
            pinkSet = pinkSet * 80;
            discount = (pinkSet * 5) / 100;
            pinkSet -= discount;
        } else {
            pinkSet = pinkSet * 80;
        }
        if (orangeSet > 1) {
            console.log("5% discount is applied to orange set");
            orangeSet = orangeSet * 120;
            discount = (orangeSet * 5) / 100;
            orangeSet -= discount;
        } else {
            orangeSet = orangeSet * 120;
        }
    }

    discount = 0;
    let total = redSet * 50 + greenSet + blueSet * 30 + yellowSet * 50 + pinkSet + purpleSet * 90 + orangeSet;

    if (hasMember) {
        discount += 10;
        console.log("10% discount is applied to the total price");
        discount = (total * 10) / 100;
        total -= discount;
    }

    console.log("\nTotal price is " + total + "฿");
}

//initiate the flow
start();
