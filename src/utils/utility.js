export const copyText = (text) => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');

        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

}

export const mockResonseFlag = false;