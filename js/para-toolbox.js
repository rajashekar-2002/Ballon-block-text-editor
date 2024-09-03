//para-toolbox.js
import { updateToolboxButtons } from "./section.js";

document.addEventListener('DOMContentLoaded', () => {

    // Hide the toolbox if the user clicks outside
    // document.addEventListener('click', (e) => {
    //     const paraContainer = document.querySelector('.para-container');
    //     if (!paraContainer || !paraContainer.contains(e.target)) {
    //         hideToolbox();
    //     }
    // });
});




export function setActiveParagraph(paragraph) {
    // Get all paragraphs inside the container
    const allParagraphs = document.querySelectorAll('.para-container-paragraph');
    
    // Remove the class 'activeParagraph' from all paragraphs
    allParagraphs.forEach(p => p.classList.remove('activeParagraph'));
    
    // Add the class 'activeParagraph' to the specified paragraph
    paragraph.classList.add('activeParagraph');
    console.log('set active p',paragraph);
}



export function getActiveParagraph() {
    // Find and return the paragraph with the class 'activeParagraph'
    console.log("get active p",document.querySelector('.para-container-paragraph.activeParagraph'));
    return document.querySelector('.para-container-paragraph.activeParagraph');
}


let toolboxTimeout = null;

export function showToolbox(x, y, paraContainer) {
    const paragraph = paraContainer.querySelector('p');
    const paragraphText = paragraph.textContent.trim();
    setActiveParagraph(paragraph);
    clearTimeout(toolboxTimeout);

    // Check if the button already exists
    let button = document.getElementById('para-toolbox-options');
    if (!button) {
        // Create and position the button if it doesn't exist
        button = document.createElement('button');
        button.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
        button.id = "para-toolbox-options";
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        button.style.zIndex = '9999'; // Make sure it is above other content
        document.body.appendChild(button);
    } else {
        // Update button position if it already exists
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    // Show the toolbox when the button is clicked
    button.addEventListener('click', () => {
        hideToolboxButton(); // Remove the button after click
        if (paragraphText !== '') {
            const toolbox = document.getElementById('para-toolbox');
            toolbox.style.display = 'flex';
            toolbox.style.left = `${x}px`;
            toolbox.style.top = `${y}px`;

            const toolboxRect = toolbox.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Adjust position if the toolbox goes off-screen
            if (toolboxRect.right > viewportWidth) {
                toolbox.style.left = `${viewportWidth - toolboxRect.width}px`;
            }
            if (toolboxRect.bottom > viewportHeight) {
                toolbox.style.top = `${viewportHeight - toolboxRect.height}px`;
            }

            // Ensure the toolbox is hidden when the paragraph content changes
            paragraph.removeEventListener('input', hideToolboxOnInput);
            paragraph.addEventListener('input', hideToolboxOnInput);

            // Stop the timeout if the mouse is over the toolbox
            toolbox.removeEventListener('mouseover', stopHideTimeout);
            toolbox.addEventListener('mouseover', stopHideTimeout);

            // Restart the timeout when the mouse leaves the toolbox
            toolbox.removeEventListener('mouseout', restartHideTimeout);
            toolbox.addEventListener('mouseout', restartHideTimeout);

            // Update toolbox buttons
            updateToolboxButtons();

            // Start the hide timeout
            startHideTimeout();

        } else {
            hideToolbox(); // Hide the toolbox if the paragraph is empty

        }
    });

    // Optionally hide the button if the user clicks elsewhere
    document.addEventListener('click', (event) => {
        if (event.target !== button && event.target.closest('#para-toolbox') === null) {
            hideToolboxButton();
        }
    });
}

// Function to hide the toolbox button
export function hideToolboxButton() {
    const button = document.getElementById('para-toolbox-options');
    if (button) {
        button.remove();
    }
}

export function hideToolbox() {
    hideToolboxButton();
    let activeParagraph = getActiveParagraph();
    const toolbox = document.getElementById('para-toolbox');
    toolbox.style.display = 'none';
    if (activeParagraph) {
        hideToolboxButton();
        activeParagraph.removeEventListener('input', hideToolboxOnInput);
    }
    clearTimeout(toolboxTimeout);
}

function hideToolboxOnInput() {
    hideToolbox();
}

function startHideTimeout() {
    toolboxTimeout = setTimeout(() => {
        hideToolbox();
        hideToolboxButton();
    }, 4000);
}

function stopHideTimeout() {
    clearTimeout(toolboxTimeout);
}

function restartHideTimeout() {
    if (document.getElementById('para-toolbox').style.display === 'flex') {
        startHideTimeout();
    }
}

