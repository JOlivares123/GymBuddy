import { CustButton } from "../../components/Button/CustButton";
import { useLogout } from "../../hooks/useLogout";

export const ProfilePage = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    // call logout hook
    logout();
  };
  return (
    <div className="mt-5">
      <CustButton onClick={() => handleLogout()} text="Logout" />
    </div>
  );
};
