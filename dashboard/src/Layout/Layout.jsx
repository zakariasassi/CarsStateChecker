import Sidebar from "../components/Drawer/Sidebar";
import Topbar from "../components/Appbar/Topbar";
import Home from "../pages/Home/Home";

function Layout(props) {
  return (
    <>
      <div className="col">
        <div className="row">
          <Topbar />
        </div>
        <div className="col" style={{ marginTop: 60 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {props.view}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
