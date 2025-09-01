function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const phone = form.phoneNumber.value;
    const email = form.email.value;
    const address = form.address.value;
    const education = form.education.value;
    const gender = form.gender.value;

    // Form validation for phone number and email
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Displaying the form data after successful validation
    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `
        <h3>Submitted Information:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Mother's Name:</strong> ${motherName}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email ID:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Image:</strong> <img src="${URL.createObjectURL(form.image.files[0])}" alt="Image" width="100"></p>
        <p><strong>Signature:</strong> <img src="${URL.createObjectURL(form.signature.files[0])}" alt="Signature" width="100"></p>
    `;
}
