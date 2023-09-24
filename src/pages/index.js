import React from 'react';
import Layout from '@theme/Layout';
import HomePageMain from '../components/HomePageMain';


export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="I'm a Product Manager/Owner with experience in shaping innovative & sustainable solutions.">
      <HomePageMain />
    </Layout>
  );
}
