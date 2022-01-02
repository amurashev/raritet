import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout h1="Канцтовары, бумага, товары для офиса оптом по низким ценам">
      <div className={styles.bgBox}>
        <p>
          Ищите где купить канцтовары и бумагу оптом в Пскове? ООО «Раритет»
          предлагает широкий ассортимент продукции по низким ценам. Мы работаем
          на рынке Пскова более 10 лет, и нашими клиентами являются крупные
          коммерческие и государственные организации.
        </p>
        <ul className={styles.images}>
          <li className={styles.imageBox}>
            <div className={styles.imageBoxInner}>
              <img src="/office_r.jpg" width="294" alt="Канцтовары" />
            </div>
          </li>
          <li className={styles.imageBox}>
            <div className={styles.imageBoxInner}>
              <img src="/paper_r.jpg" width="294" alt="Бумага" />
            </div>
          </li>
          <li className={styles.imageBox}>
            <div className={styles.imageBoxInner}>
              <img src="/kanc_r.jpg" width="294" alt="Товары для офиса" />
            </div>
          </li>
        </ul>
        <h2>Мы предлагаем следующие товары:</h2>
        <ul className={styles.assortiment}>
          <li>
              Бумагу для офисной техники А4 и А3 формата известных марок:
              Svetocopy, Ballet, KYM lux, IQ, HP;
          </li>
          <li>
              Канцтовары, офисные принадлежности, аксессуары для деловых людей;
          </li>
          <li>
            Папки, скоросшиватели, файлы;
          </li>
          <li>
            Офисную технику;
          </li>
          <li>
            Хозяйственные товары, бытовую химию, уборочный инвентарь;
          </li>
          <li>
            Продукты питания, посуда;
          </li>
        </ul>
        <p>
          Чтобы ознакомиться с полным перечнем предлагаемой продукции, скачайте
          наш прайс-лист. Так же мы рады ответить на все интересующие вас
          вопросы о наличии товара, заказу и оплате по телефонам: (8112)
          56-97-77, 56-72-22.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
