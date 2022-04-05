import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import React from 'react';

// import { Container } from './styles';

const Home: React.FC = () => (
    <div>
        <h1>Hello World</h1>
    </div>
);

export default Home;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
