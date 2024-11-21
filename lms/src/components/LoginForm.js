import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Button, Input, message } from "antd";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Redirect based on role (Admin, Student, Teacher)
      if (user.email.includes("admin")) navigate("/admin/dashboard");
      else if (user.email.includes("student")) navigate("/student/dashboard");
      else if (user.email.includes("teacher")) navigate("/teacher/dashboard");
      else throw new Error("Invalid role assigned to user.");
    } catch (err) {
      message.error("Login failed: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button type="primary" block onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
