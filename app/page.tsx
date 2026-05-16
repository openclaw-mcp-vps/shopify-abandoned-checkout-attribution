export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Analytics
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Find Out Which Ads Are{" "}
          <span className="text-[#58a6ff]">Killing Your Conversions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Shopify store and instantly see which marketing channels drive the most abandoned checkouts — so you stop wasting budget on traffic that never buys.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { stat: "UTM Attribution", desc: "Track source, medium, campaign, and keyword for every abandoned cart" },
            { stat: "Referrer Analysis", desc: "Capture raw referrer data even without UTM parameters" },
            { stat: "Channel Benchmarks", desc: "Compare abandonment rates across Google, Meta, TikTok, and more" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{item.stat}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Shopify webhook integration",
              "UTM + referrer enrichment",
              "Channel abandonment dashboard",
              "CSV export for ad platforms",
              "Up to 10,000 checkouts/mo",
              "Email alerts for spike detection"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After subscribing, you'll receive a webhook URL and setup guide. Add it to your Shopify Admin under Settings → Notifications in under 5 minutes. No app install required."
            },
            {
              q: "Where does the UTM data come from?",
              a: "You add a small tracking snippet to your Shopify theme that captures UTM parameters and referrer from the landing page and stores them in a cookie. When a checkout is abandoned, that data is sent along with the webhook."
            },
            {
              q: "What if I spend less than $1k/month on ads?",
              a: "The tool still works, but the ROI is clearest for stores with meaningful ad spend. If you're running any paid traffic and losing sales to abandonment, attribution data helps you cut waste fast."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Abandoned Checkout Attribution. All rights reserved.
      </footer>
    </main>
  );
}
