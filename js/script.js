// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Carbon Footprint Calculator
function calculateFootprint() {
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const transportation = parseFloat(document.getElementById('transportation').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;

    const totalEmissions = (electricity * 0.92) + (transportation * 2.31) + (waste * 0.45);
    
    document.getElementById('result').textContent = `Your estimated carbon footprint is ${totalEmissions.toFixed(2)} kg CO₂ per month.`;
}

// Load additional content dynamically (e.g., more features)
document.getElementById('loadMore').addEventListener('click', function() {
    const newContent = `
    <div class="feature">
        <h3>Energy Optimization</h3>
        <p>Optimize your energy consumption with personalized insights based on real-time data, helping you reduce your carbon footprint further.</p>
    </div>`;
    
    document.getElementById('features').insertAdjacentHTML('beforeend', newContent);
    this.style.display = 'none';  // Hide the button after loading content
});
