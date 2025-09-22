// Breathing Exercise Functionality
const breathingCircle = document.getElementById('breathingCircle');
const breathingInstruction = document.getElementById('breathingInstruction');
const breathingTimer = document.getElementById('breathingTimer');
const startBreathingBtn = document.getElementById('startBreathing');
const pauseBreathingBtn = document.getElementById('pauseBreathing');
const resetBreathingBtn = document.getElementById('resetBreathing');
const breathingButtons = document.querySelectorAll('.breathing-btn');

let breathingInterval;
let isBreathingActive = false;
let currentPattern = '4-7-8';
let breathingTime = 0;

// Breathing patterns: [inhale, hold, exhale] in seconds
const breathingPatterns = {
  '4-7-8': { inhale: 4, hold: 7, exhale: 8, instruction: 'Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds' },
  'box': { inhale: 4, hold: 4, exhale: 4, instruction: 'Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds' },
  'deep': { inhale: 5, hold: 0, exhale: 5, instruction: 'Inhale for 5 seconds, exhale for 5 seconds' }
};

// Set breathing pattern
breathingButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    breathingButtons.forEach(b => b.classList.remove('breathing-active'));
    this.classList.add('breathing-active');
    currentPattern = this.getAttribute('data-pattern');
    breathingInstruction.textContent = breathingPatterns[currentPattern].instruction;
    resetBreathing();
  });
});

// Start breathing exercise
function startBreathing() {
  if (isBreathingActive) return;
  
  isBreathingActive = true;
  const pattern = breathingPatterns[currentPattern];
  let phase = 'inhale';
  let timeLeft = pattern.inhale;
  
  breathingCircle.textContent = 'Breathe In';
  breathingCircle.style.transform = 'scale(1.2)';
  breathingCircle.style.backgroundColor = '#4CAF50';
  
  breathingInterval = setInterval(() => {
    timeLeft--;
    breathingTimer.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      if (phase === 'inhale') {
        phase = pattern.hold > 0 ? 'hold' : 'exhale';
        timeLeft = phase === 'hold' ? pattern.hold : pattern.exhale;
        breathingCircle.textContent = pattern.hold > 0 ? 'Hold' : 'Breathe Out';
        breathingCircle.style.transform = pattern.hold > 0 ? 'scale(1.1)' : 'scale(1)';
        breathingCircle.style.backgroundColor = pattern.hold > 0 ? '#FF9800' : '#2196F3';
      } else if (phase === 'hold') {
        phase = 'exhale';
        timeLeft = pattern.exhale;
        breathingCircle.textContent = 'Breathe Out';
        breathingCircle.style.transform = 'scale(1)';
        breathingCircle.style.backgroundColor = '#2196F3';
      } else {
        phase = 'inhale';
        timeLeft = pattern.inhale;
        breathingCircle.textContent = 'Breathe In';
        breathingCircle.style.transform = 'scale(1.2)';
        breathingCircle.style.backgroundColor = '#4CAF50';
      }
    }
  }, 1000);
}

// Pause breathing exercise
function pauseBreathing() {
  clearInterval(breathingInterval);
  isBreathingActive = false;
}

// Reset breathing exercise
function resetBreathing() {
  clearInterval(breathingInterval);
  isBreathingActive = false;
  breathingCircle.textContent = 'Breathe In';
  breathingCircle.style.transform = 'scale(1)';
  breathingCircle.style.backgroundColor = '#1abc9c';
  breathingTimer.textContent = '00:00';
}
// Ambient Sounds Functionality
const soundButtons = document.querySelectorAll('.sound-toggle');
let currentSound = null;
let currentAudio = null;

// Define the sound file paths
const soundFiles = {
    ocean: 'sounds/ocean wave.mp3',
    forest: 'sounds/forest-ambience.mp3',
    rain: 'sounds/gentle-rain.mp3',
    wind: 'sounds/soft-wind.mp3'
};

// Create audio objects for each sound
const audioElements = {};
for (const [key, path] of Object.entries(soundFiles)) {
    audioElements[key] = new Audio(path);
    audioElements[key].loop = true;
}

// Add event listeners to all sound buttons
soundButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const soundType = this.getAttribute('data-sound');
        
        // If clicking the same sound button, toggle it off
        if (currentSound === soundType) {
            stopCurrentSound();
            this.classList.remove('playing');
            this.textContent = 'Play';
            currentSound = null;
        } else {
            // Turn off any other playing sounds
            soundButtons.forEach(b => {
                b.classList.remove('playing');
                b.textContent = 'Play';
            });
            
            // Stop current sound if any
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Turn on this sound
            this.classList.add('playing');
            this.textContent = 'Stop';
            currentSound = soundType;
            currentAudio = audioElements[soundType];
            
            // Play the selected sound
            currentAudio.play().catch(error => {
                console.error("Audio playback failed:", error);
                this.classList.remove('playing');
                this.textContent = 'Play';
                currentSound = null;
                currentAudio = null;
            });
        }
    });
});

