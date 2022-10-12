import { ParMd, H2, SingleColumnLayout, Footer } from '@daohaus/ui';

function App() {
  return (
    <div>
      <SingleColumnLayout>
        <>
          {/* <DaoHausNav /> */}
          <H2>Sub Heading</H2>
          <ParMd>Testing this out</ParMd>
        </>
      </SingleColumnLayout>
      <Footer />
    </div>
  );
}

export default App;
