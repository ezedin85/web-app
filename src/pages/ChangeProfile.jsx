import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import usePostPatch from "../hooks/usePostPatchRequest ";
import Toast from "../components/Toast";
import useGetData from "../hooks/useGetData";

export default function ChangeProfile() {
  const { getData } = useGetData();
  const { postOrPatch, isLoading } = usePostPatch();
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postOrPatch(
      `admins/update-me`,
      "PATCH",
      "/dashboard",
      setError,
      setShowToast,
      "Your Profile Updated Successfully!",
      user,
    );
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      await getData("admins/get-me", setUser, setError, setShowToast);
    };
    fetchData();
  }, []);
  

  return (
    <div className="mt-24 flex justify-center">
      <ProfileForm
        userToBeEdited={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
