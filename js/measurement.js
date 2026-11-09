/* JN Pinturas — medição opcional via GTM. Ativação: GOOGLE-ADS.md.
   Deixe gtmId vazio até configurar e validar o contêiner real. */
(function () {
  "use strict";
  var CONFIG = {
    gtmId: "",
    allowedHosts: ["www.jnpinturas.com.br", "jnpinturas.com.br"],
    consentVersion: 1,
    consentDays: 180
  };
  var KEY = "jn_measurement_consent";
  var consent = { analytics: false, ads: false };
  var loaded = false;
  var panel, analyticsInput, adsInput, preferenceButton;
  var production = CONFIG.allowedHosts.indexOf(location.hostname) !== -1;
  var validId = /^GTM-[A-Z0-9]+$/.test(CONFIG.gtmId);
  var pages = {
    "/": { city: "regiao", service: "residencial" },
    "/pintor-em-campinas/": { city: "campinas", service: "residencial" },
    "/pintura-residencial-valinhos/": { city: "valinhos", service: "residencial" },
    "/pintor-em-paulinia/": { city: "paulinia", service: "residencial" },
    "/pintura-residencial-hortolandia/": { city: "hortolandia", service: "residencial" },
    "/pintura-de-apartamentos/": { city: "regiao", service: "apartamentos" }
  };
  var path = location.pathname.replace(/index\.html$/, "");
  if (path.slice(-1) !== "/") path += "/";
  var context = pages[path];

  function command() { window.dataLayer.push(arguments); }
  function measurementLocation() {
    var safe = new URL(location.origin + (context ? path : "/privacidade/"));
    // Não encaminha parâmetros livres (que podem conter dados pessoais).
    if (consent.ads) {
      var params = new URLSearchParams(location.search);
      ["gclid", "dclid", "gbraid", "wbraid"].forEach(function (key) {
        var value = params.get(key);
        if (value && /^[A-Za-z0-9._~-]{1,512}$/.test(value)) safe.searchParams.set(key, value);
      });
    }
    return safe.href;
  }
  function consentState() {
    return {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.ads ? "granted" : "denied",
      ad_user_data: consent.ads ? "granted" : "denied",
      ad_personalization: "denied"
    };
  }
  function readConsent() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && saved.version === CONFIG.consentVersion &&
          typeof saved.analytics === "boolean" && typeof saved.ads === "boolean" &&
          saved.expires > Date.now()) return saved;
    } catch (e) { /* Navegação continua se o armazenamento estiver bloqueado. */ }
    return null;
  }
  function startMeasurement() {
    if (loaded || !production || !validId || (!consent.analytics && !consent.ads)) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    // Modo básico: nada do Google é carregado antes de uma escolha positiva.
    command("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied"
    });
    command("set", "ads_data_redaction", true);
    command("set", "url_passthrough", false);
    command("consent", "update", consentState());
    window.dataLayer.push({
      "gtm.start": Date.now(), event: "gtm.js",
      jn_analytics_consent: consent.analytics,
      jn_ads_consent: consent.ads
    });
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=" + CONFIG.gtmId;
    document.head.appendChild(script);
    window.dataLayer.push({
      event: "jn_measurement_ready",
      jn_analytics_consent: consent.analytics,
      jn_ads_consent: consent.ads,
      page_path: context ? path : "/privacidade/",
      page_location: measurementLocation(),
      page_city: context ? context.city : "nao_aplicavel",
      service_type: context ? context.service : "nao_aplicavel"
    });
  }

  function clearMeasurementCookies() {
    // Remove cookies próprios conhecidos; cookies de terceiros exigem controles do navegador.
    var names = document.cookie.split(";").map(function (item) { return item.split("=")[0].trim(); });
    var host = location.hostname;
    var domains = ["", host, "." + host, ".jnpinturas.com.br"];
    var paths = ["/"];
    var segments = location.pathname.split("/").filter(Boolean);
    var current = "";
    segments.forEach(function (segment) { current += "/" + segment; paths.push(current, current + "/"); });
    names.forEach(function (name) {
      if (!/^(_ga($|_)|_gid$|_gat|_gcl_)/.test(name)) return;
      domains.forEach(function (domain) {
        paths.forEach(function (cookiePath) {
          document.cookie = name + "=; Max-Age=0; path=" + cookiePath +
            (domain ? "; domain=" + domain : "") + "; SameSite=Lax";
        });
      });
    });
  }

  function saveChoice(analytics, ads) {
    var previous = consent;
    consent = { analytics: analytics, ads: ads };
    try {
      localStorage.setItem(KEY, JSON.stringify({
        version: CONFIG.consentVersion, analytics: analytics, ads: ads,
        expires: Date.now() + CONFIG.consentDays * 86400000
      }));
    } catch (e) { /* A escolha continua válida nesta página. */ }
    panel.hidden = true;
    preferenceButton.focus({ preventScroll: true });
    if (loaded && (previous.analytics !== analytics || previous.ads !== ads)) {
      command("consent", "update", consentState());
      clearMeasurementCookies();
      // Interrompe também as tags já carregadas, não apenas os eventos do site.
      // Sem armazenamento disponível, a próxima página volta ao padrão negado.
      location.reload();
      return;
    }
    if (!analytics || !ads) clearMeasurementCookies();
    startMeasurement();
  }

  function initPreferences() {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/css/measurement.css";
    document.head.appendChild(stylesheet);
    var footer = document.querySelector(".footer-bottom, .landing-footer .container");
    if (!footer) footer = document.body;
    var controls = document.createElement("p");
    controls.className = "jn-privacy-links";
    controls.innerHTML = '<a href="/privacidade/">Privacidade</a> · <button type="button">Preferências de cookies</button>';
    footer.appendChild(controls);
    preferenceButton = controls.querySelector("button");
    panel = document.createElement("section");
    panel.className = "jn-consent";
    panel.setAttribute("aria-labelledby", "jn-consent-title");
    panel.innerHTML = '<h2 id="jn-consent-title" tabindex="-1">Sua privacidade</h2>' +
      '<p>Com sua autorização, usamos ferramentas do Google para medir visitas e cliques de contato. ' +
      'Recusar não impede o orçamento pelo WhatsApp. <a href="/privacidade/">Entenda o uso dos dados</a>.</p>' +
      '<fieldset><legend>Escolha o que autorizar</legend>' +
      '<label><input type="checkbox" id="jn-analytics"> Estatísticas de visitas (Analytics)</label>' +
      '<label><input type="checkbox" id="jn-ads"> Medição de anúncios (Google Ads)</label></fieldset>' +
      '<div class="jn-consent-actions"><button type="button" data-choice="reject">Recusar opcionais</button>' +
      '<button type="button" data-choice="save">Salvar escolhas</button>' +
      '<button type="button" data-choice="accept">Aceitar opcionais</button></div>' +
      '<p class="jn-consent-note">Sem publicidade personalizada. Sua escolha vale por até 180 dias e pode ser alterada no rodapé.</p>';
    document.body.appendChild(panel);
    analyticsInput = panel.querySelector("#jn-analytics");
    adsInput = panel.querySelector("#jn-ads");
    var saved = readConsent();
    if (saved) consent = { analytics: saved.analytics, ads: saved.ads };
    analyticsInput.checked = consent.analytics;
    adsInput.checked = consent.ads;
    panel.hidden = !!saved;
    preferenceButton.addEventListener("click", function () {
      analyticsInput.checked = consent.analytics;
      adsInput.checked = consent.ads;
      panel.hidden = false;
      panel.querySelector("h2").focus();
    });
    panel.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-choice]");
      if (!button) return;
      var choice = button.getAttribute("data-choice");
      saveChoice(choice === "accept" || (choice === "save" && analyticsInput.checked),
        choice === "accept" || (choice === "save" && adsInput.checked));
    });
    startMeasurement();
  }

  function placement(link) {
    if (link.closest(".wa-float, .landing-quick-contact")) return "floating";
    if (link.closest("header.site-header")) return "header";
    if (link.closest("footer")) return "footer";
    var section = link.closest("section[id]");
    var id = section ? section.id : "";
    var ids = ["inicio", "servicos", "diferenciais", "trabalhos", "como-funciona", "atendimento", "duvidas", "contato", "planejamento"];
    return ids.indexOf(id) !== -1 ? id : "content";
  }
  var lastEvent = {};
  function trackContact(channel, source) {
    if (!loaded || !context || (!consent.analytics && !consent.ads)) return;
    var name = channel === "phone" ? "phone_click" : "whatsapp_click";
    // Evita disparos acidentais repetidos; não representa deduplicação de clientes.
    var key = name + ":" + source;
    if (lastEvent[key] && Date.now() - lastEvent[key] < 1500) return;
    lastEvent[key] = Date.now();
    window.dataLayer.push({
      event: name,
      contact_channel: channel,
      contact_placement: source,
      page_path: path,
      page_city: context.city,
      service_type: context.service,
      jn_analytics_consent: consent.analytics,
      jn_ads_consent: consent.ads
    });
  }
  initPreferences();
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link || event.defaultPrevented) return;
    var url;
    try { url = new URL(link.href, location.href); } catch (e) { return; }
    if (url.protocol === "tel:") trackContact("phone", placement(link));
    if (url.protocol === "https:" && url.hostname === "wa.me" && url.pathname === "/5519995750193") {
      trackContact("whatsapp", placement(link));
    }
  });
  // O formulário não envia dados ao site: só prepara e abre uma conversa.
  // Um formulário válido gera um único whatsapp_click, nunca um lead confirmado.
  document.addEventListener("jn:quote-whatsapp", function () {
    trackContact("whatsapp", "quote_form");
  });
})();
