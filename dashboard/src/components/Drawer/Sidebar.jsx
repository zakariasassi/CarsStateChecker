import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      dir='rtl'
    >
      <div className='p-3' style={{display:'flex' ,  flexDirection:'column' , alignItems:'center'}}>
       <img  className='w-50 h-25' src={"https://upload.wikimedia.org/wikipedia/ar/6/68/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A%D8%A9_%D8%A8%D8%AD%D9%83%D9%88%D9%85%D8%A9_%D8%A7%D9%84%D9%88%D9%81%D8%A7%D9%82_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A_%D8%A7%D9%84%D9%84%D9%8A%D8%A8%D9%8A%D8%A9_%282020%29.jpg"} />
      </div>
<List>
    <span style={{fontSize:18 , margin:10 , fontWeight:'bold' , color:'#2B2C42'}} >  <span><i className="fa-solid fa-users m-2  " style={{color:'#EF273D'}} ></i></span> المستخدمين  </span>
    {['ادارة المستخدمين'  , 'اضافة مستخدم' , 'الصلاحيات'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon  />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
      <List>
      <span style={{fontSize:18 , margin:10 , fontWeight:'bold' , color:'#2B2C42'}} >  <span><i className="fa-solid fa-users m-2  " style={{color:'#EF273D'}} />قسم الترخيص و المرور  </span> </span>

    {[ 'عرض المركبات المسجلة', 'تسجيل مركبة'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right'}} sx={{ fontFamily:'tajawal' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

<Divider />
      <List>
    <span style={{fontSize:18 , margin:10 , fontWeight:'bold' , color:'#2B2C42'}} >  <span><i className="fa-solid fa-users m-2  " style={{color:'#EF273D'}} /> قسم الجمارك</span> </span>

    {[ 'عرض المركبات المسجلة', 'تسجيل مركبة'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right'}} sx={{ fontFamily:'tajawal' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

<Divider />
      <List>
      <span style={{fontSize:18 , margin:10 , fontWeight:'bold' , color:'#2B2C42'}} >  <span><i className="fa-solid fa-users m-2  " style={{color:'#EF273D'}} /> قسم التأمين</span> </span>

    {[ 'استعلام عن تأمين', 'اضافة تأمين '].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right'}} sx={{ fontFamily:'tajawal' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>


<Divider />
      <List>
      <span style={{fontSize:18 , margin:10 , fontWeight:'bold' , color:'#2B2C42'}} >  <span><i className="fa-solid fa-users m-2  " style={{color:'#EF273D'}} /> تقارير النظام </span> </span>
    {[  'تقارير المرور' , 'تقارير الجمارك', 'تقارير التأمين'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right'}} sx={{ fontFamily:'tajawal' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>


    </Box>
  );

  return (
    <div>
          <Drawer
            
            anchor={'right'}
            open={state}
            hideBackdrop={true}
            onClose={toggleDrawer('right: ', false)}
            variant="permanent"
            >
            {list('right')}
          </Drawer>
    </div>
  );
}
