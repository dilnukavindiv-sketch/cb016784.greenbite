// Contact form functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Validate required fields
  if (!name || !email || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Create contact object
  const contactData = {
    name,
    email,
    phone: phone || 'Not provided',
    subject,
    message,
    submittedAt: new Date().toISOString()
  };
  
  // Save to localStorage
  let contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  contacts.push(contactData);
  localStorage.setItem('contactSubmissions', JSON.stringify(contacts));
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  this.reset();
});

// Newsletter form functionality
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('newsletterName').value;
  const email = document.getElementById('newsletterEmail').value;
  
  // Get selected preferences
  const selectedPreferences = [];
  document.querySelectorAll('input[name="preferences"]:checked').forEach(checkbox => {
    selectedPreferences.push(checkbox.value);
  });
  
  // Validate form
  if (!name || !email) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Save to localStorage
  const subscriberData = {
    name: name,
    email: email,
    preferences: selectedPreferences,
    subscribedAt: new Date().toISOString()
  };
  
  // Get existing subscribers or initialize empty array
  let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
  
  // Check if email already exists
  const existingSubscriberIndex = subscribers.findIndex(sub => sub.email === email);
  if (existingSubscriberIndex !== -1) {
    // Update existing subscriber
    subscribers[existingSubscriberIndex] = subscriberData;
  } else {
    // Add new subscriber
    subscribers.push(subscriberData);
  }
  
  // Save back to localStorage
  localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
  
  // Show success message
  document.getElementById('newsletterForm').style.display = 'none';
  document.getElementById('newsletterSuccess').style.display = 'block';
  
  // Reset form
  this.reset();
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Any initialization code can go here
  console.log('Contact page loaded successfully');
});