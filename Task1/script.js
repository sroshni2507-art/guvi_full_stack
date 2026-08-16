// Store total expense
let total = 0;

// Store category expenses
let food = 0;
let travel = 0;
let education = 0;
let shopping = 0;
let other = 0;


// Function to add expense
function addExpense() {

    // Get values from HTML
    let name = document.getElementById("expenseName").value;
    let category = document.getElementById("category").value;
    let amount = Number(document.getElementById("amount").value);

    // Check whether values are entered
    if (name == "" || amount <= 0) {
        alert("Please enter expense name and amount");
        return;
    }

    // Add amount to total
    total = total + amount;

    // Add amount according to category
    if (category == "Food") {
        food = food + amount;
    }
    else if (category == "Travel") {
        travel = travel + amount;
    }
    else if (category == "Education") {
        education = education + amount;
    }
    else if (category == "Shopping") {
        shopping = shopping + amount;
    }
    else {
        other = other + amount;
    }

    // Create new table row
    let table = document.getElementById("expenseTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = category;
    row.insertCell(2).innerHTML = "₹" + amount;

    // Display total expense
    document.getElementById("totalExpense").innerHTML = total;

    // Display category values
    document.getElementById("food").innerHTML = food;
    document.getElementById("travel").innerHTML = travel;
    document.getElementById("education").innerHTML = education;
    document.getElementById("shopping").innerHTML = shopping;
    document.getElementById("other").innerHTML = other;

    // Calculate savings
    calculateSavings();

    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
}


// Function to calculate savings
function calculateSavings() {

    let income = Number(document.getElementById("income").value);

    document.getElementById("displayIncome").innerHTML = income;

    let savings = income - total;

    document.getElementById("savings").innerHTML = savings;
}