fetch('http://192.168.1.18:3000/songs')
   .then(response => response.json())
   .then(songs => {
        const songListContainer = document.querySelector('.song-list');

        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';

            const songNameSpan = document.createElement('span');
            songNameSpan.className = 'song-name';
            songNameSpan.textContent = song.name;

            const playButton = document.createElement('button');
            playButton.className = 'control-btn play';
            playButton.textContent = 'Play';

            playButton.addEventListener('click', () => {
                window.location.href = `http://192.168.1.18:3000/songs/${song.name}${song.extension}`;
            });

            const pauseButton = document.createElement('button');
            pauseButton.className = 'control-btn pause';
            pauseButton.textContent = 'Pause';

            songDiv.appendChild(songNameSpan);
            songDiv.appendChild(playButton);
            songDiv.appendChild(pauseButton);

            songListContainer.appendChild(songDiv);
        });
    })
   .catch(error => console.error('Error:', error));
