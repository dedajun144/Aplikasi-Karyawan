import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [negara, setNegara] = useState("Indonesia");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUsersById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nik,
        nama,
        umur,
        tanggal_lahir,
        jenis_kelamin,
        alamat,
        negara,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNik(response.data.nik);
    setNama(response.data.nama);
    setUmur(response.data.umur);
    setTanggal_lahir(response.data.tanggal_lahir);
    setJenis_kelamin(response.data.jenis_kelamin);
    setAlamat(response.data.alamat);
    setNegara(response.data.negara);
  };
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">NIK</label>
            <div className="control">
              <input type="text" className="input" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Lengkap</label>
            <div className="control">
              <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
            </div>
          </div>
          <div className="field">
            <label className="label">Jenis Kelamin</label>
            <div className="control">
              <input type="text" className="input" value={jenis_kelamin} onChange={(e) => setJenis_kelamin(e.target.value)} placeholder="jenis kelamin" />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input type="date" className="input" value={tanggal_lahir} onChange={(e) => setTanggal_lahir(e.target.value)} placeholder="Tanggal Lahir" />
            </div>
          </div>
          <div className="field">
            <label className="label">Umur</label>
            <div className="control">
              <input type="text" className="input" value={umur} onChange={(e) => setUmur(e.target.value)} placeholder="Umur" />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input type="text" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
            </div>
          </div>
          <div className="field">
            <label className="label">Negara</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={negara} onChange={(e) => setNegara(e.target.value)}>
                  <option value="indonesia">Indonesia</option>
                  <option value="belanda">Belanda</option>
                  <option value="singapore">Singapore</option>
                  <option value="inggris">Inggris</option>
                  <option value="malaysia">Malaysia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-succes">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
