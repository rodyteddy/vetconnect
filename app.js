// Fake vet data
const vets = [
    { name: "Dr. Lara Haddad", specialty: "General Care" },
    { name: "Dr. Mark Youssef", specialty: "Surgery" },
    { name: "Dr. Rania Kamel", specialty: "Dermatology" }
];

// Render vet list
if (document.getElementById("vets-list")) {
    let html = "";
    vets.forEach(v => {
        html += `
            <div class="card">
                <h3>${v.name}</h3>
                <p>${v.specialty}</p>
            </div>
        `;
    });
    document.getElementById("vets-list").innerHTML = html;
}

// Fake login
function login() {
    window.location.href = "index.html";
}

// Fake appointments
if (document.getElementById("appointments")) {
    document.getElementById("appointments").innerHTML = `
        <li>Appointment with Dr. Lara (Dec 10)</li>
        <li>Vaccination with Dr. Mark (Dec 22)</li>
    `;
}
