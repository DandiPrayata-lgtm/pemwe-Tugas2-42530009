const FilmModel = require('../models/film.model');
const renderTidakDitemukan = (res, pesan) => {
    res.status(404).render('pages/404', { pageTitle: 'Tidak Ditemukan', pesan: pesan });
};

// Halaman 1: Daftar film dan filter Query Parameter
exports.getKatalog = (req, res) => {
    const genreDipilih = typeof req.query.genre === 'string' ? req.query.genre.toLowerCase() : '';

    res.render('pages/katalog', {
        pageTitle: 'Daftar Film',
        film: FilmModel.cariBerdasarkanGenre(genreDipilih),
        genre: FilmModel.ambilGenre(),
        genreDipilih: genreDipilih
    });
};

// Halaman 2: Detail film Route Parameter
exports.getDetail = (req, res) => {
    const film = FilmModel.cariBerdasarkanId(req.params.id);

    if (!film) {
        return renderTidakDitemukan(res, `Film dengan ID "${req.params.id}" tidak ditemukan.`);
    }
    res.render('pages/detail', { pageTitle: film.judul, film: film });
};

// Fallback: alamat tidak didaftarr
exports.getNotFound = (req, res) => {
    renderTidakDitemukan(res, 'Halaman yang kamu cari tidak ada.');
};