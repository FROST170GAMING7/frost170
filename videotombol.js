document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen utama
    const mainPlayer = document.getElementById('mainPlayer');
    const toggleMuteBtn = document.getElementById('toggleMute');
    const videoButtons = document.querySelectorAll('#videoList button'); // Pastikan ID ul adalah 'videoList' (tanpa spasi)

    // Fungsi untuk tombol video: Ubah src dan load video baru
    videoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            if (src) {
                mainPlayer.src = src; // Set sumber baru
                mainPlayer.load(); // Load video baru
                mainPlayer.play(); // Otomatis putar (opsional, hapus jika tidak ingin auto-play)
            } else {
                alert('Sumber video tidak tersedia untuk video ini.');
            }
        });
    });

    // Fungsi untuk tombol Mute/Unmute
    toggleMuteBtn.addEventListener('click', function() {
        if (mainPlayer.muted) {
            mainPlayer.muted = false; // Unmute
            toggleMuteBtn.textContent = 'Mute';
        } else {
            mainPlayer.muted = true; // Mute
            toggleMuteBtn.textContent = 'Unmute';
        }
    });
});