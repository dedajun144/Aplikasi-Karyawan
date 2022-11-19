import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Table, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddUser = () => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [negara, setNegara] = useState("Indonesia");
  const navigate = useNavigate();
  const seveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/users`, {
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

  return (
    <>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={seveUser}>
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
              {/* <div className="control">
                <input type="text" className="input" value={jenis_kelamin} onChange={(e) => setJenis_kelamin(e.target.value)} placeholder="jenis kelamin" />
              </div> */}
            </div>
            <FormGroup value={jenis_kelamin} onChange={(e) => setJenis_kelamin(e.target.value)} tag="fieldset" row>
              <Col sm={2}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" value={"Laki-Laki"} /> Laki-Laki
                  </Label>
                </FormGroup>
              </Col>
              <Col sm={2}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" value={"Perempuan"} /> Perempuan
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>

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
              <Button type="submit" className="button ">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
