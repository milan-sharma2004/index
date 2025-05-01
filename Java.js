const specializations = [
    {
        name: "General Medicine",
        staff: {
            name: "Dr. Aisha Rahman",
            image: "Picture1.jpg",
            qualification: "MBBS, MD"
        }
    },
    {
        name: "Gynaecology",
        staff: {
            name: "Dr. Sushanka Sapkota",
            image: "Picture2.jpg",
            qualification: "MBBS, MS (Gynae)"
        }
    },
    {
        name: "Radiology",
        staff: {
            name: "Dr. Adam Magheb",
            image: "Picture4.jpg",
            qualification: "MBBS, MD (Radiology)"
        }
    },
    {
        name: "Dermatology",
        staff: {
            name: "Dr. Rohit Sharma",
            image: "Picture5.jpg",
            qualification: "MBBS, MD (Dermatology)"
        }
    },
    {
        name: "Neurology",
        staff: {
            name: "Dr. Ronaldo Nazario",
            image: "Picture6.jpg",
            qualification: "MBBS, DM (Neurology)"
        }
    }
];

const grid = document.querySelector('.specializations-grid');
const staffDetails = document.getElementById('staff-details');

specializations.forEach(spec => {
    const div = document.createElement('div');
    div.className = 'specialization-item';
    div.innerText = spec.name;
    div.addEventListener('click', () => {
        staffDetails.innerHTML = `
            <h3>${spec.staff.name}</h3>
            <img src="${spec.staff.image}" alt="${spec.staff.name}" class="specialization-item img" />
            <p><strong>Department:</strong> ${spec.name}</p>
            <p><strong>Qualification:</strong> ${spec.staff.qualification}</p>
        `;
        staffDetails.classList.add('visible');
    });
    grid.appendChild(div);
});

document.getElementById("patient-type").addEventListener("change", function () {
    const roomOptions = document.getElementById("room-options");
    if (this.value === "IP") {
        roomOptions.classList.remove("hidden");
    } else {
        roomOptions.classList.add("hidden");
    }
});

document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const patientType = document.getElementById("patient-type").value;
    const roomType = document.getElementById("room")?.value;
    const days = parseInt(document.getElementById("days")?.value) || 1;

    let total = 0;

    if (patientType === "OP") {
        total = 200;
    } else if (patientType === "IP") {
        switch (roomType) {
            case "General":
                total = 50 * days;
                break;
            case "Private":
                total = 100 * days;
                break;
            case "ICU":
                total = 150 * days;
                break;
            default:
                total = 0;
        }
    }

    document.getElementById("payment-result").innerHTML = `
        <h3>Total Payable Amount: $${total}</h3>
    `;
});
