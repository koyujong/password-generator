"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
    slot?: string; // 특정 광고 슬롯 ID가 있으면 사용, 없으면 자동 광고
    format?: string;
    className?: string;
}

/**
 * Google 애드센스 디스플레이 광고 컴포넌트
 * - 자동 광고 (Auto Ads)가 활성화되면 이 컴포넌트 없이도 광고가 표시됨
 * - 이 컴포넌트는 특정 위치에 수동으로 배치할 때 사용
 */
export default function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
    const adRef = useRef<HTMLDivElement>(null);
    const isAdLoaded = useRef(false);

    useEffect(() => {
        // 이미 로드된 광고는 다시 로드하지 않음
        if (isAdLoaded.current) return;

        try {
            // adsbygoogle 배열에 빈 객체를 push하면 광고가 렌더링됨
            const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
            adsbygoogle.push({});
            isAdLoaded.current = true;
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div className={`w-full overflow-hidden ${className}`} ref={adRef}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3488637908196788"
                data-ad-slot={slot || ""}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
