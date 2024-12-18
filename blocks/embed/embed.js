export default function decorate(block) {
  // Utility function to decode HTML entities
  function decodeHTML(encodedString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(encodedString, 'text/html');
    return doc.body.textContent || '';
  }

  // Find the first <p> tag within the block
  const paragraph = block.querySelector('p');

  if (paragraph) {
    // Step 1: Extract the encoded HTML content inside the <p> tag
    const encodedHTML = paragraph.innerHTML;

    // Step 2: Decode the HTML entities back to actual HTML
    const decodedHTML = decodeHTML(encodedHTML);

    // Step 3: Clear the block and inject the decoded HTML
    block.innerHTML = decodedHTML;

    // Step 4: Execute dynamically added <script> tags, if any
    const scripts = block.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      if (oldScript.src) {
        // Copy external script source
        newScript.src = oldScript.src;
      } else {
        // Copy inline script content
        newScript.textContent = oldScript.textContent;
      }
      newScript.type = oldScript.type || 'text/javascript';
      oldScript.replaceWith(newScript); // Replace old script with new one to execute
    });
  }
}
