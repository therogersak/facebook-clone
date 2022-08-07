import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="min-w-[500px] flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md h-[400px]  items-center justify-between shadow-xl"
        >
          <button
            className="bg-blue-500 rounded-md text-white p-2 font-bold mx-auto "
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
