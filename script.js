let studentInfo = [
    {
        fullName:"Natalia Silvestre"
    },
    {
        course:"UX/UI Design Basics"
    },
    {
        jobType:"Full time"
    },
    {
        skill:"UI Design"
    },
    {
        location:"Aarhus"
    },
    {
        socialURL:"https://www.w3schools.com/"
    }
];

let selected = studentInfo[2]["jobType"];

let selectedJobType = studentInfo.filter(jobType => selected.includes(jobType.jobType));

console.log(selectedJobType); 

function handleGraduateClick(name, duration, topSkill) {
    alert(`Clicked on ${name}. Looking for: ${duration}. Top skill: ${topSkill}`);
}
// Sample data for demonstration
const alumniData = [
    { name: "Natalia Silvestre", category: "UX/UI Designer", duration: "Full time", location: "Berlin" },
    { name: "Maria Del Pilar Salerno", category: "UX/UI Designer", duration: "Part time", location: "Munich" },
    { name: "Eva Mozule", category: "Web Developer", duration: "Internship", location: "Hamburg" },
    // Add more alumni data as needed
];

// Function to filter alumni based on selected values
function filterAlumni() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const durationFilter = document.getElementById("durationFilter").value;
    const locationFilter = document.getElementById("locationFilter").value;

    const filteredAlumni = alumniData.filter(alumni => {
        return (
            (categoryFilter === "" || alumni.category === categoryFilter) &&
            (durationFilter === "" || alumni.duration === durationFilter) &&
            (locationFilter === "" || alumni.location === locationFilter)
        );
    });

    // Call a function to update the UI with the filtered alumni data
    updateUI(filteredAlumni);
}

// Function to update the UI with filtered alumni data
function updateUI(filteredAlumni) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = ""; // Clear existing content

    filteredAlumni.forEach(alumni => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        // Customize the HTML structure for each alumni card
        gridItem.innerHTML = `
            <div class="grid-item${alumni.category === 'Web Developer' ? '1' : ''}">
                <img src="${alumni.imageUrl}" alt="${alumni.name}" style="width: 100%" />
                <h4><b>${alumni.name}</b></h4>
                <p>Looking for: ${alumni.duration}</p>
                <p>Top skill: ${alumni.category}</p>
            </div>
        `;
        gridContainer.appendChild(gridItem);
    });
}

// Attach the filterAlumni function to the change event of each dropdown
// document.getElementById("categoryFilter").addEventListener("change", filterAlumni);
// document.getElementById("durationFilter").addEventListener("change", filterAlumni);
// document.getElementById("locationFilter").addEventListener("change", filterAlumni);

// Initial display of all alumni
// filterAlumni();

function handleGetStartedClick(event) {
    let category = document.getElementById("categoryFilter").value;
    let jobType = document.getElementById("durationFilter").value;
    let location = document.getElementById("locationFilter").value;

    let gridItems = document.getElementsByClassName("grid-item");
    let item1 = gridItems[0];
    let attribute = item1.getAttribute("data-location");

    if (location === attribute) {
        item1.style.display = "block";
    } else {
        item1.style.display = "none";
    }
    
}


// Install click handler on the Get Started button.
document.getElementById("getStartedBtn").addEventListener("click", handleGetStartedClick);

