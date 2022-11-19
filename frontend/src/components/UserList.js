import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css";
export const UserList = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [querynik, setQuerynik] = useState("");

  useEffect(() => {
    getUsers();
  }, [page, keyword]);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`);
    setUser(response.data.response);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const searchDataNik = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(querynik);
  };
  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Aplikasi Data Pribadi</h2>
        </div>
      </div>
      <div className="container-search">
        <Form onSubmit={searchDataNik}>
          <div className="row">
            <Label>NIK</Label>
            <div className="col-10">
              <div class="input-group mb-3">
                <Input type="text" name="nik" value={querynik} onChange={(e) => setQuerynik(e.target.value)} class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <Form onSubmit={searchData}>
          <div className="row">
            <Label>Nama</Label>
            <div className="col-10">
              <div class="input-group mb-3">
                <Input type="text" name="nama" value={query} onChange={(e) => setQuery(e.target.value)} class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <div className="container">
        <div className="row justify-content-end">
          <div className="col-1 ">
            <Link to={`add`} className="btn ">
              Add New
            </Link>
          </div>
          {/* <div className="col-1 ">
            <Button onChange={handleChange} className="btn ">
              Search
            </Button>
          </div> */}
        </div>
      </div>
      <div className="columns mt-12 is-centered">
        <div className="column ">
          <Table bordered>
            <thead className="thead">
              <tr>
                <th>No</th>
                <th>NIK</th>
                <th>Nama </th>
                <th>Umur</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Alamat</th>
                <th>Negara</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.nik}</td>
                  <td>{user.nama}</td>
                  <td>{user.umur}</td>
                  <td>{user.tanggal_lahir}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.alamat}</td>
                  <td>{user.negara}</td>
                  <td>
                    <Link to={`edit/${user.id}`} className="button is-small is-info">
                      Edit
                    </Link>
                    <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
