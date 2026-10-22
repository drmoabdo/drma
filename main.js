(function () {
  "use strict";
  var config = window.SITE_CONFIG;
  var app = document.getElementById("app");
  var language = "ar";
  try { language = localStorage.getItem("brand-language") === "en" ? "en" : "ar"; } catch (error) {}
  var copy = {
    ar: {
      nav: [["home","الرئيسية"],["story","قصتي"],["vision","رؤيتي"],["content","المحتوى"],["videos","الفيديوهات"],["community","المجتمع"],["collaborate","تعاون معي"],["contact","تواصل"]],
      menu:"فتح القائمة",close:"إغلاق القائمة",lang:"English",langLabel:"تغيير اللغة إلى الإنجليزية",
      eyebrow:"طبيب · إنسان · مجتمع",heroLead:"الطب مهنتي،",heroEmphasis:"ومساعدة الناس رسالتي.",
      heroText:"وراء كل إنسان حكاية، ووراء كل تجربة درس. أشارك المعرفة الطبية والأفكار الإنسانية التي تساعدنا على فهم أنفسنا والحياة بصورة أعمق.",
      storyCta:"اكتشف حكايتي",contentCta:"تابع محتواي",portraitNote:"معرفة طبية، ومساحة إنسانية",identity:"خلفية مهنية",scroll:"اكتشف المزيد",
      introKicker:"طبيب بالمهنة، ومتعلّم بشغف، ومساعدة الناس هي رسالتي.",introTitle:"أنا محمد محمود عبده علي",
      introText:"منذ طفولتي، كنت كثير الأسئلة. لم يكن يكفيني أن أعرف كيف تعمل الأشياء، بل كنت أريد أن أفهم لماذا تعمل بهذه الطريقة. كان لدي دائمًا فضول تجاه ما وراء الظواهر، وشعور بأن الحياة أوسع بكثير مما نراه على سطحها.\n\nلم تكن رحلتي مستقيمة دائمًا؛ عرفت التفوق، ومررت بفترات من التعثر، ثم تعلمت أن أستعيد طريقي من جديد.\n\nعندما دخلت كلية الطب، كنت أظن أن النجاح يعني أن أتفوق في دراستي فقط. لكنني توقفت يومًا لأسأل نفسي: ما قيمة أن أعرف الكثير عن الطب، بينما أجهل جوانب أخرى من الحياة أحتاج إلى فهمها؟ كان هذا السؤال نقطة تحول في طريقة تفكيري.\n\nبدأت أتعلم خارج حدود تخصصي، وأقرأ، وأتعلم الإنجليزية، وأمارس الرسم، وأستكشف مجالات جديدة. والمفاجأة أنني لم أضطر إلى الاختيار بين اتساع معرفتي وتفوقي الأكاديمي؛ فقد تخرجت في كلية الطب بامتياز مع مرتبة الشرف، وعُينت معيدًا، ثم أنهيت ماجستير الباثولوجيا الإكلينيكية.\n\nواليوم، ما زلت أؤمن بأن التعلم لا ينتهي عند شهادة، وأن التخصص في مجال لا ينبغي أن يمنعنا من فهم العالم الأوسع الذي نعيش فيه.\n\n**هنا أشارك رحلتي، وما أتعلمه، وما أؤمن به؛ لأن المعرفة تزداد قيمة عندما تتحول إلى شيء ينفع الآخرين.**\n\nأطمح إلى بناء مجتمع يجمع بين المعرفة، والتفكير، والتجارب الإنسانية، ويساعدنا على فهم أنفسنا والعالم بصورة أفضل.",
      story:"قصتي",storyTitle:"الإنسان قبل السيرة المهنية.",
      storyText:"أريد أن أشارك حكايتي كما عشتها؛ من البدايات والمؤثرات، مرورًا بمحطات التعلّم، إلى علاقتي بالطب وما تعنيه لي مساعدة الناس. هذه مساحة مفتوحة لتفاصيل سأضيفها بنفسي.",
      storyEmpty:"تُضاف تفاصيل هذه المرحلة عندما تكون جاهزة للمشاركة.",editLabel:"مساحة قابلة للتخصيص",storyPrompt:"مسارات الحكاية",
      quoteKicker:"فكرة أؤمن بها",quote:"المواقف التي نمر بها لا تصنع ذكرياتنا فقط؛ بل تساهم في تشكيل نظرتنا لأنفسنا وللعالم.",
      vision:"رؤيتي",visionTitle:"معرفة نافعة. روابط إنسانية. أثر يمتد.",
      visionText:"أطمح إلى بناء مساحة تجمع الناس حول المعرفة الموثوقة، والنمو الشخصي، والخبرات الإنسانية المشتركة. مجتمع يتعلّم فيه كلٌّ منا من الآخر، وتكون فيه المساعدة بداية لعلاقة أعمق.",
      communityLink:"فكرة مجتمع قيد التشكيل",communityStatus:"مبادرة مستقبلية — ستُضاف وسيلة المشاركة عند جاهزيتها.",
      content:"منشورات وأفكار",contentTitle:"معرفة تستحق أن تُشارك.",
      contentText:"مساحة للمقالات والمواد التعليمية والأفكار التي أعمل على مشاركتها. ستظهر هنا المواد الأصلية بعد إضافتها إلى ملف المحتوى.",
      videos:"مكتبة الفيديو",videosTitle:"مشاهدة، تعلّم، ومشاركة.",
      videoText:"أحدث فيديوهات القناة تظهر هنا تلقائيًا من يوتيوب.",
      libraryEmpty:"ستظهر المواد هنا بعد إضافة محتوى أصلي وروابطه.",
      placeholderTitle:"مساحة لمحتواك القادم",placeholderText:"أضف عنوان المادة ووصفها ورابطها في ملف الإعدادات. لا تظهر هذه البطاقة كمحتوى منشور.",
      mediaLabel:"مساحة تحريرية",placeholderVideo:"تُضاف المقاطع عند توفر روابطها الأصلية.",
      social:"على المنصات",socialTitle:"نلتقي حيث تُشارك المعرفة.",
      socialText:"تُعرض هنا الحسابات التي جرى إعدادها. أضف الروابط الفعلية في ملف الإعدادات لتفعيلها.",socialEmpty:"لم تُضف حسابات اجتماعية بعد.",
      community:"المجتمع",communityTitle:"مساحة تجمع الناس حول ما ينفع.",
      communityText:"هذه الرؤية تنطلق من إيماني بأن المعرفة والخبرات المشتركة تساعدنا على النمو والتواصل ومساندة بعضنا. أعمل على بلورة الفكرة قبل فتح باب المشاركة.",
      collaboration:"التعاون",collabTitle:"لنبنِ شيئًا له قيمة.",
      collabText:"أرحّب بالتواصل حول أفكار التعاون الممكنة في التثقيف الصحي، وصناعة المحتوى، ومبادرات التوعية، واللقاءات المهنية. تُناقش كل فرصة على حدة.",
      collabTypes:["مشروعات تعليمية","حملات توعوية","شراكات محتوى","لقاءات مهنية"],
      contactLink:"ابدأ حوارًا",contact:"تواصل",contactTitle:"يسعدني أن نبدأ من فكرة.",
      contactText:"للتعاون أو الاستفسارات المهنية، ستُعرض هنا وسائل التواصل بعد إضافتها. يُرجى عدم إرسال سجلات طبية أو معلومات صحية حساسة.",
      contactUnavailable:"وسائل التواصل قيد الإعداد.",email:"البريد الإلكتروني",whatsapp:"واتساب",
      formTitle:"أرسل رسالة",formName:"الاسم",formEmail:"البريد الإلكتروني",formMessage:"الرسالة",
      formSubmit:"إرسال الرسالة",formSending:"جارٍ الإرسال…",formSuccess:"وصلت الرسالة بنجاح.",
      formError:"تعذر إرسال الرسالة الآن. جرّب لاحقًا أو استخدم وسيلة التواصل المباشرة.",
      formSetup:"نموذج الرسائل غير مفعّل بعد. يُرجى إعداد خدمة استقبال الرسائل في ملف الإعدادات.",
      formPrivacy:"لا ترسل معلومات صحية أو بيانات مرضى عبر هذا النموذج.",
      disclaimerTitle:"تنويه طبي",disclaimer:"المحتوى الطبي هنا للتثقيف العام ولا يُعدّ تشخيصًا أو استشارة طبية فردية، ولا يغني عن مراجعة مختص مؤهل.",
      footerNote:"مساحة تجمع الطب والإنسان والمعرفة.",footerLinks:"روابط سريعة",homeTitle:"طبيب وإنسان",
      featured:"مميّز",openOriginal:"شاهد / اقرأ الأصل"
    },
    en: {
      nav:[["home","Home"],["story","My story"],["vision","Vision"],["content","Content"],["videos","Videos"],["community","Community"],["collaborate","Collaborate"],["contact","Contact"]],
      menu:"Open menu",close:"Close menu",lang:"العربية",langLabel:"Switch language to Arabic",
      eyebrow:"Physician · Human being · Community",heroLead:"Medicine is my profession.",heroEmphasis:"Helping people is my mission.",
      heroText:"Every person has a story, and every experience can teach us something. I share medical knowledge and human ideas that can help us understand ourselves and life more deeply.",
      storyCta:"Discover my story",contentCta:"Explore my content",portraitNote:"Medical knowledge, human perspective",identity:"Professional background",scroll:"Explore",
      introKicker:"Physician by profession, curious by nature, helping people is my mission.",introTitle:"I’m Mohamed Mahmoud Abdo Ali",
      introText:"The moments we live through, the people we meet and the lessons we learn all shape us over time. Understanding those experiences can make more room for empathy, learning and helping one another.",
      story:"My story",storyTitle:"The person behind the profession.",
      storyText:"I want to tell my story in my own words: the influences that shaped me, the moments that taught me, my relationship with medicine and what helping people means to me. This is a space for details I will add when I am ready to share them.",
      storyEmpty:"I will add this part of my story when I am ready to share it.",editLabel:"Personalizable section",storyPrompt:"Chapters of a story",
      quoteKicker:"A belief I carry",quote:"The situations we experience do more than become memories; they help shape how we see ourselves and the world.",
      vision:"My vision",visionTitle:"Useful knowledge. Human connection. A lasting contribution.",
      visionText:"I hope to build a space where people can come together around trusted knowledge, personal growth and shared human experience. A community where we learn from one another and helping becomes the start of a deeper connection.",
      communityLink:"A community in the making",communityStatus:"A future initiative. Participation details will be shared when they are ready.",
      content:"Ideas & writing",contentTitle:"Knowledge worth sharing.",
      contentText:"A home for articles, learning resources and ideas I plan to share. Original materials will appear here once they are added to the content file.",
      videos:"Video library",videosTitle:"Watch, learn, share.",
      videoText:"The channel’s latest videos appear here automatically from YouTube.",
      libraryEmpty:"Original materials and their links will appear here once they are added.",
      placeholderTitle:"Space for what comes next",placeholderText:"Add a title, description and link in the configuration file. This card is a placeholder, not published content.",
      mediaLabel:"Editorial space",placeholderVideo:"Videos will appear here when their original links are available.",
      social:"Find me online",socialTitle:"Where ideas are shared.",
      socialText:"Configured accounts appear here. Add real profile links in the configuration file to make them visible.",socialEmpty:"No social accounts have been added yet.",
      community:"Community",communityTitle:"A space built around what helps.",
      communityText:"This vision comes from my belief that knowledge and shared experience help us grow, connect and support one another. I am shaping the idea before opening it to participants.",
      collaboration:"Collaborate",collabTitle:"Let’s build something meaningful.",
      collabText:"I welcome conversations about possible collaborations in health education, content, awareness initiatives and professional events. Each opportunity is considered on its own.",
      collabTypes:["Educational projects","Awareness campaigns","Content partnerships","Professional events"],
      contactLink:"Start a conversation",contact:"Contact",contactTitle:"Every good conversation starts with an idea.",
      contactText:"For professional inquiries and potential collaborations, contact options will appear here once they are added. Please do not send medical records or sensitive health information.",
      contactUnavailable:"Contact details are being prepared.",email:"Email",whatsapp:"WhatsApp",
      formTitle:"Send a message",formName:"Name",formEmail:"Email",formMessage:"Message",
      formSubmit:"Send message",formSending:"Sending…",formSuccess:"Your message was sent.",
      formError:"The message could not be sent. Please try again or use a direct contact option.",
      formSetup:"The message form is not active yet. Configure a submission service in the settings file.",
      formPrivacy:"Do not send health information or patient details through this form.",
      disclaimerTitle:"Medical information",disclaimer:"Medical content on this site is for general education. It is not an individual diagnosis or medical consultation and does not replace care from a qualified professional.",
      footerNote:"A space for medicine, humanity and knowledge.",footerLinks:"Quick links",homeTitle:"Physician & human being",
      featured:"Featured",openOriginal:"Watch / read original"
    }
  };
  function t(key) { return copy[language][key] || ""; }
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[char];
    });
  }
  function biographyMarkup(value) {
    return String(value || "").split(/\r?\n/).reduce(function (html, line) {
      var text = line.trim();
      if (!text) return html;
      if (text.indexOf("# ") === 0) return html + '<h3 class="biography-title">' + esc(text.slice(2)) + '</h3>';
      if (text.indexOf("## ") === 0) return html + '<h4>' + esc(text.slice(3)) + '</h4>';
      var safe = esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      return html + '<p>' + safe + '</p>';
    }, "");
  }
  function safeUrl(value, mail) {
    var text = String(value || "").trim();
    if (/^https?:\/\//i.test(text)) return text;
    if (mail && /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(text)) return text;
    return "";
  }
  function arrow() {
    return language === "ar"
      ? '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5"/></svg>'
      : '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H5m5 5-5-5 5-5"/></svg>';
  }
  function link(href, text, cls) {
    return '<a class="' + (cls || "text-link") + '" href="' + href + '">' + text + arrow() + '</a>';
  }
  function identity() { return config.names[language]; }
  function itemText(item, key) {
    var localized = item[key + (language === "ar" ? "Ar" : "En")];
    if (localized) return localized;
    var value = item[key];
    if (value && typeof value === "object") return value[language] || value.ar || value.en || "";
    return value || "";
  }
  function nav() {
    var items = t("nav").map(function (item) {
      return '<a href="#' + item[0] + '" data-nav="' + item[0] + '">' + esc(item[1]) + '</a>';
    }).join("");
    return '<header class="site-header"><div class="nav-shell">' +
      '<a class="brand" href="#home" aria-label="' + esc(identity()) + '"><span class="brand-mark" aria-hidden="true">م</span>' +
      '<span class="brand-name"><b>' + esc(config.names.ar) + '</b><small>' + esc(config.names.en) + '</small></span></a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-label="' + esc(t("menu")) + '"><span></span><span></span></button>' +
      '<nav class="main-nav" aria-label="' + esc(language === "ar" ? "التنقل الرئيسي" : "Main navigation") + '">' + items +
      '<button class="language-toggle" type="button" aria-label="' + esc(t("langLabel")) + '">' + esc(t("lang")) + '</button></nav></div></header>';
  }
  function hero() {
    return '<section class="hero section-wrap" id="home" aria-labelledby="hero-title"><div class="hero-copy">' +
      '<p class="eyebrow"><span></span>' + esc(t("eyebrow")) + '</p><h1 id="hero-title"><span>' + esc(t("heroLead")) +
      '</span><em>' + esc(t("heroEmphasis")) + '</em></h1><p class="hero-name">' + esc(identity()) + '</p>' +
      '<p class="hero-description">' + esc(t("heroText")) + '</p><div class="hero-actions">' +
      link("#story", esc(t("storyCta")), "button button-primary") + link("#content", esc(t("contentCta")), "button button-quiet") +
      '</div><div class="hero-credential"><span class="credential-mark" aria-hidden="true">+</span><span><small>' +
      esc(t("identity")) + '</small><b>' + esc(config.professionalIdentity[language]) + '</b></span></div></div>' +
      '<div class="hero-visual"><div class="portrait-frame"><div class="frame-topline"><span>01 / HUMAN FIRST</span><span>MM</span></div>' +
      '<img src="' + esc(config.portrait.src) + '" alt="' + esc(config.portrait.alt[language]) + '" fetchpriority="high" decoding="async">' +
      '<div class="portrait-caption"><span class="caption-dot"></span><span>' + esc(t("portraitNote")) + '</span></div>' +
      '<span class="portrait-vertical" aria-hidden="true">MEDICINE · HUMANITY · COMMUNITY</span></div>' +
      '<span class="hero-orbit orbit-one" aria-hidden="true"></span><span class="hero-orbit orbit-two" aria-hidden="true"></span></div>' +
      '<a class="scroll-cue" href="#introduction"><span>' + esc(t("scroll")) + '</span><i aria-hidden="true">↓</i></a></section>';
  }
  function introduction() {
    var summary = t("introText").split(/\n\s*\n/).map(function (paragraph) {
      return '<p>' + esc(paragraph).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</p>';
    }).join("");
    return '<section class="intro section-wrap" id="introduction"><div class="section-index">01 <span>—</span></div>' +
      '<div class="intro-heading"><p class="eyebrow">' + esc(t("introKicker")) + '</p><h2>' + esc(t("introTitle")) + '</h2></div>' +
      '<div class="intro-copy intro-summary">' + summary + link("#story", esc(language === "ar" ? "تعرّف على قصتي، وكن جزءًا من رحلتي." : "Get to know my story")) + '</div></section>';
  }
  function story() {
    var chapters = (config.storyChapters || []).map(function (chapter, index) {
      var text = chapter[language] || "";
      return '<article class="chapter-card"><span class="chapter-number">0' + (index + 1) + '</span><div><h3>' +
        esc(language === "ar" ? chapter.arTitle : chapter.enTitle) + '</h3><p>' + esc(text || t("storyEmpty")) +
        '</p></div><span class="chapter-edit">' + esc(text ? t("story") : t("editLabel")) + '</span></article>';
    }).join("");
    var bio = config.biography && config.biography[language];
    if (bio) return '<section class="story section-wrap" id="story"><div class="section-heading"><p class="eyebrow">' + esc(t("story")) +
      '</p><h2>' + esc(t("storyTitle")) + '</h2></div><article class="biography-copy" dir="rtl">' + biographyMarkup(bio) + '</article></section>';
    return '<section class="story section-wrap" id="story"><div class="section-heading"><p class="eyebrow">' + esc(t("story")) +
      '</p><h2>' + esc(t("storyTitle")) + '</h2><p>' + esc(bio || t("storyText")) + '</p></div>' +
      '<div class="story-grid"><div class="story-aside"><span class="aside-quote-mark">“</span><p>' + esc(t("storyPrompt")) +
      '</p><span class="aside-line"></span><small>' + esc(config.names.en) + '</small></div><div class="chapter-list">' + chapters + '</div></div></section>';
  }
  function vision() {
    return '<section class="vision" id="vision"><div class="vision-inner section-wrap"><div class="vision-top">' +
      '<p class="eyebrow eyebrow-light">' + esc(t("vision")) + '</p><span class="vision-symbol" aria-hidden="true">∞</span></div>' +
      '<div class="vision-content"><h2>' + esc(t("visionTitle")) + '</h2><p>' + esc(t("visionText")) + '</p>' +
      '<a href="#community" class="vision-link">' + esc(t("communityLink")) + arrow() + '</a></div>' +
      '<div class="vision-note"><span>“</span><p>' + esc(t("quote")) + '</p><small>' + esc(t("quoteKicker")) + '</small></div></div></section>';
  }
  function mediaCard(item, index, video) {
    var destination = safeUrl(item.url, false);
    var thumb = safeUrl(item.thumbnail, false);
    var media = thumb
      ? '<img src="' + esc(thumb) + '" alt="" loading="lazy" decoding="async">'
      : '<div class="media-art"><span class="media-count">0' + (index + 1) + '</span><span class="media-signature">M<span>·</span>M</span></div>';
    var meta = [itemText(item, "category"), itemText(item, "platform"), itemText(item, "date")].filter(Boolean)
      .map(function (value) { return '<span>' + esc(value) + '</span>'; }).join("");
    var title = itemText(item, "title") || t("placeholderTitle");
    var description = itemText(item, "description") || t("placeholderText");
    return '<article class="media-card' + (item.featured ? " is-featured" : "") + '"><div class="media-visual">' + media +
      (item.featured ? '<span class="featured-flag">' + esc(t("featured")) + '</span>' : "") +
      (video ? '<span class="play-mark" aria-hidden="true">▶</span>' : "") + '</div><div class="media-body">' +
      '<div class="media-meta">' + (meta || '<span>' + esc(t("mediaLabel")) + '</span>') + '</div><h3>' + esc(title) +
      '</h3><p>' + esc(description) + '</p>' + (destination
        ? '<a class="media-link" href="' + esc(destination) + '" target="_blank" rel="noopener noreferrer">' + esc(t("openOriginal")) + arrow() + '</a>'
        : '<span class="media-placeholder">' + esc(video ? t("placeholderVideo") : t("placeholderText")) + '</span>') + '</div></article>';
  }
  function library(kind) {
    var video = kind === "videos";
    if (video) {
      var uploadsPlaylist = "UUMr3v4eEi2Lkx2JFdyCn_rQ";
      var channelVideos = "https://www.youtube.com/@drmoabdo/videos";
      return '<section class="library section-wrap" id="videos"><div class="library-heading"><div><p class="eyebrow">' +
        esc(t("videos")) + '</p><h2>' + esc(t("videosTitle")) + '</h2></div><p>' + esc(t("videoText")) +
        '</p></div><div class="youtube-embed"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + uploadsPlaylist +
        '&amp;rel=0" title="' + esc(t("videosTitle")) + ' — YouTube" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' +
        '<p class="library-footnote"><span class="footnote-dot"></span><a href="' + channelVideos + '" target="_blank" rel="noopener noreferrer">' + esc(t("openOriginal")) + arrow() + '</a></p></section>';
    }
    var entries = video ? config.videos : config.content;
    var cards = (entries || []).filter(function (item) { return item && item.title; })
      .map(function (item, index) { return mediaCard(item, index, video); });
    if (!cards.length) cards.push(mediaCard({}, 0, video));
    return '<section class="library section-wrap" id="' + kind + '"><div class="library-heading"><div><p class="eyebrow">' +
      esc(t(video ? "videos" : "content")) + '</p><h2>' + esc(t(video ? "videosTitle" : "contentTitle")) +
      '</h2></div><p>' + esc(t(video ? "videoText" : "contentText")) + '</p></div><div class="media-grid">' +
      cards.join("") + '</div><p class="library-footnote"><span class="footnote-dot"></span>' + esc(t("libraryEmpty")) + '</p></section>';
  }
  function socials() {
    var accounts = (config.socialAccounts || []).map(function (item) {
      var destination = safeUrl(item.url, false);
      if (!destination) return "";
      return '<a class="social-card" href="' + esc(destination) + '" target="_blank" rel="noopener noreferrer"><span>' +
        esc(item.platform) + '</span><i aria-hidden="true">↗</i></a>';
    }).filter(Boolean);
    return '<section class="social-section section-wrap"><div><p class="eyebrow">' + esc(t("social")) +
      '</p><h2>' + esc(t("socialTitle")) + '</h2><p class="social-description">' + esc(t("socialText")) +
      '</p></div><div class="social-list">' + (accounts.length ? accounts.join("") : '<p class="empty-state">' + esc(t("socialEmpty")) +
      '</p>') + '</div></section>';
  }
  function community() {
    var destination = safeUrl(config.communityUrl, false);
    var action = destination
      ? '<a class="button button-primary" href="' + esc(destination) + '" target="_blank" rel="noopener noreferrer">' + esc(t("communityLink")) + arrow() + '</a>'
      : '<span class="community-status"><i></i>' + esc(t("communityStatus")) + '</span>';
    return '<section class="community section-wrap" id="community"><div class="community-mark" aria-hidden="true">01<br><span>IDEA</span></div>' +
      '<div class="community-copy"><p class="eyebrow">' + esc(t("community")) + '</p><h2>' + esc(t("communityTitle")) +
      '</h2><p>' + esc(t("communityText")) + '</p>' + action + '</div><div class="community-visual" aria-hidden="true">' +
      '<div class="community-circle circle-a"></div><div class="community-circle circle-b"></div><span>SHARED<br>KNOWLEDGE</span></div></section>';
  }
  function collaboration() {
    return '<section class="collaborate section-wrap" id="collaborate"><div class="collab-copy"><p class="eyebrow">' +
      esc(t("collaboration")) + '</p><h2>' + esc(t("collabTitle")) + '</h2><p>' + esc(t("collabText")) +
      '</p>' + link("#contact", esc(t("contactLink")), "button button-light") + '</div><div class="collab-list">' +
      t("collabTypes").map(function (item, index) {
        return '<div class="collab-item"><span>0' + (index + 1) + '</span><b>' + esc(item) + '</b><i aria-hidden="true">↗</i></div>';
      }).join("") + '</div></section>';
  }
  function contacts() {
    var email = safeUrl("mailto:" + (config.contact.email || ""), true);
    var number = String(config.contact.whatsapp || "").replace(/[^\d]/g, "");
    var items = [];
    if (email) items.push('<a class="contact-method" href="' + esc(email) + '"><small>' + esc(t("email")) + '</small><b>' +
      esc(config.contact.email) + '</b><span>↗</span></a>');
    if (number) items.push('<a class="contact-method" href="https://wa.me/' + esc(number) + '" target="_blank" rel="noopener noreferrer"><small>' +
      esc(t("whatsapp")) + '</small><b>+' + esc(number) + '</b><span>↗</span></a>');
    return items.length ? items.join("") : '<p class="empty-state">' + esc(t("contactUnavailable")) + '</p>';
  }
  function form() {
    if (!safeUrl(config.contactFormEndpoint, false)) return '<div class="form-setup"><span class="setup-symbol">↗</span><p>' + esc(t("formSetup")) + '</p></div>';
    return '<form class="contact-form" id="contact-form"><label>' + esc(t("formName")) +
      '<input name="name" autocomplete="name" required maxlength="120"></label><label>' + esc(t("formEmail")) +
      '<input name="email" type="email" autocomplete="email" required maxlength="180"></label><label class="full-field">' +
      esc(t("formMessage")) + '<textarea name="message" rows="4" required maxlength="4000"></textarea></label>' +
      '<label class="honey-field" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>' +
      '<p class="form-privacy">' + esc(t("formPrivacy")) + '</p><button class="button button-primary" type="submit">' +
      esc(t("formSubmit")) + arrow() + '</button><p class="form-feedback" id="form-feedback" role="status" aria-live="polite"></p></form>';
  }
  function contact() {
    return '<section class="contact section-wrap" id="contact"><div class="contact-copy"><p class="eyebrow">' + esc(t("contact")) +
      '</p><h2>' + esc(t("contactTitle")) + '</h2><p>' + esc(t("contactText")) + '</p><div class="contact-details">' +
      contacts() + '</div></div><div class="contact-form-wrap"><h3>' + esc(t("formTitle")) + '</h3>' + form() + '</div></section>' +
      '<aside class="disclaimer section-wrap"><span class="disclaimer-icon" aria-hidden="true">i</span><p><b>' +
      esc(t("disclaimerTitle")) + '</b><span>' + esc(t("disclaimer")) + '</span></p></aside>';
  }
  function footer() {
    return '<footer class="site-footer"><div class="footer-main section-wrap"><a class="brand footer-brand" href="#home">' +
      '<span class="brand-mark" aria-hidden="true">م</span><span class="brand-name"><b>' + esc(config.names.ar) +
      '</b><small>' + esc(config.names.en) + '</small></span></a><p>' + esc(t("footerNote")) +
      '</p><div class="footer-links"><b>' + esc(t("footerLinks")) + '</b><a href="#story">' + esc(t("story")) +
      '</a><a href="#content">' + esc(t("content")) + '</a><a href="#contact">' + esc(t("contact")) +
      '</a></div></div><div class="footer-bottom"><span>© ' + new Date().getFullYear() + ' ' + esc(identity()) +
      '</span><a href="#home" aria-label="' + esc(t("homeTitle")) + '">↑</a><span>Designed with purpose</span></div></footer>';
  }
  function setTheme() {
    Object.keys(config.theme || {}).forEach(function (key) {
      document.documentElement.style.setProperty("--" + key.replace(/[A-Z]/g, function (letter) { return "-" + letter.toLowerCase(); }), config.theme[key]);
    });
  }
  function setMetadata() {
    var desc = language === "ar" ? config.seo.descriptionAr : config.seo.descriptionEn;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = identity() + " — " + t("homeTitle");
    document.querySelector('meta[name="description"]').setAttribute("content", desc);
    document.querySelector('meta[property="og:title"]').setAttribute("content", identity());
    document.querySelector('meta[property="og:description"]').setAttribute("content", config.tagline[language]);
    document.querySelector('meta[property="og:locale"]').setAttribute("content", language === "ar" ? "ar_EG" : "en_US");
    var siteUrl = safeUrl(config.seo.siteUrl, false);
    var schema = document.getElementById("person-schema");
    if (siteUrl) {
      if (!schema) {
        schema = document.createElement("script");
        schema.id = "person-schema";
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      var person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": config.names.en,
        "alternateName": config.names.ar,
        "url": siteUrl,
        "jobTitle": "General Practitioner",
        "description": desc
      };
      var sameAs = (config.socialAccounts || []).map(function (account) { return safeUrl(account.url, false); }).filter(Boolean);
      if (sameAs.length) person.sameAs = sameAs;
      schema.textContent = JSON.stringify(person);
    } else if (schema) {
      schema.remove();
    }
  }
  function render() {
    setMetadata();
    app.innerHTML = nav() + '<main id="main">' + hero() + introduction() + story() + vision() +
      library("content") + library("videos") + socials() + community() + collaboration() + contact() + '</main>' + footer();
    document.querySelector(".language-toggle").addEventListener("click", function () {
      language = language === "ar" ? "en" : "ar";
      try { localStorage.setItem("brand-language", language); } catch (error) {}
      render();
    });
    var menu = document.querySelector(".menu-toggle");
    var navPanel = document.querySelector(".main-nav");
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? t("close") : t("menu"));
      navPanel.classList.toggle("is-open", open);
    });
    navPanel.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("click", function () {
        navPanel.classList.remove("is-open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
    var contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.addEventListener("submit", submitForm);
    observeSections();
    updateProgress();
  }
  function observeSections() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll("[data-nav]");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (item) {
          if (item.dataset.nav === entry.target.id) item.setAttribute("aria-current", "location");
          else item.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    links.forEach(function (item) {
      var target = document.getElementById(item.dataset.nav);
      if (target) observer.observe(target);
    });
  }
  function updateProgress() {
    var fill = document.getElementById("scroll-progress-fill");
    if (!fill) return;
    var range = document.documentElement.scrollHeight - window.innerHeight;
    var value = range > 0 ? window.scrollY / range : 0;
    fill.style.transform = "scaleX(" + Math.max(0, Math.min(value, 1)) + ")";
  }
  async function submitForm(event) {
    event.preventDefault();
    var element = event.currentTarget;
    var data = new FormData(element);
    if (data.get("website")) return;
    var button = element.querySelector('button[type="submit"]');
    var feedback = document.getElementById("form-feedback");
    button.disabled = true;
    button.textContent = t("formSending");
    feedback.textContent = "";
    try {
      var result = await fetch(config.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: data.get("name"), email: data.get("email"), message: data.get("message") })
      });
      if (!result.ok) throw new Error("Submission failed");
      feedback.textContent = t("formSuccess");
      element.reset();
    } catch (error) {
      feedback.textContent = t("formError");
    } finally {
      button.disabled = false;
      button.innerHTML = esc(t("formSubmit")) + arrow();
    }
  }
  setTheme();
  render();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
})();
