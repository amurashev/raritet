// @ts-nocheck

import { useEffect } from "react";
import type { NextPage } from "next";

import Layout from "../components/Layout";
import styles from "../styles/Contacts.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(20378650, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    });
  }, []);
  return (
    <Layout h1="Наши контакты">
      <div className={styles.box}>
        <div className={styles.map}>
          <img src="/map.png" width="980" alt="Контакты" />
        </div>
        <div className={styles.contacts}>
          <div className={styles.companyName}>ООО &quot;Раритет&quot;</div>
          <div className={styles.address}>
            г. Псков, ул. Народная, д.21, 2 этаж
          </div>
          <div>(8112) 56-97-77</div>
          <div>(8112) 56-72-22</div>
          <div className={styles.work}>пн-чт 09:00–17:30; пт 09:00–17:00</div>
          <div className={styles.email}>
            <a href="mailto:raritetpskov@rambler.ru">raritetpskov@rambler.ru</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
