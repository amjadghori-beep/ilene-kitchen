export default function Page() {
  const gallery = [
    { src: "/images/outside-building.jpg", label: "Exterior Access" },
    { src: "/images/oven-equipment.jpg", label: "Oven + Equipment" },
    { src: "/images/kettle-worktables.jpg", label: "Kettle + Work Tables" },
    { src: "/images/three-comp-sink.jpg", label: "3-Comp Sink + Wash Stations" },
    { src: "/images/fridge-freezer.jpg", label: "Fridge + Freezer" },
    { src: "/images/front-room.jpg", label: "Pickup + Break Area" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Ilene Kitchen</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight">
              Clean, reliable, no-BS production space.
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              Built for operators who need to move fast.
            </p>
            <p className="mt-6 max-w-2xl text-neutral-300">
              No long-term lease. No buildout. Just show up and get to work. Built for food trucks, bakers, meal prep businesses, and beverage brands that need a dependable place to produce.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#tour" className="rounded-xl bg-amber-300 px-6 py-3 text-center font-medium text-black hover:bg-amber-200">
                Book a Tour
              </a>
              <a href="tel:9082622040" className="rounded-xl border border-white/20 px-6 py-3 text-center text-white hover:bg-white/10">
                Call 908-262-2040
              </a>
            </div>
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-neutral-400">Membership</div>
                <div className="text-xl font-semibold">$300</div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-neutral-400">Hourly Rate</div>
                <div className="text-xl font-semibold">$30/hr</div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-neutral-400">Access</div>
                <div className="text-xl font-semibold">Flexible</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-amber-300/10 p-4">
                <div className="text-sm text-amber-200">Plans</div>
                <div className="text-xl font-semibold">Starting under $599</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img src="/images/outside-building.jpg" alt="Ilene Kitchen exterior" className="h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Who this is for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Food trucks",
              "Bakers",
              "Meal prep",
              "Beverage brands",
              "Pop-ups",
              "Growing food businesses",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white/5 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "All-inclusive operating costs",
              "Full onboarding support",
              "Flexible terms",
              "Equipment included",
              "Cleaning and waste handled",
              "240V and 110V power",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-neutral-900 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Inside the kitchen</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div key={img.src}>
                <img src={img.src} alt={img.label} className="h-64 w-full rounded-lg object-cover" />
                <p className="mt-2 text-sm text-neutral-400">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Join", desc: "Complete membership and submit required documents." },
              { title: "Book", desc: "Schedule kitchen time that fits your production needs." },
              { title: "Produce", desc: "Start cooking, baking, or packaging immediately." },
            ].map((step, i) => (
              <div key={step.title} className="rounded-lg bg-white/5 p-6">
                <p className="text-sm text-amber-300">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-neutral-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-200">Why operators choose us</p>
            <h2 className="mt-3 text-2xl font-semibold">A practical setup that helps you start faster.</h2>
            <p className="mt-4 max-w-3xl text-neutral-300">
              Clean workspace, commercial equipment, structured pricing, flexible access, and a straightforward onboarding process for operators who need a dependable kitchen without building one from scratch.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-2 text-neutral-300">
            Everything you need to operate—without building your own kitchen.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-neutral-900 p-6">Membership $300</div>
            <div className="rounded-lg bg-neutral-900 p-6">$30/hour</div>
            <div className="rounded-lg bg-neutral-900 p-6">Starting under $599</div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="mt-4 text-neutral-300">
            6 Ilene Ct Unit 21 Bldg 9
            <br />
            Hillsborough, NJ 08844
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a href="https://www.google.com/maps/search/?api=1&query=6+Ilene+Ct+Unit+21+Bldg+9+Hillsborough+NJ+08844" target="_blank" rel="noreferrer" className="rounded-xl bg-amber-300 px-6 py-3 text-center font-medium text-black hover:bg-amber-200">
              Open in Google Maps
            </a>
            <a href="tel:9082622040" className="rounded-xl border border-white/20 px-6 py-3 text-center text-white hover:bg-white/10">
              Call 908-262-2040
            </a>
          </div>
        </div>
      </section>

      <section id="tour" className="bg-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.95fr,1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold">Request a Tour</h2>
              <p className="mt-3 text-neutral-300">
                Tell us what you produce, what equipment you need, and how often you need access.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-neutral-950/60 p-4 text-sm text-neutral-300">
                Prefer to call directly?
                <br />
                <a href="tel:9082622040" className="mt-1 inline-block font-medium text-amber-200 hover:text-amber-100">
                  908-262-2040
                </a>
              </div>
            </div>

            <form action="https://formsubmit.co/amjad.ghori@chopsandsteaks.com" method="POST" className="grid gap-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Kitchen Tour Request" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="full_name" className="rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="Full name" />
                <input name="business_name" className="rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="Business name" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="email" type="email" className="rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="Email address" />
                <input name="phone" type="tel" className="rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="Phone number" />
              </div>

              <input name="what_do_you_produce" className="rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="What do you produce?" />

              <div className="grid gap-4 sm:grid-cols-2">
                <select name="preferred_schedule" defaultValue="" className="rounded-xl bg-neutral-950 px-4 py-3 text-white">
                  <option value="" disabled>Preferred schedule</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <select name="storage_needs" defaultValue="" className="rounded-xl bg-neutral-950 px-4 py-3 text-white">
                  <option value="" disabled>Need cold or dry storage?</option>
                  <option value="No">No</option>
                  <option value="Cold storage">Cold storage</option>
                  <option value="Dry storage">Dry storage</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <textarea name="details" rows={5} className="min-h-[140px] rounded-xl bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500" placeholder="Tell us about your equipment needs, production volume, and preferred tour times" />

              <button className="rounded-xl bg-amber-300 px-5 py-3 font-medium text-black hover:bg-amber-200">
                Request Tour Information
              </button>
            </form>
          </div>
        </div>
      </section>

      <a href="tel:9082622040" className="fixed bottom-4 right-4 z-50 rounded-full bg-amber-300 px-5 py-3 font-medium text-black shadow-lg hover:bg-amber-200 sm:hidden">
        Call Now
      </a>
    </main>
  );
}