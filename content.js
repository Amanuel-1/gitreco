


$(document).ready(function() {
  const path = window.location.href;
  
  
  alert(path)
  // Create the button
  const $button = $('<button>')
    .text('Show Boxes')
    .css({
      position: 'fixed',
      bottom: '20px',
      right: 'calc(50% - 50px)', // Centered
      zIndex: '1000',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    });

  // Create the container for the boxes
  const $boxContainer = $('<div>')
    .css({
      position: 'fixed',
      bottom: '70px', // Adjust based on button height
      right: 'calc(50% - 560px)', 
      display: 'none', // Initially hidden
      zIndex: '1000',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    });

  // Create boxes and append them to the container
  for (let i = 1; i <= 10; i++) {
    const $box = $('<div>')
      .text(`Box ${i}`)
      .css({
        display: 'inline-block',
        width: '100px',
        height: '100px',
        marginRight: '10px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: '100px'
      });
    $boxContainer.append($box);
  }

  // Append button and box container to the body
  $('body').append($button);
  $('body').append($boxContainer);

  // Button click event to toggle the box container
  $button.on('click', function() {
    $boxContainer.slideToggle();
  });
});