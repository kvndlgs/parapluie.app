import HowItWork from "@/sections/HowItWork.tsx";
import { Head } from "vike-react/Head";

export default function Page(){
  return (
    <>
      <Head>
        <title>
          Comment ça marche ? - Parapluie 
        </title>
        <link rel="canonical"
        href="https://parapluie.app/comment-ca-marche" />
      </Head>
      <HowItWork/>
    </>
  )
}