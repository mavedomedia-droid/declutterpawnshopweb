/* ═══════════════════════════════════════════════════════════════
   DPS · Global config
   Loaded on every page. Keep this file tiny — it blocks render.
   ═══════════════════════════════════════════════════════════════ */

/* Google Apps Script Web App URL (the /exec endpoint) */
var DPS_MAIN_GAS_URL = "https://script.google.com/macros/s/AKfycbxcUb2TJi3MtAszLXGi1MAywLMGJsFkguMuA7RGCbM4aQawUX38UKFyKW0V6gg12A/exec";

/* Public site URL, no trailing slash */
var DPS_SITE_URL = "https://declutterpawnshop.com";

/* ───────────────────────────────────────────────────────────────
   SUPPORT ADDRESS — the one line to change on the front end.

   Every page shows this address instead of hardcoding it, so
   switching to support@ is this line plus the SUPPORT_EMAIL script
   property in Apps Script. Two edits, nothing else.
   Run dpsCheckSupportEmail() after changing: it compares the two
   and tells you if one was missed.
   ─────────────────────────────────────────────────────────────── */
var DPS_SUPPORT_EMAIL = "info@declutterpawnshop.com";

/* Commission rates — keep in sync with the sheet */
var DPS_COMMISSION_STANDARD = 0.13;   // 13%
/* Was 0.03. That was the "97% on your first sale" figure, which never
   matched the welcome offer: we take 10% instead of 13% on sale one,
   so the seller keeps 90%. Code.gs FIRST_SALE_COMMISSION is 0.90. */
var DPS_COMMISSION_FIRST    = 0.10;   // 10% on a seller's first sale
var DPS_COMMISSION_PARTNER  = 0.05;   // 5%

/* Negotiation fee in naira */
var DPS_NEGOTIATION_FEE = 300;

/* Telegram endpoints */
var DPS_TELEGRAM_BOT     = "https://t.me/declutterpawnshop2_bot";
var DPS_TELEGRAM_CHANNEL = "https://t.me/declutterpawnshop";

/* Feature flags — flip to true when ready to ship */
var DPS_AUCTION_LIVE     = false;
var DPS_NEGOTIATE_LIVE   = false;
var DPS_PARTNER_PROGRAM  = false;

/* ───────────────────────────────────────────────────────────────
   GRABS — one line controls the whole front door.

   false:  the rails on the items page and the home page still show
           real listings, because the tease is the point, but the
           cards are dead and read "Coming soon", and Grabs is out
           of the nav and the footer. /grabs itself keeps working
           for anyone with the link, which is how you test it.
   true:   cards become links, Grabs appears in the nav and footer.

   Nothing else to change. The backend does not read this, so
   listings and offers keep working either way.
   ─────────────────────────────────────────────────────────────── */
var DPS_GRABS_LIVE = false;
