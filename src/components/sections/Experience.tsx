import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="// git log --work" title="Experience & builds" />

        <VerticalTimeline lineColor="#1c242c">
          {EXPERIENCE.map((item, i) => {
            const isWork = item.tag === "work";
            return (
              <VerticalTimelineElement
                key={i}
                date={item.date}
                iconStyle={{
                  background: isWork ? "#ff2d55" : "#00e5ff",
                  color: "#05070a",
                  boxShadow: `0 0 0 4px #0b0f14, 0 0 16px ${isWork ? "#ff2d55" : "#00e5ff"}`,
                }}
                icon={isWork ? <Briefcase className="p-1" /> : <Code2 className="p-1" />}
                contentStyle={{
                  background: "#0b0f14",
                  border: "1px solid #1c242c",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
                contentArrowStyle={{ borderRight: "7px solid #0b0f14" }}
                dateClassName="!font-mono !text-ink-dim !text-xs sm:!text-sm"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                  {item.tag === "work" ? "role" : "project"}
                </span>
                <h3 className="font-display mt-1 text-xl font-bold text-ink">{item.role}</h3>
                <h4 className="mt-1 font-mono text-sm text-red">{item.org}</h4>
                <p className="mt-3 text-sm text-ink-dim">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-ink-dim">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
