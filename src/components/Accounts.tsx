import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ACCOUNTS = {
  groom: [
    {
      role: "신랑",
      name: "심경보",
      account: "107-081772-01-010",
      bank: "기업은행",
      kakaopay: "https://qr.kakaopay.com/Ej8rh9TRz",
    },
    {
      role: "신랑 아버지",
      name: "심재천",
      account: "",
      bank: "",
      kakaopay: "https://qr.kakaopay.com/FQVuRy2OX",
    },
    {
      role: "신랑 어머니",
      name: "박효숙",
      account: "",
      bank: "",
      kakaopay: "https://qr.kakaopay.com/FMVl4nuF8",
    },
  ],
  bride: [
    {
      role: "신부",
      name: "김소라",
      account: "1000-0541-7348",
      bank: "토스뱅크",
      kakaopay: "https://qr.kakaopay.com/Ej7ljZNvU",
    },
    {
      role: "신부 아버지",
      name: "김봉상",
      account: "1002-283-6986367",
      bank: "우리은행",
      kakaopay: "https://qr.kakaopay.com/FdK0IAHJk",
    },
    {
      role: "신부 어머니",
      name: "박수민",
      account: "110-365-485156",
      bank: "신한은행",
      kakaopay: "https://qr.kakaopay.com/FF3RhRrfM",
    },
  ],
} as const;

export function Accounts() {
  return (
    <section className="p-5">
      <h2 className="mb-5 text-lg text-primary">마음 전하실 곳</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="groom">
          <AccordionTrigger className="px-4 bg-[#c8d5fd] cursor-pointer">
            신랑측 계좌번호
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {ACCOUNTS.groom.map(({ role, name, account, bank, kakaopay }) => (
                <li
                  key={name}
                  className="flex justify-between items-center px-2 py-5 border-b border-dotted"
                >
                  <CopyToClipboard
                    text={account.replace(/[^0-9]/g, "")}
                    onCopy={() => {
                      toast(`${account} 계좌번호가 복사되었습니다.`);
                    }}
                  >
                    <p className="cursor-pointer text-base">
                      <span className="text-[#6e8ff4]">{role}</span> {name}
                      <span className="block mt-2 break-keep">
                        {bank} {account}
                      </span>
                    </p>
                  </CopyToClipboard>
                  <div className="inline-flex items-center">
                    <CopyToClipboard
                      text={account.replace(/[^0-9]/g, "")}
                      onCopy={() => {
                        toast(`${account} 계좌번호가 복사되었습니다.`);
                      }}
                    >
                      <button type="button" className="cursor-pointer">
                        <p className="block w-[40px] h-[40px] ml-2 p-1 rounded-[50%] bg-[#eee] leading-[32px]">
                          복사
                        </p>
                      </button>
                    </CopyToClipboard>
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => window.open(kakaopay)}
                    >
                      <p className="sr-only">카카오페이로 송금하기</p>
                      <i className="block ml-2 p-3 rounded-[50%] bg-[#fae100]">
                        <KakaoIcon />
                      </i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bride">
          <AccordionTrigger className="mt-4 px-4 bg-[#ffc3d4] cursor-pointer">
            신부측 계좌번호
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {ACCOUNTS.bride.map(({ role, name, account, bank, kakaopay }) => (
                <li
                  key={name}
                  className="flex justify-between items-center px-2 py-5 border-b border-dotted"
                >
                  <CopyToClipboard
                    text={account.replace(/[^0-9]/g, "")}
                    onCopy={() => {
                      toast(`${account} 계좌번호가 복사되었습니다.`);
                    }}
                  >
                    <p className="cursor-pointer text-base">
                      <span className="text-[#ff638f]">{role}</span> {name}
                      <span className="block mt-2 break-keep">
                        {bank} {account}
                      </span>
                    </p>
                  </CopyToClipboard>
                  <div className="inline-flex items-center">
                    <CopyToClipboard
                      text={account.replace(/[^0-9]/g, "")}
                      onCopy={() => {
                        toast(`${account} 계좌번호가 복사되었습니다.`);
                      }}
                    >
                      <button type="button" className="cursor-pointer">
                        <p className="block w-[40px] h-[40px] ml-2 p-1 rounded-[50%] bg-[#eee] leading-[32px]">
                          복사
                        </p>
                      </button>
                    </CopyToClipboard>
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => window.open(kakaopay)}
                    >
                      <p className="sr-only">카카오페이로 송금하기</p>
                      <i className="block ml-2 p-3 rounded-[50%] bg-[#fae100]">
                        <KakaoIcon />
                      </i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function KakaoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 99.618 92.147"
    >
      <script />
      <script />
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 595.28h841.89V0H0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1 0 0 -1 -362.264 234.099)">
        <path
          d="M248.81-143.579c-26.953 0-48.808-17.256-48.808-38.555 0-13.68 9.052-25.693 22.646-32.549l-4.599-17.167a1.42 1.42 0 0 1 .352-1.465c.263-.265.614-.41.995-.41.294 0 .586.116.85.321l19.775 13.36a62.109 62.109 0 0 1 8.79-.644c26.952 0 48.81 17.255 48.81 38.554 0 21.3-21.858 38.555-48.81 38.555"
          style={{
            fill: "#3c1e1e",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          transform="translate(163.261 376.678)"
        />
      </g>
    </svg>
  );
}
