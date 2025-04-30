import styles from "./app.module.css";

function App() {
  return (
    <main>
      {/* <header>경보와 소라</header> */}
      <div className={styles.floatingTitle}>
        <h1>
          <span>안녕하세요!{`\n`}경보와 소라 결혼합니다</span>
        </h1>
        <i className={styles.circle}></i>
      </div>
      <section>
        <img
          src="./01.jpg"
          className={styles.welcomeImage}
          alt="경보와 소라 환영 사진"
        />
      </section>
      <section className={styles.location}>
        2025년 07월 20일 일요일 오전 11시{`\n`} MJ컨벤션 5층 그랜드볼룸홀
      </section>
      <hr />
      <section className={styles.contents}>
        삶의 사소한 것들 마저도 평생 함께하고 싶은 사람을 만났습니다. {`\n`}
        가장 빛날 오늘, 곁에서 아껴주신{`\n`}
        <strong>고마운 분들을 초대합니다.</strong> {`\n`}
        사랑으로 첫 걸음을 내딛는 날 함께해주세요.
      </section>
      <section className={styles.contents}>
        심재천 &middot; 박효숙 의 차남 <strong>경보</strong> {`\n`}
        김봉상 &middot; 박수민 의 장녀 <strong>소라</strong>
        <button type="button" className={styles.call}>
          혼주에게 연락하기
        </button>
      </section>
      <hr />
      <section>달력넣기</section>
      <hr />
      <section>지도넣기</section>
      <hr />
      <section>갤러리</section>
      <hr />
      <section>마음 전하실 곳</section>
      <hr />
      <section>안내사항</section>
      <hr />
      <section>카카오톡 공유하기</section>
    </main>
  );
}

export default App;
