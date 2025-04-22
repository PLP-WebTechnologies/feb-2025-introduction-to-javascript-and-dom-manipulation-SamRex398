// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'The text has been changed to Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id expedita, porro facilis facere iste voluptatem voluptates a dolor. Fugit saepe commodi excepturi aliquam exercitationem?';
});

// Modify CSS styles dynamically
const changeStyleBtn = document.getElementById('change-style-btn');
const styleText = document.getElementById('style-text');

changeStyleBtn.addEventListener('click', () => {
    styleText.style.color = styleText.style.color === 'blue' ? 'green' : 'blue';
    styleText.style.fontWeight = styleText.style.fontWeight === 'bold' ? 'normal' : 'bold';
    styleText.style.fontSize = styleText.style.fontSize === '16px' ? '24px' : '16px';
    styleText.style.textDecoration = styleText.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');

toggleElementBtn.addEventListener('click', () => {
    const existingElement = document.getElementById('dynamic-element');
    if (existingElement) {
        elementContainer.removeChild(existingElement);
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.style.color = 'red';
        newElement.style.fontSize = '20px';
        newElement.style.fontWeight = 'bold';
        newElement.textContent = 'This element was added dynamically!';
        elementContainer.appendChild(newElement);
    }
});
