// Select necessary elements
const platformContent = document.querySelector('.platform');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

const indicators = {
    ind1: document.querySelector('.ind1'),
    ind2: document.querySelector('.ind2'),
    ind3: document.querySelector('.ind3')
};

const contentData = [
    {
        title: "Front-End Development",
        content: "A front-end developer focuses on the visual aspects of a website or web application that users interact with directly. They use languages such as HTML, CSS, and JavaScript to create layouts, design user interfaces, and ensure responsiveness across different devices and screen sizes. Their goal is to deliver a seamless and engaging user experience, making sure that the website looks appealing and functions smoothly from the user's perspective."
    },
    {
        title: "Back-End Development",
        content: "A back-end developer handles the server-side of web development, dealing with the logic, databases, and server interactions that power the functionality of a website. They work with server-side languages like Python, Ruby, Java, or PHP, and manage data storage, user authentication, and application performance. Their focus is on creating a robust and efficient infrastructure that supports the front-end and ensures the website or application operates correctly and securely."
    },
    {
        title: "Full-Stack Development",
        content: "A full-stack developer possesses expertise in both front-end and back-end development, making them capable of handling all aspects of web development projects. They have a comprehensive understanding of how both the user interface and server-side systems work together, allowing them to build complete, end-to-end solutions. Full-stack developers are versatile and can manage the entire development process, from designing the user experience to implementing server-side logic and database management."
    }
];

let currentIndex = 0;

// Function to update the content and indicators
function updateContent(index) {
    platformContent.querySelector('h3').textContent = contentData[index].title;
    platformContent.querySelector('p').textContent = contentData[index].content;

    // Update indicator styles
    Object.keys(indicators).forEach((key, i) => {
        const ind = indicators[key];
        if (i === index) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active');
        }
    });
}

// Event listeners for buttons
btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contentData.length;
    updateContent(currentIndex);
});

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
    updateContent(currentIndex);
});

// Event listeners for indicators
Object.entries(indicators).forEach(([key, ind], i) => {
    ind.addEventListener('click', () => {
        currentIndex = i;
        updateContent(currentIndex);
    });
});

// Initial content load
updateContent(currentIndex);

// Select necessary elements
const secondPage = document.querySelector('#secondpage');
const secContButtons = document.querySelectorAll('.seccont button');

// Add click event listener to each button
secContButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Toggle the .more-info section within the clicked button
        const moreInfo = button.querySelector('.more-info');
        const liElements = button.querySelectorAll('li');
        const pElements = button.querySelectorAll('p:not(.more-info p)'); // Select all <p> except those inside .more-info
        const iPlusIcon = button.querySelector('i.fa-plus');

        // Check if .more-info is already visible (button is expanded)
        if (button.classList.contains('expanded')) {
            // Collapse: Hide the .more-info section and its children
            moreInfo.style.display = 'none';

            // Show li, p, and i.fa-plus elements again
            liElements.forEach(el => el.style.display = 'block');
            pElements.forEach(el => el.style.display = 'block');
            if (iPlusIcon) iPlusIcon.style.display = 'block';

            // Reset the button's state to its original
            button.classList.remove('expanded');

            // Show all other buttons
            secContButtons.forEach(btn => btn.style.display = 'block');
        } else {
            // Expand: Hide all .more-info sections and reset buttons
            document.querySelectorAll('.more-info').forEach(info => info.style.display = 'none');
            secContButtons.forEach(btn => {
                btn.classList.remove('expanded');
                btn.style.display = 'block';
            });

            // Hide other buttons except the clicked one
            secContButtons.forEach(btn => {
                if (btn !== button) {
                    btn.style.display = 'none';
                }
            });

            // Show the .more-info section
            moreInfo.style.display = 'block';

            // Hide li, p, and i.fa-plus elements
            liElements.forEach(el => el.style.display = 'none');
            pElements.forEach(el => el.style.display = 'none');
            if (iPlusIcon) iPlusIcon.style.display = 'none';

            // Mark the button as expanded
            button.classList.add('expanded');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior

            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust this value to offset the scroll position if necessary
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });
});
