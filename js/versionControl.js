//version control.js

import { addParagraph, deleteParagraph, handlePasteAsPlainText, onDragEnd, onDragOver, onDragStart, onDrop, onKeyDown } from "./addParagraph.js";
import { buildAnchorStructure } from "./anchorStructure.js";
import { addBullet, handleDragBulletOver, handleDragBulletStart, handleDropBullet, hideBulletToolbox, removeSelectedClassFromBullets, showBulletToolbox } from "./bullet.js";
import { hideImageToolbox } from "./image.js";
import { getActiveParagraph, hideToolbox, setActiveParagraph, showToolbox } from "./para-toolbox.js";
import { buildStructure, validateStructure } from "./section.js";
import { hideTableToolbox, unselectAllCells } from "./table.js";
import { printParagraphDetails } from "./TextSelection.js";


function attachEventListeners() {


    const editor = document.getElementById('editor');
    editor.addEventListener('click', (e) => {
        if (e.target === editor) {
            addParagraph();
        }
    });



      
    //title and subtitle

    const headingParagraph = document.getElementById('title-input');
    const subHeadingParagraph = document.getElementById('subtitle-input');

    function setPlaceholder(paragraph, placeholderText) {
        if (paragraph.innerText.trim() === '') {
            paragraph.innerText = placeholderText;
            paragraph.classList.add('placeholder');
        }
    }

    function removePlaceholder(paragraph) {
        if (paragraph.classList.contains('placeholder')) {
            paragraph.innerText = '';
            paragraph.classList.remove('placeholder');
        }
    }
    //enter innerText for title and subtitle
    setPlaceholder(headingParagraph, 'Enter heading...');
    setPlaceholder(subHeadingParagraph, 'Enter sub-heading...');

    headingParagraph.addEventListener('focus', function() {
        removePlaceholder(headingParagraph);
    });

    headingParagraph.addEventListener('blur', function() {
        setPlaceholder(headingParagraph, 'Enter heading...');
    });

    subHeadingParagraph.addEventListener('focus', function() {
        removePlaceholder(subHeadingParagraph);
    });

    subHeadingParagraph.addEventListener('blur', function() {
        setPlaceholder(subHeadingParagraph, 'Enter sub-heading...');
    });

    headingParagraph.addEventListener('input', function() {
        updateVersionControl();
    });

    subHeadingParagraph.addEventListener('input', function() {
        updateVersionControl();
    });




    const paraContainers = document.querySelectorAll('.para-container');
    
    paraContainers.forEach(container => {
        // Attach events to para-container
        container.addEventListener('dragstart', onDragStart);
        container.addEventListener('dragend', onDragEnd);
        container.addEventListener('dragover', onDragOver);
        container.addEventListener('drop', onDrop);
        container.addEventListener('input', function() {
            hideBulletToolbox();
            hideTableToolbox();
            hideImageToolbox();
            unselectAllCells();
            updateVersionControl();
            removeSelectedClassFromBullets();
            setActiveParagraph(container.querySelector('p.para-container-paragraph'));

                    // Check if there is a div with the class 'bullet-container' inside paraContainer
        const bulletContainer = container.querySelector('div.bullet-container');
    
        if (bulletContainer) {
        // Find all <li> elements inside the <ul> within the bullet-container
        const listItems = bulletContainer.querySelectorAll('ul > li');

        // Attach the drag event listeners to each <li> element
        listItems.forEach(newItem => {
            newItem.addEventListener('dragstart', handleDragBulletStart);
            newItem.addEventListener('dragover', handleDragBulletOver);
            newItem.addEventListener('drop', handleDropBullet);
            });
        }

        });
        
        container.addEventListener('mouseup', printParagraphDetails);
        container.addEventListener('keydown',  function (e) {
            // Check if Ctrl + A is pressed
            if (e.ctrlKey && e.key === 'a') {
                //e.preventDefault(); // Prevent the default browser action
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(container.querySelector('p'));
                selection.removeAllRanges();
                selection.addRange(range);
        
                setActiveParagraph(container.querySelector('p'));
                let activeParagraph = getActiveParagraph();
        
                window.lastSelectionDetails = {
                    selectedText: activeParagraph.textContent,
                    startOffset: 0,
                    endOffset: activeParagraph.textContent.length,
                    paragraphIndex: Array.from(document.querySelectorAll('.para-container p')).indexOf(activeParagraph) + 1, // Index of the <p> tag
                    parentNode: activeParagraph,
                    range: range // You can store the range for later use if needed
                };
        
                console.log("<><><><>", window.lastSelectionDetails);
            }
        
            if (e.key === 'Tab') {
                e.preventDefault(); // Prevent the default Tab behavior
        
                // Get the current selection
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const tabNode = document.createTextNode('\u00A0\u00A0\u00A0\u00A0'); // Non-breaking spaces
        
                // Insert the tabNode at the current cursor position
                range.insertNode(tabNode);
        
                // Create a new range to move the cursor after the inserted spaces
                const newRange = document.createRange();
                newRange.setStartAfter(tabNode);
                newRange.setEndAfter(tabNode);
        
                // Remove all ranges and add the new range
                selection.removeAllRanges();
                selection.addRange(newRange);
            }
        
        
                updateRangeSlider();
            
            } );

        const addBtn = container.querySelector('.add-btn');
        const deleteBtn = container.querySelector('.delete-btn');

        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addParagraph(container);
        });
    
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteParagraph(container);
        });

        // Attach events to p tags
        const paragraphs = container.querySelectorAll('p.para-container-paragraph, p[contenteditable="true"]');
        paragraphs.forEach(p => {


            p.addEventListener('click',function(){
                hideBulletToolbox();
                hideTableToolbox();
                hideImageToolbox();
                // Check if the clicked paragraph contains a table element
                if (!p.querySelector('table')) {
                    unselectAllCells();
                }
                setActiveParagraph(container.querySelector('p.para-container-paragraph'));
            })



            if (!p.classList.contains('bullet-list')) {
                p.addEventListener('keydown', onKeyDown);

                // Add click event listener to the paragraph
                p.addEventListener('click', (e) => {
                    if (p) {
                        const isTextNode = e.target.nodeType === Node.TEXT_NODE || e.target.tagName === 'P' || e.target.tagName === 'CODE' || e.target.tagName === 'BLOCKQUOTE';

                        if (isTextNode) {

                            hideToolbox();
                            showToolbox(e.clientX, e.clientY, container);
                            e.stopPropagation(); // Prevent further propagation
                        } else {

  
                            hideToolbox(); // Hide toolbox if clicked on an image or table
                        }
                    } else {

                        hideToolbox();
                    }
                });

                // Handle paste event
                p.addEventListener('paste', handlePasteAsPlainText);
            }else{
                let currentBulletContainer;
                const bulletContainers = p.querySelectorAll('.bullet-container');
        
                bulletContainers.forEach(bulletContainer => {
                 // Add event listener to stop propagation within the bullet container
                bulletContainer.addEventListener('click', function(event) {
                    event.stopPropagation(); // Prevent event from reaching parent elements
                });

                // Add keydown event listener to handle Enter key
                bulletContainer.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        console.log("Enter key pressed");
                        addBullet();
                    }
                });

                bulletContainer.addEventListener('click', function(e) {
                    if (e.target.tagName === 'LI') {
                        const items = bulletContainer.querySelectorAll('ul > li');
                        items.forEach(item => item.classList.remove('selected'));
                        e.target.classList.add('selected');
                        currentBulletContainer = e.target.parentElement.parentElement;
                        }

                    // Show the toolbox near the cursor
                    const x = e.clientX;
                    const y = e.clientY;
                    showBulletToolbox(x, y, currentBulletContainer);
            });
        });
        }
        });


        
    });
}






