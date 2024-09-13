document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const address = document.getElementById('address').value;
    const matric = document.getElementById('matric').value;
    const intermediate = document.getElementById('intermediate').value;
    const degree = document.getElementById('degree').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const skill3 = document.getElementById('skill3').value;
    const experience = document.getElementById('experience').value;

    const resumeHTML = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Contact: ${contact}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>Address: ${address}</p>
        <h2>Education</h2>
        <p>Matriculation: ${matric}</p>
        <p>Intermediate: ${intermediate}</p>
        <p>Degree: ${degree}</p>
        <h2>Skills</h2>
        <p>${skill1}</p>
        <p>${skill2}</p>
        <p>${skill3}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
    `;

    document.getElementById('resume').innerHTML = resumeHTML;
    document.getElementById('resume').style.display = 'block';
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeContent = document.getElementById('resume').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
