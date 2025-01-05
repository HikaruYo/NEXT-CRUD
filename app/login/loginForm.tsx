'use client'

import {useFormState} from "react-dom"
import {useActionState} from "react";
import {login} from "@/app/login/action";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={ loginAction }>
      <div className="form-control">
        <label className="label font-bold">Title</label>
        <input
          type="text"
          className="input w-full input-bordered"
          placeholder="Product Name"
        />
      </div>
      <div className="form-control">
        <label className="label font-bold">Price</label>
        <input
          type="text"
          className="input w-full input-bordered"
          placeholder="Price"
        />
      </div>
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormState()

  return (
    <button disabled={ pending } type="submit">
      Login
    </button>
  )
}