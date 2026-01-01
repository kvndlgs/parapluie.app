import { useState } from "react";
import { Subscriptions } from "@/sections/Subscriptions";
import { Head } from "vike-react/Head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Abonnements - Parapluie</title>
        <meta
          name="description "
          content="Parapluie.app plans d' abonnements"
        />
        <link rel="canonical" href="https://parapluie.app/abonnements" />
      </Head>{" "}
      <Subscriptions />
    </>
  );
}
