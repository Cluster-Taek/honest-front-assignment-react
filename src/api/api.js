// request API
export async function postRequest(params) {
    const response = await fetch(`/request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const data = await response.json();
    return {status: response.status, body: data};
}

// submit API
export async function postSubmit(params) {
    const response = await fetch(`/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const data = await response.json();
    return {status: response.status, body: data};
}