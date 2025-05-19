import { Welcome } from "./components/Welcome";
import { Contact } from "./components/Contact";
import { WeddingCalendar } from "./components/WeddingCalendar";
import { Map } from "./components/Map";
import { Gallery } from "./components/Gallery";
import { Accounts } from "./components/Accounts";
import { Toaster } from "./components/ui/sonner";
import styles from "./app.module.css";
import "./index.css";

function App() {
  return (
    <main>
      {/* TODO: <header>경보와 소라</header> */}
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
      <WeddingCalendar />
      {/* TODO: D-day Counter */}
      <hr />
      <Map />
      <hr />
      <Gallery />
      <hr />
      <Accounts />
      <hr />

      <section className="p-5 mb-[100px]">
        <h2 className="mb-5 text-lg text-primary"> 안내사항</h2>
        <ol className="break-keep">
          <li>
            <h3 className="text-primary text-base">01</h3>
            <p>식사는 뷔페식입니다. 식장 (5층) 에서 한 층 아래 (4층) 에 연회장이 위치해있습니다.</p>
          </li>
          <li>
            <h3 className="mt-1 text-primary text-base">02</h3>
            <p>주차는 2시간 무료이고 이후 주차요금이 발생합니다.</p>
          </li>
        </ol>
      </section>

      {/* TODO: 
      <hr />
      <section>카카오톡 공유하기</section> */}
      <Toaster />
    </main>
  );
}

export default App;
