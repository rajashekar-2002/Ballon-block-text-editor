function cleanEditor() {
    // Remove contenteditable attribute from title and subtitle
    const headingElements = document.querySelectorAll('#title-input, #subtitle-input');
    
    headingElements.forEach(heading => {
        heading.removeAttribute('contenteditable');
    });

    // Get all .para-container elements
    const paraContainers = document.querySelectorAll('.para-container');

    paraContainers.forEach(container => {
        // Remove draggable attribute from para-container
        container.removeAttribute('draggable');
        
        // Find and remove contenteditable attribute from all <p> elements within the container
        const editableParagraphs = container.querySelectorAll('p[contenteditable="true"]');
        editableParagraphs.forEach(p => {
            p.removeAttribute('contenteditable');
        });

        // Remove specific child elements (.add-btn, .holder, .delete-btn)
        const addBtn = container.querySelector('.add-btn');
        const holder = container.querySelector('.holder');
        const deleteBtn = container.querySelector('.delete-btn');
        
        if (addBtn) addBtn.remove();
        if (holder) holder.remove();
        if (deleteBtn) deleteBtn.remove();
    });
}

function addIncrementingValueAttributes() {
    console.log(">>>>>>>>>>>>><<<");
    // Select all <p> elements with the class 'para-container-paragraph' inside the div with id 'ReadheadingAndEditor'
    const paragraphs = document.querySelectorAll('#ReadheadingAndEditor p.section-branch, p.subsection-branch, #ReadheadingAndEditor p.sub-subsection-branch');
    console.log(paragraphs);
    // Iterate over the selected <p> elements
    paragraphs.forEach((paragraph, index) => {
        console.log(index + "");
        // Set the 'value' attribute with an incrementing number starting from 1
        paragraph.setAttribute('value', index + 1);
    });
}


// Call the function to clean the editor
cleanEditor();
// Call the function to apply the changes


  
  // Define the HTML content you want to display
  const htmlContent = `

 

                <p id="title-input" class="heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 2.5em;
                padding: 5px; outline: none; margin-left: 5%; white-space: wrap;  margin-top: 2%; margin-bottom: 0%;">Enter heading...</p>

                <p id="subtitle-input" class="sub-heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 1.5em; border-bottom: 2px solid #ccc; 
                padding: 7px; outline: none; margin-left: 5%; white-space: wrap; margin-bottom: 2%; ">Enter sub-heading...</p>

                <div id="editor" class="editor">

                

            <div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph section-branch" spellcheck="false" data-last-key="">1</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph subsection-branch" spellcheck="false" data-last-key="">2</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph" spellcheck="false" data-last-key="">3</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph" spellcheck="false" data-last-key="">4</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph section-branch" spellcheck="false" data-last-key="">5</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph subsection-branch" spellcheck="false" data-last-key="">6</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph sub-subsection-branch" spellcheck="false" data-last-key="">7</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph sub-subsection-branch" spellcheck="false" data-last-key="">8</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph" spellcheck="false" data-last-key="">9</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph section-branch" spellcheck="false" data-last-key="">10</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph activeParagraph subsection-branch" spellcheck="false" data-last-key="">11</p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph"><br></p><div class="delete-btn">✖</div></div></div>

         


`;










