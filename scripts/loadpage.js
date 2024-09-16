// loadpage.js
function loadPage(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = '<h2>Welcome to My Website</h2><p>This is the home page content.</p>';
    } else if (page === 'about') {
        content.innerHTML = `
            <h2>About Us</h2>
            <p>Our company was founded in [Year] with the vision of providing exceptional service and quality products. 
            We started as a small team of enthusiasts dedicated to making a difference in our industry. 
            Over the years, we have grown significantly, but our commitment to our values and our customers remains unchanged.</p>
        `;
    } else if (page === 'contact') {
        content.innerHTML = `
            <h2>Contact Us</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        `;
    }
}