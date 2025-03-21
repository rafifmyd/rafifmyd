// Membuat sebuah array dan mengisi dengan nomor, pertanyaan, pilihan, dan jawaban
let questions = [
  {
    numb: 1,
    question: "Sejarah adalah suatu ilmu tersendiri dan tergolong dalam ilmu-ilmu sosial. Pernyataan ini dikemukakan oleh?",
    answer: "Gottschalk",
    options: [
      "Burry",
      "Spencer",
      "Gottschalk",
      "Notosusanto"
    ]
  },
  {
    numb: 2,
    question: "Tahapan awal dari metode sejarah adalah?",
    answer: "Heuristik",
    options: [
      "Penentuan topik",
      "Historiografi",
      "Kritik",
      "Heuristik"
    ]
  },
  {
    numb: 3,
    question: "Hubungan sebab akibat antara peristiwa satu dengan peristiwa lain dalam sejarah disebut?",
    answer: "Kausalitas",
    options: [
      "Periodisasi",
      "Kausalitas",
      "Kronologi",
      "Interpretasi"
    ]
  },
  {
    numb: 4,
    question: "Ilmu yang mempelajari kehidupan masa lampau sebelum adanya sumber-sumber tertulis disebut?",
    answer: "Ilmu Prasejarah",
    options: [
      "Ilmu Sejarah",
      "Ilmu Antropologi",
      "Ilmu Prasejarah",
      "Ilmu Geologi"
    ]
  },
  {
    numb: 5,
    question: "Dimensi spasial dalam sejarah disebut dimensi?",
    answer: "Ruang",
    options: [
      "Perubahan",
      "Waktu",
      "Perkembangan",
      "Ruang"
    ]
  },
  {
    numb: 6,
    question: "Perang Dunia Kedua dimulai pada tahun berapa?",
    answer: "1939",
    options: [
      "1941",
      "1939",
      "1938",
      "1940"
    ]
  },
  {
    numb: 7,
    question: "Siapa yang dikenal sebagai Bapak Kemerdekaan Indonesia?",
    answer: "Soekarno",
    options: [
      "Suharto",
      "Soekarno",
      "Hamengkubuwono IX",
      "Jenderal Sudirman"
    ]
  },
  {
    numb: 8,
    question: "Peristiwa sejarah yang berlangsung pada tahun 1965 di Indonesia dikenal dengan nama?",
    answer: "G30S/PKI",
    options: [
      "Revolusi Fisik",
      "G30S/PKI",
      "Orde Baru",
      "Proklamasi"
    ]
  },
  {
    numb: 9,
    question: "Siapa penulis buku 'Pengantar Ilmu Sejarah'?",
   answer: "Bertrand Russell",
   options: [
     "David Hilbert",
     "Bertrand Russell",
     "Max Weber",
     "Herbert Spencer"
   ]
   },
   {
     numb: 10,
     question:'Peristiwa apa yang menandai berakhirnya Perang Dingin?',
     answer:'Runtuhnya Tembok Berlin',
     options:[
       'Berakhirnya Perang Vietnam',
       'Runtuhnya Tembok Berlin',
       'Jatuhnya Uni Soviet',
       'Konferensi Bandung'
     ]
   },
   {
     numb :11,
     question:'Siapa yang menjadi presiden pertama Republik Indonesia?',
     answer:'Soekarno',
     options:[
       'Suharto',
       'Soekarno',
       'Susilo Bambang Yudhoyono',
       'BJ Habibie'
     ]
   },
   {
     numb :12,
     question:'Peristiwa yang menandai dimulainya reformasi di Indonesia adalah?',
     answer:'Jatuhnya Suharto',
     options:[
       'Berdirinya Orde Baru',
       'Jatuhnya Suharto',
       'Proklamasi Kemerdekaan',
       'Konferensi Mekkah'
     ]
   },
   {
     numb :13,
     question:'Siapa yang dikenal sebagai pahlawan nasional yang memimpin penolakan penjajahan Belanda?',
     answer:'Pangeran Diponegoro',
     options:[
       'Pahlawan Revolusi',
       'Pangeran Diponegoro',
       'Jenderal Sudirman',
       'Sutan Sahrir'
     ]
   },
   {
     numb :14,
     question:'Apa nama pertempuran penting yang terjadi antara Indonesia dan Belanda pada tahun 1945?',
     answer:'Pertempuran Surabaya',
     options:[
       'Pertempuran Medan Area',
       'Pertempuran Surabaya',
       'Pertempuran Amarapura',
       'Pertempuran Bali'
     ]
   },
   {
     numb :15,
     question:'Apa sebutan untuk kelompok yang berjuang untuk memperjuangkan kemerdekaan Indonesia?',
     answer:'Pejuang Kemerdekaan',
     options:[
       'Pemuda Pancasila',
       'Pejuang Kemerdekaan',
       'BPUPKI',
       'Laskar Rakyat'
     ]
   },
   {
        numb :16,
        question:'Siapa yang dikenal sebagai tokoh pendidikan modern di Indonesia?',
        answer:'Ki Hajar Dewantara', 
        options:[
          'Tan Malaka',
          'Ki Hajar Dewantara', 
          'Sunan Kalijaga', 
          'H.O.S. Cokroaminoto'
        ]
   }, 
   {
        numb :17,
        question:'Apa nama dokumen penting yang menjadi dasar negara Indonesia?', 
        answer:'Undang-Undang Dasar 1945', 
        options:[ 
          'Tindak Lanjut Maklumat', 
          'Undang-Undang Dasar 1945', 
          'Deklarasi Kemerdekaan', 
          'Preambule'
        ]
   }, 
   {
        numb :18, 
        question:'Apa nama perjanjian yang mengakhiri pertempuran antara Indonesia dan Belanda pada tahun 1949?', 
        answer:'Perjanjian Roem-Van Roijen', 
        options:[ 
          'Perjanjian Linggar Jati', 
          'Perjanjian Roem-Van Roijen', 
          'Konferensi Meja Bundar', 
          'Perjanjian Jakarta' 
        ] 
   },  
   {  
        numb :19,  
        question :'Siapa pahlawan wanita yang dikenal karena perannya dalam perjuangan kemerdekaan?',  
        answer :'Raja Indahkarya Sinta Marisa Syafira Solihati Alwaliah Srikandi Belanda',  
         options:[  
           'Raja Indahkarya Sinta Marisa Syafira Solihati Alwaliah Srikandi Belanda',  
           'Kartini',  
           'Discussion of Ibukota',  
           'Bunda Nyai'  
          ]
   }, 
   {
                   numb: 20,
          question: 'Saat beranjak dari Rengasdengklok, Soekarno dan Hatta telah berusaha menemui Jenderal Nishimura untuk menyampaikan rencana proklamasi kemerdekaan Indonesia. Bagaimana respon Nishimura saat itu?',
          answer: 'Melarang tegas Ir. Soekarno dan Bung Hatta untuk memproklamasikan kemerdekaan',
          options: [
            'Melarang tegas Ir.Soekarno dan Bung Hatta untuk memproklamasikan kemerdekaan',
            'Dengan tidak tegas mendukung bahkan menolak rencana proklamasi kemerdekaan',
            ' Menolak untuk menemui Soekarno serta Hatta ketika Jepang kalah atas perang',
            'Adanya kegiatan mendukung rencana proklamasi kemerdekaan Indonesia'
         ]   
   }, // Koma ini dihapus untuk memperbaiki kesalahan sintaksis
];

// Kode sudah diperbaiki dan dapat digunakan tanpa kesalahan sintaksis.

