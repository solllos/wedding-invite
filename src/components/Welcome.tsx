import { useLayoutEffect, useState } from "react";

import styles from "./welcome.module.css";

const IMAGES = ["01.jpg", "02.jpg", "03.jpg"];

export function Welcome() {
  const [imagePath, setImagePath] = useState(IMAGES[0]);

  useLayoutEffect(() => {
    setImagePath(rendomImage());
  }, []);

  return (
    <section>
      <div className={styles.floatingTitle}>
        <h1>
          <span>안녕하세요!{`\n`}경보와 소라 결혼합니다</span>
        </h1>
        <i className={styles.circle}></i>
      </div>
      <section>
        <img
          className={styles.welcomeImage}
          src={`/wedding-invite/${imagePath}`}
          alt="경보와 소라 환영 사진"
        />
      </section>
    </section>
  );
}

function rendomImage() {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return IMAGES[randomIndex];
}
