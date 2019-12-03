import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../src/Link";
import ProTip from "../src/ProTip";

const aboutPage: React.FunctionComponent = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js with TypeScript example
      </Typography>
      <Link href="/">Go to the main page</Link>
      <ProTip />
    </Box>
  </Container>
);

export default aboutPage;
