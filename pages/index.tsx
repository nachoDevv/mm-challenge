
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../src/components/Layout'
import Section from '../src/components/Section'
import Text from '../src/components/Text'

function HomePage(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.push('')
  }, [router])
  return (
    <Layout>
      <Head>
        <title>Media Monks Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section sectionColor='yellow' iconColor='blue'>
        <Text>
          Are you ready for your first challenge at Media.Monks?
        </Text>
      </Section>
      <Section sectionColor='yellow' iconColor='blue'>
        <Text>
          Are you ready for your first challenge at Media.Monks?
        </Text>
      </Section>
    </Layout>
  )
}

export default HomePage
