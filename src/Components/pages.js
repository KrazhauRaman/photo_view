//константы для роутера

import React from 'react';
import ViewModule from './ViewModule';
import ListChanger from './ListChanger';


export const Home = () =>
    <section className="home">
        <ViewModule />
    </section>

export const Changer = () =>
    <section className="changer">
        <ListChanger />
    </section>