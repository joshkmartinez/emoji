import React from 'react'
import Head from 'next/head'
import { Flex, Text } from 'rebass'
import '../styles/sheet.css'
const Index = () => (
  <React.Fragment>
    <Head>
      <title>Emoji</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex alignItems="center" justifyContent="center">
      <div className="glitch medium" data-text="Emoji">
        Emoji 📡 🛸
      </div>
    </Flex>
  </React.Fragment>
)
//e.now.sh
export default Index
