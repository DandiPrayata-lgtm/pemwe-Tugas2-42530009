const daftarFilm = [
    { id: 1, judul: 'BoBoiBoy The Movie', genre: 'Animasi', tahun: 2016, sutradara: 'Nizam Razak',
      poster: '/images/boboiboy-the-movie.png',
      sinopsis: 'BoBoiBoy, Merupakan film animasi dari Malaysia yang bertemakan superhero anak-anak.' },

    { id: 2, judul: 'Toy Story 2', genre: 'Animasi', tahun: 1999, sutradara: 'John Lasseter',
      poster: '/images/toy-story-2.png',
      sinopsis: 'toy Story 2, menceritakan perpetualngan maian-mainan di luar kehidupan manusia.' },

    { id: 3, judul: 'Godzilla x Kong: The New Empire', genre: 'Sci-Fi', tahun: 2024, sutradara: 'Adam Wingard',
      poster: '/images/godzilla-x-kong.png',
      sinopsis: 'Godzilla x Kong, menceritakan bersatunya Godzilla dan Kong yang harus melawan monster yang mengancam kehidupan manusia.' },

    { id: 4, judul: 'Avatar: Fire and Ash', genre: 'Sci-Fi', tahun: 2025, sutradara: 'James Cameron',
      poster: '/images/avatar-fire-and-ash.png',
      sinopsis: 'Avatar: Fire and Ash, meceritakan jack suly dan warga pandora yang berusaha menyelamatkan tempat asal mereka dari serangan manusia.' },
    
      { id: 5, judul: 'Suzzanna: Malam Jumat Kliwon', genre: 'Horror', tahun: 2023, sutradara: 'Guntur Soeharjanto',
      poster: '/images/suzzanna-malam-jumat-kliwon.png',
      sinopsis: 'Suzzanna: Malam Jumat Kliwon, menceritakan kisah Suzzanna yang meninggal pada malam Jumat Kliwon, lalu arwahnya gentayangan untuk membalas dendam.' }
];

const ambilGenre = () => [...new Set(daftarFilm.map(item => item.genre))];

// Untuk semua film, atau satu genre yang parameter genre diisi 
const cariBerdasarkanGenre = (genre) => {
    if (!genre) return daftarFilm;
    return daftarFilm.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
};

// Berlaku untuk Satu film dari ID 
const cariBerdasarkanId = (id) => daftarFilm.find(item => item.id === Number(id));

module.exports = { ambilGenre, cariBerdasarkanGenre, cariBerdasarkanId };