// Function to stop the currently playing sound
function stopCurrentSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Add volume control functionality
const volumeControls = document.querySelectorAll('.volume-control');
volumeControls.forEach(control => {
    control.addEventListener('input', function() {
        const soundType = this.getAttribute('data-sound');
        const volume = parseFloat(this.value);
        
        if (audioElements[soundType]) {
            audioElements[soundType].volume = volume;
        }
        
        // If this sound is currently playing, update its volume
        if (currentSound === soundType && currentAudio) {
            currentAudio.volume = volume;
        }
    });
});

// Stop all sounds when the page is hidden (optional)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopCurrentSound();
        // Also reset all buttons
        soundButtons.forEach(btn => {
            btn.classList.remove('playing');
            btn.textContent = 'Play';
        });
        currentSound = null;
    }
});

// Meditation Timer Functionality
const meditationTimer = document.getElementById('meditationTimer');
const timeOptions = document.querySelectorAll('.time-option');
const startMeditationBtn = document.getElementById('startMeditation');
const pauseMeditationBtn = document.getElementById('pauseMeditation');
const resetMeditationBtn = document.getElementById('resetMeditation');
const sessionCount = document.getElementById('sessionCount');
const weeklySessions = document.getElementById('weeklySessions');

let meditationInterval;
let isMeditationActive = false;
let meditationTime = 600; // 10 minutes in seconds
let timeRemaining = meditationTime;

// Set meditation time
timeOptions.forEach(option => {
  option.addEventListener('click', function() {
    timeOptions.forEach(o => o.classList.remove('active'));
    this.classList.add('active');
    meditationTime = parseInt(this.getAttribute('data-time'));
    timeRemaining = meditationTime;
    updateMeditationDisplay();
  });
});

// Update meditation timer display
function updateMeditationDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  meditationTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start meditation timer
function startMeditation() {
  if (isMeditationActive) return;
  
  isMeditationActive = true;
  meditationInterval = setInterval(() => {
    timeRemaining--;
    updateMeditationDisplay();
    
    if (timeRemaining <= 0) {
      clearInterval(meditationInterval);
      isMeditationActive = false;
      // Play completion sound
      try {
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
        audio.play();
      } catch (e) {
        console.log("Meditation session completed!");
      }
      
      // Update session counts
      updateSessionCount();
    }
  }, 1000);
}

// Pause meditation timer
function pauseMeditation() {
  clearInterval(meditationInterval);
  isMeditationActive = false;
}

// Reset meditation timer
function resetMeditation() {
  clearInterval(meditationInterval);
  isMeditationActive = false;
  timeRemaining = meditationTime;
  updateMeditationDisplay();
}

// Update session count in localStorage
function updateSessionCount() {
  // Get today's date as a string
  const today = new Date().toDateString();
  
  // Get stored data or initialize
  let meditationData = JSON.parse(localStorage.getItem('meditationData') || '{}');
  
  // Update today's count
  if (!meditationData[today]) {
    meditationData[today] = 0;
  }
  meditationData[today]++;
  
  // Save back to localStorage
  localStorage.setItem('meditationData', JSON.stringify(meditationData));
  
  // Update display
  sessionCount.textContent = meditationData[today];
  
  // Calculate weekly sessions
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  let weeklyCount = 0;
  for (const date in meditationData) {
    if (new Date(date) >= oneWeekAgo) {
      weeklyCount += meditationData[date];
    }
  }
  
  weeklySessions.textContent = weeklyCount;
}

// Initialize session counts from localStorage
function initSessionCounts() {
  const meditationData = JSON.parse(localStorage.getItem('meditationData') || '{}');
  const today = new Date().toDateString();
  
  sessionCount.textContent = meditationData[today] || 0;
  
  // Calculate weekly sessions
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  let weeklyCount = 0;
  for (const date in meditationData) {
    if (new Date(date) >= oneWeekAgo) {
      weeklyCount += meditationData[date];
    }
  }
  
  weeklySessions.textContent = weeklyCount;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for breathing controls
  startBreathingBtn.addEventListener('click', startBreathing);
  pauseBreathingBtn.addEventListener('click', pauseBreathing);
  resetBreathingBtn.addEventListener('click', resetBreathing);
  
  // Add event listeners for meditation controls
  startMeditationBtn.addEventListener('click', startMeditation);
  pauseMeditationBtn.addEventListener('click', pauseMeditation);
  resetMeditationBtn.addEventListener('click', resetMeditation);
  
  // Initialize meditation timer
  updateMeditationDisplay();
  initSessionCounts();
  
  // Add volume control functionality
  document.querySelectorAll('.volume-control').forEach(control => {
    control.addEventListener('input', function() {
      // Here you would adjust the volume of the corresponding sound
      console.log(`Volume set to: ${this.value}`);
    });
  });
});