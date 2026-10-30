# Sithole's Car Repair Shop — Website Project

## Project Title
Sithole's Car Repair Shop Website (WEDE5020 POE)

## Student Information
- **Name:** Siphephelo
- **Institution:** Rosebank College (The IIE)
- **Module:** WEDE5020 — Web Development

## Project Overview
Sithole's Car Repair Shop is a family-run mechanic business based in Umlazi, Durban, established in 2018 by Mr Sithole and now supported by his two sons. The business has built strong community trust through word-of-mouth, particularly for repairing badly wrecked vehicles. This project develops a website to extend the shop's reach beyond word-of-mouth, giving the local community an easy way to view services, contact the business, and build trust with new customers online.

**Mission:** To provide the Umlazi community with reliable, affordable, high-quality vehicle repair services through honest, personal, family-run service.

**Vision:** To become the most trusted car repair shop in Umlazi and surrounding townships.

**Target Audience:** Local residents and working-class vehicle owners in Umlazi and surrounding townships, taxi/small business owners, and owners of damaged or older vehicles.

## Website Goals and Objectives
- Generate leads/enquiries via contact form and WhatsApp
- Increase visibility beyond word-of-mouth
- Provide clear information on services, hours, and location
- Build trust and credibility online through history, testimonials, and gallery content
- Support future growth (e.g. online bookings)

KPIs include: monthly visitors, contact form/WhatsApp click submissions, average time on site, bounce rate, and enquiry-to-booking conversion.

## Key Features and Functionality
- **Homepage** – hero section, brief intro, call-to-action
- **About Us** – history, mission/vision, team
- **Services** – panel beating, engine repairs, general servicing
- **Enquiry** – form for service/quote requests
- **Contact** – address, phone, WhatsApp link, map, contact form
- Mobile-first, responsive design (HTML5, CSS3, JavaScript, optionally Bootstrap)
- WhatsApp click-to-chat integration throughout


## Timeline and Milestones
| Part | Deliverable | Due Date |
|---|---|---|
| Part 1 | Proposal & HTML | 14 August 2026 |
| Part 2 | CSS Styling | 18 September 2026 |
| Part 3 | JavaScript Functionality | 02 November 2026 |

