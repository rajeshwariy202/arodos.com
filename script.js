// const emailBtn = document.querySelector("#emailBtn")

/**   
 * Sends an email using the external email service API
 * 
 * @async
 * @function sendEmail
 * @param {Object} props - The email configuration object
 * @param {{name: string, email: string}[]} props.sendTo - Array of recipient objects with name and email
 * @param {string} props.subject - The email subject line
 * @param {string} props.htmlPart - The HTML content of the email
 * @returns {Promise<any>} The response data from the email service API
 *
 * @example
 * const result = await sendEmail({
 *   sendTo: [{name: "John Doe", email: "user@example.com"}],
 *   subject: "Welcome!",
 *   htmlPart: "<h1>Hello World</h1>"
 * });
 */
async function sendEmail(props) {
	const { sendTo, subject, htmlpart } = props;
	const body = {
		from: {
			name: "Arodos",
			email: "noreply@arodos.com",
		},
		to: sendTo,
		subject: subject,
		htmlpart: htmlpart,
	};

	try {
		const res = await fetch("https://send-email-api-v2.backendservices.in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			console.log(`HTTP error! status: ${res.status}`);
			return null;
		}

		const data = await res.json();
		return { data };
	} catch (error) {
		console.log("Could not send email");
		return null;
	}
}

/**
 * Generates an HTML email template for contact form submissions.
 *
 * Creates a professionally styled email template with a red gradient header,
 * contact information section, and message content area. The template includes
 * responsive design elements and modern styling with shadows, gradients, and
 * rounded corners.
 *
 * @param {string} name - The full name of the person submitting the contact form
 * @param {string} email - The email address of the person submitting the form
 * @param {string} message - The message content from the contact form
 * @returns {string} Complete HTML email template as a string with inline CSS styling
 *
 * @example
 * const emailHTML = formSubmitTemplate(
 *   "John Doe",
 *   "john.doe@example.com",
 *   "Hello, I'm interested in your services."
 * );
 */
const formSubmitTemplate = (name, email, message) => {
	return `
    <div style="
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            max-width: 1080px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
            overflow: hidden;
            border: 2px solid #f0f0f0;
        ">
	<!-- Header -->
	<header style="
            background: linear-gradient(135deg, #FF0000 0%, #bf0000 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            ">
		<div style="
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                width: 80px;
                height: 80px;
                margin: 0 auto 20px auto;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
            ">
			📧
		</div>
		<h1 style="
                color: #ffffff;
                font-size: 32px;
                font-weight: 600;
                margin: 0 0 10px 0;
                letter-spacing: -0.5px;
            ">
			New Contact Message
		</h1>
		<p style="
                color: rgba(255, 255, 255, 0.9);
                font-size: 18px;
                margin: 0;
                font-weight: 300;
            ">
			You have received a new message from your website
		</p>
	</header>

	<!-- Main Content -->
	<div style="padding: 45px 35px;">
		<!-- Message Details Card -->
		<div style="
                background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
                border: 2px solid #e6e8ff;
                border-radius: 18px;
                padding: 35px;
                margin-bottom: 30px;
            ">
			<h2 style="
                    color: #4c51bf;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 0 0 25px 0;
                    border-bottom: 2px solid #e6e8ff;
                    padding-bottom: 10px;
                ">
				Contact Information
			</h2>

			<div style="margin-bottom: 20px;">
				<label style="
                        display: block;
                        font-size: 14px;
                        font-weight: 600;
                        color: #6b7280;
                        margin-bottom: 8px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    ">
                        Full Name
                    </label>
				<p style="
                        font-size: 18px;
                        color: #1f2937;
                        margin: 0;
                        padding: 12px 16px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        border: 1px solid #d1d5db;
                        font-weight: 500;
                    ">
					${name}
				</p>
			</div>

			<div style="margin-bottom: 20px;">
				<label style="
                        display: block;
                        font-size: 14px;
                        font-weight: 600;
                        color: #6b7280;
                        margin-bottom: 8px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    ">
                        Email Address
                    </label>
				<p style="
                        font-size: 18px;
                        color: #1f2937;
                        margin: 0;
                        padding: 12px 16px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        border: 1px solid #d1d5db;
                        font-weight: 500;
                    ">
					<a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
				</p>
			</div>
		</div>

		<!-- Message Content -->
		<div style="
                background: linear-gradient(135deg, #ffeded 0%, #ffeded 100%);
                border: 2px solid #FF0000;
                border-radius: 18px;
                padding: 35px;
                margin-bottom: 30px;
            ">
			<h3 style="
                    color: #92400e;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
				💬 Message Content
			</h3>
			<div style="
                    background-color: #ffffff;
                    border-radius: 12px;
                    padding: 25px;
                    border: 1px solid #fed7aa;
                    min-height: 120px;
                ">
				<p style="
                        font-size: 16px;
                        color: #374151;
                        margin: 0;
                        line-height: 1.7;
                    ">
                    ${message}
				</p>
			</div>
		</div>
	</div>
</div>
    `;
};

