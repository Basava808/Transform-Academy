// server component (no "use client")
import React from "react";

export default function Intro() {
  return (
    <section className="wysiwyg section py-16" aria-labelledby="intro-title">
      <div className="container container--sm max-w-5xl mx-auto px-6">
        <h2 id="intro-title" className="section-title h100 text-3xl md:text-4xl font-bold mb-6">
          With over 320 days of sunshine a year
        </h2>

        <div className="cms cms--large text-lg text-gray-700 leading-relaxed">
          <p>
            With over 320 days of sunshine a year and more than 12 hectares of
            state-of-the-art sports facilities, the Mouratoglou Academy is one
            of the most visited destinations in the world for intensive outdoor
            tennis all year round. This demo site uses static assets but is
            structured to accept dynamic content (Firebase / CMS) later.
          </p>

          <p className="mt-4">
            The layout below reproduces the real site's hero, gallery, mixed
            light/dark content blocks and sliders. Replace the dummy images in
            <code> /public/images/ </code> and update copy when ready.
          </p>
        </div>
      </div>
    </section>
  );
}