## Part 1 Details
Part 1 covers the project proposal (organisation overview, goals, design/UX, technical requirements, budget) and the static HTML structure for five pages: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`, using semantic HTML5 tags (header, nav, main, footer) with placeholder content ready for CSS styling in Part 2.

## Sitemap

├── CSS
|   └── Style.css
├── Git
├── Images/
|   └── Screenshot 2026-08-14 163050.png
├── Home.html
├── about.html
├── contact.html
├── services.html
├── enquiry.html
└── README.md

## Part 2 Details
Part 2 focused on CSS styling and responsive design:
- Created a single external stylesheet, `style.css`, linked to all five HTML pages
- Applied a base style/reset and set default typography, colours, and spacing
- Styled the header, navigation, and footer consistently across all pages
- Styled page-specific sections: hero and services preview (Home), history/mission-vision/team (About), service cards (Services), form styling shared across Enquiry and Contact, plus map and contact details (Contact)
- Applied a flexbox/grid layout for the services grid and team member cards
- Added responsive breakpoints at 768px (tablet) and 480px (mobile), switching multi-column layouts to single-column on smaller screens
- Tested the site across desktop, tablet, and mobile screen sizes using browser developer tools (screenshots included below)


## Screenshot Evidence (Responsive Testing)
<img width="1200" height="800" alt="home desktop" src="https://github.com/user-attachments/assets/59d1e248-7fed-4edb-ab98-a89c15f0a51f" />
<img width="375" height="800" alt="home-mobile" src="https://github.com/user-attachments/assets/211836ba-8782-4499-a575-b5f747dbd77f" />
<img width="768" height="800" alt="home-tablet" src="https://github.com/user-attachments/assets/3a7fa77a-8d7f-4cac-b47c-0067b737ac08" />
<img width="1200" height="800" alt="contact-desktop" src="https://github.com/user-attachments/assets/4b59b8e4-5d1b-4fbd-bc88-84ceb8a5a942" />
<img width="375" height="800" alt="contact-mobile" src="https://github.com/user-attachments/assets/7449ddcf-b111-4a82-b2db-2124a06af675" />
<img width="768" height="800" alt="contact-tablet" src="https://github.com/user-attachments/assets/29c1d1f1-4fd3-44b2-bc68-170373272dd6" />

## Live Website
https://sitholes-car-repair-umlazi.netlify.app

## Part 3 Details
Part 3 focused on JavaScript functionality, SEO and deployment:
- **Form validation (enquiry.html):** JavaScript checks the name, email and phone number before submission, shows error messages, and displays a response about cost and availability based on the service chosen.
- **Form validation (contact.html):** JavaScript validates name, email and message, then compiles the details into a mailto email the user can send to the business.
- **HTML5 validation:** required, minlength and pattern attributes added as a backup to the JavaScript checks.
- **Mobile navigation toggle:** a hamburger menu built with JavaScript that shows and hides the menu on small screens.
- **Dynamic content and search/filter:** the services on services.html are generated from a JavaScript array, with a live search box, category filter and A-Z/Z-A sort using DOM manipulation.
- **SEO:** unique title tags, meta descriptions and keywords for each page (targeting Umlazi and Durban), descriptive alt text, a logical heading structure, robots.txt and sitemap.xml.
- **Deployment:** the site is hosted on Netlify. Netlify serves it over HTTPS, which supports the security requirement.
- **Off-page SEO (planned):** in a real launch, the shop would share the site on WhatsApp and Facebook and register on Google Business Profile.


## Changelog
- **13 August 2026:** Project initiated — proposal drafted (organisation overview, goals, design/UX, technical requirements, budget).
- **14 August 2026:** Created HTML structure for all five pages (index, about, services, enquiry, contact) with semantic tags and navigation.
- **[Insert date]:** Incorporated Part 1 feedback: *[describe any corrections made once feedback is received]*.
- **[Insert date]:** Created external stylesheet `style.css` and linked it to all five HTML pages (replacing the earlier separate per-page stylesheets).
- **[Insert date]:** Applied base style/reset, typography (Montserrat/Open Sans), and colour scheme (navy, orange, light-grey) across all pages.
- **[Insert date]:** Styled header, navigation, and footer consistently site-wide.
- **[Insert date]:** Styled page-specific sections: hero and services preview (Home), history/mission-vision/team (About), service cards (Services), form fields (Enquiry and Contact), and map/contact details (Contact).
- **[Insert date]:** Applied Flexbox/Grid layout to the services grid and team member cards.
- **[Insert date]:** Added responsive breakpoints at 768px (tablet) and 480px (mobile), switching multi-column layouts to single-column on smaller screens.
- **[Insert date]:** Tested website across desktop, tablet, and mobile screen sizes using browser developer tools; added screenshot evidence to README.


## References
Cöster, M., Iveroth, E., Bengtsson, F. and Aleryd, N. (2023) *Digital Transformation: A Business Perspective*. Lund: Studentlitteratur.

Laudon, K.C. and Laudon, J.P. (2020) *Management Information Systems: Managing the Digital Firm*. 16th edn. Harlow: Pearson Education.

LaunchLlama (2026) *Hosting and .co.za Domains in South Africa: 2026 Guide*. Available at: https://www.launchllama.co.za/blogs/hosting-domains-south-africa (Accessed: 13 August 2026).

Myers, M. (2023) *CompTIA A+ Core 1 and Core 2 All-in-One Exam Guide*. 6th edn. New York: McGraw Hill.

Stair, R.M. and Reynolds, G.W. (2018) *Principles of Information Systems*. 13th edn. Boston: Cengage Learning.

Truehost (2026) *Best Domain Registration in South Africa (2026): Prices, Providers & What Nobody Tells You*. Available at: https://truehost.co.za/best-domain-registration-in-south-africa/ (Accessed: 13 August 2026).

