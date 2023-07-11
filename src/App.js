import React, {useState} from 'react';
import UsersComponent from "./components/UsersComponent/UsersComponent";
import UserPosts from "./components/UserPosts/UserPosts";

const App = () => {
    const [userId, setUserId] = useState(null);
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <UsersComponent setUserId={setUserId} setIsShow={setIsShow} isShow={isShow}/>
            {userId && isShow && <UserPosts userId={userId}/>}
        </div>
    );
};

export default App;