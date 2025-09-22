// Nutrition Calculator Functions
function calculateNutrition() {
  // Get form values
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activityFactor = parseFloat(document.getElementById('activity').value);
  
  // Validate inputs
  if (!age || !gender || !height || !weight || !activityFactor) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Calculate BMR
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
  
  // Calculate TDEE
  const tdee = bmr * activityFactor;
  
  // Calculate Macros
  const carbs = (tdee * 0.50) / 4;
  const protein = (tdee * 0.20) / 4;
  const fat = (tdee * 0.30) / 9;
  
  // Display results
  document.getElementById('bmrResult').textContent = `${bmr.toFixed(0)} calories`;
  document.getElementById('tdeeResult').textContent = `${tdee.toFixed(0)} calories`;
  document.getElementById('carbsResult').textContent = `${carbs.toFixed(0)}g`;
  document.getElementById('proteinResult').textContent = `${protein.toFixed(0)}g`;
  document.getElementById('fatResult').textContent = `${fat.toFixed(0)}g`;
  
  // Show results section
  document.getElementById('nutritionResult').style.display = 'block';
  
  // Scroll to results
  document.getElementById('nutritionResult').scrollIntoView({ behavior: 'smooth' });
}

// Workout Generator Functions
function generateWorkout() {
  const bodyPart = document.getElementById('bodyPart').value;
  const equipment = document.getElementById('equipment').value;
  const level = document.getElementById('workoutLevel').value;
  
  // Exercise database
  const exercises = {
    fullbody: [
      { name: "Squats", sets: "3-4", reps: "12-15", duration: "60s" },
      { name: "Push-ups", sets: "3-4", reps: "10-12", duration: "45s" },
      { name: "Lunges", sets: "3", reps: "10-12 each leg", duration: "60s" },
      { name: "Plank", sets: "3", reps: "30-60 seconds", duration: "60s" },
      { name: "Bent-over Rows", sets: "3", reps: "12-15", duration: "45s" }
    ],
    upper: [
      { name: "Push-ups", sets: "3-4", reps: "10-15", duration: "45s" },
      { name: "Dumbbell Shoulder Press", sets: "3-4", reps: "10-12", duration: "60s" },
      { name: "Bicep Curls", sets: "3", reps: "12-15", duration: "45s" },
      { name: "Tricep Dips", sets: "3", reps: "10-12", duration: "45s" },
      { name: "Lat Pulldowns", sets: "3-4", reps: "10-12", duration: "60s" }
    ],
    lower: [
      { name: "Squats", sets: "4", reps: "12-15", duration: "60s" },
      { name: "Deadlifts", sets: "3-4", reps: "10-12", duration: "60s" },
      { name: "Lunges", sets: "3", reps: "10-12 each leg", duration: "60s" },
      { name: "Calf Raises", sets: "4", reps: "15-20", duration: "45s" },
      { name: "Leg Press", sets: "3-4", reps: "12-15", duration: "60s" }
    ],
    core: [
      { name: "Plank", sets: "3", reps: "45-60 seconds", duration: "60s" },
      { name: "Russian Twists", sets: "3", reps: "15-20 each side", duration: "45s" },
      { name: "Leg Raises", sets: "3", reps: "12-15", duration: "45s" },
      { name: "Mountain Climbers", sets: "3", reps: "30-45 seconds", duration: "45s" },
      { name: "Bicycle Crunches", sets: "3", reps: "15-20 each side", duration: "45s" }
    ],
    cardio: [
      { name: "Jumping Jacks", sets: "3", reps: "45-60 seconds", duration: "60s" },
      { name: "High Knees", sets: "3", reps: "45-60 seconds", duration: "60s" },
      { name: "Burpees", sets: "3", reps: "10-12", duration: "60s" },
      { name: "Mountain Climbers", sets: "3", reps: "45-60 seconds", duration: "60s" },
      { name: "Jump Rope", sets: "3", reps: "60-90 seconds", duration: "90s" }
    ]
  };
  
  // Adjust based on equipment
  if (equipment === "none") {
    exercises.upper[1].name = "Pike Push-ups";
    exercises.upper[4].name = "Pull-ups (if possible) or Bodyweight Rows";
    exercises.lower[1].name = "Good Mornings";
    exercises.lower[4].name = "Single-leg Squats";
  }
  
  // Adjust based on level
  let setsMultiplier = 1;
  if (level === "beginner") setsMultiplier = 0.8;
  if (level === "advanced") setsMultiplier = 1.2;
  
  // Generate workout HTML
  let workoutHTML = `
    <div class="workout-day">
      <h3 class="day-title">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Workout</h3>
      <ul class="exercise-list">
  `;
  
  exercises[bodyPart].forEach(exercise => {
    let sets = exercise.sets;
    if (setsMultiplier !== 1) {
      const setRange = sets.split('-');
      if (setRange.length === 2) {
        const minSets = Math.round(parseInt(setRange[0]) * setsMultiplier);
        const maxSets = Math.round(parseInt(setRange[1]) * setsMultiplier);
        sets = `${minSets}-${maxSets}`;
      }
    }
    
    workoutHTML += `
      <li class="exercise-item">
        <div>
          <div class="exercise-name">${exercise.name}</div>
          <div class="exercise-details">${sets} sets, ${exercise.reps}</div>
        </div>
        <button class="timer-btn" data-exercise="${exercise.name}" data-duration="${exercise.duration.replace('s', '')}">
          Set Timer (${exercise.duration})
        </button>
      </li>
    `;
  });
  
  workoutHTML += `
      </ul>
    </div>
    <div class="workout-day">
      <h3 class="day-title">Cool Down</h3>
      <ul class="exercise-list">
        <li class="exercise-item">
          <div>
            <div class="exercise-name">Stretching</div>
            <div class="exercise-details">5-10 minutes, all major muscle groups</div>
          </div>
        </li>
      </ul>
    </div>
  `;
  
  document.getElementById('workoutPlan').innerHTML = workoutHTML;
  document.getElementById('workoutResult').style.display = 'block';
  
  // Add event listeners to timer buttons
  document.querySelectorAll('.timer-btn').forEach(button => {
    button.addEventListener('click', function() {
      const exerciseName = this.getAttribute('data-exercise');
      const duration = parseInt(this.getAttribute('data-duration'));
      setupTimer(exerciseName, duration);
    });
  });
}

