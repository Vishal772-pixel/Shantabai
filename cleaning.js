// Toggle the display of the part-time hours input based on the selected work time
document.getElementById('part-time').addEventListener('change', function() {
    document.getElementById('part-time-hours').style.display = this.checked ? 'block' : 'none';
});

// Proceed to the next page on button click
document.getElementById('proceed-btn').addEventListener('click', function() {
    const workTime = document.querySelector('input[name="work-time"]:checked');
    const hours = document.getElementById('hours').value;
    const workType = document.getElementById('work-type').value;
    const genderPreference = document.getElementById('gender-preference').value;

    if (!workTime || (workTime.value === 'part-time' && !hours)) {
        alert('Please fill in all required fields.');
        return;
    }

    // Redirect to the next page (for example, a confirmation page or the next form)
    window.location.href = 'next_page.html';  // Change this to your next page URL
});