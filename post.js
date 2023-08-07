// alert()

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(data){
    const postArea = document.getElementById('post');
    for(const post of data){
        const div=document.createElement('div');
        div.classList.add('make-up');
        div.innerHTML=`
        <h2>${post.title}</h2>
        <h3>${post.id}</h3>
        <p>${post.body}</p>
        `;
        postArea.appendChild(div);
    }
}

loadPosts()