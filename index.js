// Health Tip of the Day functionality
const healthTips = [
  "Start your day with a glass of warm water and lemon to kickstart your metabolism.",
  "Aim for at least 30 minutes of moderate exercise most days of the week.",
  "Include a source of protein in every meal to help maintain muscle mass and keep you full longer.",
  "Practice mindful eating by paying attention to your food and avoiding distractions during meals.",
  "Get 7-9 hours of quality sleep each night for optimal health and recovery.",
  "Incorporate leafy green vegetables into at least one meal every day.",
  "Stay hydrated by drinking water throughout the day, not just when you're thirsty.",
  "Take short breaks to stretch and move if you have a sedentary job.",
  "Limit processed foods and focus on whole, nutrient-dense foods.",
  "Practice stress-reduction techniques like deep breathing or meditation daily.",
  "Include healthy fats like avocados, nuts, and olive oil in your diet.",
  "Aim for 10,000 steps per day to maintain an active lifestyle.",
  "Try meal prepping on weekends to make healthy eating easier during busy weekdays.",
  "Reduce sugar intake by gradually cutting back on sugary drinks and snacks.",
  "Spend time outdoors in nature to boost mood and reduce stress.",
  "Practice good posture to prevent back and neck pain.",
  "Include strength training exercises at least twice a week.",
  "Eat a variety of colorful fruits and vegetables to get a range of nutrients.",
  "Take the stairs instead of the elevator when possible.",
  "Limit screen time before bed to improve sleep quality.",
  "Try a new healthy recipe each week to keep meals interesting.",
  "Practice gratitude daily to improve mental wellbeing.",
  "Stay socially connected with friends and family for emotional health.",
  "Include probiotic-rich foods like yogurt or fermented vegetables in your diet.",
  "Protect your skin by wearing sunscreen daily, even on cloudy days.",
  "Practice portion control by using smaller plates and bowls.",
  "Take regular breaks from sitting by standing or walking for a few minutes each hour.",
  "Try herbal teas instead of sugary drinks for hydration.",
  "Schedule regular health check-ups and screenings.",
  "Focus on progress, not perfection, in your health journey."
];

// Function to get a daily tip based on the date
function getDailyTip() {
  // Get today's date
  const today = new Date();
  // Use the day of the month to select a tip (0-30)
  const dayOfMonth = today.getDate();
  // Use modulo to ensure we don't go beyond the array length
  const tipIndex = dayOfMonth % healthTips.length;
  
  return healthTips[tipIndex];
}

// Function to get a random tip (for refresh button)
function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * healthTips.length);
  return healthTips[randomIndex];
}

// Function to display the health tip
function displayHealthTip() {
  const tipElement = document.getElementById('health-tip');
  if (tipElement) {
    const dailyTip = getDailyTip();
    
    // Add fade-out effect
    tipElement.style.opacity = 0;
    
    setTimeout(() => {
      tipElement.textContent = dailyTip;
      
      // Add fade-in effect
      tipElement.style.opacity = 1;
    }, 300);
  }
}

// Function to display a random tip
function displayRandomTip() {
  const tipElement = document.getElementById('health-tip');
  if (tipElement) {
    const randomTip = getRandomTip();
    
    // Add fade-out effect
    tipElement.style.opacity = 0;
    
    setTimeout(() => {
      tipElement.textContent = randomTip;
      
      // Add fade-in effect
      tipElement.style.opacity = 1;
    }, 300);
  }
}

// Function to initialize the health tip section
function initHealthTip() {
  // Display the tip when the page loads
  displayHealthTip();
  
  // Add event listener to refresh button if it exists
  const refreshBtn = document.getElementById('refresh-tip');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', displayRandomTip);
  }
  
  // Update the tip at midnight (for if the page is left open)
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
      displayHealthTip();
    }
  }, 1000); // Check every second
}

// Star rating functionality
function initStarRating() {
  const stars = document.querySelectorAll('.star');
  let currentRating = 0;
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = parseInt(this.getAttribute('data-value'));
      currentRating = value;
      
      stars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));
        if (starValue <= value) {
          s.classList.add('active');
          s.textContent = '★';
        } else {
          s.classList.remove('active');
          s.textContent = '☆';
        }
      });
    });
    
    star.addEventListener('mouseover', function() {
      const value = parseInt(this.getAttribute('data-value'));
      
      stars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));
        if (starValue <= value) {
          s.textContent = '★';
        } else {
          s.textContent = '☆';
        }
      });
    });
    
    star.addEventListener('mouseout', function() {
      stars.forEach(s => {
        const starValue = parseInt(s.getAttribute('data-value'));
        if (starValue > currentRating) {
          s.textContent = '☆';
        } else {
          s.textContent = '★';
        }
      });
    });
  });
  
  return currentRating;
}

// Form submission
function initFeedbackForm() {
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    let currentRating = 0;
    
    // Initialize star rating
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', function() {
        currentRating = parseInt(this.getAttribute('data-value'));
      });
    });
    
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const userName = document.getElementById('userName').value;
      const userFeedback = document.getElementById('userFeedback').value;
      
      if (!userName || !userFeedback || currentRating === 0) {
        alert('Please complete all fields before submitting.');
        return;
      }
      
      // In a real application, you would send this data to a server
      alert('Thank you for your feedback!');
      this.reset();
      
      // Reset stars
      stars.forEach(star => {
        star.classList.remove('active');
        star.textContent = '☆';
      });
      currentRating = 0;
    });
  }
}

// Newsletter subscription form
function initNewsletterForm() {
  const form = document.getElementById("subscribe-form");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for subscribing to GreenBite!");
      form.reset();
    });
  }
}

// Smooth scroll reveal
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => {
    observer.observe(el);
  });
}

// Consultation stats counter animation
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.consultation-stats');
  
  if (!statsSection) return;
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(stat => {
          const target = parseInt(stat.textContent);
          let count = 0;
          const duration = 2000; // 2 seconds
          const frameDuration = 1000 / 60; // 60 frames per second
          const totalFrames = Math.round(duration / frameDuration);
          const easeOutQuad = t => t * (2 - t);
          
          const counter = setInterval(() => {
            const progress = easeOutQuad(++count / totalFrames);
            const currentCount = Math.round(target * progress);
            
            if (parseInt(stat.textContent) !== target) {
              stat.textContent = currentCount + (stat.textContent.includes('%') ? '%' : '+');
            } else {
              clearInterval(counter);
            }
          }, frameDuration);
        });
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  observer.observe(statsSection);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initHealthTip();
  initStarRating();
  initFeedbackForm();
  initNewsletterForm();
  initScrollReveal();
  initStatsCounter();
});