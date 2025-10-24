import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Mitchell Hashimoto",
    handle: "@mitchellh",
    avatar: "/mitchell.jpg",
    verified: true,
    content:
      "I've joined Polar as an advisor!\n\nI think it benefits everyone for devs to have more options to get paid to work on their passions, to support upstreams, and for users to have more confidence/transparency in the software they're supporting/purchasing.",
  },
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    avatar: "/guillermo.jpg",
    verified: true,
    content:
      "The speed at which Polar is executing on the financial infrastructure primitives the new world needs is very impressive",
  },
  {
    name: "Steven Tey",
    handle: "@steventey",
    avatar: "/steven.jpg",
    verified: true,
    content:
      "Open source + great DX + responsive support always wins.\n\nIf you're selling stuff online and haven't tried @polar_sh yet — 100% recommend doing so!",
  },
  {
    name: "Alex Bass",
    handle: "@alexhbass",
    avatar: "/diverse-group-meeting.png",
    verified: true,
    content:
      "We switched to @polar_sh because of their killer API, UX, and product. Also love that it's Open-Source. Their team cares A LOT as well. Worth the minor fee difference.",
  },
  {
    name: "Andrea Bizzotto u",
    handle: "@biz84",
    avatar: "/andrea.jpg",
    verified: true,
    content:
      "I've been integrating Polar recently and had a fantastic experience! Great DX and the team responds to support super quickly!",
  },
  {
    name: "enjie",
    handle: "@im_enjie",
    avatar: "/enjie.jpg",
    verified: true,
    content:
      "I finally tried @polar_sh after all the hype, and it's hands down the smoothest, most developer-friendly, and straightforward payment integration out there.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-20" id="testimonials">
      <div className="mb-12 text-center">
        <p className="mb-4 text-sm text-muted-foreground">Testimonials</p>
        <h2 className="mb-8 text-4xl tracking-tight text-balance lg:text-5xl">
          Why people love Polar
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 backdrop-blur-sm bg-card"
          >
            <div className="mb-4 flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  {testimonial.verified && (
                    <CheckCircle2 className="h-4 w-4 text-action" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {testimonial.handle}
                </span>
              </div>
            </div>
            <p className="whitespace-pre-line text-muted-foreground">
              {testimonial.content}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
