const url = window.location.href

chrome.storage.sync.get('nostalgia', ({ nostalgia = {} }) => {
  if (nostalgia[url]) {
    window.stop()
    document.write(`
      <body style="display:flex;justify-content:center;align-items:center;">
        <h1 style="text-align:center;">you have already been here<h1>
      </body>
    `)
  } else {
    chrome.storage.sync.set({
      nostalgia: Object.assign(nostalgia, { [url]: true })
    })
  }
})
