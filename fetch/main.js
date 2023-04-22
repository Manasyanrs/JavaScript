"use strict"

const users = [];

window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.json();
    })
        .then((_users) => {
            users.push(..._users);
            loadFeed();
        })
}

function loadFeed() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            const fragment = new DocumentFragment();
            posts.forEach((post) => {
                const user = users.find((user) => {
                    return user.id == post.userId;
                })
                post.userName = user.name;
                fragment.append(createFeedItem(post));

            })
            document.getElementById("feed").append(fragment);
            document.getElementById("feed").addEventListener("click", (event) => {
                const div = event.target.closest(".feedItem");
                const postId = div.getAttribute("postId");
                console.log(postId);
                loadComments(postId)
                document.getElementById("com").append(addCommentForm());
                getCommentDate(postId);
                //TODO eli mods chstacvav add comenti mej qcem im grac qomen@ u iran cuyc tam
            });
        })
}


function getCommentDate(postId) {

    document.getElementById("sendCom").addEventListener("click", (e) => {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const text = document.getElementById("commentText");
        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "post",
            postId: 1,
            id: 3,
            name: name.value,
            email: email.value,
            "body": text.value
        })
        loadComments(postId)
    })
}

function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res) => {
            return res.json();
        })
        .then((comments) => {
            const fragment = new DocumentFragment();
            comments.forEach((comment) => {
                fragment.append(createComments(comment));
            });
            document.getElementById("feed").innerHTML = "";
            document.getElementById("feed").append(fragment);

        })
}

function addCommentForm() {
    const innerHTML = `
    
    <input type="text" id="name" placeholder="Input name">
        <input type="email" id="email" placeholder="Input email">
    
    <input type="text" id="commentText" placeholder="Input text" style="width: 400px; height: 100px;">
        <button id="sendCom">Send</button>
    `
    const form = document.createElement("form");
    form.setAttribute("id", "addComment");
    form.setAttribute("method", "post");
    form.classList.add("comentForm");
    form.innerHTML = innerHTML;
    return form;
}

function createComments(comments) {
    const innerHtml = `
    <span class="name">${comments.name}</span><br>
    <span class="body">${comments.body}</span>
    <span class="email">${comments.email}<br><br></span>
    <span class="id">${comments.id}</span>
    <span class="postId">${comments.postId}</span>`

    const div = document.createElement("div");
    div.setAttribute("postId", comments.id);
    div.classList.add("feedItem");
    div.innerHTML = innerHtml;
    return div;
}

function createFeedItem(post) {
    const innerHtml = `
    <span class="username"><h1>${post.userName}</h1></span>
    <span class="title">${post.title}<br><br></span>
    <span class="body">${post.body}</span>`

    const div = document.createElement("div");
    div.setAttribute("postId", post.id);
    div.classList.add("feedItem");
    div.innerHTML = innerHtml;
    return div;
}