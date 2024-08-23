//paste-gist.js

document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');

    // Handle paste event in the editor
    editor.addEventListener('paste', async (event) => {
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('text');

        if (isGistUrl(pastedData)) {
            event.preventDefault(); // Prevent the default paste action

            try {
                const gistContent = await fetchGistContent(pastedData);
                insertCodeBlock(gistContent, pastedData);

            } catch (error) {
                console.error('Failed to fetch Gist content:', error);
                insertPlainText(pastedData); // Insert URL as plain text
            }
        } else {
            insertPlainText(pastedData); // Insert URL as plain text
        }
    });

    function isGistUrl(url) {
        // Validate if the URL is a Gist URL
        const gistPattern = /^https:\/\/gist\.github\.com\/[^\/]+\/([a-f0-9]+)$/;
        return gistPattern.test(url);
    }

    async function fetchGistContent(url) {
        const gistId = url.match(/^https:\/\/gist\.github\.com\/[^\/]+\/([a-f0-9]+)$/)[1];
        const apiUrl = `https://api.github.com/gists/${gistId}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const gistData = await response.json();
        const fileContent = Object.values(gistData.files)[0].content;

        return fileContent;
    }

    function insertCodeBlock(content, url) {
        const codeElement = document.createElement('pre');
        const codeText = document.createElement('code');
        codeText.textContent = content;
        codeElement.appendChild(codeText);

        // Create a div element with a link to the Gist URL
        const gistContainerDiv = document.createElement('div');
        gistContainerDiv.className = 'gist-container-div';
        gistContainerDiv.setAttribute('contenteditable', 'false'); // Make div non-editable

        // Create the GitHub icon and text
        const gistLinkText = document.createElement('span');
        gistLinkText.innerHTML = 'GitHub Gist';

        // Create the button to open the Gist
        const gistButton = document.createElement('button');
        gistButton.className = 'gist-button';
        gistButton.innerHTML = 'Open Gist';
        gistButton.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        // Append elements to the gistContainerDiv
        gistContainerDiv.appendChild(gistLinkText);
        gistContainerDiv.appendChild(gistButton);

        // Insert the gistContainerDiv before the codeElement
        const containerDiv = document.createElement('div');
        containerDiv.className = 'gist-wrapper';
        containerDiv.appendChild(gistContainerDiv);
        containerDiv.appendChild(codeElement);

        // Insert the containerDiv into the editor
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents(); // Clear any selected content
            range.insertNode(containerDiv); // Insert the container with div and code block
        } else {
            editor.appendChild(containerDiv); // If no selection, just append the container
        }
    }

    function insertPlainText(text) {
        const textNode = document.createTextNode(text);

        // Insert the plain text into the editor
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents(); // Clear any selected content
            range.insertNode(textNode); // Insert the plain text
        } else {
            editor.appendChild(textNode); // If no selection, just append the plain text
        }
    }

    // Optional: Handle code button click to wrap selected text in a code block
    document.getElementById('code-btn').addEventListener('click', () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const codeElement = document.createElement('pre');
            const codeText = document.createElement('code');
            codeText.textContent = range.toString(); // Wrap selected text
            codeElement.appendChild(codeText);
            range.deleteContents(); // Clear the selected text
            range.insertNode(codeElement); // Insert the code block
        }
    });
});

