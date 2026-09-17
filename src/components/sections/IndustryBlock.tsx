import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";
import { Check, FlaskConical, Sprout, Fish, Droplets } from "lucide-react";

export default function IndustryBlock({
  id,
  label,
  color,
  title,
  description,
  points,
  last = false,
}: {
  id: string;
  label: string;
  color: string;
  title: string;
  description: string;
  points: string[];
  last?: boolean;
}) {
  const getIcon = (size: number) => {
    switch (id) {
      case "hoa-chat":
        return <FlaskConical size={size} strokeWidth={size > 60 ? 1.5 : 2} />;
      case "nong-nghiep":
        return <Sprout size={size} strokeWidth={size > 60 ? 1.5 : 2} />;
      case "thuy-san":
        return <Fish size={size} strokeWidth={size > 60 ? 1.5 : 2} />;
      default:
        return <Droplets size={size} strokeWidth={size > 60 ? 1.5 : 2} />;
    }
  };

  return (
    <section id={id} className={clsx("px-6 py-20", !last && "border-b border-slate-100")}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${color}0d`, color }}
              >
                {getIcon(24)}
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color }}>
                {label}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">{description}</p>
            <div className="space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white" style={{ background: color }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}>
                <div className="aspect-video flex items-center justify-center text-white opacity-90">
                  {getIcon(110)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
