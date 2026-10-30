document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // ENQUIRY FORM (enquiry.html only)
    // =========================================
    const enquiryForm = document.querySelector(".enquiry-form form") || 
                         document.querySelector("main form#enquiry-form");

    // Fallback: if your enquiry form has no wrapping class, select it by checking
    // for a field unique to it, like "vehicle"
    const vehicleField = document.getElementById("vehicle");

    if (vehicleField) {
        const form = vehicleField.closest("form");

        const responseBox = document.createElement("div");
        responseBox.id = "enquiry-response";
        form.insertAdjacentElement("afterend", responseBox);

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            responseBox.innerHTML = "";
            let errors = [];

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;

            if (name === "") {
                errors.push("Please enter your full name.");
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errors.push("Please enter a valid email address.");
            }

            const phoneDigitsOnly = phone.replace(/\D/g, "");
            if (phoneDigitsOnly.length < 10) {
                errors.push("Please enter a valid phone number (at least 10 digits).");
            }

            if (errors.length > 0) {
                let errorHTML = "<ul class='error-list'>";
                errors.forEach(function (error) {
                    errorHTML += "<li>" + error + "</li>";
                });
                errorHTML += "</ul>";
                responseBox.innerHTML = errorHTML;
                responseBox.className = "form-message error";
                return;
            }

            let responseMessage = "";
            if (service === "panel-beating") {
                responseMessage = "Thanks " + name + "! Panel beating quotes typically range from R1500–R6000 depending on damage. We'll contact you within 24 hours to confirm availability.";
            } else if (service === "engine-repair") {
                responseMessage = "Thanks " + name + "! Engine repair costs vary widely based on the issue. We'll call you to discuss and confirm a quote.";
            } else if (service === "servicing") {
                responseMessage = "Thanks " + name + "! General servicing starts from R850. We currently have availability this week — we'll confirm a slot with you.";
            } else {
                responseMessage = "Thanks " + name + "! We've received your enquiry and will get back to you shortly with more details.";
            }

            responseBox.innerHTML = "<p>" + responseMessage + "</p>";
            responseBox.className = "form-message success";
            form.reset();
        });
    }

    // =========================================
    // CONTACT FORM (contact.html only)
    // =========================================
    const cNameField = document.getElementById("c-name");

    if (cNameField) {
        const form = cNameField.closest("form");

        const responseBox = document.createElement("div");
        responseBox.id = "contact-response";
        form.insertAdjacentElement("afterend", responseBox);

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            responseBox.innerHTML = "";
            let errors = [];

            const name = document.getElementById("c-name").value.trim();
            const email = document.getElementById("c-email").value.trim();
            const message = document.getElementById("c-message").value.trim();

            if (name === "") {
                errors.push("Please enter your name.");
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errors.push("Please enter a valid email address.");
            }

            if (message === "") {
                errors.push("Please enter a message.");
            } else if (message.length < 10) {
                errors.push("Your message should be at least 10 characters long.");
            }

            if (errors.length > 0) {
                let errorHTML = "<ul class='error-list'>";
                errors.forEach(function (error) {
                    errorHTML += "<li>" + error + "</li>";
                });
                errorHTML += "</ul>";
                responseBox.innerHTML = errorHTML;
                responseBox.className = "form-message error";
                return;
            }

            const recipient = "sithole.carrepair@gmail.com"; // replace with the real business email
            const subject = encodeURIComponent("Website Enquiry from " + name);
            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message
            );
            const mailtoLink = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;

            responseBox.innerHTML =
                "<p>Thanks " + name + ", your message has been validated. " +
                "<a href='" + mailtoLink + "' class='cta-button'>Click here to send your email</a></p>";
            responseBox.className = "form-message success";
            form.reset();
        });
    }

});

    // =========================================
    // MOBILE NAV TOGGLE (all pages)
    // =========================================
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("nav-open");
        });
    }

        // =========================================
    // DYNAMIC SERVICES + SEARCH/FILTER (services.html only)
    // =========================================
    const servicesList = document.getElementById("services-list");

    if (servicesList) {

        // The services data. Add or edit items here and the page updates itself.
        const services = [
            { name: "Panel Beating", description: "Repairing dents, bent panels, and bodywork damage from accidents or general wear.", category: "Bodywork" },
            { name: "Accident Damage Repair", description: "Restoring badly wrecked vehicles after serious collisions.", category: "Bodywork" },
            { name: "Engine Repairs", description: "Diagnosing and fixing engine problems to keep your vehicle reliable and roadworthy.", category: "Mechanical" },
            { name: "Brake Repairs", description: "Checking and replacing worn brake pads, discs and brake fluid.", category: "Mechanical" },
            { name: "General Servicing", description: "Routine maintenance including oil changes, brake checks, and overall vehicle inspections.", category: "Maintenance" }
        ];

        const searchBox = document.getElementById("service-search");
        const categorySelect = document.getElementById("service-category");
        const sortSelect = document.getElementById("service-sort");

        // This function filters, sorts and then draws the services on the page
        function showServices() {
            const searchText = searchBox.value.toLowerCase().trim();
            const category = categorySelect.value;
            const sortOption = sortSelect.value;

            // 1. Filter by search text and category
            const results = services.filter(function (service) {
                const matchesSearch =
                    service.name.toLowerCase().includes(searchText) ||
                    service.description.toLowerCase().includes(searchText);
                const matchesCategory = (category === "all" || service.category === category);
                return matchesSearch && matchesCategory;
            });

            // 2. Sort the results
            if (sortOption === "az") {
                results.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
            } else if (sortOption === "za") {
                results.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                });
            }

            // 3. Clear the old list
            servicesList.innerHTML = "";

            // 4. Show a message if nothing matched
            if (results.length === 0) {
                servicesList.innerHTML = "<p class='no-results'>No services found. Try a different search.</p>";
                return;
            }

            // 5. Create a card for each service
            results.forEach(function (service) {
                const card = document.createElement("article");
                card.className = "service";
                card.innerHTML =
                    "<h3>" + service.name + "</h3>" +
                    "<p>" + service.description + "</p>" +
                    "<p class='service-category'>Category: " + service.category + "</p>";
                servicesList.appendChild(card);
            });
        }

        // Update the list whenever the user types or changes a dropdown
        searchBox.addEventListener("input", showServices);
        categorySelect.addEventListener("change", showServices);
        sortSelect.addEventListener("change", showServices);

        // Show all services when the page first loads
        showServices();
    }