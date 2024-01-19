/* eslint-disable react/prop-types */
import PublicHeader from "../Common/PublicHeader";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <PublicHeader />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;