// Example usage
/*
const emailHTML = formSubmitTemplate(
  "John Doe",
  "john.doe@example.com",
  "Hello, I'm interested in your services."
);

sendEmail({
  sendTo: [{ name: "John Doe", email: "john.doe@example.com" }],
  subject: "New Message from Contact Form",
  html: emailHTML
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Create HTML template
    const htmlContent = formSubmitTemplate(name, email, message);

    const res = await sendEmail({
      sendTo: [{ name:"Rajeshwari", email: "rajeshwariy202@gmail.com" },{ name:"Sazzadur", email: "ssasazzadur000@gmail.com" }, {name:"Abhijith",email:"abhijit.barman8@gmail.com"}], // ✅ Your target email here
      subject: "New Message from Website Contact Form",
      htmlpart: htmlContent,
    });

    

    if (res && res.data) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
  });
});

// header mobile functionality 

  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });



//  slow internet 


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired.');

    // Ensure these elements exist in your HTML
    const fullPageSkeletonOverlay = document.getElementById('full-page-skeleton-overlay');
    const actualPageContent = document.getElementById('actual-page-content');

    let loaderTimeoutId;
    let contentLoaded = false; // Flag to check if content is ready

    // Function to reveal the actual page content and hide the skeleton
    function showActualContent() {
        if (contentLoaded) { // Prevent multiple calls
            console.log('showActualContent() called. Revealing actual content.');
            if (actualPageContent) {
                // Hide the overlay with a fade-out effect
                if (fullPageSkeletonOverlay && fullPageSkeletonOverlay.style.display !== 'none') {
                    fullPageSkeletonOverlay.classList.add('fade-out');
                    fullPageSkeletonOverlay.addEventListener('transitionend', function handler() {
                        fullPageSkeletonOverlay.style.display = 'none'; // Fully hide after transition
                        console.log('Loader faded out and hidden.');
                        fullPageSkeletonOverlay.removeEventListener('transitionend', handler);
                    }, { once: true });
                } else {
                    console.log('Loader already hidden or not found.');
                }

                // Reveal actual content with a fade-in effect
                requestAnimationFrame(() => {
                    actualPageContent.style.display = 'block'; // Make content visible
                    requestAnimationFrame(() => {
                        actualPageContent.style.opacity = '1'; // Trigger fade-in
                        console.log('Actual content made visible.');
                    });
                });
            } else {
                console.error("Error: '#actual-page-content' element not found. Cannot show content.");
            }
        }
    }

    // Loader display settings
    const MIN_LOADER_DISPLAY_TIME = 1000; // Minimum time loader stays visible if it appears
    const LOADER_APPEAR_DELAY = 200;    // Delay before loader appears (acts as "slow internet" threshold)

    // Initial setup for the skeleton overlay
    if (fullPageSkeletonOverlay) {
        // Start hidden and set up transition for smoother appearance/disappearance
        fullPageSkeletonOverlay.style.opacity = '0';
        fullPageSkeletonOverlay.style.visibility = 'hidden';
        fullPageSkeletonOverlay.style.transition = 'opacity 0.5s ease-out, visibility 0s linear 0.5s';
        console.log('Loader initialized to hidden state.');
    } else {
        console.warn("Full page skeleton overlay element not found. Loader functionality disabled.");
        // If no overlay, assume content can be shown immediately
        contentLoaded = true;
        showActualContent();
        return; // Exit script if no loader to manage
    }

    // Set a timer to show the loader if content isn't loaded quickly
    loaderTimeoutId = setTimeout(() => {
        if (!contentLoaded && fullPageSkeletonOverlay) {
            fullPageSkeletonOverlay.style.visibility = 'visible'; // Make visible
            fullPageSkeletonOverlay.style.opacity = '1'; // Trigger fade-in
            console.log(`Loader visible after ${LOADER_APPEAR_DELAY}ms delay (content not ready).`);
        } else {
            console.log('Loader not shown by delay: content already loaded or loader element not found.');
        }
    }, LOADER_APPEAR_DELAY);

    // This function is called when all critical page content is truly loaded.
    function allContentReady() {
        if (contentLoaded) { // Prevent duplicate calls
            console.log('allContentReady() called again, ignoring.');
            return;
        }
        contentLoaded = true; // Mark content as ready
        console.log('allContentReady() called. Content flagged as ready.');

        // Clear the initial loader timeout if it hasn't fired yet
        clearTimeout(loaderTimeoutId);
        console.log('Loader timeout cleared.');

        // If the loader was visible, ensure it stays for a minimum time before hiding
        if (fullPageSkeletonOverlay && fullPageSkeletonOverlay.style.opacity === '1') {
            console.log(`Loader was visible. Waiting MIN_LOADER_DISPLAY_TIME (${MIN_LOADER_DISPLAY_TIME}ms) before hiding.`);
            setTimeout(() => {
                showActualContent();
            }, MIN_LOADER_DISPLAY_TIME);
        } else {
            // If the loader never became visible (because content loaded fast),
            // just show the actual content immediately.
            console.log('Loader was not visible. Showing content immediately.');
            showActualContent();
        }
    }

    // --- Robust Loading Check ---
    // Track the total number of critical resources and how many have loaded
    let totalResourcesToLoad = 0;
    let loadedResourcesCount = 0;

    function checkAllResourcesLoaded() {
        console.log(`[checkAllResourcesLoaded] Current State: Loaded ${loadedResourcesCount} of ${totalResourcesToLoad}`);

        if (!contentLoaded) { // Only proceed if content isn't already marked as loaded
            if (totalResourcesToLoad > 0 && loadedResourcesCount >= totalResourcesToLoad) {
                console.log('All designated resources loaded. Triggering allContentReady.');
                allContentReady();
            } else if (totalResourcesToLoad === 0) {
                // This handles cases where no specific resources are tracked (e.g., a very simple page
                // with no images/fonts/APIs that aren't already part of the initial HTML DOMContentLoaded)
                // or if all images/fonts were already complete (cached) before listeners were fully set up.
                console.log('No specific resources to track or all were already complete. Triggering allContentReady.');
                allContentReady();
            }
        }
    }

    // A. Monitor Images within the actual page content
    const images = actualPageContent.querySelectorAll('img');
    console.log(`Found ${images.length} <img> tags in #actual-page-content.`);

    images.forEach(img => {
        totalResourcesToLoad++; // Increment total count for every image found
        if (img.complete && img.naturalWidth !== 0) { // Check if image is already loaded (e.g., from cache)
            loadedResourcesCount++;
            console.log(`Image already complete: ${img.src}. Loaded count: ${loadedResourcesCount}/${totalResourcesToLoad}`);
        } else {
            // Add event listeners for images that are not yet complete
            img.addEventListener('load', () => {
                loadedResourcesCount++;
                console.log(`Image loaded: ${img.src}. Loaded count: ${loadedResourcesCount}/${totalResourcesToLoad}`);
                checkAllResourcesLoaded();
            }, { once: true });
            img.addEventListener('error', () => {
                console.warn(`Error loading image: ${img.src}. Proceeding anyway.`);
                loadedResourcesCount++; // Count even on error to prevent hanging loader
                checkAllResourcesLoaded();
            }, { once: true });
            console.log(`Tracking image: ${img.src}`);
        }
    });

    // B. Monitor Font Loading (requires FontFaceObserver library)
    // To use this, you need to include the FontFaceObserver library in your HTML:
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/fontfaceobserver/2.3.0/fontfaceobserver.standalone.js"></script>
    if (typeof FontFaceObserver !== 'undefined') {
        console.log('FontFaceObserver found. Tracking font loading...');
        // Replace 'Mona Sans Expanded' and '800' with your actual custom font family and weight
        const fontMonaSans = new FontFaceObserver('Mona Sans Expanded', { weight: 800 });
        totalResourcesToLoad++;
        fontMonaSans.load().then(() => {
            loadedResourcesCount++;
            console.log('Font "Mona Sans Expanded" loaded.');
            checkAllResourcesLoaded();
        }).catch(() => {
            console.warn('Font "Mona Sans Expanded" loading failed, but proceeding anyway.');
            loadedResourcesCount++;
            checkAllResourcesLoaded();
        });
    } else {
        console.log("FontFaceObserver not found. Font loading won't be tracked unless manually implemented.");
    }

    // C. Monitor API calls (uncomment and adapt for your specific needs)
    /*
    totalResourcesToLoad++; // Increment for each critical API call
    fetch('/api/your-critical-data')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok.');
            return response.json();
        })
        .then(data => {
            // Process your data here
            loadedResourcesCount++;
            console.log('API data loaded.');
            checkAllResourcesLoaded();
        })
        .catch(error => {
            console.error("API call failed:", error);
            loadedResourcesCount++; // Still count as 'attempted' to load to prevent loader from hanging
            checkAllResourcesLoaded();
        });
    */

    // Initial check: Call checkAllResourcesLoaded after all potential resources have been counted.
    // This is crucial for pages where resources (especially cached images) might already be complete
    // by the time the DOMContentLoaded fires, ensuring the loader doesn't hang.
    console.log(`Initial resource count after setup: ${loadedResourcesCount}/${totalResourcesToLoad}`);
    checkAllResourcesLoaded();


    // --- Mobile Menu Toggle (from your original script) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuButton && mobileMenu && hamburgerIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    } else {
        console.warn("Mobile menu elements not found. Mobile menu toggle functionality disabled.");
    }
});