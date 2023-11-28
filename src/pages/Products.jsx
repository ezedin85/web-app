import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import Toast from "../components/Toast";
import { Link } from "react-router-dom";
import EditUser from "../components/EditUser";
import ChangeUserPwd from "../components/ChangeUserPwd";
import DeleteUser from "../components/DeleteUser";

export default function Products() {
  const { getData } = useGetData();

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [products, setProducts] = useState([]);
  const [userToChangePwd, setUserToChangePwd] = useState({
    id: 0,
    name: "",
    password: "",
    confirmPwd: "",
  });
  const [openPwdModal, setOpenPwdModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userToBeEdited, setUserToBeEdited] = useState({
    id: 0,
    name: "",
    email: "",
    role: "",
  });


  const [userToDelete, setUserToDelete] = useState({ id: 0, name: "" });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getData("products", setProducts, setError, setShowToast);
    };
    fetchData();
  }, []);

  console.log(products);
  const showEditModal = (id, name, email, role) => {
    setOpenEditModal(true);
    setUserToBeEdited({ id, name, email, role });
  };

  const showChangePwdModal = (id, name) => {
    setOpenPwdModal(true);
    setUserToChangePwd({ id, name, password: "", confirmPwd: "" });
  };

  const showDeleteModal = (id, name) => {
    setOpenDeleteModal(true);
    setUserToDelete({ id, name });
  };

  return (
    <div className="p-6">
      <div className="my-4 flex justify-between">
        <span className="text-2xl font-bold">products List</span>
        <Link
          to="/dashboard/add-user"
          className="inline-block cursor-pointer rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
        >
          Add User
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Sub Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Sold Out
              </th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products?.map((product) => {
              return (
                <tr key={product._id}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img
                      className="object-contain"
                      src={product.img_url}
                      alt="img"
                      width={30}
                      height={30}
                    />
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {product.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.price}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.category}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.sub_category}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.soldOut? 'Sold out': 'In Stock'}
                  </td>

                  <td className="flex gap-4 whitespace-nowrap px-4 py-2">
                    <i
                      onClick={() =>
                        showEditModal(
                          product._id,
                          product.name,
                          product.email,
                          product.role,
                        )
                      }
                      className="ri-edit-2-line cursor-pointer text-xl text-green-600"
                    ></i>
                    <i
                      onClick={() =>
                        showChangePwdModal(product._id, product.name)
                      }
                      className="ri-eye-fill cursor-pointer text-xl text-blue-600"
                    ></i>
                    <i
                      onClick={() => showDeleteModal(product._id, product.name)}
                      className="ri-delete-bin-3-line cursor-pointer text-xl text-red-600"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Toast
        message={error}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      {openEditModal && (
        <EditUser
          userToBeEdited={userToBeEdited}
          setUserToBeEdited={setUserToBeEdited}
          setOpenEditModal={setOpenEditModal}
        />
      )}
      {openPwdModal && (
        <ChangeUserPwd
          userToChangePwd={userToChangePwd}
          setUserToChangePwd={setUserToChangePwd}
          setOpenPwdModal={setOpenPwdModal}
        />
      )}
      {openDeleteModal && (
        <DeleteUser
          userToDelete={userToDelete}
          setUserToDelete={setUserToDelete}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
    </div>
  );
}
