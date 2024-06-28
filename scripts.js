document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');

    homeButton.addEventListener('click', () => {
        alert('¡Botón de Inicio clicado!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.getElementById('storyForm');
    const storiesList = document.getElementById('storiesList');

    storyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const storyTitle = document.getElementById('storyTitle').value;
        const storyContent = document.getElementById('storyContent').value;

        if (storyTitle && storyContent) {
            const storyItem = document.createElement('li');
            storyItem.innerHTML = `
                <h4>${storyTitle}</h4>
                <p>${storyContent}</p>
                <button class="delete-story">Eliminar</button>
                <div class="comments">
                    <h5>Comentarios</h5>
                    <ul class="comment-list"></ul>
                    <form class="comment-form">
                        <input type="text" class="comment-input" placeholder="Escribe tu comentario" required>
                        <button type="submit">Comentar</button>
                    </form>
                </div>
            `;
            storiesList.appendChild(storyItem);

            storyForm.reset();

            // Agregar funcionalidad de eliminar historia
            const deleteButton = storyItem.querySelector('.delete-story');
            deleteButton.addEventListener('click', () => {
                storiesList.removeChild(storyItem);
            });

            // Agregar funcionalidad de comentar
            const commentForm = storyItem.querySelector('.comment-form');
            const commentList = storyItem.querySelector('.comment-list');
            
            commentForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const commentInput = commentForm.querySelector('.comment-input');
                const commentText = commentInput.value;

                if (commentText) {
                    const commentItem = document.createElement('li');
                    commentItem.classList.add('comment');
                    commentItem.innerHTML = `<p>${commentText}</p>`;
                    commentList.appendChild(commentItem);

                    commentForm.reset();
                }
            });
        }
    });
});