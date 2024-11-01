import InfoCard from "@/components/InfoCard";
import KnowledgeCard from "@/components/KnowledgeCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import Splash from "@/components/Splash";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="w-11/12 max-w-5xl mx-auto mb-16 flex flex-col gap-16">
      <section id="splash">
        <Splash />
      </section>
      <section id="info">
        <InfoCard />
      </section>
      <section id="what-i-know">
        <h2 className="mx-auto p-4 text-3xl font-bold">{"What I Know"}</h2>
        <KnowledgeCard />
      </section>
      <section id="what-ive-done">
        <h2 className="mx-auto p-4 text-3xl font-bold">{"What I've Done"}</h2>
        <ProjectCarousel projects={projects} />
      </section>
    </div>
  );
}
