import React from "react";
import { Box } from "@mui/material";

function UsersRoles() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "coulmn",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div className="w-100" style={{ height: "100vh" }}>
        <div className="p-lg-5">
        <h3 style={{textAlign:'center'}}> اضافة صلاحيات المستخدمين</h3>
          <div style={{display:'flex' , flexDirection:'column' , justifyContent:'cennter',  alignItems:'center' , width:'90%' }}>
       

          <div className="col w-50">
<label>اختر صلاحية المستخدم</label>
<select className="form-control" >
  <option></option>
  <option>superuser</option>
  <option>mannager</option>
  <option>report</option>

</select>

</div>

        <div className="col w-50">
        <label>اختر  المستخدم</label>
<select className="form-control" >
  <option></option>
  <option>superuser</option>
  <option>mannager</option>
  <option>report</option>

</select>
        </div>
          </div>
        </div>



        </div>
      </Box>
    </>
  );
}

export default UsersRoles;
