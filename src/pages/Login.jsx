import { useState } from "react";
import useLogin from "../hooks/useLogin";
import Toast from "../components/Toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useLogin();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password: pwd }, setError, setShowToast);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-11/12 max-w-md flex-col rounded-md bg-white p-6 shadow sm:w-80">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-3 py-2  "
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="pwd"
                id="password"
                placeholder="********"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="w-full rounded-md border px-3 py-2 
                "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                disabled={isLoading}
                className="w-full rounded-md bg-gray-100 px-8 py-3 font-semibold"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>

      <Toast
        message={error}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
}
