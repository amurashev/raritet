import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const Layout: NextPage = ({ children, h1 }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          Канцтовары, бумага, товары для офиса оптом по низким ценам - ООО
          Раритет
        </title>
        <meta
          name="keywords"
          content="купить канцовары, купить бумагу оптом, купить товары для офиса"
        />
        <meta
          name="description"
          content="ООО «Раритет» предлагает широкий ассортимент продукции по низким ценам. Мы работаем на рынке Пскова более 10 лет, и нашими клиентами являются крупные коммерческие и государственные организации"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <header>
        <div className={styles.container}>
          <div className={styles.topBox}>
            <div className={styles.logoBox}>
              <span className={styles.logo}>Раритет</span>
            </div>
            <ul className={styles.menu}>
              <li>
                <a href="/" className={styles.menuItem}>
                  Главная
                </a>
              </li>
              <li>
                <a href="/price.xls" className={styles.menuItem}>
                  Прайс
                </a>
              </li>
              <li>
                <a href="/contacts" className={styles.menuItem}>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className={styles.h1Box}>
        <div className={styles.container}>
          <div className={styles.h1BoxInner}>
            <h1 className={styles.h1}>{h1}</h1>
          </div>
        </div>
      </div>

      <main>
        <div className={styles.container}>{children}</div>
      </main>

      <footer>
        <div className={styles.container}>
          <div className={styles.footerBox}>
            <div className={styles.footerLine1}>
              <div className={styles.footerItem1}>
                <div>ООО "Раритет"</div>
                <div>г. Псков, ул. Народная, д.21, 2 этаж</div>
                <div>(8112) 56-97-77, 56-72-22</div>
                <div>пн-чт 09:00–17:30; пт 09:00–17:00</div>
              </div>

              <div className={styles.footerItem2}>
                <ul>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>
                    <a href="/price.xls">Прайс</a>
                  </li>
                  <li>
                    <a href="/contacts.php">Контакты</a>
                  </li>
                  <li>
                    <a href="mailto:raritetpskov@rambler.ru">
                      raritetpskov@rambler.ru
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerLine2}>
              2013-2022 Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
