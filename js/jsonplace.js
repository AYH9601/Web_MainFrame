const postNum = 12;
const userNum = 8;
const photoNum = 4;

const baseUrl = "https://jsonplaceholder.typicode.com";
const jsonPostsUrl = `${baseUrl}/posts/${postNum}`;
const jsonUsersUrl = `${baseUrl}/users/${userNum}`;
const jsonPhotosUrl = `${baseUrl}/photos/${photoNum}`;

// 게시글
fetch(jsonPostsUrl)
    .then(response => response.json())
    // ooooData 는 그냥 json을 ooooData로 바꿔놓은것뿐임. json으로 써도 됨.
    .then(postData => {
        // 내용물 확인용 console
        console.log(postData)

        const id = document.body.querySelector(".jsonId");
        const title = document.body.querySelector(".jsonTitle");

        title.innerText = postData.title;
        id.innerText = postData.id;

        // document.querySelector(".jsonFor").appendChild(forTitle);

        // Object.keys(postData).forEach(function(k){
        //     console.log('데이터명 : '+k + ', 데이터값 : ' + postData[k]);
        // });
        }
    )

// 유저
fetch(jsonUsersUrl)
    .then(response => response.json())
    .then(userData => {
        // 내용물 확인용 console
        console.log(userData)

        const userId = document.body.querySelector(".jsonUsersId");
        const userName = document.body.querySelector(".jsonUsersName");
        const userPhone = document.body.querySelector(".jsonUsersPhone");

        userId.innerText = userData.id;
        userName.innerText = userData.name;
        userPhone.innerText = userData.phone
        }
    )

// 사진
fetch(jsonPhotosUrl)
    .then(response => response.json())
    .then(photoData => {
        // 내용물 확인용 console
        console.log(photoData)

        const photoId = document.body.querySelector(".jsonPhotoId");
        const photoTitle = document.body.querySelector(".jsonPhotoTitle");
        const photoGet = photoData.url

        // ID값, 제목
        photoId.innerText = photoData.id;
        photoTitle.innerText = photoData.title;

        const photoIMG = new Image(300,300);
        photoIMG.src = `${photoGet}`;

        // img SRC 가져오기.
        // console.log(IMG);
        document.querySelector(".jsonPhotoImg").appendChild(photoIMG);
        }
    )