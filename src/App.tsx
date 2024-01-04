import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  // return <Button colorScheme="blue">Button</Button>;
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    //   <GridItem area="nav" bg="coral">
    //     Nav
    //   </GridItem>
    //   <GridItem area="aside" bg="gold">
    //     Aside
    //   </GridItem>
    //   <GridItem area="main" bg="dodgerblue">
    //     Main
    //   </GridItem>
    // </Grid>

    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        {/* Nav */}
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/* bg="gold" */}
        <GridItem area="aside">
          <GenreList></GenreList>
        </GridItem>
      </Show>
      {/* bg="dodgerblue" */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
