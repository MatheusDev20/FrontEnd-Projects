const form = document.getElementById('url-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const shortLink = (req) => {
        let finalLink;
        console.log('Fetching...')
        fetch('https://rel.ink/api/links/', {
        method:'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json()).then(json => {
        let hashid = json.hashid
        finalLink = buildLink(hashid)
    })
    return finalLink;
    }
    const buildLink = (hashid) => {
        return `https://rel.ink/${hashid}`
    }
    const url = form['url-input'].value
    let req = {
        url: url
    }
    let result = shortLink(req);
})