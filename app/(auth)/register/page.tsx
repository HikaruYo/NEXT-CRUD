import RegisterForm from "@/components/auth/registerForm";

const Register = () => {
  return (
    <div className="p-6 space-y-5">
      <h1 className="text-2xl font-bold text-center">Create an Account</h1>
      <RegisterForm />
    </div>
  )
}

export default Register