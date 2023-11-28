import { useState } from "react";
import Toast from "../components/Toast";
import usePostPatch from "../hooks/usePostPatchRequest ";
import PasswordForm from "./PasswordForm";

export default function ChangeUserPwd({
  userToChangePwd,
  setUserToChangePwd,
  setOpenPwdModal,
}) {
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  //hooks
  const { postOrPatch, isLoading } = usePostPatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserToChangePwd({
      ...userToChangePwd,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postOrPatch(
      `admins//change-user-pwd/${userToChangePwd.id}`,
      "PATCH",
      "",
      setError,
      setShowToast,
      "Password Changed Successfully!",
      userToChangePwd,
    );
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setUserToChangePwd({
        id: 0,
        name: "",
        password: "",
        confirmPwd: "",
      });
      setOpenPwdModal(false);
    }
  };

  return (
    <div
      className="absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <PasswordForm
        handleSubmit={handleSubmit}
        userToChangePwd={userToChangePwd}
        handleChange={handleChange}
        isLoading={isLoading}
      />
      <Toast
        message={error}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
}
