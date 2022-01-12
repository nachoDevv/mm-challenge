
import { Grid } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AdviceText from '../src/components/AdviceText'
import Layout from '../src/components/Layout'
import Section from '../src/components/Section'
import SectionAsset from '../src/components/SectionAsset'
import Text from '../src/components/Text'
import Vector from '../src/components/Vector'

function HomePage(): JSX.Element {
  // const router = useRouter()

  // useEffect(() => {
  //   router.push('')
  // }, [router])
  return (
    <Layout>
      <Head>
        <title>Media Monks Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Section sectionColor='#2c2d38' iconColor='#dfbbfe'>
          <Text color='#dfbbfe'>
            Are you ready 
            for your first 
            challenge at 
            Media.Monks?
            <Vector />
          </Text>
        </Section>
        <Section sectionColor='#2c2d38' iconColor='#dfbbfe'>
          <SectionAsset />
        </Section>
        <Section sectionColor='#ffcb16' iconColor='#7d26c9'>
          <Text color='#7d26c9'>
            Simplicity is the way to go when considering 
            user experience. <Vector />
          </Text>
          <AdviceText color='#7d26c9'>
            If the websites are confusing, visitors will give up and find what they need elsewhere.
            Keeping navigation simple, intuitve and consistent is key.
          </AdviceText>
        </Section>
        <Section sectionColor='#4f24ee' iconColor='#e1ff9a'>
          <Text color='#e1ff9a'>
            Visual hierarchy is 
            the arrangement of
            elements in order of
            importance.
          </Text>
          <AdviceText color='#e1ff9a'>
            One of the most important functions
            of visual hierarchy is to establish a
            focal point. This shows visitors where
            the most important information is.
          </AdviceText>
        </Section>
      </body>
    </Layout>
  )
}

export default HomePage
