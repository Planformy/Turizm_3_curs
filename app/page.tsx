import HeroSection from "@/components/home/HeroSection";
import HomeCategoryCards from "@/components/home/HomeCategoryCards";
import PopularAttractionsBlock from "@/components/home/PopularAttractionsBlock";
import UpcomingEventsBlock from "@/components/home/UpcomingEventsBlock";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      {/* Большой хиро-блок с текстом и поиском */}
      <HeroSection />

      {/* 4 категории */}
      <section className="py-16">
        <Container>
          <HomeCategoryCards />
        </Container>
      </section>

      {/* Популярные достопримечательности */}
      <section className="py-20 bg-[#F7F7F7]">
        <Container>
          <PopularAttractionsBlock />
        </Container>
      </section>

      {/* Ближайшие события */}
      <section className="py-20">
        <Container>
          <UpcomingEventsBlock />
        </Container>
      </section>
    </>
  );
}
