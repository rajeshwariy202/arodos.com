// Check if connection is slow
function isSlowConnection() {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  // Check Network Information API if available
  if (conn) {
    // Consider slow if using 2G or slow-2G
    if (['slow-2g', '2g'].includes(conn.effectiveType)) {
      return true;
    }
    
    // Consider slow if downlink is less than 0.5 Mbps
    if (conn.downlink < 0.5) {
      return true;
    }
  }
  
  return false;
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
  
  // Check if connection is slow
  if (isSlowConnection()) {
    // Show skeleton for slow connections
    showSkeleton();
    
    // Show real content when page is loaded
    window.addEventListener('load', function() {
      if (content) {
        content.style.display = 'block';
      }
      hideSkeleton();
    });
    
    // Fallback if load event doesn't fire
    setTimeout(function() {
      if (content && content.style.display !== 'block') {
        content.style.display = 'block';
        hideSkeleton();
      }
    }, 8000);
  } else {
    // For fast connections, show content immediately
    if (content) {
      content.style.display = 'block';
    }
  }
});