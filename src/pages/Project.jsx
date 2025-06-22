import CardProject from "../widget/CardProject";

const Project = () => {
  return (
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <CardProject
              projectName={
                <>
                  <small>
                    SISTEM INFORMASI KEHADIRAN MENGGUNAKAN
                    <i> QUICK RESPONSE CODE (QR CODE)</i> BERBASIS WEB DAN
                    NOTIFIKASI TELEGRAM ( STUDI KASUS : SMKN 1 CIBATU )
                  </small>
                </>
              }
              projectDescription={
                <>
                  Sistem Informasi Kehadiran Berbasis QR Code dan Notifikasi
                  Telegram – SMKN 1 Cibatu Aplikasi berbasis web yang dikembangkan menggunakan framework <b>Codeigniter</b>. Sistem ini digunakan
                  untuk mencatat kehadiran siswa dengan memindai QR Code secara
                  real-time. Setiap kehadiran langsung tercatat ke sistem dan
                  dikirimkan notifikasi otomatis ke akun Telegram yang
                  terhubung. Sistem ini dirancang untuk mempermudah monitoring
                  kehadiran oleh guru, wali kelas dan wali murid secara efisien dan modern.
                </>
              }
              projectImage={"/images/project-1.png"}
            />

            <CardProject 
                projectName={`Let’s Go – Aplikasi Penyedia Jasa Online (UI/UX Prototipe)`}
                projectDescription={
                    <>
                        Let’s Go adalah aplikasi mobile yang dikembangkan menggunakan <b>Flutter</b> yang dirancang sebagai antarmuka layanan penyedia jasa online, terinspirasi dari konsep aplikasi seperti Gojek. Aplikasi ini menampilkan desain user interface untuk berbagai layanan seperti transportasi, pesan antar, dan jasa harian lainnya. Proyek ini difokuskan pada perancangan tampilan dan alur pengguna (UI/UX) sebagai bagian dari tugas kuliah.
                    </>
                }
                projectImage={"/images/project-2.jpg"}
            />

            <CardProject 
                projectName={`Sistem Informasi Manajemen Rumah Sakit (SIMRS) – PT Inovamedika Solusindo`}
                projectDescription={
                    <>
                        Berperan sebagai web developer dalam tim pengembangan SIMRS berbasis web menggunakan framework Yii1. Terlibat dalam proses pengembangan lanjutan dan penambahan beberapa fitur baru sesuai kebutuhan rumah sakit. Fokus pada perbaikan modul dan penyesuaian tampilan antarmuka untuk mendukung efisiensi alur kerja administrasi dan medis.
                    </>
                }
                projectImage={"/images/project-3.jpg"}
            />

            <CardProject 
                projectName={`Integrasi Sistem Satu Sehat – PT Inovamedika Solusindo`}
                projectDescription={
                    <>
                        Terlibat dalam proses pengembangan dan penyesuaian modul integrasi Sistem Informasi Manajemen Rumah Sakit (SIMRS) dengan platform Satu Sehat dari Kementerian Kesehatan dengan menggunakan framework Yii2. Tugas mencakup penyesuaian struktur data, komunikasi API, dan validasi data medis agar sesuai dengan standar interoperabilitas nasional. Pengembangan dilakukan menggunakan framework Yii dan mengikuti regulasi sistem kesehatan digital Indonesia.
                    </>
                }
                projectImage={"/images/project-4.jpg"}
            />

            <CardProject 
                projectName={`Sistem Informasi Pencegahan dan Pengendalian Infeksi (PPI) – PT Inovamedika Solusindo`}
                projectDescription={
                    <>
                        Berperan dalam pengembangan modul PPI pada sistem informasi rumah sakit dengan framework Yii2 yang mendukung pencatatan, pelaporan, dan pemantauan kasus infeksi di lingkungan fasilitas kesehatan. Fitur yang dikembangkan meliputi input data kejadian infeksi, laporan surveilans, dan integrasi standar pelaporan nasional. Pengembangan dilakukan menggunakan Yii framework dengan pendekatan modular untuk kemudahan pemeliharaan sistem.
                    </>
                }
                projectImage={"/images/project-5.jpg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
