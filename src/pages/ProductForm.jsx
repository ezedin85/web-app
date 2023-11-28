import { useState } from "react";
import usePostPatch from "../hooks/usePostPatchRequest ";
import Toast from "../components/Toast";

export default function ProductForm() {
  const [file, setFile] = useState(""); //image for preview
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    sub_category: "",
    price: 0,
    soldOut: "",
  });

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { postOrPatch, isLoading } = usePostPatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
  };

  const handleImgChange = (e) => {
    const imgFile = e.target.files[0];
    setFile(imgFile)
    previewFile(imgFile);
  };


  async function handleSubmit(e) {
    e.preventDefault();
    await postOrPatch(
        `products/add`,
        "POST",
        "/dashboard/products",
        setError,
        setShowToast,
        "Product Added Successfully!",
        product,
      );
  }

  return (
    <div>
      <div className="mx-auto mt-12 w-80 max-w-full p-1 shadow md:w-96 ">
        <div className="block max-w-md  rounded-lg bg-white p-6 pb-24 pt-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h3 className="mb-4 text-2xl text-gray-500">Add Product</h3>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="flex gap-2 ">
              <img className="object-contain" src={product.image} alt="img" width={30} height={30} />
              <input
                type="file"
                className="w-full cursor-pointer rounded bg-gray-100 text-sm text-black file:mr-4 file:cursor-pointer file:border-0 file:bg-gray-800 file:px-4 file:py-2 file:text-white file:hover:bg-gray-700"
                accept="image/png, image/jpeg, image/jpg, image/jfif"
                required
                onChange={handleImgChange}
              />
            </div>

            <div className="relative my-2">
              <input
                type="text"
                className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                placeholder="Enter Products Name"
                value={product.name}
                name="name"
                onChange={handleChange}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
                <i className="ri-user-line text-gray-500"></i>
              </div>
            </div>

            <div className="relative my-2">
              <input
                type="number"
                className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                placeholder="Enter Product's Price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
                <i className="ri-mail-line text-gray-500"></i>
              </div>
            </div>

            <div className="my-2">
              <select
                className="block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option className="block p-3" value="electronics">
                  Electronics
                </option>
                <option value="sanitery">Sanitery</option>
              </select>
            </div>

            <div className="my-2">
              <select
                className="block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                name="sub_category"
                value={product.sub_category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Sub Category
                </option>
                <option className="block p-3" value="mobiles">
                  Mobiles
                </option>
                <option value="laptops">Laptops</option>
              </select>
            </div>

            <div className="my-2">
              <select
                className="block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                name="soldOut"
                value={product.soldOut}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Is the product Avaliable
                </option>
                <option className="block p-3" value={true}>
                  Yes
                </option>
                <option value={false}>No</option>
              </select>
            </div>

            <button
              type="submit"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-8 inline-block w-full rounded bg-blue-500 px-6 py-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled={isLoading}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>

      <Toast
        message={error}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
}
