cur_id = 1
        let songDatabase = [
            {name: "abcd", artist: "dcba", file: "eng/1.mp3"},
            {name: "efgh", artist: "efg", file: "eng/2.mp3"},
            {name: "aspa", artist: "aspa", file: "eng/3.mp3"},
            {name: "weeb", artist: "wespa", file: "eng/4.mp3"},
        ]
        const playPauseButton = document.getElementById("play-pause");
        const seekBar = document.getElementById('seek-bar');
        const volumeControl = document.getElementById('volume');
        const songTitle = document.getElementById('song-title');
    
        const audio = new Audio('eng/1.mp3');
