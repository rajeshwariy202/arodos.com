// Add consistent margins to all containers
document.addEventListener('DOMContentLoaded', function() {
  // Add margins to all main containers
  const containers = document.querySelectorAll('.max-w-[1300px], .max-w-[1400px], .max-w-[1250px], .max-w-6xl, .max-w-[96rem]');
  
  containers.forEach(container => {
    // Add margin classes if they don't exist
    if (!container.classList.contains('mx-4') && !container.classList.contains('ml-4') && !container.classList.contains('mr-4')) {
      container.classList.add('mx-4');
      
      // Add sm:mx-auto for larger screens if it doesn't exist
      if (!container.classList.contains('sm:mx-auto')) {
        container.classList.add('sm:mx-auto');
      }
    }
  });
  
  // Specifically target the agile approach section to reduce left padding
  const agileSection = document.querySelector('section.py-10.sm\\:py-16.lg\\:py-24');
  if (agileSection) {
    // Find the inner container with the cards
    const innerContainer = agileSection.querySelector('.bg-\\[\\#F3F3F3\\]');
    if (innerContainer) {
      // Remove px-4 class
      innerContainer.classList.remove('px-4');
      // Add px-2 class
      innerContainer.classList.add('px-2');
    }
    
    // Also adjust the section padding
    agileSection.classList.remove('px-4');
    agileSection.classList.add('px-2');
  }
});