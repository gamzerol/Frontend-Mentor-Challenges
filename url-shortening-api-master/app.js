const shortenForm = document.getElementById('shortenForm');

shortenForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getApi();
})

function getApi() {
    const urlShorten = document.getElementById('urlInput').value;
    fetch(`https://rel.ink/api/links`, {
        method: 'POST',
        body: JSON.stringify({
            url: urlShorten
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => response.json()).then(data => {
        console.log(data)
        let html = `<div class="shorten__result">
                        <p class="shorten__result-link">${urlShorten}</p>
                        <div class="shorten__result-actions">
                        <a href="${data.url}">https://rel.ink/${data.hashid}</a><button class="btn btn--squared">Copy</button>
                        </div>
                    </div>`;
        shortenForm.insertAdjacentHTML('afterend', html);
    }).catch(error => console.log(error));
    
}

