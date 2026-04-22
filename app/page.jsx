</> JavaScript

export default function CommissaryKitchenWebsite() {
  const gallery = [
    { src: "/images/outside-building.jpg", label: "Exterior Access" },
    { src: "/images/oven-equipment.jpg", label: "Oven + Equipment" },
    { src: "/images/kettle-worktables.jpg", label: "Kettle + Work Tables" },
    { src: "/images/three-comp-sink.jpg", label: "3-Comp Sink + Wash Stations" },
    { src: "/images/fridge-freezer.jpg", label: "Fridge + Freezer" },
    { src: "/images/front-room.jpg", label: "Pickup + Break Area" },
  ];

  const audiences = [
    "Food trucks needing a licensed kitchen",
    "Bakers scaling production",
    "Meal prep businesses",
    "Coffee and tea beverage packers",
    "Pop-ups and market vendors",
    "Small food brands growing fast",
  ];

  const features = [
    "Fully equipped commercial kitchen",
    "Prep tables, ovens, mixers, and kettle",
    "Cold and dry storage options",
    "240V and 110V power access",
    "Cleaning, trash, and oil disposal included",
    "Pest control handled",
    "Flexible booking schedule",
    "Professional production environment",
    "Optional cleaning and prep help",
    "All-inclusive operating costs (gas, electricity, waste, pest control, fire safety)",
    "Full onboarding support (layout, permits, delivery apps, inspections)",
    "Flexible terms to scale without long-term commitment",
  ];

  const steps = [
    {
      title: "Join",
      desc: "Complete membership and submit required documents.",
    },
    {
      title: "Book",
      desc: "Schedule kitchen time that fits your production needs.",
    },
    {
      title: "Produce",
      desc: "Start cooking, baking, or packaging immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Ilene Kitchen</p>

          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight">
            Clean, reliable, no-BS production space. Ready when you are.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Built for operators who need to move fast.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            No long-term lease. No buildout. Just show up and get to work. Built for food trucks,
            bakers, meal prep businesses, and beverage brands that need a clean, reliable place to
            produce.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#tour"
              className="rounded-xl bg-amber-300 px-6 py-3 font-medium text-black transition hover:bg-amber-200"
            >
              Book a Tour
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              View Pricing
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-semibold">Who this is for</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-semibold">Inside the kitchen</h2>
        <p className="mt-2 text-neutral-400">Real workspace. Real equipment. Built for getting work done.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={item.src} alt={item.label} className="h-64 w-full object-cover" />
              <div className="px-3 py-2 text-sm text-neutral-400">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-amber-200">Step {i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-neutral-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Everything you need to operate—without the cost of building your own kitchen.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold">Membership</h3>
              <p className="mt-2 text-neutral-300">$300</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold">Kitchen Access</h3>
              <p className="mt-2 text-neutral-300">$30 per hour</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="font-semibold">Plans</h3>
              <p className="mt-2 text-neutral-300">
                Starting under $599 · Hourly, daily, weekly, monthly
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Security deposit and insurance required. Limited availability for new members.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Location</h2>
            <p className="mt-3 leading-8 text-neutral-300">
              6 Ilene Ct Unit 21 Bldg 9
              <br />
              Hillsborough, NJ 08844
              <br />
              Phone: 908-262-2040
            </p>
            <div className="mt-6 space-y-3 text-sm text-neutral-400">
              <p>Convenient industrial access for production businesses.</p>
              <p>Suitable for operators who need dependable kitchen time without a full private buildout.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Find us</p>
                <h3 className="mt-3 text-2xl font-semibold">Visit Ilene Kitchen</h3>
                <p className="mt-4 leading-8 text-neutral-300">
                  6 Ilene Ct Unit 21 Bldg 9
                  <br />
                  Hillsborough, NJ 08844
                </p>
                <p className="mt-4 text-sm text-neutral-400">
                  Map embeds can be blocked in preview mode, so use the button below to open directions directly in Google Maps.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6+Ilene+Ct+Unit+21+Bldg+9+Hillsborough+NJ+08844"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-amber-300 px-6 py-3 text-center font-medium text-black transition hover:bg-amber-200"
                >
                  Open in Google Maps
                </a>
                <a
                  href="tel:9082622040"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
                >
                  Call 908-262-2040
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tour" className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold">Request a Tour</h2>
              <p className="mt-3 text-neutral-300">
                Tell us what you produce, what equipment you need, and how often you need access.
              </p>
              <div className="mt-6 space-y-3 text-sm text-neutral-400">
                <p>Fastest way to get started:</p>
                <p>1. Submit your details</p>
                <p>2. We review your production needs</p>
                <p>3. We contact you to schedule a walkthrough</p>
              </div>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-300">
                Prefer to call directly?
                <br />
                <a href="tel:9082622040" className="mt-1 inline-block font-medium text-amber-200 hover:text-amber-100">
                  908-262-2040
                </a>
              </div>
            </div>

            <form
              action="https://formsubmit.co/amjad.ghori@chopsandsteaks.com"
              method="POST"
              className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Kitchen Tour Request" />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="full_name"
                  className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                  placeholder="Full name"
                />
                <input
                  name="business_name"
                  className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                  placeholder="Business name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                  placeholder="Email address"
                />
                <input
                  name="phone"
                  type="tel"
                  className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                  placeholder="Phone number"
                />
              </div>

              <input
                name="what_do_you_produce"
                className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                placeholder="What do you produce?"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="preferred_schedule"
                  defaultValue=""
                  className="rounded-xl bg-white/10 px-4 py-3 text-white"
                >
                  <option value="" disabled>
                    Preferred schedule
                  </option>
                  <option value="Hourly">Hourly</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>

                <select
                  name="storage_needs"
                  defaultValue=""
                  className="rounded-xl bg-white/10 px-4 py-3 text-white"
                >
                  <option value="" disabled>
                    Need cold or dry storage?
                  </option>
                  <option value="No">No</option>
                  <option value="Cold storage">Cold storage</option>
                  <option value="Dry storage">Dry storage</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <textarea
                name="details"
                rows={5}
                className="min-h-[140px] rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-neutral-500"
                placeholder="Tell us about your equipment needs, production volume, and preferred tour times"
              />

              <button className="rounded-xl bg-amber-300 px-5 py-3 font-medium text-black transition hover:bg-amber-200">
                Request Tour Information
              </button>

              <p className="text-xs text-neutral-500">
                We’ll use your information only to contact you about Ilene Kitchen availability and tours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

</> JavaScript

}