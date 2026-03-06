import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021417] to-[#041f23] p-6">
      {/* body */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          {/* <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md"> */}
            <img
              src="https://cdn.prod.website-files.com/654adfaee6c8efc89c6a93bd/6814e9e933d8e47f3e36c100_1280px-Shopify_logo_2018.svg.webp"
              alt=""
              style={{height: "60px", width: "600px", objectFit: "contain"}}
            />
          {/* </div> */}
        </div>

        {/* Title */}
        <div className="text-center">
          <p className="text-gray-500 mt-1">Continue to Shopify</p>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition shadow-md">
          Continue with email
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          or
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Passkey */}
        <button className="w-full bg-gray-100 hover:bg-gray-200 transition rounded-xl py-3 font-medium text-gray-700">
          🔑 Sign in with passkey
        </button>

        {/* Social Login */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-gray-100 hover:bg-gray-200 transition rounded-xl py-2 flex items-center justify-center text-xl">
            <img
              src="https://cdn-icons-png.freepik.com/512/0/747.png"
              style={{ width: 20, height: 20, objectFit: "contain" }}
              alt=""
            />
          </button>

          <button className="bg-gray-100 hover:bg-gray-200 transition rounded-xl py-2 flex items-center justify-center text-xl">
            <img
              src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
              style={{ width: 35, height: 35, objectFit: "contain" }}
              alt=""
            />
          </button>

          <button className="bg-gray-100 hover:bg-gray-200 transition rounded-xl py-2 flex items-center justify-center text-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"
              alt=""
              style={{ width: 20, height: 20, objectFit: "contain" }}
            />
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500">
          New to Shopify?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Get started →
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-gray-400 text-sm">
        Need Help?
        <p className="text-xs mt-1">
          By continuing, you agree to the Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
