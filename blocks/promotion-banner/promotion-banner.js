export default function decorate(block) {
    // Locate the <table> element inside the block
    const table = block.querySelector('table');
  
    if (table) {
      // Extract title and description from the table
      const titleElement = table.querySelector('h3');
      const descriptionText = table.querySelector('td:nth-child(2)').innerHTML.trim();
  
      // Create the new structure
      const newColDiv = document.createElement('div');
      newColDiv.className = 'promotion-banner__col';
  
      // Create title container
      const titleDiv = document.createElement('div');
      titleDiv.className = 'promotion-banner__col-title-text';
  
      // Append the <h3> element into the title container
      if (titleElement) {
        titleDiv.appendChild(titleElement.cloneNode(true));
      }
  
      // Create description container
      const descDiv = document.createElement('div');
      descDiv.className = 'promotion-banner__col-description-text';
  
      // Wrap description text into a <p> tag
      const descParagraph = document.createElement('p');
      descParagraph.innerHTML = descriptionText;
  
      descDiv.appendChild(descParagraph);
  
      // Append title and description to the new column div
      newColDiv.appendChild(titleDiv);
      newColDiv.appendChild(descDiv);
  
      // Replace the table with the new structure
      table.replaceWith(newColDiv);
    }
  }
  