import Head from 'next/head'
import HeaderComponent from '../components/HeaderComponent'
import { Box, Heading, Text } from 'grommet'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - Phoenix Assoc</title>
        <meta
          name="description"
          content="App for Phoenix Assoc's Inductions in 2-1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <Box align="center" justify="center" pad="large">
        <Heading>About the Phoenix Assoc</Heading>
        <Text alignSelf="center" textAlign="center">
          Perpetual Hankerers of Electronics- PHoEnix PHoEnix is a team of
          highly motivated and skilled people who strive to cultivate the
          technical culture at BITS Pilani Hyderabad Campus.
        </Text>
        <br />
        <Text alignSelf="center" textAlign="center">
          Students from the following branches are inducted in this association:
          Electronics and Communication Engineering (ECE) Electrical and
          Electronics Engineering (EEE) Electronics and Instrumentation
          Engineering (ENI)
        </Text>
        <br />
        <Text alignSelf="center" textAlign="center">
          We at PHoEnix, conduct events related to our core field, publish
          articles and participate in competitions. Enthusiastic students are
          given a platform to showcase their skills and technical expertise.
        </Text>
        <br />
        <Text alignSelf="center" textAlign="center">
          However, the most important function of PHoEnix is bridging the gap
          between the student community and faculty members.
        </Text>
      </Box>
    </div>
  )
}
