const addPostBtn = document.getElementById('addPostBtn');
const blogPosts = document.getElementById('blogPosts');

addPostBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if(title && content){
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        blogPosts.prepend(postDiv); // newest post on top

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please enter both title and content!');
    }
});