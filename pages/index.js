import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col pt-[20vh]">

      <Head>
        <title>Pubarun's Portfolio</title>
      </Head>

      <h1 className="text-3xl md:text-5xl justify-center flex">Website Launching Soon 🚀</h1>
      <div className="flex p-10 justify-center">
        Dear Pubarun, <br />
        Thank you for your patience as we work to get your
        photography portfolio website ready. <br /> We are hard at work creating a
        beautiful portfolio for you to showcase your talents. <br /> We appreciate your
        understanding and support as we get everything in place. We can&lsquo;t wait
        to show you the final product! <br /> Sincerely, <br /> The Team
      </div>
    </div>
  );
}
