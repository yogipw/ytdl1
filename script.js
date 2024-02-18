function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl !== '') {
        axios.get('https://vihangayt.me/download/ytmp4', {
            params: {
                url: videoUrl
            }
        })
        .then(response => {
            var data = response.data;
            if (data.status) {
                var downloadResult = document.getElementById('downloadResult');
                downloadResult.innerHTML = `
                    <h3>${data.data.title}</h3>
                    <img src="${data.data.thumbnail}" class="img-thumbnail" alt="Thumbnail">
                    <p>Duration: ${data.data.duration}</p>
                    <p><a href="${data.data.vid_360p}" class="btn btn-primary" download>Download Video (360p)</a></p>
                    <p><a href="${data.data.vid_720p}" class="btn btn-primary" download>Download Video (720p)</a></p>
                `;
            } else {
                alert('Gagal mendapatkan data video. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengunduh data video. Silakan coba lagi.');
        });
    } else {
        alert('Silakan masukkan URL video YouTube.');
    }
}
