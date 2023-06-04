import React, { useState, useEffect, createContext, useContext } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EDF2F4",
          height: "100vh",
          width: "15%", 
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuList
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            
          }}
          dir="rtl"
        >

            <div style={{ display:'flex' , flexDirection:'column' , alignItems:'center' , marginBottom:40 }}>
            <img className="w-50" src={'https://upload.wikimedia.org/wikipedia/ar/6/68/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A%D8%A9_%D8%A8%D8%AD%D9%83%D9%88%D9%85%D8%A9_%D8%A7%D9%84%D9%88%D9%81%D8%A7%D9%82_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A_%D8%A7%D9%84%D9%84%D9%8A%D8%A8%D9%8A%D8%A9_%282020%29.jpg'} />
            </div>



          <MenuItem>
                                           <Link
              to={"/users"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                padding: "10px",
              }}
            >
                ادارة المستخدمين
            </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
                                 <Link
              to={"/newuser"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
               اضافة مستخدم
            </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
                       <Link
              to={"/roles"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
    الصلاحيات

            </ListItemText>
            </Link>
          </MenuItem>
            <Divider sx={{backgroundColor:'#02023E'}} />


          <MenuItem>
             <Link
              to={"/newcar"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >

                تسجيل مركبة
            </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
          <Link
              to={"/showcars"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
               عرض المركبات المسجلة
            </ListItemText>
            </Link>
          </MenuItem>
          <Divider sx={{backgroundColor:'#02023E'}} />



     
          <MenuItem>
                             <Link
              to={"/newjomrok"}
              style={{
                textDecoration: "none",
              }}
            >
            <ListItemText
            style={{ fontFamily:'tajawal',
            color: "#02023E",
            padding: "10px",
            }}
        
            >

                تسجيل مركبة
            </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
                   <Link
              to={"/showjomrok"}
              style={{
                textDecoration: "none",
              }}
            >

            <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily:'tajawal',
                    padding: "10px",
                }}
              >
               عرض المركبات المسجلة
            </ListItemText>
            </Link>
          </MenuItem>
          <Divider sx={{backgroundColor:'#02023E'}} />



          <MenuItem>
              <Link
              to={"/insurance"}
              style={{
                textDecoration: "none",
              }}
            >

        
            <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
               تآمين سيارة
            </ListItemText>
                </Link>
          </MenuItem>

          <Divider sx={{backgroundColor:'#02023E'}} />


          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
              }}
              to={"/signcarsreports"}
            >
              <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
                تقارير التراخيص
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              style={{
                textDecoration: "none",
              }}
              to={"/jomrokrepostr"}
            >
              <ListItemText
               sx={{
                color: "#02023E",
                fontFamily:'tajawal',
                  padding: "10px",
              }}
            >
                تقارير الجمارك  
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/insurancereports"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
              sx={{
                color: "#02023E",
                fontFamily:'Tajawal',
                padding: "10px",
              }}
            >
                تقاير التأمين 
              </ListItemText>
            </Link>
          </MenuItem>



        </MenuList>
      </Box>
    </>
  );
}
