const postNum = 10;
const userNum = 8;
const jsonPostsUrl = `https://jsonplaceholder.typicode.com/posts/${postNum}`;
const jsonUsersUrl = `https://jsonplaceholder.typicode.com/users/${userNum}`;

fetch(jsonPostsUrl)
    .then(response => response.json())
    .then(json => {
        // 내용물 확인용 console
        console.log(json)
        const id = document.body.querySelector(".jsonId");
        const title = document.body.querySelector(".jsonTitle");

        title.innerText = json.title;
        id.innerText = json.id;
        }
    )

fetch(jsonUsersUrl)
    .then(response => response.json())
    .then(json => {
        // 내용물 확인용 console
        console.log(json)
        const userId = document.body.querySelector(".jsonUsersId");
        const userName = document.body.querySelector(".jsonUsersName");
        const userPhone = document.body.querySelector(".jsonUsersPhone");

        userId.innerText = json.id;
        userName.innerText = json.name;
        userPhone.innerText = json.phone
        }
    )