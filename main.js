onload = () =>{
        document.body.classList.remove("container");
};

function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.log('Error:', error));
    }
    

    document.addEventListener("DOMContentLoaded", function() {
        const audio = document.getElementById('background-audio');
        audio.volume = 0.5;
    });
    