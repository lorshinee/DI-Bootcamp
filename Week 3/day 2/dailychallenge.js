// Mad Libs game

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (!noun || !adjective || !person || !verb || !place) {
            alert("Please fill in all the fields.");
            return;
        }

        const story = `Once upon a time, there was a ${adjective} ${noun} named ${person}. ` +
            `One day, ${person} decided to ${verb} to ${place}. The end.`;

        storySpan.textContent = story;
    });

    const shuffleButton = document.createElement('button');
    shuffleButton.textContent = 'Shuffle';
    form.appendChild(shuffleButton);

    shuffleButton.addEventListener('click', function() {
        const stories = [
            "Once upon a time, there was a brave knight named Arthur. One day, Arthur decided to explore the enchanted forest. The end.",
            "Once upon a time, there was a curious cat named Whiskers. One day, Whiskers decided to climb the tallest tree. The end.",
            "Once upon a time, there was a friendly alien named Zorg. One day, Zorg decided to visit planet Earth. The end."
        ];

        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
    });
});
