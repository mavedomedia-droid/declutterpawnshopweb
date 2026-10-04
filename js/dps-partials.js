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
      // Push page content below the nav so nothing is covered
      + '.hero{padding-top:' + (NAV_HEIGHT + 56) + 'px !important;}'
      + '.items-hero{padding-top:' + (NAV_HEIGHT + 56) + 'px !important;}'
      + '.page-head{padding-top:' + (NAV_HEIGHT + 24) + 'px !important;}'
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

  function inject() {
    injectStyles();
    document.querySelectorAll("[data-dps-nav]").forEach(function (host) {
      var active = host.getAttribute("data-active") || detectActive();
      host.innerHTML = navHTML(active);
    });
    document.querySelectorAll("[data-dps-footer]").forEach(function (host) {
      host.innerHTML = footerHTML();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
