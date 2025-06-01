//copy and paste the code in console
(function () {
  const regex = /(['"])(https?:\/\/[^'"]+?|\/[^'"]+?|[a-zA-Z0-9_\-\/\.]+?\.(php|json|js|html|aspx|jsp|do|action|cgi)[^'"]*?)\1/g;
  const results = new Set();

  // Scan HTML
  const pageContent = document.documentElement.outerHTML;
  const matchesInPage = pageContent.matchAll(regex);
  for (const match of matchesInPage) {
    results.add(match[2]);
  }

  // Scan all external JS
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].src;
    if (src) {
      fetch(src)
        .then(res => res.text())
        .then(js => {
          const matchesInJS = js.matchAll(regex);
          for (const match of matchesInJS) {
            results.add(match[2]);
          }
        })
        .catch(err => console.log('Fetch error: ', err));
    }
  }

  // Output after 3 seconds
  setTimeout(() => {
    console.log('[+] Discovered paths/endpoints from JS & HTML:');
    results.forEach(res => console.log(res));
  }, 3000);
})();