function fixEditorStructure() {
    const paraContainers = document.querySelectorAll('.para-container');

    paraContainers.forEach(container => {
        const paragraphs = container.querySelectorAll('p.para-container-paragraph, p.bullet-list' );
        
        paragraphs.forEach(p => {
            // Move blockquote and table elements inside the p tag
            let nextSibling = p.nextElementSibling;
            while (nextSibling && (nextSibling.tagName === 'BLOCKQUOTE' || nextSibling.tagName === 'TABLE' || nextSibling.tagName === 'FIGCAPTION') || (nextSibling.tagName === 'DIV' && nextSibling.classList.contains('table-container')) || (nextSibling.tagName === 'DIV' && nextSibling.classList.contains('image-container')) || (nextSibling.tagName === 'DIV' && nextSibling.classList.contains('preview')) || (nextSibling.tagName === 'DIV' && nextSibling.classList.contains('gist-wrapper'))) {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            // Move div with id "captionContainer" inside the p tag if it's next
            if (nextSibling && nextSibling.id === 'captionContainer') {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            // Move div with class "bullet-container" inside the p tag if it's next
            if (nextSibling && nextSibling.classList.contains('bullet-container')) {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            // Remove empty p tags after the p tag
            let emptyParagraph = p.nextElementSibling;
            while ((emptyParagraph && emptyParagraph.tagName === 'P') || (emptyParagraph && emptyParagraph.tagName === 'BR') && emptyParagraph.innerHTML.trim() === '') {
                const paragraphToRemove = emptyParagraph;
                emptyParagraph = emptyParagraph.nextElementSibling;
                paragraphToRemove.parentNode.removeChild(paragraphToRemove);
            }
        });
    });

    // Optional: Handle "captionContainer" and "bullet-container" not inside paragraphs
    const captionContainers = document.querySelectorAll('#captionContainer');
    captionContainers.forEach(container => {
        if (container.parentElement.classList.contains('para-container')) {
            container.parentElement.removeChild(container);
        }
    });

    const bulletContainers = document.querySelectorAll('.bullet-container');
    bulletContainers.forEach(container => {
        if (container.parentElement.classList.contains('para-container')) {
            container.parentElement.removeChild(container);
        }
    });
}


function countTotalWords() {
    // Select all p tags with the class 'para-container-paragraph'
    const paragraphs = document.querySelectorAll('p.para-container-paragraph');
    console.log("000000000",paragraphs);

    let totalWords = 0;

    paragraphs.forEach(p => {
        // Get the text content of the p tag
        const text = p.textContent || p.innerText;

        // Split the text into words by spaces, and count the number of words
        const words = text.trim().split(/\s+/);
        totalWords += words.length;
    });
    console.log("total",totalWords);

    return totalWords;
}


let totalWordsInParagraph;


//version control
// const headingAndEditor = document.querySelector('#editor');
const headingAndEditor = document.querySelector('#headingAndEditor');
const versionRange = document.getElementById('versionRange');
const versionNumber = document.getElementById('versionNumber');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');
// const versionControlCheckbox = document.getElementById("version-control-collapse");

let versions = [headingAndEditor.innerHTML];

let currentIndex = 0;
let isUserInput = true;

export function updateRangeSlider() {
    versionRange.max = versions.length;
    versionRange.value = currentIndex + 1;
    versionNumber.textContent = 
    (currentIndex + 1 > 0 ? `| Version: ${currentIndex + 1}` : '') +
    (totalWordsInParagraph > 0 ? ` | Words: ${totalWordsInParagraph}` : '');
    totalWordsInParagraph = countTotalWords();

    validateStructure();
    buildStructure();
    buildAnchorStructure();


}

function addVersion(newContent) {
    if (versions[currentIndex] !== newContent) {
        if (versions.length === 500) {
            versions.shift();
        } else {
            currentIndex++;
        }
        versions.push(newContent);

        updateRangeSlider();
    }
}


export function updateVersionControl(){

        const content = headingAndEditor.innerHTML;
        addVersion(content);
}

// headingAndEditor.addEventListener('input', () => {
//     if (isUserInput) {
//         const content = headingAndEditor.innerHTML;
//         addVersion(content);
//     }
// });

// function disableEditorEvents() {
//     headingAndEditor.removeEventListener('input', handleEditorInput);
//     // Remove any other events you want to temporarily disable here
// }

// function enableEditorEvents() {
//     headingAndEditor.addEventListener('input', handleEditorInput);
//     // Re-add any other events you want to enable here
// }


undoBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        // disableEditorEvents();
        headingAndEditor.innerHTML = "";
        headingAndEditor.innerHTML = versions[currentIndex];




        // enableEditorEvents();
        updateRangeSlider();
        fixEditorStructure();
        attachEventListeners();
    }
});

redoBtn.addEventListener('click', () => {

    if (currentIndex < versions.length - 1) {
        currentIndex++;
        // disableEditorEvents();
        headingAndEditor.innerHTML = "";
        headingAndEditor.innerHTML = versions[currentIndex];




        // enableEditorEvents();
        updateRangeSlider();
        fixEditorStructure();
        attachEventListeners();
    }
});

versionRange.addEventListener('input', () => {

    const value = parseInt(versionRange.value, 10) - 1;
    if (value !== currentIndex) {
        currentIndex = value;
        
        headingAndEditor.innerHTML = versions[currentIndex];


        

        updateRangeSlider();
        fixEditorStructure();
        attachEventListeners();
    }
});


