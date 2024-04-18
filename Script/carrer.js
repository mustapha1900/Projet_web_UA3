document.addEventListener("DOMContentLoaded", () => {
    // Logo mouseover effect
    const logo = document.querySelector(".logo");
    logo.addEventListener('mouseover', () => {
        logo.style.transform = "scale(1.2)";
        logo.style.backgroundColor = "grey";
        logo.style.borderRadius = "4px";
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = "scale(1)";
        logo.style.backgroundColor = "";
        logo.style.borderRadius = "";
    });

    // Form submission handling with validation
    const careerForm = document.querySelector('.application-form');
    careerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('tel').value;
        const position = document.getElementById('position').value;
        const website = document.getElementById('website').value;
        const salary = document.getElementById('salary').value;
        const joining = document.getElementById('joining').value;
        const relocation = document.querySelector('input[name="relocation"]:checked');
        const lastEmployer = document.getElementById('last-employer').value;
        const address = document.getElementById('address').value;

        if (firstName.trim() === '') {
            showNotification('Please enter your first name.');
            return;
        }

        if (lastName.trim() === '') {
            showNotification('Please enter your last name.');
            return;
        }

        if (email.trim() === '') {
            showNotification('Please enter your email.');
            return;
        }

        if (phone.trim() === '') {
            showNotification('Please enter your phone number.');
            return;
        }

        if (position.trim() === '') {
            showNotification('Please enter the position you are applying for.');
            return;
        }

        if (relocation === null) {
            showNotification('Please specify if you are willing to relocate.');
            return;
        }

        // Submit the form
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Position:', position);
        console.log('Website:', website);
        console.log('Salary:', salary);
        console.log('Joining:', joining);
        console.log('Relocation:', relocation.value);
        console.log('Last Employer:', lastEmployer);
        console.log('Address:', address);

        // Show confirmation message
        alert('Your application has been submitted successfully!');

        // Reset the form
        careerForm.reset();
    });

    // Function to show notification popup
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<span class="notification-icon">!</span>${message}`;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
});
