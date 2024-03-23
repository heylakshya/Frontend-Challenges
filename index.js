// const fs = require('fs');
// const path = require('path');

// function isProjectDirectory(path) {
//     if(fs.statSync(path).isDirectory()){
//         let files = fs.readdirSync(path);
//         return files.find(file => file==="index.html");
//     }
// }

// function getProjectObjects() {
//     try {
        
//         let projectObjects = {};
//         let files = fs.readdirSync(__dirname);
//         let projectDirs = files.filter(file => isProjectDirectory(path.join(__dirname, file)))
//         projectDirs.forEach(dir => {
//             projectObjects[dir] = path.join("./", dir, "index.html");
//         })

//         return projectObjects;
        
//     } catch (error) {
//         console.log("Error getting folder names:", error);
//     }
// }

// function populateChallenges() {
//     let challenges = document.getElementById("challenges");
//     let projectObjects = getProjectObjects();
    
//     for (const projectName in projectObjects) {
//         let challenge = document.createElement("li");
//         challenge.classList.add("challenge");

//         let link = document.createElement("a");
//         link.href = projectObjects[projectName];
//         link.textContent = projectName;

//         challenge.appendChild(link);

//         challenges.appendChild(challenge);
//     }
// }

// console.log(getProjectObjects());

window.onload = function() {
    const apiUrl = 'https://api.github.com/repos/heylakshya/Frontend-Challenges/contents/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const challengeList = document.getElementById('challenges');
            data.forEach(item => {
                if (item.type === 'dir') {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = './' + item.name + '/index.html';
                    link.textContent = item.name;
                    listItem.appendChild(link);
                    challengeList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};

