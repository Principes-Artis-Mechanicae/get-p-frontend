import { Toast } from "@/common/feedback/Toast";
import { Footer } from "@/common/layout/Footer";
import { Header } from "@/common/layout/Header";
import { Main } from "@/common/layout/MainLayout";

import { Carousel } from "@/components/home/Carousel";

import { carouselImgSrc } from "@/constants/carouselImgSrc";

import { nav_height } from "@/styles/variables";

export default function HomePage() {
    return (
        <>
            <Toast />
            <Header />
            <div style={{ height: nav_height }} />

            <Carousel carouselImgSrc={carouselImgSrc} />

            <Main>
                <p>Home Page</p>
            </Main>

            <Footer />
        </>
    );
}
