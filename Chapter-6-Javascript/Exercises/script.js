// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const costInput = document.getElementById("cost-per-liter");
    const litersInput = document.getElementById("liters");
    const calculateBtn = document.getElementById("calculate-btn");
    const totalDisplay = document.getElementById("total-cost");
  
    // Function to calculate and display total
    function calculateTotal() {
      const costPerLiter = parseFloat(costInput.value);
      const liters = parseFloat(litersInput.value);
  
      // Basic validation
      if (isNaN(costPerLiter) || isNaN(liters)) {
        totalDisplay.textContent = "Please enter valid numbers.";
        return;
      }
  
      const total = costPerLiter * liters;
      totalDisplay.textContent = `Total Cost: £${total.toFixed(2)}`;
    }
  
    // Add click event to the button
    calculateBtn.addEventListener("click", calculateTotal);
  });
  