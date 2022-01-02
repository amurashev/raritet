import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Contacts.module.css";

const Home: NextPage = () => {
  return (
    <Layout h1="Наши контакты">
      <div className="text">
        <div className="contacts">
          <div>ООО "Раритет"</div>
          <div>г. Псков, ул. Народная, д.21, 3 этаж</div>
          <div>(8112) 56-97-77</div>
          <div>(8112) 56-72-22</div>
          <div>
            <a href="mailto:raritetpskov@rambler.ru">raritetpskov@rambler.ru</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
