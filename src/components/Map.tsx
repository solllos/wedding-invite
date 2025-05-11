import { useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
      <p className="mt-2 mb-5 whitespace-pre-line leading-8">
        MJ컨벤션 5층 그랜드볼룸홀 {`\n`}경기 부천시 소사구 소사본동 65-7
      </p>
      <div id="map" className="w-full h-[400px] z-1 rounded-md"></div>
      <Dialog>
        <DialogTrigger className="w-[100%] mt-5 py-4 border border-[#e2e2e2] rounded-md">
          약도 이미지로 보기
        </DialogTrigger>
        <DialogContent className="pt-10 px-3">
          <img src="/wedding-invite/map_mj.webp" />
        </DialogContent>
      </Dialog>
    </section>
  );
}
