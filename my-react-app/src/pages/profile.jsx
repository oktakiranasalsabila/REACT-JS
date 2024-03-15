import { useLogin } from "../hooks/useLogin";

const ProfilePage=()=>{
    const username = useLogin();
    return(
        <div>
            <h1>profile salsabila</h1>
            Username :{username}
        </div>
    );
};
export default ProfilePage;