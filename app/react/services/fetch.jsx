async function fetchFunc(url, method, body = null, img = null) {

    let headers = {
        "X-Requested-With": "XMLHttpRequest",
    };
    let init = {
        method: method,
        headers: headers
    }
    if ((method === "POST") && (body != null)) {

        const response = await fetch("/csrf");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let csrfJson = await response.json();

        headers["X-CSRF-Token"] = decodeURIComponent(csrfJson._csrf);
        if (!img) {
            // при отправке файла, заголовки подставляются автоматически
            init.headers["Content-Type"] = 'application/json';
            init.body = JSON.stringify(body);
        } else {
            init.body = body;
        }
    }
    return await fetch(url, init)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log('data', data);
            return data
        })
        .catch((error) => {
            console.log(error);
            return error

        });
}

export default fetchFunc;