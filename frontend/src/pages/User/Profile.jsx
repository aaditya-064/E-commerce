import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"Profile"}>
      <div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="col-span-1">
            <UserMenu />
          </div>
          <div className="col-span-1">
            <p>Your Profile</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
