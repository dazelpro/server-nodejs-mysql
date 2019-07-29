module.exports  = function(app){
const bodyParser= require('body-parser');
const database  = require('../app-config/database');
const cors      = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

    // Route untuk menampilkan Semua Data User
    app.get('/api-karyawan/karyawan', function (req, res) {
        database.query('SELECT * FROM tbl_karyawan', function (error, results) {
            if (error) throw error;
            return res.send({ 
                error: false, 
                data: results, 
                message: 'Berhasil !' 
            });
        });
    });

    app.get('/api-karyawan/karyawan/:id', function (req, res) {
        let nip = req.params.id;
        database.query('SELECT * FROM tbl_karyawan where nip=?', nip, function (error, results) {
        if (error) throw error;
            return res.send({ error: false, data: results[0], message: 'Berhasil !' });
        });
    });

    app.post('/api-karyawan/add-karyawan', function (req, res) {
        let nip     = req.body.nip;
        let nama    = req.body.nama;
        let alamat  = req.body.alamat;
        let jabatan = req.body.jabatan;
        database.query("INSERT INTO tbl_karyawan SET ? ", { 
            nip: nip,
            nama: nama, 
            alamat: alamat, 
            jabatan: jabatan,
        }, function (error, results) {
        if (error) throw error;
            return res.send({ 
                message: 'Berhasil Menambah Data !' ,
                data: results                
            });
        });
    });
    
    app.put('/api-karyawan/edit-karyawan', function (req, res) {  
        let nip = req.body.nip;
        let nama = req.body.nama;
        let alamat  = req.body.alamat;
        let jabatan = req.body.jabatan;      
        database.query("UPDATE tbl_karyawan SET nama = ?, alamat = ?, jabatan = ? WHERE nip = ?", [nama, alamat, jabatan, nip], function (error, results) {
        if (error) throw error;
        return res.send({ 
            data: results, 
            message: 'Berihasil Edit Data !' });
        });
    });

    app.delete('/api-karyawan/hapus-karyawan/:id', function (req, res) {  
        let nip = req.params.id;
        database.query('DELETE FROM tbl_karyawan WHERE nip = ?', [nip], function (error, results) {
        if (error) throw error;
        return res.send({ 
            data: results, 
            message: 'Berhasil !' });
        });
    }); 
}