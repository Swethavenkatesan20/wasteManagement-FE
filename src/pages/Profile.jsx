import { Outlet, useLoaderData } from "react-router-dom";
import userServices from "../services/userServices";
import '../styles.css';

export async function loader() {
    // Get current logged user
    const userResponse = await userServices.getCurrentUser();
    // Return user data
    return { user: userResponse.data.user };
}

const Profile = () => {
    const { user } = useLoaderData();

    return (
        <div className="container-fluid bgImage">
            <p className="text-center fs-1 fw-bold font-monospace text-white-50 bg-dark">Hi {user ? user.name : 'Guest'}!  </p>
            <p className="text-center fs-1 fw-bold ">Government Proof: {user ? user.proof : 'register with proof'}!</p>
            <p className="text-center fs-1 fw-bold">Proof Id: {user ? user.proofId : 'submit your proof'}!</p>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
