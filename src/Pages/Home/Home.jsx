import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Topbar from "../../Components/Topbar/Topbar";


export default function Home() {
  return (
    <>
      <Topbar/>
       <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
       </div>
    </>
  )
}
