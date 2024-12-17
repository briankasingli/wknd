export default function decorate(block) {
    // Create the new container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'text-image__container';
  
    // Find the two child <div> elements inside the block
    const [imageDiv, textDiv] = block.firstElementChild.children;
  
    // Process the image block
    if (imageDiv) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'text-image__container-image';
  
      // Find the <picture> tag and append it to the new container
      const picture = imageDiv.querySelector('picture');
      if (picture) {
        imageContainer.appendChild(picture);
      }
  
      containerDiv.appendChild(imageContainer);
    }
  
    // Process the text block
    if (textDiv) {
      const textContainer = document.createElement('div');
      textContainer.className = 'text-image__container-text';
  
      // Move all child nodes (h1, p, etc.) to the new text container
      while (textDiv.firstChild) {
        textContainer.appendChild(textDiv.firstChild);
      }
  
      containerDiv.appendChild(textContainer);
    }
  
    // Replace the original content of the block with the new structure
    block.innerHTML = '';
    block.appendChild(containerDiv);
  }
  