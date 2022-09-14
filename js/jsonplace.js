const postNum = 10;
const userNum = 8;
const photoNum = 4;

const jsonPostsUrl = `https://jsonplaceholder.typicode.com/posts/${postNum}`;
const jsonUsersUrl = `https://jsonplaceholder.typicode.com/users/${userNum}`;
const jsonPhotosUrl = `https://jsonplaceholder.typicode.com/photos/${photoNum}`;

// 게시글
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

// 유저
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

// 사진
fetch(jsonPhotosUrl)
    .then(response => response.json())
    .then(json => {
        // 내용물 확인용 console
        console.log(json)
        const photoId = document.body.querySelector(".jsonPhotoId");
        const photoTitle = document.body.querySelector(".jsonPhotoTitle");
        const photoGet = json.url

        // ID값, 제목
        photoId.innerText = json.id;
        photoTitle.innerText = json.title;

        const IMG = new Image(300,300);
        IMG.src = `${photoGet}`;

        // img SRC 가져오기.
        // console.log(IMG);
        document.querySelector(".jsonPhotoImg").appendChild(IMG);
        }
    )