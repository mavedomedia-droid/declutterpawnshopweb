/* ═══════════════════════════════════════════════════════════════
   DPS · Global config
   Loaded on every page. Keep this file tiny — it blocks render.
   ═══════════════════════════════════════════════════════════════ */

/* Google Apps Script Web App URL (the /exec endpoint) */
var DPS_MAIN_GAS_URL = "https://script.google.com/macros/s/AKfycbyglaH1CUx2odVYI9cxLA-BAb_nuJH6Kog7EUH4xN15QYscUZ2bujPKiVSsxAjeHzeb/exec";

/* Public site URL, no trailing slash */
var DPS_SITE_URL = "https://declutterpawnshop.com";

/* Commission rates — keep in sync with the sheet */
var DPS_COMMISSION_STANDARD = 0.13;   // 13%
var DPS_COMMISSION_FIRST    = 0.03;   // 3% welcome offer
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
