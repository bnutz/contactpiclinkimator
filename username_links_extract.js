javascript: (function() {
  
  // Read all links from the current page
  var docLinks = document.links;
  var checkedList = [];
  var checkLink;

  // Open a new browser window
  var newDoc = window.open().document;
      
  for (var i = 0; i < docLinks.length; i++) {
    
    // Extract the actual URL link element
    checkLink = docLinks[i].href;
    
    // If there is a query string attached to the URL, remove it
    if (checkLink.indexOf('?') > 0) {
      checkLink = checkLink.substring(0, checkLink.indexOf('?'));
    }

    // If the URL is not blank and if we haven't seen this URL before...
    if (checkLink && !checkedList.includes(checkLink)) {
      
      // Show the URL
      newDoc.writeln(checkLink);
      newDoc.writeln('<br />');
      
      // Add the URL entry to the Checked List
      checkedList.push(checkLink);
    }
  }
  
  // Done
  newDoc.close();
})();
