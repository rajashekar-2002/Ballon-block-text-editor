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




// Call the function to clean the editor
cleanEditor();


  
  // Define the HTML content you want to display
  const htmlContent = `
                          <p id="title-input" class="heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 2.5em;
                padding: 5px; outline: none; margin-left: 5%; white-space: wrap;  margin-top: 2%; margin-bottom: 0%;">Enter heading...</p>

                <p id="subtitle-input" class="sub-heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 1.5em; border-bottom: 2px solid #ccc; 
                padding: 7px; outline: none; margin-left: 5%; white-space: wrap; margin-bottom: 2%; ">Enter sub-heading...</p>

                <div id="editor" class="editor">

                

            <div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph section-branch" spellcheck="true" data-last-key=""> &lt;p id="title-input" class="heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 2.5em;
                padding: 5px; outline: none; margin-left: 5%; white-space: wrap;  margin-top: 2%; margin-bottom: 0%;"&gt;Enter heading...&lt;/p&gt;

                &lt;p id="subtitle-input" class="sub-heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 1.5em; border-bottom: 2px solid #ccc; 
                padding: 7px; outline: none; margin-left: 5%; white-space: wrap; margin-bottom: 2%; "&gt;Enter sub-heading...&lt;/p&gt;

                &lt;div id="editor" class="editor"&gt;

                

            &lt;div class="para-container" draggable="true"&gt;&lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&gt;&lt;/grammarly-extension&gt;&lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&gt;&lt;/grammarly-extension&gt;&lt;div class="add-btn"&gt;+&lt;/div&gt;&lt;div class="holder"&gt;⇅&lt;/div&gt;&lt;p contenteditable="true" class="para-container-paragraph activeParagraph" spellcheck="true" data-last-key=""&gt;           &amp;lt;p id="title-input" class="heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 2.5em;\n                padding: 5px; outline: none; margin-left: 5%; white-space: wrap;  margin-top: 2%; margin-bottom: 0%;"&amp;gt;Enter heading...&amp;lt;/p&amp;gt;\n\n                &amp;lt;p id="subtitle-input" class="sub-heading-paragraph placeholder" contenteditable="true" style="width: 90%; font-size: 1.5em; border-bottom: 2px solid #ccc; \n                padding: 7px; outline: none; margin-left: 5%; white-space: wrap; margin-bottom: 2%; "&amp;gt;Enter sub-heading...&amp;lt;/p&amp;gt;\n\n                &amp;lt;div id="editor" class="editor"&amp;gt;\n\n                \n\n            &amp;lt;div class="para-container" draggable="true"&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;div class="add-btn"&amp;gt;+&amp;lt;/div&amp;gt;&amp;lt;div class="holder"&amp;gt;⇅&amp;lt;/div&amp;gt;&amp;lt;p contenteditable="true" class="para-container-paragraph section-branch" spellcheck="true" data-last-key=""&amp;gt;document.querySelector("p").classList.add('section-branch');\r\n&amp;lt;br&amp;gt;&amp;lt;/p&amp;gt;&amp;lt;div class="delete-btn"&amp;gt;✖&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;div class="para-container" draggable="true"&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;div class="add-btn"&amp;gt;+&amp;lt;/div&amp;gt;&amp;lt;div class="holder"&amp;gt;⇅&amp;lt;/div&amp;gt;&amp;lt;p contenteditable="true" class="para-container-paragraph subsection-branch" spellcheck="true" data-last-key=""&amp;gt;document.querySelector("p").classList.add('section-branch');\r\n&amp;lt;br&amp;gt;&amp;lt;/p&amp;gt;&amp;lt;div class="delete-btn"&amp;gt;✖&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;div class="para-container" draggable="true"&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"&amp;gt;&amp;lt;/grammarly-extension&amp;gt;&amp;lt;div class="add-btn"&amp;gt;+&amp;lt;/div&amp;gt;&amp;lt;div class="holder"&amp;gt;⇅&amp;lt;/div&amp;gt;&amp;lt;p contenteditable="true" class="para-container-paragraph activeParagraph section-branch" spellcheck="true" data-last-key=""&amp;gt;document.querySelector("p").classList.add('section-branch');\r\n&amp;lt;br&amp;gt;&amp;lt;/p&amp;gt;&amp;lt;div class="delete-btn"&amp;gt;✖&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;&lt;br&gt;&lt;/p&gt;&lt;div class="delete-btn"&gt;✖&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph" spellcheck="false"><br></p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph">
        <div class="table-container">
            <table id="dynamicTable">
                <thead>
                    <tr>
                        <th draggable="true" ondragstart="startDrag(event, this)">Name</th>
                        <th draggable="true" ondragstart="startDrag(event, this)">Age</th>
                        <th draggable="true" ondragstart="startDrag(event, this)">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 1 col 1</td>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 1 col 2</td>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 1 col 3</td>
                    </tr>
                    <tr>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 2 col 1</td>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 2 col 2</td>
                        <td draggable="true" ondragstart="startDrag(event, this)" onclick="selectCell(this)" contenteditable="true" class="editable">row 2 col 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
            
        </p><div class="delete-btn">✖</div></div><div class="para-container" draggable="true"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="dnXmp"></grammarly-extension><div class="add-btn">+</div><div class="holder">⇅</div><p contenteditable="true" class="para-container-paragraph bullet-list activeParagraph" spellcheck="true"><div class="bullet-container"><ul class="bullet-container-ul"><li draggable="true">text heregsdfgd</li><li draggable="true">sdfgsdfg</li></ul></div></p><div class="delete-btn">✖</div></div></div>
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














































const jsonData =  {
    "totalSections": 2,
    "totalSubsections": 1,
    "totalSubSubsections": 0,
    "sections": [
      {
        "type": "section",
        "text": "sadfasdf",
        "position": 1,
        "subsections": [
          {
            "type": "subsection",
            "text": "sdfsdfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
            "position": 2,
            "subSubsections": [],
            "subSubsectionCount": 0
          }
        ],
        "subsectionCount": 1
      },
      {
        "type": "section",
        "text": "sdfsdfg",
        "position": 3,
        "subsections": [],
        "subsectionCount": 0
      }
    ]
  };



function findParagraphByPositionForSections(position) {
    // List all <p> tags with section-related classes
    const paragraphs = Array.from(document.querySelectorAll('p.section-branch, p.subsection-branch, p.sub-subsection-branch'));

    // Find the <p> tag that matches the position
    if (position > 0 && position <= paragraphs.length) {
        console.log("??????????/",position);
        const targetParagraph = paragraphs[position - 1]; // Adjust for zero-based index
        console.log(`Found <p> tag at position ${position}:`, targetParagraph);

        // Scroll to the target paragraph
        targetParagraph.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // targetParagraph.classList.add('shine-effect');
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
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = `<span>${text}</span>`;

    // if (count > 0) {
    //     const badge = document.createElement('span');
    //     badge.className = 'badge badge-secondary ml-1 ';
    //     badge.textContent = count;
    //     element.appendChild(badge);
    // }

    // Add the click event listener
    element.addEventListener('click', () => {
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
});



