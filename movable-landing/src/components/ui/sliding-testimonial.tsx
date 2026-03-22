"use client";

const testimonials = [
  {
    name: "Supply Chain Director",
    profession: "Major Telco",
    description: "I need a view from six people instantly when a crisis hits. Movable coordinates that view immediately.",
    avatar: "S",
    color: "tango",
  },
  {
    name: "Operations Leader",
    profession: "Last Mile Logistics",
    description: "Every parcel can make the network smarter if we can capture that data.",
    avatar: "O",
    color: "aqua",
  },
  {
    name: "COO",
    profession: "High-Volume Retail",
    description: "I need to know why the metrics are red without driving to 20 different sites.",
    avatar: "C",
    color: "lime",
  },
  {
    name: "Industrial Director",
    profession: "Manufacturing",
    description: "We need to transfer knowledge by voice because it's faster and clearer.",
    avatar: "I",
    color: "tango",
  },
  {
    name: "Co-Founder",
    profession: "Quick Commerce Unicorn",
    description: "I passionately love it. It operationalizes the discipline of meeting preparation without the burden of writing, unlocking hours of time.",
    avatar: "CF",
    color: "aqua",
  },
  {
    name: "VP Operations",
    profession: "Global Logistics",
    description: "The ground truth we get from Movable has transformed how we respond to disruptions. We're hours ahead of where we used to be.",
    avatar: "VP",
    color: "lime",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string }> = {
    tango: { bg: "bg-tango/20", text: "text-tango" },
    aqua: { bg: "bg-aqua/20", text: "text-aqua" },
    lime: { bg: "bg-lime/20", text: "text-lime" },
  };
  return colors[color] || colors.tango;
};

const SlidingTestimonial = () => {
  return (
    <section id="testimonials" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Validated by Operational Leaders.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Hear from the operations teams who rely on Movable Voice to capture the ground truth.
          </p>
        </div>

        <div
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
          className="flex relative overflow-hidden"
        >
          <div className="flex animate-x-slider gap-5 w-max">
            {duplicatedTestimonials.map((testimonial, idx) => {
              const colorClasses = getColorClasses(testimonial.color);
              return (
                <div
                  key={idx}
                  className="border border-white/10 flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl shrink-0 grow-0 w-[400px] md:w-[500px] h-full hover:border-white/20 transition-colors"
                >
                  <p className="px-6 py-6 text-pretty text-lg md:text-xl font-light text-white/90 leading-relaxed">
                    &quot;{testimonial.description}&quot;
                  </p>
                  <div className="border-t border-white/10 w-full flex gap-1 overflow-hidden mt-auto">
                    <div className="flex-1 flex gap-3 items-center px-6 py-4">
                      <div
                        className={`w-10 h-10 rounded-full ${colorClasses.bg} flex items-center justify-center shrink-0`}
                      >
                        <span className={`${colorClasses.text} font-heading font-bold text-sm`}>
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-base font-medium text-white">
                          {testimonial.name}
                        </h5>
                        <p className="text-white/50 text-sm">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingTestimonial;
