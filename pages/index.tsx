
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Logo from '../src/components/Logo'

function HomePage(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.push('')
  }, [router])
  return (
    <>
      <Head>
        <title>Media Monks Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo color='black' />
    </>
  )
}

export default HomePage
