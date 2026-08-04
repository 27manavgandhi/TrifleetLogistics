'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/lib/constants/content';
import { SectionHeading } from '@/components/sections/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

export function TestimonialsCarousel({
  items = testimonials,
  eyebrow = 'Client Voices',
  title = 'What our clients say',
  highlight = 'Real words from the businesses that trust Tri Fleet to move their freight across India.',
}: {
  items?: Testimonial[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
}) {
  return (
    <section className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-fade" />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            freeMode={{ enabled: false }}
            loop
            className="!pb-14"
          >
            {items.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-card">
                  <Quote className="h-8 w-8 text-accent/40" />
                  <blockquote className="flex-1 text-pretty text-[15px] leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-2 flex justify-center gap-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-border [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-accent" />
        </div>
      </div>
    </section>
  );
}
