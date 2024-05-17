import { Carousel } from "@/common/display/Carousel";
import { Toast } from "@/common/feedback/Toast";
import { Footer } from "@/common/layout/Footer";
import { Header } from "@/common/layout/Header";
import { Main } from "@/common/layout/MainLayout";

export default function HomePage() {
    return (
        <>
            <Toast />
            <Header />

            <Carousel
                imgArr={["/home/carousel.png", "/home/carousel1.jpg", "/home/carousel2.jpg", "/home/carousel3.jpg"]}
            />

            <Main>
                <p>Home Page</p>
            </Main>

            <Footer />
        </>
    );
}
