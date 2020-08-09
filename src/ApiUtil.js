const API_URL = 'http://localhost:8080';

export const helloWorld = () => {
    const callUrl = `${API_URL}/user`;
    fetch(callUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(user) {
            console.log(JSON.stringify(user));
        });
}

