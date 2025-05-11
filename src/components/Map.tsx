import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Map() {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.481761, 126.798485),
      zoom: 15,
      maxZoom: 20,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_BOTTOM,
      },
      scrollWheel: false,
      logoControl: false,
    };
    const map = new naver.maps.Map("map", mapOptions);
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.481791, 126.798485),
      animation: naver.maps.Animation.BOUNCE,
      map: map,
    });
    const infoWindow = new naver.maps.InfoWindow({
      content: `<div style="padding: 1rem">MJ 컨벤션</div>`,
    });
    infoWindow.open(map, marker);
  }, []);

  return (
    <section className="p-5">
      <h2 className="text-lg text-primary">오시는 길</h2>
      <p className="mt-2 leading-8">MJ컨벤션 5층 그랜드볼룸홀</p>
      <p className="text-sm mb-5">
        경기 부천시 소사구 소사본동 65-7 (tel. 032-347-5500)
      </p>
      <div id="map" className="w-full h-[400px] z-1 rounded-md"></div>
      <Dialog>
        <DialogTrigger className="w-[100%] mt-5 py-4 border border-[#e2e2e2] rounded-md">
          약도 이미지로 보기
        </DialogTrigger>
        <DialogContent className="pt-10 px-3">
          <DialogTitle className="sr-only">오시는 길 약도 이미지</DialogTitle>
          <img src="/wedding-invite/map_mj.webp" />
        </DialogContent>
      </Dialog>

      <strong className="block mt-5">지하철</strong>
      <p>(1호선 / 서해선) 소사역 1번 출구 건너편 좌측 방향</p>
      <strong className="block mt-4">버스</strong>
      <p>19, 83, 88, 53, 60-1</p>
      <strong className="block mt-4">주차</strong>
      <p className="whitespace-pre-line">
        건물 주차장 이용 (2시간 무료)
        {`\n`} - 대로변 주차타워 (총 4층)
        {`\n`} - 건물 뒷 편 주차타워 (총 8층: 웨딩홀과 연결된 다리가 있어 조금
        더 편리해요)
      </p>
    </section>
  );
}
