
document.addEventListener('DOMContentLoaded', function() {
    var bgMusic = document.getElementById('bgMusic');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        playAudio();
    });

    function playAudio() {
        // Kiểm tra xem trình duyệt đã sẵn sàng phát âm thanh chưa
        if (bgMusic.readyState >= 2) {
            bgMusic.play();
        } else {
            // Nếu không, chờ sự kiện 'canplaythrough' được kích hoạt
            bgMusic.addEventListener('canplaythrough', function() {
                bgMusic.play();
            });
        }
    }
});
