// /js/dps-partials.js
// Shared nav + footer for every DPS page.
//
// Usage in <head>:
//   <script src="/js/dps-partials.js" defer></script>
//
// Usage in <body>:
//   <div data-dps-nav data-active="items"></div>    <!-- items | sell | auction | partners | faq -->
//   ... page content ...
//   <div data-dps-footer></div>
(function () {
  "use strict";

  /* ─── TUNABLES ─────────────────────────────────────────────── */
  var LOGO = "/assets/logo.png";     // trimmed badge, 486x200. Keep the leading slash.

  var LOGO_NAV_H   = 44;             // badge ~107px wide in the nav
  var LOGO_FOOT_H  = 52;             // badge ~126px wide in the footer
  var NAV_HEIGHT   = 72;             // original nav height, now that the logo has no padding
  /* ───────────────────────────────────────────────────────────── */

  var NAV_ITEMS = [
    { key: "items",    label: "Live items", href: "/items" },
    { key: "sell",     label: "Sell",       href: "/sell" },
    { key: "auction",  label: "Auction",    href: "/auction" },
    { key: "partners", label: "Partners",   href: "/partners" },
    { key: "faq",      label: "FAQ",        href: "/faq" }
  ];

  var TG_BOT     = "https://t.me/declutterpawnshop2_bot";
  var TG_CHANNEL = "https://t.me/declutterpawnshop";
  var IG_URL     = "https://instagram.com/declutter.pawnshop";
  var FB_URL     = "https://facebook.com/declutterpawnshop";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[c];
    });
  }

  function detectActive() {
    var path = (location.pathname || "/").toLowerCase();
    for (var i = 0; i < NAV_ITEMS.length; i++) {
      var key = NAV_ITEMS[i].key;
      if (path === "/" + key || path.indexOf("/" + key + "/") === 0 || path.indexOf("/" + key + ".") === 0) return key;
    }
    return "";
  }

  function navHTML(active) {
    var links = NAV_ITEMS.map(function (it) {
      return '<li><a href="' + esc(it.href) + '"' + (it.key === active ? ' class="active"' : "") + '>' + esc(it.label) + '</a></li>';
    }).join("");
    return ''
      + '<nav class="nav">'
      +   '<div class="wrap nav-inner">'
      +     '<a href="/" class="nav-logo"><img src="' + LOGO + '" alt="Declutter Pawn Shop"></a>'
      +     '<ul class="nav-links">' + links + '</ul>'
      +     '<a href="' + TG_BOT + '" target="_blank" rel="noopener" class="btn btn-primary nav-cta">Open Telegram</a>'
      +     '<a href="' + TG_BOT + '" target="_blank" rel="noopener" class="btn btn-primary nav-mobile-cta">Telegram</a>'
      +   '</div>'
      + '</nav>';
  }

  function footerHTML() {
    return ''
      + '<footer>'
      +   '<div class="wrap">'
      +     '<div class="foot-grid">'
      +       '<div class="foot-brand">'
      +         '<img src="' + LOGO + '" alt="Declutter Pawn Shop">'
      +         '<p>The simpler, more secure way to declutter. Buy and sell pre-owned items across Lagos with escrow-protected payments.</p>'
      +       '</div>'
      +       '<div class="foot-col">'
      +         '<h4>Marketplace</h4>'
      +         '<a href="/items">Live items</a>'
      +         '<a href="/sell">Sell an item</a>'
      +         '<a href="/auction">Auction</a>'
      +       '</div>'
      +       '<div class="foot-col">'
      +         '<h4>Program</h4>'
      +         '<a href="/partners">Partner program</a>'
      +         '<a href="/partners-register">Register as partner</a>'
      +         '<a href="/faq">FAQ</a>'
      +       '</div>'
      +       '<div class="foot-col">'
      +         '<h4>Legal &amp; Contact</h4>'
      +         '<a href="/terms">Terms of Service</a>'
      +         '<a href="/privacy">Privacy Policy</a>'
      +         '<a href="mailto:info@declutterpawnshop.com">info@declutterpawnshop.com</a>'
      +       '</div>'
      +     '</div>'
      +     '<div class="foot-bottom">'
      +       '<p>© ' + new Date().getFullYear() + ' Declutter Pawn Shop · Lagos, Nigeria</p>'
      +       '<div class="foot-social">'
      +         '<a href="' + TG_CHANNEL + '" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg></a>'
      +         '<a href="' + IG_URL + '" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>'
      +         '<a href="' + FB_URL + '" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg></a>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</footer>';
  }

  function injectStyles() {
    if (document.getElementById("dps-partials-styles")) return;
    var css = ''
      // Nav sizing
      + '.nav-inner{height:' + NAV_HEIGHT + 'px !important;}'
      + '.nav-logo img{height:' + LOGO_NAV_H + 'px !important;width:auto !important;}'
      // Footer logo sizing
      + '.foot-brand img{height:' + LOGO_FOOT_H + 'px !important;width:auto !important;margin-bottom:20px !important;}'
      /* A site-wide default for unsized <svg> was tried here and removed.
         It fixed the enormous-icon failure, but "an SVG with no size of
         its own, filling a wrapper that IS sized" is a legitimate and
         common pattern: beta.html draws its callout icons exactly that
         way, inside a 22px .callout-icon div, and the guard shrank them
         to 16px. CSS cannot say "only when the parent is unsized", and a
         max-width cap would flatten deliberately large art such as the
         240px gavel on the auction success page.

         So the partial styles what the partial writes, below, and page
         content stays each page's own business. */

      /* THE FOOTER'S OWN LAYOUT.
         The partial writes this markup, so the partial should style it.
         Until now every page carried its own copy of these rules, which
         hid the fact that the footer could not stand on its own: a new
         page without them rendered three 680px social icons down the
         middle of the screen and ran every link together as
         "Live itemsSell an itemAuction".

         Values match what the existing pages already declare, so this
         changes nothing on them. It is injected into <head> at runtime,
         after each page's own <style>, so on a tie this wins and the
         footer looks the same everywhere. */
      + 'footer{background:var(--ink-2);color:var(--stone-light);padding:64px 0 32px;border-top:1px solid var(--border-dark);}'
      + '.foot-grid{display:grid;grid-template-columns:1fr;gap:40px;margin-bottom:48px;}'
      + '@media(min-width:768px){.foot-grid{grid-template-columns:2fr 1fr 1fr 1fr;gap:56px;}}'
      + '.foot-brand p{font-size:14px;line-height:1.65;max-width:32ch;color:var(--stone-light);}'
      + '.foot-col h4{font-family:var(--font-heading);font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--white);margin-bottom:18px;}'
      + '.foot-col a{display:block;font-size:14px;color:var(--stone-light);padding:6px 0;transition:color .15s;}'
      + '.foot-col a:hover{color:var(--green);}'
      + '.foot-bottom{padding-top:32px;border-top:1px solid var(--border-dark);display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;font-size:12.5px;color:var(--text-muted);}'
      + '.foot-social{display:flex;gap:12px;}'
      + '.foot-social a{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);transition:background .15s;}'
      + '.foot-social a:hover{background:rgba(0,200,83,.15);}'
      + '.foot-social svg{width:16px !important;height:16px !important;flex:none;color:var(--stone-light);}'
      // Push page content below the nav so nothing is covered
      + '.hero{padding-top:' + (NAV_HEIGHT + 56) + 'px !important;}'
      + '.items-hero{padding-top:' + (NAV_HEIGHT + 56) + 'px !important;}'
      + '.page-head{padding-top:' + (NAV_HEIGHT + 24) + 'px !important;}'
      // Nav CTA visibility. This lives here rather than in each page
      // because .btn{display:inline-flex} and .nav-mobile-cta{display:none}
      // have the same specificity, so whichever is written later wins. On
      // nine pages .btn came later and BOTH CTAs showed at every width.
      // Injected into <head> at runtime, so it lands after every page's
      // own CSS and the result is the same everywhere.
      + '.nav-cta{display:none !important;}'
      + '.nav-mobile-cta{display:inline-flex !important;}'
      + '@media (min-width:900px){'
      +   '.nav-cta{display:inline-flex !important;}'
      +   '.nav-mobile-cta{display:none !important;}'
      + '}'
      // Mobile
      + '@media (max-width:900px){'
      +   '.nav-inner{height:72px !important;}'
      +   '.nav-logo img{height:36px !important;}'
      +   '.hero{padding-top:120px !important;}'
      +   '.items-hero{padding-top:120px !important;}'
      +   '.page-head{padding-top:120px !important;}'
      + '}';
    var s = document.createElement("style");
    s.id = "dps-partials-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ── THE SUPPORT ADDRESS ──────────────────────────────────────
     Seventeen pages print info@declutterpawnshop.com in their own
     markup. Rather than edit all seventeen every time the address
     moves, this rewrites them from DPS_SUPPORT_EMAIL in
     js/dps-config.js, which runs on every page anyway. Change that
     one line and the whole site follows.

     Only the old address is touched, so a page that already uses
     the new one is left alone, and running twice changes nothing.
     ─────────────────────────────────────────────────────────── */
  var SUPPORT_OLD = "info@declutterpawnshop.com";

  function supportAddress() {
    return (typeof DPS_SUPPORT_EMAIL !== "undefined" && DPS_SUPPORT_EMAIL)
      ? String(DPS_SUPPORT_EMAIL).trim()
      : SUPPORT_OLD;
  }

  function rewriteSupportEmail() {
    var to = supportAddress();
    if (!to || to === SUPPORT_OLD) return;   // nothing to change

    // mailto: links, including any ?subject= they carry
    document.querySelectorAll('a[href*="' + SUPPORT_OLD + '"]').forEach(function (a) {
      a.setAttribute("href", a.getAttribute("href").split(SUPPORT_OLD).join(to));
    });

    // Visible text. Walks text nodes only, so markup and attributes
    // are never touched and a half-matched tag cannot be produced.
    var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        return n.nodeValue && n.nodeValue.indexOf(SUPPORT_OLD) >= 0
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var hits = [], n;
    while ((n = walk.nextNode())) hits.push(n);
    hits.forEach(function (node) {
      node.nodeValue = node.nodeValue.split(SUPPORT_OLD).join(to);
    });
  }

  function inject() {
    injectStyles();
    document.querySelectorAll("[data-dps-nav]").forEach(function (host) {
      var active = host.getAttribute("data-active") || detectActive();
      host.innerHTML = navHTML(active);
    });
    document.querySelectorAll("[data-dps-footer]").forEach(function (host) {
      host.innerHTML = footerHTML();
    });
    rewriteSupportEmail();   // after the partials, so the footer is covered too
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
