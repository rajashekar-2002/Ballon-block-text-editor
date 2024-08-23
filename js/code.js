//code.js


//code for  on doc load

document.addEventListener('DOMContentLoaded', () => {
    const codeBtn = document.getElementById('code-btn');

    codeBtn.addEventListener('click', () => {

        const selection = window.getSelection();
        // console.log(selection.range);
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const codeElement = document.createElement('code');


            codeElement.style.display = 'block'; // Ensure it is a block element
            codeElement.style.backgroundColor = '#f4f4f4';
            codeElement.style.border = '1px solid #ccc';
            codeElement.style.padding = '5px';
            codeElement.style.margin = '5px 0';
            codeElement.style.fontFamily = 'monospace';
            codeElement.style.whiteSpace = 'pre-wrap';
            // Preserve whitespace and wrap as needed
            codeElement.setAttribute('spellcheck', 'false'); // Disable spellcheck 


            codeElement.style.position = 'relative'; // For positioning the copy button


            codeElement.appendChild(range.extractContents());

            range.insertNode(codeElement);
            //updateVersionControl();

        }

        
    });
});
