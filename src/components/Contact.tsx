import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import styles from "./contact.module.css";
import { Fragment } from "react/jsx-runtime";

const CONTACT_LIST = [
  { family: "신랑 아버지", name: "심재천", phone: "010-8634-1960" },
  { family: "신랑 어머니", name: "박효숙", phone: "010-2359-9960" },
  { family: "신부 아버지", name: "김봉상", phone: "010-3651-7531" },
  { family: "신부 어머니", name: "박수민", phone: "010-4228-5080" },
];

export function Contact() {
  return (
    <>
      <Sheet>
        <section className={styles.contact}>
          심재천 &middot; 박효숙 <span className={styles.light}>의 차남</span>{" "}
          <strong>경보</strong> {`\n`}
          김봉상 &middot; 박수민 <span className={styles.light}>
            의 장녀
          </span>{" "}
          <strong>소라</strong>
          <SheetTrigger className="bg-primary-light block mx-auto my-12 p-3 px-10 rounded-md cursor-pointer">
            <TelephoneIcon className="inline mx-2" /> 혼주에게 연락하기
          </SheetTrigger>
        </section>

        <SheetContent side="bottom" className="p-3 rounded-t-2xl">
          <SheetHeader>
            <SheetTitle>축하를 전해주세요</SheetTitle>
            <div>
              <ul>
                {CONTACT_LIST.map(({ family, name, phone }, index) => {
                  const color = family.includes("신부")
                    ? "text-[#eb5c85]"
                    : "text-[#4368db]";

                  return (
                    <Fragment key={family}>
                      {index === 2 && (
                        <div className="border-b-1 border-primay-light my-2"></div>
                      )}
                      <li className="flex justify-between items-center py-2">
                        <span className="text-lg">
                          <span className={`text-base ${color}`}>{family}</span>{" "}
                          &middot;
                          {name}
                        </span>
                        <span className={styles.contactIcons}>
                          <a href={`tel:${phone}`}>
                            <TelephoneIcon fill="#888" />
                          </a>
                          <a href={`sms:${phone}`} className={styles.smsIcon}>
                            <SMSIcon fill="#888" />
                          </a>
                        </span>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

function TelephoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.9 64.4C56.7 64.5 55.6 63.9 54.5 63.3C44.4 57.4 35.8 49 29.8 39C28.7 37.3 27.7 35.3 28.1 33.3C28.8 29.5 33.6 28 35 24.4C36.3 21.3 34.6 17.8 32.6 15.1C29.3 10.6 25.1 6.70002 20.3 3.80002C18 2.40002 15.5 1.20002 12.8 1.00002C0.699963 0.40002 -3.60012e-05 20.6 1.59996 28.5C3.29996 36.7 7.39996 44.3 12.2 51.2C23.5 67.6 39 81.5 57.8 88.1C64.4 90.4 71.5 91.8 78.3 90.2C81.7 89.4 84.9 87.9 87.3 85.3C89.7 82.8 91 79.2 90.4 75.8C89.8 72.3 87.4 69.5 85 67C81.5 63.4 77.6 60.2 73.4 57.4C72.6 56.9 71.8 56.4 70.9 56.3C69.9 56.2 69 56.7 68.1 57.2C65.6 58.6 63.3 60.3 61.3 62.2C60.4 63.1 59.4 64 58.2 64.2C58.1 64.3 58 64.4 57.9 64.4Z"
        fill={props.fill ?? "#69a078"}
      />
    </svg>
  );
}

function SMSIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="22"
      height="14"
      viewBox="0 0 70 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.605 2.77701C67.6011 2.7731 67.5972 2.76919 67.5933 2.76138C67.5386 2.70669 67.4917 2.652 67.437 2.59732C67.4136 2.57388 67.3901 2.55435 67.3667 2.53482C66.019 1.23402 64.187 0.429321 62.1714 0.429321H7.8314C5.8158 0.429321 3.9837 1.23401 2.6361 2.53482C2.61267 2.55435 2.58532 2.57779 2.56579 2.60123C2.5111 2.65201 2.46423 2.71061 2.41345 2.76529C2.40954 2.76919 2.40173 2.7731 2.39783 2.78091C1.12443 4.12471 0.335327 5.93711 0.335327 7.93321V42.7652C0.335327 46.9019 3.69863 50.2652 7.83533 50.2652H62.1713C66.308 50.2652 69.6713 46.9019 69.6713 42.7652L69.6674 7.92921C69.6674 5.93311 68.8784 4.12071 67.605 2.77701ZM62.1675 3.42935C62.7651 3.42935 63.3355 3.55044 63.855 3.76529L35 25.9533L6.14499 3.76229C6.66843 3.54745 7.23879 3.42635 7.83249 3.42635L62.1675 3.42935ZM66.6675 42.7613C66.6675 45.2418 64.648 47.2613 62.1675 47.2613H7.83148C5.35098 47.2613 3.33148 45.2418 3.33148 42.7613V7.92935C3.33148 7.15982 3.54243 6.44495 3.88618 5.81215L34.9992 29.7341L66.1122 5.80815C66.4559 6.44096 66.6669 7.15584 66.6669 7.92534L66.6675 42.7613Z"
        fill={props.fill ?? "#69a078"}
      />
    </svg>
  );
}
