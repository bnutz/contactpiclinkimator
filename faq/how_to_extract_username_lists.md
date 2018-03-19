## How to Extract Username Lists from your Social Media Pages - Contact Pic Linkimator

Contact Pic Linkimator will *never* ask for your social media logins. This means if you want to import your full list of friend links from your social media accounts; you will need to copy out the username list from your friend list pages and paste them into the app. 

Don't worry! It's easy!

### Step 1
Open this page from a desktop browser.

### Step 2
Choose an option for extracting URL links from a webpage:

#### Option 2a: (Chrome & Firefox)
 - Either install a browser extension that can do this for you:
   - Chrome: [https://chrome.google.com/webstore/search/](https://chrome.google.com/webstore/search/extract%20links?_category=extensions)
   - Firefox: [https://addons.mozilla.org/en-GB/firefox/search/](https://addons.mozilla.org/en-GB/firefox/search/?q=copy+links)

#### Option 2b: (Chrome only)
- Or, if you don't want to install any external browser extensions, use the bookmarklet below:
  - To use, create a new bookmark in Chrome, name it whatever you want, and then paste the script below into the address field:

```javascript

javascript:(function(){var docLinks=document.links;var checkedList=[];var checkLink;var newDoc=window.open().document;for(var i=0;i<docLinks.length;i++){checkLink=docLinks[i].href;if(checkLink.indexOf('?')>0){checkLink=checkLink.substring(0,checkLink.indexOf('?'));} if(checkLink&&!checkedList.includes(checkLink)){newDoc.writeln(checkLink);newDoc.writeln('<br />');checkedList.push(checkLink);}} newDoc.close();})();

```

  - Once saved, the bookmarklet is now ready for use.
  - *To see how the script works, check out [`username_links_extract.js`](username_links_extract.js) to see the same code in an easier-to-read format and with a breakdown of exactly what each step is doing*

### Step 3
Once your browser is prepared, navigate to the Friend List page of which ever social media network you want to pull from:

 - [https://www.instagram.com/ *your_username* /following/](https://www.instagram.com/_your_username_here_/following/)
   - *(May need to click the "following" link to have the friend list appear)*
 - [https://twitter.com/following](https://twitter.com/following)
 - [https://www.facebook.com/ *your_username* /friends](https://www.facebook.com/_your_username_here_/friends)
 - [https://plus.google.com/circles](https://plus.google.com/circles)

### Step 4
Scroll the page down to load the full list of friend names into the browser window.

i.e. The **links** of all the friends you want to add need to be loaded into the web page in your browser.

### Step 5
Once loaded, use your browser extension / bookmarklet to pull out all URLs from the page into a nice plain-text list.

Save this to a text file on your computer and remove any non-username URLs from the list.

### Step 6
Send this list over to your device using whatever method you like, for example:

 - Dropbox
 - Pushbullet
 - WhatsApp
 - AirDroid
 - Email
 - *etc...*

### Step 7
Transfer the list into the app using either:

#### Option 7a: (Android's Share function)
  - Open the list using any text reader you have on your device.
  - Highlight the entire chunk of text
  - In the menu that appears whenever you highlight any text in Android, select the `Share` option.
  - Share the text into Contact Pic Linkimator

#### Option 7b: (Copy & Paste)
  - Copy the entire list to the clipboard on your device.
  - Open the Contact Pic Linkimator app and go to the **Friend Lists** section
  - Open the import box and select `Paste Clipboard`

Once your list is in the import box, click `OK` and the app will pull out all the usernames for you to Linkimate.

### Play Store
 - [https://play.google.com/store/apps/details?id=com.justbnutz.contactpicturelinkimator](https://play.google.com/store/apps/details?id=com.justbnutz.contactpicturelinkimator)
