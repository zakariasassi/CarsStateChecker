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
            <div
              className="bg-slate-200 p-20 rounded-3xl"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "cennter",
                alignItems: "center",
                width: "90%",
              }}
            >
              <span className="text-4xl m-5" style={{ textAlign: "center" }}>
                {" "}
                اضافة صلاحيات المستخدمين
              </span>

              <div className="col w-1/2">
                <label className="text-lg">اختر صلاحية المستخدم</label>
                <select className="form-control">
                  <option></option>
                  <option>superuser</option>
                  <option>mannager</option>
                  <option>report</option>
                </select>
              </div>

              <div className="col w-1/2">
                <label className="text-lg">اختر المستخدم</label>
                <select className="form-control">
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
