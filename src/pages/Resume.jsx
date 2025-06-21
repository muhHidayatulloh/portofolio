import CardResume from "../widget/CardResume"
const Resume = () => {
    return (
        <>
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {/* Education Section */}
                        <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-4">Edukasi</h2>
                                <a className="btn btn-primary px-4 py-3" href="/document/resume.pdf" download={true}>
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div>
                            <CardResume
                                year={'2018 - 2022'}
                                position={'Sekolah Tinggi Teknologi Bandung'}
                                company={''}
                                gelar={'S1'}
                                jurusan={'Teknik Informatika'}
                                cssColorYear={'text-primary'}
                                description={'Selama menempuh pendidikan di STT Bandung, saya mempelajari dasar-dasar pemrograman, struktur data, basis data, jaringan komputer, serta pengembangan perangkat lunak. Saya juga aktif dalam berbagai proyek pengembangan aplikasi dan riset kecil yang mendukung pemahaman praktis di bidang teknologi informasi.'}
                            />
                            <CardResume
                                year={'2015 - 2018'}
                                position={'SMKN 1 Bongas'}
                                company={''}
                                gelar={'SMK'}
                                jurusan={'Teknik Komputer dan Jaringan (TKJ)'}
                                cssColorYear={'text-primary'}
                                description={'Selama bersekolah di jurusan TKJ, saya mempelajari dasar-dasar jaringan komputer, instalasi perangkat keras dan lunak, perakitan komputer, serta pengelolaan sistem operasi dan jaringan. Pendidikan ini menjadi fondasi awal ketertarikan saya terhadap dunia IT dan teknologi jaringan.'}
                            />
                        </section>

                        {/* Skills */}
                        <section>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="mb-5">
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Keahlian</span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                            </div>
                                             <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">PHP</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Codeigniter</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Yii</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">PostgreSQL</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Flutter</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React.js</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">C++</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">RESTful API</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Git Control</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section>
                            <h2 className="text-danger fw-bolder mb-0">Pengalaman</h2>
                            <CardResume
                                year={'2022 - Present'}
                                position={'Web Developer'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-danger'}
                                description={
                                    <>
                                        <p>Bertanggung jawab dalam pengembangan dan pemeliharaan berbagai aplikasi web klien, khususnya di sektor kesehatan. Lingkup pekerjaan mencakup:</p>
                                        <ul>
                                            <li>Membangun dan mengembangkan fitur aplikasi berbasis web menggunakan teknologi seperti PHP (Yii1, Yii2), JavaScript, dan PostgreSQL</li>
                                            <li>Merancang antarmuka pengguna yang responsif dan fungsional dengan menggunakan HTML, CSS, dan framework frontend (seperti Bootstrap dll )</li>
                                            <li>Berkolaborasi dengan tim untuk merancang struktur database dan integrasi API.</li>
                                            <li>Implementasi bridging API BPJS dan Satu Sehat</li>
                                            <li> Melakukan debugging, optimasi performa, dan peningkatan keamanan aplikasi</li>
                                            <li>Mendukung proses deployment serta melakukan pemeliharaan dan pembaruan sistem secara berkala</li>
                                        </ul>
                                        <p>Selama bekerja di sini, saya banyak terlibat dalam pengembangan sistem manajemen rumah sakit dan aplikasi terkait pelayanan medis, yang menuntut akurasi tinggi, efisiensi, dan kepatuhan terhadap standar data sensitif</p>
                                    </>
                                }
                            />
                            <CardResume
                                year={'2018 - 2022'}
                                position={'Operator Cutting Mechine'}
                                company={'PT. Kinenta Indonesia'}
                                location={'Purwakarta'}
                                cssColorYear={'text-danger'}
                                description={
                                    <>
                                        <p>Selama masa kuliah, saya menjalani program magang sekaligus bekerja sebagai Operator Mesin Cutting di PT. Kinenta Indonesia. Dalam peran ini, saya bertanggung jawab untuk mengoperasikan dan mengawasi mesin pemotong material sesuai standar produksi. Tugas saya meliputi</p>
                                        <ul>
                                            <li>Menyiapkan dan mengatur parameter mesin cutting sesuai dengan spesifikasi produksi</li>
                                            <li>Memastikan hasil potongan sesuai dengan ukuran dan kualitas yang ditetapkan</li>
                                            <li>Melakukan perawatan rutin ringan pada mesin untuk menjaga performa dan mencegah kerusakan</li>
                                            <li>Berkoordinasi dengan tim produksi untuk memastikan kelancaran alur kerja</li>
                                            <li>Mencatat laporan kerja harian dan mendeteksi potensi masalah pada proses pemotongan</li>
                                            <li>Pengalaman ini mengasah kemampuan teknis saya di bidang manufaktur serta membentuk disiplin kerja dan pemahaman mendalam terhadap proses produksi industri</li>
                                        </ul>
                                        <p>Pengalaman ini mengasah kemampuan teknis saya di bidang manufaktur serta membentuk disiplin kerja dan pemahaman mendalam terhadap proses produksi industri.</p>
                                    </>
                                }
                            />
                        </section>

                        {/* acivment section */}
                        <section>
                            <h2 className="text-info fw-bolder mb-0">Prestasi</h2>
                            <CardResume
                                year={<><i>Maret</i> 2025</>}
                                position={'Best Orginizer Inovers in Quarter 1 2025'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang mampu menjadi teladan dalam mengelola waktu, tugas, dan prioritas dengan efektif. Karyawan menunjukkan bahwa produktivitas sejati bukan hanya soal menyelesaikan pekerjaan, tetapi juga tentang bagaimana setiap langkah dirancang dengan cermat dan dijalankan secara konsisten. Dengan komitmen tinggi dan perencanaan yang matang, penerima penghargaan ini menghadirkan kualitas dalam setiap proses, menjadikan keterampilan organisasionalnya sebagai kunci keberhasilan tim.</p>
                                    </>
                                }
                                imgSrc={'/images/tw1-2025.jpg'}
                            />
                            <CardResume
                                year={<><i>Desember</i> 2024</>}
                                position={'Best Inovers of the Year 2024'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan sebagai bentuk apresiasi kepada karyawan terbaik yang menunjukkan dedikasi, inovasi, dan kontribusi luar biasa terhadap pertumbuhan dan pengembangan perusahaan selama tahun 2024. Saya dinobatkan sebagai <b>Best Inovers of the Year</b> atas keberhasilan dalam menghadirkan solusi teknologi yang berdampak nyata, kolaborasi tim yang efektif, serta konsistensi dalam memberikan hasil kerja berkualitas tinggi di setiap proyek. Penghargaan ini menjadi motivasi untuk terus berinovasi dan memberikan yang terbaik di masa mendatang</p>
                                    </>
                                }
                                imgSrc={'/images/best-inovers-2024.jpg'}
                            />
                            <CardResume
                                year={<><i>Desember</i> 2024</>}
                                position={'Best Planner Inovers in Quarter 4 2024'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang memahami pentingnya merencanakan segala sesuatu sejak awal. Dengan perencanaan yang matang dan terstruktur, ia memastikan setiap rencana kerja berjalan sesuai arah dan tujuan. Setiap issue yang ditangani terdokumentasi secara tepat dan rinci, mencerminkan ketelitian serta keseriusannya. Ia juga konsisten dalam menjaga agar tidak ada pekerjaan yang tertunda atau laporan yang tak lengkap—menjadikan dirinya sosok yang andal dalam menggerakkan tim menuju pencapaian bersama.</p>
                                    </>
                                }
                                imgSrc={'/images/tw4-2024.jpg'}

                            />
                            <CardResume
                                year={<><i>September</i> 2024</>}
                                position={'Best Orginizer Inovers in Quarter 3 2024'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang mampu menjadi teladan dalam mengelola waktu, tugas, dan prioritas dengan efektif. Karyawan menunjukkan bahwa produktivitas sejati bukan hanya soal menyelesaikan pekerjaan, tetapi juga tentang bagaimana setiap langkah dirancang dengan cermat dan dijalankan secara konsisten. Dengan komitmen tinggi dan perencanaan yang matang, penerima penghargaan ini menghadirkan kualitas dalam setiap proses, menjadikan keterampilan organisasionalnya sebagai kunci keberhasilan tim.</p>
                                    </>
                                }
                                imgSrc={'/images/tw3-2024.jpg'}

                            />
                            <CardResume
                                year={<><i>Juni</i> 2024</>}
                                position={'Best Orginizer Inovers in Quarter 2 2024'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang mampu menjadi teladan dalam mengelola waktu, tugas, dan prioritas dengan efektif. Karyawan menunjukkan bahwa produktivitas sejati bukan hanya soal menyelesaikan pekerjaan, tetapi juga tentang bagaimana setiap langkah dirancang dengan cermat dan dijalankan secara konsisten. Dengan komitmen tinggi dan perencanaan yang matang, penerima penghargaan ini menghadirkan kualitas dalam setiap proses, menjadikan keterampilan organisasionalnya sebagai kunci keberhasilan tim.</p>
                                    </>
                                }
                                imgSrc={'/images/tw2-2024.jpg'}

                            />
                            <CardResume
                                year={<><i>Maret</i> 2024</>}
                                position={'Best Orginizer Inovers in Quarter 1 2024'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan sebagai bentuk apresiasi dan penyemangat bagi karyawan yang menunjukkan komitmen tinggi terhadap pengembangan diri. Dalam perannya sebagai web programmer, ia terus belajar, memperluas wawasan, dan mengasah keterampilan agar selalu relevan dengan kebutuhan zaman. Semangatnya untuk bertumbuh secara berkelanjutan mencerminkan dedikasi terhadap kualitas, inovasi, dan profesionalisme dalam setiap hasil kerja yang dihasilkan.</p>
                                    </>
                                }
                                imgSrc={'/images/tw1-2024.jpg'}

                            />
                            <CardResume
                                year={<><i>Desember</i> 2023</>}
                                position={'Best Growth Mindset in Quarter 4 2023'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang menunjukkan pola pikir berkembang dalam setiap tantangan yang dihadapi. Sebagai seorang web programmer yang dapat dipercaya, ia tidak hanya konsisten dalam pekerjaannya, tetapi juga menumbuhkan semangat optimisme di dalam tim, bahkan saat menghadapi tugas yang kompleks. Kemampuannya dalam menyelesaikan masalah dengan efektif mencerminkan pemikiran yang terbuka untuk terus belajar dan berkembang. Loyalitas serta dedikasinya menjadikannya panutan dalam menjalankan peran profesional secara utuh.</p>
                                    </>
                                }
                                imgSrc={'/images/tw4-2023.jpg'}

                            />
                            <CardResume
                                year={<><i>Juni</i> 2023</>}
                                position={'Best Growth Mindset in Quarter 2 2023'}
                                company={'PT. Inovamedika Solusindo'}
                                location={'Bandung'}
                                cssColorYear={'text-info'}
                                description={
                                    <>
                                        <p>Penghargaan ini diberikan kepada karyawan yang menunjukkan pola pikir berkembang dalam setiap tantangan yang dihadapi. Sebagai seorang web programmer yang dapat dipercaya, ia tidak hanya konsisten dalam pekerjaannya, tetapi juga menumbuhkan semangat optimisme di dalam tim, bahkan saat menghadapi tugas yang kompleks. Kemampuannya dalam menyelesaikan masalah dengan efektif mencerminkan pemikiran yang terbuka untuk terus belajar dan berkembang. Loyalitas serta dedikasinya menjadikannya panutan dalam menjalankan peran profesional secara utuh.</p>
                                    </>
                                }
                                imgSrc={'/images/tw2-2023.jpg'}

                            />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume