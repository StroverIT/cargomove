import React from "react";
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import { getSession } from "next-auth/react";
import { connectMongo } from "../../../../db/connectDb";
import User from "../../../../db/models/User";
import { promises as fs } from "fs";

export default function Create({ navigationData }) {
  return (
    <Layout>
      {navigationData.map((nav) => {
        return <div key={nav.name}>{nav.name}</div>;
      })}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const session = await getSession({ req: context.req });

  await connectMongo();

  const user = await User.findOne({ email: session?.user?.email });

  if (user?.role != "admin" || !user || !session) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  const file = await fs.readFile(
    process.cwd() + "/data/navigation.json",
    "utf8"
  );
  const navigationData = JSON.parse(file);

  return {
    props: { session, query, navigationData },
  };
}
