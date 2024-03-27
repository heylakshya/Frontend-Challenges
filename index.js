function checkURL(url) {
    return fetch(url, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // URL exists, return true
                return true;
            } else {
                // URL does not exist, return false
                return false;
            }
        })
        .catch(error => {
            // Error occurred while fetching the URL, return false
            console.error('Error checking URL:', error);
            return false;
        });
}

window.onload = function() {
    const apiUrl = 'https://api.github.com/repos/heylakshya/Frontend-Challenges/contents/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("response json:", data);
            const challengeList = document.getElementById('challenges');
            data.forEach(item => {
                if (item.type === 'dir') {

                    const url = './' + item.name + '/index.html';
                    checkURL(url)
                        .then(result => {
                            if (result) {
                                
                                console.log('URL exists');

                                const listItem = document.createElement('li');
                                const link = document.createElement('a');
                                link.href = url
                                link.textContent = item.name;
                                listItem.appendChild(link);
                                challengeList.appendChild(listItem);
                            }
                        });
                    
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};

