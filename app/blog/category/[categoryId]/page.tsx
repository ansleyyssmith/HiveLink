export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8E6] text-[#1A1A1A]">
      {/* Top bar / header */}
      <header className="w-full border-b border-black/5 bg-white/70 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC927] font-semibold">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                HiveLink
              </span>
              <span className="text-xs text-neutral-500">
                Connect. Organize. Thrive.
              </span>
            </div>
          </div>

          {/* Simple nav */}
          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="#who" className="hover:text-black">
              Who It&apos;s For
            </a>
            <a href="#features" className="hover:text-black">
              Features
            </a>
            <a href="#pricing" className="hover:text-black">
              Pricing
            </a>
            <a href="#faq" className="hover:text-black">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#cta"
            className="rounded-full bg-[#FFC927] px-4 py-2 text-xs font-semibold text-black shadow-sm hover:shadow-md"
          >
            Join Early Access
          </a>
        </div>
      </header>

      {/* Hero section */}
      <section className="border-b border-black/5 bg-gradient-to-b from-white to-[#FFF8E6]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <p className="inline-block rounded-full border border-[#FFC927]/50 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
              Built for clubs, teams, and organizations
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl">
              Your Entire Community,
              <br />
              <span className="text-[#FFC927]">Connected in One Place.</span>
            </h1>
            <p className="max-w-xl text-sm text-neutral-700 md:text-base">
              HiveLink is a centralized hub for small businesses, clubs, sports
              teams, sororities, fraternities, and more. Messaging, finances,
              onboarding, documents, and events — all in a single organized
              platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#cta"
                className="rounded-full bg-[#FFC927] px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:shadow-md"
              >
                Join Early Access
              </a>
              <a
                href="#features"
                className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline"
              >
                Learn more
              </a>
            </div>

            {/* Mini social proof */}
            <p className="pt-3 text-xs text-neutral-600">
              Perfect for: student orgs • Greek life • intramural teams • small
              businesses • nonprofits
            </p>
          </div>

          {/* Simple “dashboard” mockup */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between text-xs text-neutral-500">
                <span>HiveLink Demo Dashboard</span>
                <span>Preview</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="rounded-xl bg-[#FFF8E6] p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-800">
                      Upcoming Events
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      This week
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-[11px] text-neutral-700">
                    <li>• Exec board meeting – Monday 7:00 PM</li>
                    <li>• New member orientation – Wednesday 6:30 PM</li>
                    <li>• Fundraiser planning session – Friday 5:00 PM</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-neutral-50 p-3">
                    <p className="text-[11px] text-neutral-500">Member Count</p>
                    <p className="text-lg font-semibold text-neutral-900">
                      128
                    </p>
                    <p className="text-[10px] text-emerald-600">
                      +12 this month
                    </p>
                  </div>
                  <div className="rounded-xl bg-neutral-50 p-3">
                    <p className="text-[11px] text-neutral-500">Budget</p>
                    <p className="text-lg font-semibold text-neutral-900">
                      $8,420
                    </p>
                    <p className="text-[10px] text-neutral-600">
                      Next due: Dues 10/15
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-neutral-50 p-3">
                  <p className="text-[11px] text-neutral-500">
                    Recent Announcements
                  </p>
                  <ul className="mt-2 space-y-1 text-[11px] text-neutral-700">
                    <li>• New team apparel form posted</li>
                    <li>• Volunteer signup for Saturday</li>
                    <li>• Officer applications now open</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-neutral-500">
              Visual mockup only — perfect for demoing HiveLink in class.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who" className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Built for every type of community.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-700">
            HiveLink works for any group that needs to stay organized, aligned,
            and in the loop — without juggling five different apps.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Small Businesses",
              "Clubs & Student Orgs",
              "Sports Teams",
              "Sororities & Fraternities",
              "Nonprofits",
              "Community Groups",
            ].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-black/5 bg-[#FFF8E6] p-4 text-sm text-neutral-800 shadow-sm"
              >
                <p className="font-semibold">{label}</p>
                <p className="mt-2 text-xs text-neutral-700">
                  Keep members informed, track important info, and centralize
                  planning in one shared hub.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-black/5 bg-[#FFF8E6]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Everything your officers and members need.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-700">
            Replace scattered spreadsheets, group chats, and random Google Docs
            with a single organized system.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Finances & Budgeting",
                body: "Track dues, expenses, and budgets in one place so leaders always know where money is going.",
              },
              {
                title: "Messaging",
                body: "Direct messages, group chats, and announcement channels keep everyone in the loop.",
              },
              {
                title: "Documents & Agreements",
                body: "Store bylaws, contracts, waivers, and important files where members can actually find them.",
              },
              {
                title: "Onboarding & Members",
                body: "Streamline new member onboarding and keep member info up to date and organized.",
              },
              {
                title: "Announcements",
                body: "Share important updates without getting buried in group chats or lost emails.",
              },
              {
                title: "Calendar & Events",
                body: "Central calendar for practices, meetings, socials, and deadlines — all in one view.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-black/5 bg-white p-4 text-sm text-neutral-800 shadow-sm"
              >
                <p className="font-semibold">{feature.title}</p>
                <p className="mt-2 text-xs text-neutral-700">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section id="pricing" className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
            Simple pricing for every community.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-700">
            Placeholder pricing for demo purposes — you can adjust this for your
            final project presentation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-black/5 bg-[#FFF8E6] p-5 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase text-neutral-600">
                Starter
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                Free
              </p>
              <p className="mt-1 text-xs text-neutral-700">
                Great for tiny clubs and early testing.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Up to 25 members</li>
                <li>• Basic messaging</li>
                <li>• Simple calendar</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-xl border border-[#FFC927] bg-[#FFF8E6] p-5 text-sm shadow-md">
              <p className="text-xs font-semibold uppercase text-neutral-800">
                Most Popular
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                $19/mo
              </p>
              <p className="mt-1 text-xs text-neutral-700">
                Perfect for growing orgs and Greek life.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Up to 150 members</li>
                <li>• All HiveLink core features</li>
                <li>• Officer tools & roles</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-xl border border-black/5 bg-[#FFF8E6] p-5 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase text-neutral-600">
                Pro
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                $39/mo
              </p>
              <p className="mt-1 text-xs text-neutral-700">
                For larger teams, leagues, or multi-chapter groups.
              </p>
              <ul className="mt-3 space-y-1 text-xs text-neutral-700">
                <li>• Unlimited members</li>
                <li>• Advanced reporting</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / value & final CTA */}
      <section
        id="faq"
        className="border-b border-black/5 bg-[#FFF8E6] py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                Why HiveLink?
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Most communities are stuck trying to manage everything in group
                chats, random spreadsheets, and scattered docs. HiveLink is
                designed to pull it all together so leaders can lead, and
                members always know what&apos;s going on.
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                For your final project demo, you can walk through this page
                section by section and explain how it solves real problems for
                clubs, sororities, sports teams, and small businesses.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Quick FAQ (for demo)
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-neutral-700">
                <li>
                  <strong>Is this a real product?</strong> – For now, HiveLink
                  is a concept and this landing page is a demo for class.
                </li>
                <li>
                  <strong>What problems does it solve?</strong> – Disorganized
                  communication, lost documents, messy budgets, and confusing
                  onboarding.
                </li>
                <li>
                  <strong>Who would use it first?</strong> – Student orgs,
                  Greek life chapters, school clubs, and rec or intramural
                  teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-black/5 bg-[#FFF8E6] p-6 text-center shadow-sm md:p-10">
            <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
              Be the first to experience HiveLink.
            </h2>
            <p className="mt-2 text-sm text-neutral-700">
              Use this section in your presentation as a call-to-action for your
              fictional early access or pilot program.
            </p>
            <form className="mx-auto mt-4 flex max-w-md flex-col gap-3 text-left md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:border-[#FFC927]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#FFC927] px-5 py-2 text-sm font-semibold text-black shadow-sm hover:shadow-md"
              >
                Join Waitlist
              </button>
            </form>
            <p className="mt-2 text-[11px] text-neutral-600">
              For demo only — form does not need to be wired to a backend.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} HiveLink. Concept landing page for FAU project.</p>
          <p>Designed with AI assistance and implemented by [Your Name].</p>
        </div>
      </footer>
    </main>
  );
}

