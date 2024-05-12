const fetch = require('node-fetch');

function getBase64FromUrl(url) {
    return new Promise((res, rej) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error!');
                }
                return response.arrayBuffer();
            })
            .then(buffer => {
                const base = Buffer.from(buffer).toString('base');
                const type = response.headers.get('content-type');
                const dataUrl = `data:${type};base,${base}`;
                res(dataUrl);
            })
            .catch(error => {
                rej(error);
            });
    });
};

// Пример:

getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(console.log)
    .catch(console.error);