document.addEventListener('DOMContentLoaded',function(){
    const profileAvatar = document.querySelector('.profileAvatar')
    const profileName = document.querySelector('.profileName')
    const profileUsername = document.querySelector('.profileUsername')
    const repositorios = document.querySelector('.repositorios')
    const seguidores = document.querySelector('.seguidores')
    const seguindo = document.querySelector('.seguindo')
    const numbers = document.querySelector('.profileLink')

    fetch('https://api.github.com/users/PedroCorado').then(function(resultado){
        return resultado.json()
    })
    .then(function(json){
        profileAvatar.src = json.avatar_url
        profileName.innerText = json.name
        profileUsername.innerText = json.name
        repositorios.innerText = json.public_repos
        seguidores.innerText = json.followers
        seguindo.innerText = json.following
        numbers.href = json.html_url
    })
})