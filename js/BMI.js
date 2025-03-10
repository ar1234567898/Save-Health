document.getElementById('btnBMI').addEventListener('click', function() {
    const bmiCalcWindow = document.querySelector('.BMICalcWindow');
    bmiCalcWindow.innerHTML = `
        <form id="bmiForm">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" name="weight" required>
            <label for="height">Height (cm):</label>
            <input type="number" id="height" name="height" required>
            <button type="submit">Calculate BMI</button>
        </form>
        <p id="bmiResult"></p>
    `;
    bmiCalcWindow.showModal();

    document.getElementById('bmiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
        const bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmiResult').innerHTML = `Your BMI is ${bmi}`;
    });
});