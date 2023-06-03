//your JS code here. If required.
 // Function to update the timer
      function updateTimer() {
        // Get the current date and time
        var currentDate = new Date();

        // Format the date and time
        var dateTimeString = currentDate.toLocaleString();

        // Display the date and time in the timer element
        document.getElementById("timer").textContent = dateTimeString;
      }

      // Update the timer every second
      setInterval(updateTimer, 1000);