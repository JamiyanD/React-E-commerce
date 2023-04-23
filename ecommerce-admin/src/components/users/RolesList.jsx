import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AddRoles from "./AddRoles";
import axios from "axios";
import EditRoles from "./EditRoles";
export default function RolesList() {
  const [currentRoles, setCurrentRoles] = useState("");
  const URL = "https://puuzket.onrender.com/users/roles";
  const [roles, setRoles] = useState([]);
  const [openRoles, setOpenRoles] = useState(false);
  const [openRolesEdit, setOpenRolesEdit] = useState(false);
  async function axiosRoles() {
    const AXIOS_DATA = await axios.get(URL);
    console.log(AXIOS_DATA.data.data);
    setRoles(AXIOS_DATA.data.data);
  }
  useEffect(() => {
    axiosRoles();
  }, []);

  async function axiosRolesPut(id) {
    const AXIOS_DATA = await axios.put(URL, { userId: id });
    setCurrentRoles({ ...currentRoles, ...AXIOS_DATA.data.data });
    console.log(AXIOS_DATA);
    setOpenRolesEdit(true);
  }

  async function axiosRolesDelete(id) {
    const data = {
      userId: id,
    };
    const AXIOS_DATA = await axios.delete(URL, { data });
    if (AXIOS_DATA.status == 200) {
      console.log(AXIOS_DATA.data.data);
      setRoles(AXIOS_DATA.data.data);
    }
  }

  return (
    <Box sx={{ backgroundColor: "white" }} className="rounded-5 p-3">
      <Box
        sx={{ flexGrow: 1, p: 2 }}
        className="border border-1 rounded-5 d-flex flex-wrap"
      >
        {roles.map((r, index) => (
          <div className="border border-1 rounded-5 roles-square m-2 p-3 ">
            <h4 className="mb-4">{r.roles_name}</h4>
            <button
              className="btn btn-primary bg-light text-muted rounded-3 border-0 me-2"
              onClick={() => axiosRolesPut(r._id)}
            >
              Edit Role
            </button>
            <button
              className="btn btn-primary bg-light text-muted rounded-3 border-0"
              onClick={() => axiosRolesDelete(r._id)}
            >
              Delete Role
            </button>
          </div>
        ))}

        <div
          className="w-50 border border-1 rounded-5 text-center m-2 p-3"
          onClick={() => {
            setOpenRoles(true);
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/notes-concept-illustration_114360-839.jpg?w=900&t=st=1680172571~exp=1680173171~hmac=eca7f2319f01bc73475d2254700c84de0f45b816f5337ca244b80f5027bbfabc"
            alt=""
            className="w-50"
          />
          <h3 className="text-secondary">Add New Role</h3>
        </div>
        <AddRoles
          openRoles={openRoles}
          setOpenRoles={setOpenRoles}
          setRoles={setRoles}
        />
        <EditRoles
          openRolesEdit={openRolesEdit}
          setOpenRolesEdit={setOpenRolesEdit}
          setCurrentRoles={setCurrentRoles}
          currentRoles={currentRoles}
          setRoles={setRoles}
        />
      </Box>
    </Box>
  );
}
