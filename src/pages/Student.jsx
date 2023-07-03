import React, { useState, useEffect, useContext } from "react";
import Dashboard from "../components/Dashboard";
import mercek from "../assest/mercek.png";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import { Avatar, Box, IconButton } from "@mui/material";
import edit from "../assest/edit.svg";
import deletee from "../assest/delete.svg";
import { useForm } from "react-hook-form";
import EditModal from "../components/EditModal";
import useCall from "../hooks/useCall";
import { UsersContext } from "../contex/UsersContext";

function Student() {
  const { users } = useContext(UsersContext);
  const { handleDelete, getUsers, getUsersByName } = useCall();
  const [searchTerm, setSearchTerm] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [newRow, setNewRow] = useState([]);
  const { setValue } = useForm();

  //! Colon Field'lerini atama
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // { field: "act1", headerName: "", width: 300 },
    {
      field: "avatar",
      headerName: "",
      width: 50,
      // renderCell: (params) => <Avatar src={params.row.avatar} alt="Avatar" />,
      renderCell: (params) => (
        <AvatarWithLoader src={params.row.avatar} alt="Avatar" />
      ),
    },
    { field: "firstName", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 90,
    },
    {
      field: "domain",
      headerName: "Website",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "companyName",
      headerName: "Company name",
      sortable: false,
      width: 160,
    },
    {
      field: "actions",
      headerName: "",
      width: 70,
      renderCell: (params) => (
        <Box sx={{ m: -2 }}>
          <IconButton
            color="primary"
            onClick={() => handleEditOpen(params.row)}
          >
            <img src={edit} alt="" />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
          >
            <img src={deletee} alt="" />
          </IconButton>
        </Box>
      ),
    },
  ];
  //!  satır verilerini atama
  const rows = users.map((user) => ({
    id: user.id,
    avatar: user.image,
    firstName: user.firstName,
    email: user.email,
    phone: user.phone,
    domain: `www.${user.domain}`,
    companyName: user.company?.name,
  }));
  //! Search CRUD istek gönderme
  const handleSearch = () => {
    getUsersByName(searchTerm);
  };

  //! Input değişim event'i
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //! Input veri girişi sonrası Enter ile-event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  //! Modal açma işlemi
  const handleEditOpen = (row) => {
    setSelectedRow(row);
    setEditOpen(true);

    //! Form alanlarına satır verilerini atama
    setValue("name", row.firstName);
    setValue("email", row.email);
    setValue("Phone", row.phone);
    setValue("website", row.domain);
    setValue("companyName", row.companyName);
  };
  //!  satır aralarına Boşluk
  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  //! Avatarların Geç yüklenmesini önlemek için
  const AvatarWithLoader = ({ src, alt }) => {
    const [loaded, setLoaded] = React.useState(false);

    const handleLoad = () => {
      setLoaded(true);
    };

    return (
      <React.Fragment>
        {!loaded && <Avatar alt={alt} />}
        <Avatar
          src={src}
          alt={alt}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s" }}
          onLoad={handleLoad}
        />
      </React.Fragment>
    );
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" w-full bg-[#f7f7f7]" style={{ height: "100vh" }}>
      <Dashboard />
      <div className="flex flex-col ml-60">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="flex justify-between border-b my-2 p-3">
              <h3 className=" font-bold flex text-2xl items-center ml-10">
                Student List
              </h3>
              <div className="flex">
                <div className="mb-1 relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="rounded-lg p-1 border-hidden"
                  />
                  <button
                    className="absolute left-[10.5rem] top-[0.3rem]"
                    onClick={handleSearch}
                    id="button-addon2"
                  >
                    <img className="w-6" src={mercek} alt="mercekIcon" />
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#F8D442] text-sm text-white rounded-lg w-48 h-8 mx-2"
                    onClick={() => handleEditOpen()}
                  >
                    ADD NEW STUDENT
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden m-10">
              <div style={{ height: 450, width: "95%" }}>
                <DataGrid
                  key={users}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                    columns: {
                      columnVisibilityModel: {
                        id: false,
                      },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection={false} // Onay kutularını kaldırır
                  getRowSpacing={getRowSpacing}
                  sx={{
                    [`& .${gridClasses.row}`]: {
                      bgcolor: (theme) =>
                        theme.palette.mode === "light" ? grey[200] : grey[900],
                    },
                  }}
                />
                <EditModal
                  editOpen={editOpen}
                  setEditOpen={setEditOpen}
                  selectedRow={selectedRow}
                  setSelectedRow={setSelectedRow}
                  newRow={newRow}
                  setNewRow={setNewRow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
