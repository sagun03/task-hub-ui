/* eslint-disable react/prop-types */
import Header from "../Common/Header";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;