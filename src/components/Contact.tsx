import styles from "./contact.module.css";

export function Contact() {
  return (
    <section className={styles.contact}>
      심재천 &middot; 박효숙 <span className={styles.light}>의 차남</span>{" "}
      <strong>경보</strong> {`\n`}
      김봉상 &middot; 박수민 <span className={styles.light}>의 장녀</span>{" "}
      <strong>소라</strong>
      <button type="button" className={styles.call}>
        혼주에게 연락하기
      </button>
    </section>
  );
}
