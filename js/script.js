const mentorshipData = {

    academic: {
        number: "01",
        title: "Academic Guidance",
        text: "Support for students in academic learning, subject understanding and overall academic development.",
        points: [
            "Concept clarification",
            "Coursework guidance",
            "Academic planning",
            "Learning support"
        ]
    },

    research: {
        number: "02",
        title: "Research Mentorship",
        text: "Guidance for students interested in mathematical, artificial intelligence, data science and interdisciplinary research.",
        points: [
            "Research idea development",
            "Mathematical modelling",
            "AI & Data Science research",
            "Research methodology"
        ]
    },

    project: {
        number: "03",
        title: "Project Guidance",
        text: "Support for developing academic projects from initial ideas to experimentation and implementation.",
        points: [
            "Project idea development",
            "Implementation guidance",
            "Experimentation",
            "Innovation-oriented projects"
        ]
    },

    career: {
        number: "04",
        title: "Career & Skill Development",
        text: "Guidance to help students develop technical, research and professional skills for future opportunities.",
        points: [
            "Technical skill development",
            "Research skills",
            "Professional development",
            "Career-oriented guidance"
        ]
    }

};


function openMentorship(type) {

    const data = mentorshipData[type];

    document.getElementById("mentorship-modal-number").textContent =
        data.number;

    document.getElementById("mentorship-modal-title").textContent =
        data.title;

    document.getElementById("mentorship-modal-text").textContent =
        data.text;

    document.getElementById("mentorship-modal-points").innerHTML =
        data.points.map(point => `<div>✓ ${point}</div>`).join("");

    document.getElementById("mentorship-modal").classList.add("active");
}


function closeMentorship() {

    document.getElementById("mentorship-modal")
        .classList.remove("active");
}
/* ================================
   ALUMNI NETWORK
================================ */

function openAlumni(type) {

    const titles = {
        stories: "Alumni Stories",
        achievements: "Alumni Achievements",
        connect: "Stay Connected"
    };

    const content = {
        stories: `
            Experiences and journeys of former students
            who have continued to grow in academics,
            research and professional careers.
        `,

        achievements: `
            A space to highlight academic, research,
            professional and innovative achievements
            of alumni.
        `,

        connect: `
            Encouraging continued interaction between
            alumni, current students and the academic
            community.
        `
    };

    const points = {
        stories: [
            "Academic and professional journeys",
            "Learning experiences",
            "Research and career growth"
        ],

        achievements: [
            "Academic achievements",
            "Research contributions",
            "Professional accomplishments"
        ],

        connect: [
            "Alumni–student interaction",
            "Knowledge sharing",
            "Academic community connection"
        ]
    };

    const modal = document.getElementById("mentorship-modal");

    if (!modal) {
        alert("Alumni information will be available soon.");
        return;
    }

    document.getElementById("mentorship-modal-number").textContent = "09";
    document.getElementById("mentorship-modal-title").textContent = titles[type];
    document.getElementById("mentorship-modal-text").textContent = content[type];

    const pointsContainer =
        document.getElementById("mentorship-modal-points");

    pointsContainer.innerHTML = points[type]
        .map(point => `<p>✓ ${point}</p>`)
        .join("");

    modal.classList.add("active");
}

