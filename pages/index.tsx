import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <SideBar />
            {/*Center*/}
        </main>




    </div>
  )
}

export default Home
