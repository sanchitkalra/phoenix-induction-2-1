import { Header, Anchor, Box, Image } from 'grommet'

export default function HeaderComponent() {
  return (
    <Header background="light-4" pad="medium" height="xsmall">
      <Box height="xsmall" width="xsmall">
        <Image fit="cover" src="phoenix-logo.png" />
      </Box>
      <Anchor href="/" label="Phoenix Assoc" />
      <Box justify="end">
        <Anchor href="/about" label="About" />
      </Box>
    </Header>
  )
}
