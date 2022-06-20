import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'

const Home = () => {
  const router = useRouter()
  const {status, data: session} = useSession({
    onUnauthenticated() {
      router.push("/auth/signin")
    },
  })

  if(status === "loading") {
    return <Loader />
  }

  console.log(session)
  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  )
}

export default Home
