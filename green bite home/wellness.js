// Water Calculator Functionality
function calculateWater() {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value) || 0;
  const climate = document.getElementById('climate').value;
  
  // Validate inputs
  if (!weight) {
    alert('Please enter your weight.');
    return;
  }
  
  // Calculate base water needs (30-35ml per kg of body weight)
  let waterBase = weight * 0.033; // Average of 33ml per kg
  
  // Adjust for activity level (add 0.5L per hour of exercise)
  let waterActivity = activity * 0.5;
  
  // Adjust for climate
  let climateFactor = 1;
  if (climate === 'hot') climateFactor = 1.2;
  if (climate === 'cold') climateFactor = 0.9;
  
  // Calculate total water needs
  const totalWater = (waterBase + waterActivity) * climateFactor;
  
  // Calculate equivalent in glasses (1 glass = 250ml = 0.25L)
  const glassCount = Math.round(totalWater / 0.25);
  
  // Display results
  document.getElementById('waterAmount').textContent = `${totalWater.toFixed(1)} L`;
  document.getElementById('waterDetail').textContent = `Based on your weight (${weight}kg), ${activity} hours of activity, and ${climate} climate conditions.`;
  document.getElementById('glassCount').textContent = `${glassCount} glasses`;
  
  // Update water visualization
  const fillPercentage = Math.min(100, (totalWater / 4) * 100); // Cap at 4L for visualization
  document.getElementById('waterFill').style.height = `${fillPercentage}%`;
  document.getElementById('glassFill').style.height = '100%';
  
  // Show results
  document.getElementById('waterResult').style.display = 'block';
}

// Sleep Calculator Functionality
function calculateSleep() {
  // Get wake time input
  const wakeTimeInput = document.getElementById('wakeTime').value;
  const [wakeHours, wakeMinutes] = wakeTimeInput.split(':').map(Number);
  
  // Calculate bedtimes based on 90-minute sleep cycles
  // Optimal: 5-6 cycles (7.5-9 hours before wake time)
  // Minimum: 4-5 cycles (6-7.5 hours before wake time)
  // Recovery: 6-7 cycles (9-10.5 hours before wake time)
  
  // Convert wake time to minutes since midnight
  const wakeTimeMinutes = wakeHours * 60 + wakeMinutes;
  
  // Calculate bedtime options (subtract sleep duration in minutes)
  const optimalTime = calculateTime(wakeTimeMinutes, 7.5 * 60); // 7.5 hours
  const minimumTime = calculateTime(wakeTimeMinutes, 6 * 60);   // 6 hours
  const recoveryTime = calculateTime(wakeTimeMinutes, 9 * 60);  // 9 hours
  
  // Display results
  document.getElementById('sleepTime1').textContent = optimalTime;
  document.getElementById('sleepTime2').textContent = minimumTime;
  document.getElementById('sleepTime3').textContent = recoveryTime;
  
  // Show results
  document.getElementById('sleepResult').style.display = 'block';
}

// Helper function to calculate time
function calculateTime(wakeTimeMinutes, sleepDurationMinutes) {
  let bedtimeMinutes = wakeTimeMinutes - sleepDurationMinutes;
  
  // Handle negative values (times before midnight)
  if (bedtimeMinutes < 0) {
    bedtimeMinutes += 24 * 60; // Add a day's worth of minutes
  }
  
  // Convert back to hours and minutes
  const hours = Math.floor(bedtimeMinutes / 60) % 24;
  const minutes = bedtimeMinutes % 60;
  
  // Format as HH:MM with AM/PM
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// Initialize time input to current time
function initializeTimeInput() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('wakeTime').value = `${hours}:${minutes}`;
}

// Event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize time input
  initializeTimeInput();
  
  // Water calculator button
  document.getElementById('calculateWaterBtn').addEventListener('click', calculateWater);
  
  // Sleep calculator button
  document.getElementById('calculateSleepBtn').addEventListener('click', calculateSleep);
  
  // Add input validation
  document.getElementById('weight').addEventListener('input', function() {
    if (this.value < 30) this.value = 30;
    if (this.value > 200) this.value = 200;
  });
  
  document.getElementById('activity').addEventListener('input', function() {
    if (this.value < 0) this.value = 0;
    if (this.value > 10) this.value = 10;
  });
});