var keySequence = ''; // Variable to store the pressed key sequence
var hiddenElement = document.getElementById('hiddenElement');

// Event listener for keydown
document.addEventListener('keydown', function(event) {
  // Append the pressed key to the key sequence
  keySequence += event.key.toLowerCase();

  // Check if the key sequence matches your desired sequence
  if (keySequence === 'skeebop') {
    // Show the hidden element
    hiddenElement.style.display = 'block';

    // Reset the key sequence
    keySequence = '';

    // Set a timer to hide the element after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      hiddenElement.style.display = 'none';
      keySequence = '';
    }, 3000);
  }
});
