
# JSrecon

A small JavaScript code that discovers potential hidden paths, API endpoints, or sensitive resource URLs embedded within the HTML source and external JavaScript files of a web page.

This tool is useful for bug bounty hunters, pentesters, and web security researchers.


## HOW IT'S WORKS ?

- Scans the current page's HTML for URLs and path-like patterns.
- Fetches and scans all external JavaScript files for the same.
- Extracts matches like:

    - /api/user/info  
    - login.php  
    - https://example.com/data.json  

- Logs all findings to the browser console.


## Usage 

Option 1: Paste in DevTools Console

- Visit the target website.

- Open Developer Tools → Console tab.

- Paste the full code


Option 2 : Bookmarklet (Quick Access)


- Create a new browser bookmark.

- Set the URL

- Visit a target website and click the bookmark.

- Small iframe open contain information about url js files.

## EXAMPLE
```javascript
[+] Discovered paths/endpoints from JS & HTML:
/api/login
/assets/js/auth.js
/logout.php
/data/profile.json
```




https://github.com/user-attachments/assets/472f0866-467a-40c5-8aca-d6fe57cf56ad


## Disclaimer




 This tool is for educational and authorized testing purposes only. Do not use this script on websites without permission.


