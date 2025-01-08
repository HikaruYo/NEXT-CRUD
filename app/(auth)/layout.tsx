import {ReactNode} from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto h-screen bg-gray-400">
        <div className="w-full rounded-lg shadow mt-0 max-w-md bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout