import type { Metadata } from "next";
import Image from "next/image";
import "@/app/assets/scss/pages/photography.scss";

export const metadata: Metadata = {
    title: "Photography Portraits",
    description: "This page contains a mixture of portraits from childhood to Senior photos.",
};

export default function Photography() {
    return (
        <main className="photography-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Photography Portraits</h1>
            <p>Here is where I will feature portraits done for individuals, which include baby photos and Senior photos.</p>
            <section className="work-card-container mt-4 d-flex gap-3 flex-col">
                <h2>Senior Photos</h2>
                <div className="rounded-box d-flex flex-row gap-3 flex-wrap">
                    <Image
                        src="/images/photography/portraits/kyle-senior/alchove01.png"
                        alt="Alchove Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="33.33333"
                        // style={{ width: '33.33333%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kyle-senior/coffee-shop02.png"
                        alt="Coffee Shop Wall Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="33.33333"
                        // style={{ width: '33.33333%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kyle-senior/fire-escape01.png"
                        alt="Fire Escape Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="33.33333"
                        // style={{ width: '33.33333%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kyle-senior/kyle-weeds01.png"
                        alt="Weeds Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="33.33333"
                        // style={{ width: '33.33333%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kyle-senior/violin01.png"
                        alt="Violin Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="33.33333"
                        // style={{ width: '33.33333%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kyle-senior/sports-shot01.png"
                        alt="Sports Photo"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="50"
                        // style={{ width: '50%', height: 'auto' }}
                    />
                </div>
                <div className="rounded-box d-flex flex-row gap-3 flex-wrap">
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5518.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5521-vignette.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5574.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5585.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5592-glow.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5598.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5610-black-vignette.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <div style={{width: '65%'}}></div>
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5531.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="49"
                        // style={{ width: '49%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/natalie-senior/IMG_5632.png"
                        alt="Kent Bogs Photo"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="49"
                        // style={{ width: '49%', height: 'auto' }}
                    />
                </div>
                <div className="rounded-box d-flex flex-row gap-3 flex-wrap">
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4649.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4661.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4682.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4691.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <div style={{width: '65%'}}></div>
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4678.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="49"
                        // style={{ width: '49%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/michael-senior/IMG_4693.png"
                        alt="Nelson Ledges Photo"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="49"
                        // style={{ width: '49%', height: 'auto' }}
                    />
                </div>
                <h2>Baby Photos</h2>
                <div className="rounded-box d-flex flex-row gap-3 flex-wrap">
                    <Image
                        src="/images/photography/portraits/clayton-1-year/IMG_4928.png"
                        alt="Clayton 1 Year Old"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/clayton-1-year/IMG_4940.png"
                        alt="Clayton 1 Year Old"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/clayton-1-year/IMG_4967.png"
                        alt="Clayton 1 Year Old"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                </div>
                <h2>Dances</h2>
                <div className="rounded-box d-flex flex-row gap-3 flex-wrap">
                    <Image
                        src="/images/photography/portraits/kat-remy-homecoming-9th/IMG_5574.png"
                        alt="Homecoming Photos"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kat-remy-homecoming-9th/IMG_5591.png"
                        alt="Homecoming Photos"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kat-remy-homecoming-9th/IMG_5609.png"
                        alt="Homecoming Photos"
                        className="img-responsive portrait"
                        width={400}
                        height={600}
                        // sizes="32"
                        // style={{ width: '32%', height: 'auto' }}
                    />
                    <Image
                        src="/images/photography/portraits/kat-remy-homecoming-9th/IMG_5596.png"
                        alt="Homecoming Photos"
                        className="img-responsive landscape"
                        width={600}
                        height={400}
                        // sizes="49"
                        // style={{ width: '49%', height: 'auto' }}
                    />
                </div>
            </section>
        </main>
    );
}
