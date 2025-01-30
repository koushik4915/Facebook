import "./Feed.css";
import Sharepost  from "../Share/Sharepost";
import Post from "../Post/Post";
import {Posts} from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Sharepost/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}
