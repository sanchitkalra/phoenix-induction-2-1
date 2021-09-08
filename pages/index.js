import Head from 'next/head'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { Box, Card, CardBody, CardHeader, Heading, Text } from 'grommet'

export default function Home() {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setList(data.startups)
      })
  }, [])

  function List(props) {
    return (
      <Box align="center" justify="center">
        <ul>
          {props.startups.map((ele) => {
            console.log(ele)
            return (
              <Card
                key={ele.id}
                margin="small"
                height="15rem"
                width="large"
                background="light-1"
              >
                <CardHeader
                  pad={{
                    top: 'medium',
                    left: 'medium',
                    right: 'medium',
                    bottom: '0',
                  }}
                >
                  <Heading weight="bold" level="3">
                    {ele.Name}
                  </Heading>
                </CardHeader>
                <CardBody
                  pad={{ bottom: 'medium', left: 'medium', right: 'medium' }}
                  margin={{ top: '0' }}
                >
                  <Text pad="small">
                    has {ele.Employees} <strong>employees</strong>
                  </Text>
                  <Text pad="small">
                    and has <strong>raised</strong> ${ele.Funding} in funding
                  </Text>
                  <Text pad="small">
                    <strong>their motto is</strong>: {ele.Idea}
                  </Text>
                </CardBody>
              </Card>
            )
          })}
        </ul>
      </Box>
    )
  }

  return (
    <div>
      <Head>
        <title>Phoenix Assoc</title>
        <meta
          name="description"
          content="App for Phoenix Assoc's Inductions in 2-1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      {list ? <List startups={list} /> : <p>Loading...</p>}
    </div>
  )
}
