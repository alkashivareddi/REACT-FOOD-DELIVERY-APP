import React from 'react';
import Layout from "my-app/src/components/Layout.js";
import  "my-app/src/styles/HomeStyle.css";
import Section1 from 'my-app/src/pages/Section1.js';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
    <Layout>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </Layout>
    
      
    </>
  );
}

export default Home;




