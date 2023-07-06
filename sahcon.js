const getUrlPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const p = urlParams.get("page")
  return p ? p : "home"
}

const loadPage = async () => {
  pageHtml = await fetch(`./pages/${getUrlPage()}.html`).then(e => e.text())

  document.getElementById("content").innerHTML = pageHtml
}

loadPage()