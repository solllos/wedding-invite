import { Welcome } from "./components/welcome";
import styles from "./app.module.css";
import "./index.css";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main>
      {/* <header>경보와 소라</header> */}
      <Welcome />
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
      <Contact />
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
