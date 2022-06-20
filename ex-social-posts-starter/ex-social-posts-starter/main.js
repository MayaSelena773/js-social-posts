
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
// ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, 
// stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e 
// incrementiamo il counter dei likes relativo.



//Creazione dell'array di oggetti con i vari post
//che al loro interno dovranno avere: icona random, nome, data, testo, immagine random, like btn, counter likes.
//Ma icona random, testo, immagine random e like btn sono gli unici uguali per tutti,
//quindi saranno nel template html


const posts = [
    { 
        name: 'Phil Mangione',
        date: '4 mesi fa',
        likes: 80
    },
    {
        name: 'Sofia Perlari',
        date:  '9-3-2021',
        likes: 120
    },
    {
        name: 'Robin Williams',
        date:  '11-2-2012',
        likes: 22000
    },
];

//All'avvio della pagina
drawAllPosts(posts);


function drawAllPosts(postsArray) {
    const postContainer = document.querySelector('.posts-list');

    for(let i = 0; i < postsArray.length; i++) {
        const thisPost = postsArray[i];
        const {name, date, likes} = thisPost;

        // Per ogni post creo il template e lo stampo
        const postTemplate = `
        <div class="post">
            <div class="post__header">

                <div class="post-meta"> 

                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt=${name}>                    
                    </div>

                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>  

                </div>

            </div>

            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>

            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">

                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>

                    </div>

                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                    
                </div> 
            </div>            
        </div>
        `;

        postContainer.innerHTML += postTemplate;
    }
}