// Timer functionality
let timerInterval;
let timerSeconds = 60;
let isTimerRunning = false;

function setupTimer(exerciseName, duration) {
  timerSeconds = duration;
  document.getElementById('timerDisplay').textContent = `00:${timerSeconds.toString().padStart(2, '0')}`;
  document.getElementById('timerContainer').style.display = 'block';
  document.getElementById('timerContainer').scrollIntoView({ behavior: 'smooth' });
  
  // Reset timer state
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds--;
      document.getElementById('timerDisplay').textContent = `00:${timerSeconds.toString().padStart(2, '0')}`;
      
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        // Play sound if available
        try {
          const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
          audio.play();
        } catch (e) {
          console.log("Timer completed!");
        }
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  const currentDuration = parseInt(document.getElementById('timerDisplay').textContent.split(':')[1]);
  timerSeconds = currentDuration;
  document.getElementById('timerDisplay').textContent = `00:${timerSeconds.toString().padStart(2, '0')}`;
}

function printWorkout() {
  const printContent = document.getElementById('workoutPlan').innerHTML;
  const originalContent = document.body.innerHTML;
  
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="text-align: center; color: #2c3e50;">GreenBite Workout Plan</h1>
      ${printContent}
    </div>
  `;
  window.print();
  document.body.innerHTML = originalContent;
  location.reload();
}

// Event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Nutrition calculator button
  document.getElementById('calculateBtn').addEventListener('click', calculateNutrition);
  
  // Workout generator button
  document.getElementById('generateWorkoutBtn').addEventListener('click', generateWorkout);
  
  // Timer control buttons
  document.getElementById('startTimerBtn').addEventListener('click', startTimer);
  document.getElementById('pauseTimerBtn').addEventListener('click', pauseTimer);
  document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);
  
  // Print workout button
  document.getElementById('printWorkoutBtn').addEventListener('click', printWorkout);
});