function fixEditorStructure() {
    const paraContainers = document.querySelectorAll('.para-container');
    console.log(paraContainers);

    paraContainers.forEach(container => {
        const paragraphs = container.querySelectorAll('p.para-container-paragraph, p.bullet-list');
        console.log(paragraphs);

        paragraphs.forEach(p => {
            let nextSibling = p.nextElementSibling;

            while (nextSibling && (
                nextSibling.tagName === 'BLOCKQUOTE' || 
                nextSibling.tagName === 'TABLE' || 
                nextSibling.tagName === 'FIGCAPTION' ||
                (nextSibling.tagName === 'DIV' && 
                    (nextSibling.classList.contains('table-container') || 
                     nextSibling.classList.contains('image-container') || 
                     nextSibling.classList.contains('preview') || 
                     nextSibling.classList.contains('gist-wrapper') || 
                     nextSibling.classList.contains('code-block-div'))
                )
            )) {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            // Check if nextSibling exists and if it's the "captionContainer" or "bullet-container"
            if (nextSibling && nextSibling.id === 'captionContainer') {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            if (nextSibling && nextSibling.classList.contains('bullet-container')) {
                const elementToMove = nextSibling;
                nextSibling = nextSibling.nextElementSibling;
                p.appendChild(elementToMove);
            }

            // Remove empty p tags or <br> tags after the current p tag
            let emptyParagraph = p.nextElementSibling;
            while (emptyParagraph && (emptyParagraph.tagName === 'P' || emptyParagraph.tagName === 'BR') && emptyParagraph.innerHTML.trim() === '') {
                const paragraphToRemove = emptyParagraph;
                emptyParagraph = emptyParagraph.nextElementSibling;
                paragraphToRemove.parentNode.removeChild(paragraphToRemove);
            }
        });
    });

    // Handle "captionContainer" not inside paragraphs
    const captionContainers = document.querySelectorAll('#captionContainer');
    captionContainers.forEach(container => {
        if (container.parentElement.classList.contains('para-container')) {
            container.parentElement.removeChild(container);
        }
    });

    // Handle "bullet-container" not inside paragraphs
    const bulletContainers = document.querySelectorAll('.bullet-container');
    bulletContainers.forEach(container => {
        if (container.parentElement.classList.contains('para-container')) {
            container.parentElement.removeChild(container);
        }
    });
}




// Get the target div
const targetDiv = document.getElementById('ReadheadingAndEditor');

// Set the innerHTML of the target div
targetDiv.innerHTML = htmlContent;
cleanEditor();

fixEditorStructure();














































const jsonData =   {
    "totalSections": 3,
    "totalSubsections": 3,
    "totalSubSubsections": 2,
    "sections": [
      {
        "type": "section",
        "text": "1 rgb(173, 216, 230) rgb(173, 216, 230)rgb(173, 216, 230)rgb(173, 216, 230)rgb(173, 216, 230)",
        "position": 1,
        "subsections": [
          {
            "type": "subsection",
            "text": "2",
            "position": 2,
            "subSubsections": [],
            "subSubsectionCount": 0
          }
        ],
        "subsectionCount": 1
      },
      {
        "type": "section",
        "text": "5",
        "position": 3,
        "subsections": [
          {
            "type": "subsection",
            "text": "6",
            "position": 4,
            "subSubsections": [
              {
                "type": "sub-subsection",
                "text": "7",
                "position": 5
              },
              {
                "type": "sub-subsection",
                "text": "8",
                "position": 6
              }
            ],
            "subSubsectionCount": 2
          }
        ],
        "subsectionCount": 1
      },
      {
        "type": "section",
        "text": "10",
        "position": 7,
        "subsections": [
          {
            "type": "subsection",
            "text": "11",
            "position": 8,
            "subSubsections": [],
            "subSubsectionCount": 0
          }
        ],
        "subsectionCount": 1
      }
    ]
  };



  function findParagraphByPositionForSections(position) {
    // List all <p> tags with section-related classes
    const paragraphs = Array.from(document.querySelectorAll('p.section-branch, p.subsection-branch, p.sub-subsection-branch'));
    console.log(paragraphs);
    // Find the <p> tag that matches the position
    if (position > 0 && position <= paragraphs.length) {
        console.log("??????????/",position);
        const targetParagraph = paragraphs[position - 1]; // Adjust for zero-based index
        console.log(`Found <p> tag at position ${position}:`, targetParagraph);

        // Scroll to the target paragraph
        targetParagraph.scrollIntoView({ behavior: 'smooth', block: 'center' });

        targetParagraph.classList.add('shine-effect');
        // Remove the shine effect class after the animation ends
        targetParagraph.addEventListener('animationend', () => {
            targetParagraph.classList.remove('shine-effect');
        }, { once: true }); // Use { once: true } to ensure the listener is removed after it runs

        return targetParagraph;
    } else {
        console.log(`Position ${position} is out of range.`);
        return null;
    }
}

function createElement(type, text, className, count = 0, position = 0) {
    const maxLength=55;
    const element = document.createElement('div');
    element.className = className;
    element.setAttribute('value', position); // Add position as value attribute
    let truncate_text=text.substring(0, maxLength) + '...';
    element.innerHTML = `<span>${truncate_text}</span>`;

    // Add the click event listener
    element.addEventListener('click', (event) => {
        event.stopPropagation();
        findParagraphByPositionForSections(position);
    });

    return element;
}

function drawStructure(data, container) {
    data.sections.forEach(section => {
        const sectionElement = createElement('section', section.text, 'section', section.subsectionCount, section.position);
        const sectionList = document.createElement('div');
        sectionList.className = 'section-list';

        section.subsections.forEach(subsection => {
            const subsectionElement = createElement('subsection', subsection.text, 'subsection', subsection.subSubsectionCount, subsection.position);
            const subsectionList = document.createElement('div');
            subsectionList.className = 'subsection-list';

            subsection.subSubsections.forEach(subSubsection => {
                const subSubsectionElement = createElement('sub-subsection', subSubsection.text, 'sub-subsection', 0, subSubsection.position);
                subsectionList.appendChild(subSubsectionElement);
            });

            subsectionElement.appendChild(subsectionList);
            sectionList.appendChild(subsectionElement);
        });

        sectionElement.appendChild(sectionList);
        container.appendChild(sectionElement);
    });
}





document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('structure-container');
    drawStructure(jsonData, container);

    const editor = document.getElementById('ReadheadingAndEditor');

    function getVisibleParagraphs() {
        const paragraphs = Array.from(editor.querySelectorAll('p.para-container-paragraph'));
        const visibleParagraphs = [];

        const editorRect = editor.getBoundingClientRect();

        paragraphs.forEach(p => {
            const rect = p.getBoundingClientRect();
            // Check if the paragraph is within the viewport
            if (rect.top >= editorRect.top && rect.bottom <= editorRect.bottom) {
                visibleParagraphs.push(p);
            }
        });

        return visibleParagraphs;
    }

    function highlightMatchingElements() {
        const visibleParagraphs = getVisibleParagraphs();
        const highlightedValues = new Set(visibleParagraphs.map(p => p.getAttribute('value')));

        // Remove all highlights from elements
        container.querySelectorAll('.highlighted-section, .highlighted-subsection, .highlighted-subsubsection').forEach(el => el.classList.remove('highlighted-section', 'highlighted-subsection', 'highlighted-subsubsection'));

        // Add highlight to the matching elements
        container.querySelectorAll('div').forEach(div => {
            const value = div.getAttribute('value');
            if (highlightedValues.has(value)) {
                const firstSpan = div.querySelector('span');
                if (firstSpan) {
                    if (div.classList.contains('section')) {
                        firstSpan.classList.add('highlighted-section');
                    } else if (div.classList.contains('subsection')) {
                        firstSpan.classList.add('highlighted-subsection');
                        // Ensure the parent section is highlighted
                        const parentSection = div.closest('.section');
                        if (parentSection) {
                            const parentSpan = parentSection.querySelector('span');
                            if (parentSpan) {
                                parentSpan.classList.add('highlighted-section');
                            }
                        }
                    } else if (div.classList.contains('sub-subsection')) {
                        firstSpan.classList.add('highlighted-subsubsection');
                        // Ensure the parent subsection and section are highlighted
                        const parentSubsection = div.closest('.subsection');
                        if (parentSubsection) {
                            const parentSubsectionSpan = parentSubsection.querySelector('span');
                            if (parentSubsectionSpan) {
                                parentSubsectionSpan.classList.add('highlighted-subsection');
                            }
                            const parentSection = parentSubsection.closest('.section');
                            if (parentSection) {
                                const parentSectionSpan = parentSection.querySelector('span');
                                if (parentSectionSpan) {
                                    parentSectionSpan.classList.add('highlighted-section');
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    editor.addEventListener('scroll', highlightMatchingElements);

    // Initial call to highlight elements when the page is loaded
    highlightMatchingElements();
});

// Example CSS for different highlighting
const css = `
.highlighted-section {
    background-color: rgb(144, 195, 220); /* Darker Light Blue */
    color: black;
}

.highlighted-subsection {
    background-color: rgb(184, 218, 235); /* Medium Light Blue */
    color: black;
}

.highlighted-subsubsection {
    background-color: rgb(214, 236, 235); /* Lighter Light Blue */
    color: black;
}


`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);



addIncrementingValueAttributes();




// document.addEventListener('DOMContentLoaded', function() {
//     const readheadingAndEditor = document.getElementById('ReadheadingAndEditor');
//     const paragraphs = readheadingAndEditor.getElementsByClassName('para-container-paragraph');

//     // Callback function to execute when entries change
//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log('Visible:', entry.target);
//             }
//         });
//     };

//     // Create an IntersectionObserver instance
//     const observer = new IntersectionObserver(callback, {
//         root: readheadingAndEditor,
//         threshold: 0.1 // Adjust the threshold value as needed
//     });

//     // Observe each paragraph element
//     Array.from(paragraphs).forEach(paragraph => {
//         observer.observe(paragraph);
//     });
// });