import { NextPage } from 'next';

import Nav from '../components/Nav';

const IndexPage: NextPage = () => {
  return (
    <>
      <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">Teste</h1>
      </div>
    </>
  );
};

export default IndexPage;
