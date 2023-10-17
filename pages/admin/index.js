import React, { useState } from "react";

import Input from "../../components/form/Input";
import { handler } from "../../utils/forms";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const inputsInit = {
  email: "",
  password: "",
};

export default function Index() {
  const router = useRouter()
  const [inputs, setState] = useState(inputsInit);
  const [isLoading, setLoading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);

    const status = await signIn("credentials", {
      redirect: false,
      email: inputs.email,
      password: inputs.password,
    });
    
    if (status.url) {
    
      router.push("/admin/dashboard");
      setState(inputsInit)
    }
    setLoading(false)
  }
  return (
    <section className="mt-40 ">
      <article className="container flex-col p-40 my-24 flex-center">
        <div className="p-16 rounded-md shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Log in</h2>
          <div className="mt-10">
            <Input
              placeholder="E-mail"
              id="email"
              val={inputs.email}
              onChange={(e) => handler(e, setState)}
              iconType="name"
            />
            <Input
              placeholder="Password"
              id="password"
              val={inputs.password}
              onChange={(e) => handler(e, setState)}
              iconType="name"
            />
          </div>
          <button
            className={`bg-blue px-10 py-1  flex-center text-white`}
            type="button"
            onClick={submitHandler}
          >
            {isLoading ? <div className="loader"></div> : "Изпрати"}
          </button>
        </div>
      </article>
    </section>
  );
}
export async function getServerSideProps(context) {
  const { query } = context;
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/admin/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { session, query },
  };
}
