  document.addEventListener('DOMContentLoaded', function() {
        const videos = document.querySelectorAll('.instance');

        videos.forEach(video => {
            video.addEventListener('play', function() {
                videos.forEach(v => {
                    if (v !== video) {
                        v.pause();
                    }
                });
            });
        });
    });