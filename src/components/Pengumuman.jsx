import './Pengumuman.css'
import HomeImage from '../img/logo-home.png'
import QRCode from '../img/snpmb-fake.png'

function Pengumuman({name, birthdate, university, major, setHasil}) {

    const handleBack = () => {
        setHasil(false);
    };

    let tanggalLahir = birthdate[8]+birthdate[9]+' - '+ birthdate[5] +birthdate[6] + ' - ' + birthdate[0]+birthdate[1]+birthdate[2]+birthdate[3]

    const generateRandomNumber3digit = () => {
        const randomNumber = Math.floor(Math.random() * 900) + 100; // Menghasilkan angka antara 100-999 (3 digit)
        return randomNumber;
    }

    const generateRandomNumber4digit = () => {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        return randomNumber
    }


    const generateRandomNumber6digit = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000; // Menghasilkan angka antara 100000-999999 (6 digit)
        return randomNumber;
    };
      
    let Universitas = generateRandomNumber3digit() + ' - ' + university.toUpperCase();
    let Prodi = generateRandomNumber6digit() + ' - ' + major.toUpperCase();

    let NomorPeserta = '23 - '+ generateRandomNumber4digit() +' - '+ generateRandomNumber6digit();
      

    return (
        <div className="Pengumuman">
            <div className="PengumumanMainContainer">
                <div className="logocontainer">
                    <img src={HomeImage} alt="" />
                </div>
                <div className="judul">
                    PENGUMUMAN HASIL SELEKSI SNBT SNPMB 2023
                </div>
                <div className="isi">
                    <div className="QRCode">
                        <img src={QRCode} alt="" />
                    </div>
                    <div className="MainText">
                        
                            <div className="DataDiri">
                                <div className="DDRow">
                                    <div className="mobileseparator">
                                        <div className="DDType">Nomor peserta</div>
                                        <div className="DDEqual">:</div>
                                    </div>
                                    <div className="DDData"><b>{NomorPeserta}</b></div>
                                </div>
                                <div className="DDRow">
                                    <div className="mobileseparator">
                                        <div className="DDType">Nama</div>
                                        <div className="DDEqual">:</div>
                                    </div>
                                    <div className="DDData"><b>{name}</b></div>
                                </div>
                                <div className="DDRow">
                                    <div className="mobileseparator">
                                        <div className="DDType">tanggal lahir</div>
                                        <div className="DDEqual">:</div>
                                    </div>
                                    <div className="DDData"><b>{tanggalLahir}</b></div>
                                </div>
                            </div>

                            <div className="announce"><b>Selamat! Anda dinyatakan lulus seleksi SNBT SNPMB 2023</b> di</div>

                            <div className="PengumumanHasil">
                                <div className="PHRow">
                                    <div className="mobileseparator">
                                        <div className="PHType">PTN</div>
                                        <div className="PHEqual">:</div>
                                    </div>
                                    <div className="DDData"><b>{Universitas}</b></div>
                                </div>
                                <div className="PHRow">
                                    <div className="mobileseparator">
                                        <div className="PHType">Program Studi</div>
                                        <div className="PHEqual">:</div>
                                    </div>
                                    <div className="PHData"><b>{Prodi}</b></div>
                                </div>
                            </div>

                            <div className="Daful">Persyaratan pendaftaran ulang calon mahasiswa baru dapat dilihat di{' '}<span style={{ color: 'blue' }}>sini</span>.</div>
                            <div className="CetakKartu">Anda dapat mencetak kembali Kartu Tanda Peserta UTBK-SNBT 2023 di{' '}<span style={{ color: 'blue' }}>sini</span>.</div>
                            <div className="TombolCetak">
                                <button id="Cetak">UNDUH PENGUMUMAN KETUA SNPMB (PDF)</button>
                            </div>
                        
                    </div>
                </div>
                <div className="void"></div>
                <div className="back">
                    <button id="back" onClick={handleBack}>Kembali ke pencarian</button>
                </div>
            </div>
        </div>
    );
}

export default Pengumuman;