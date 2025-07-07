// Check if connection is slow
function isSlowConnection() {
  // Always return true to force skeleton loader to show
  return true;
}

// Show skeleton loader
function showSkeleton() {
  const template = document.getElementById('skeleton-template');
  if (template) {
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
    document.body.classList.add('loading');
  }
}

// Hide skeleton loader
function hideSkeleton() {
  const skeleton = document.getElementById('full-page-skeleton-overlay');
  if (skeleton) {
    skeleton.remove();
    document.body.classList.remove('loading');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('real-content');
  
  // Force show skeleton loader
  showSkeleton();
  
  // Show real content after 3 seconds
  setTimeout(function() {
    if (content) {
      content.style.display = 'block';
    }
    hideSkeleton();
  }, 3000);
});