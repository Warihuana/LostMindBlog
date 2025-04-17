function loadPosts() {
    const postsDiv = document.getElementById("posts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-card");

        postElement.innerHTML = `
            ${post.image ? `<img src="${post.image}" alt="Imagen del post" class="protected">` : ""}
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        postsDiv.appendChild(postElement);
    });
}

loadPosts();
