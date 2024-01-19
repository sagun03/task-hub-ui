/* eslint-disable react/prop-types */
import PrivateHeader from "../Common/PrivateHeader";


const PrivateLayout = ({ children }) => {
  return (
    <div>
      <PrivateHeader />
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;