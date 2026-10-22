(function () {
  "use strict";
  var config = window.SITE_CONFIG || {};
  var app = document.getElementById("app");
  var esc = function (value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  };
  var biography = String(config.biography && config.biography.ar || "");
  var playlist = "UUMr3v4eEi2Lkx2JFdyCn_rQ";
  var links = (config.socialAccounts || []).filter(function (item) {
    return item && /^https:\/\//i.test(item.url || "");
  });

  function storyMarkup(text) {
    return text.split(/\r?\n/).reduce(function (html, line) {
      var value = line.trim();
      if (!value) return html;
      var heading = value.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        var tag = heading[1].length <= 2 ? "h3" : "h4";
        return html + "<" + tag + ">" + esc(heading[2]) + "</" + tag + ">";
      }
      return html + "<p>" + esc(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") + "</p>";
    }, "");
  }

  var summary = [
    "منذ طفولتي، كنت كثير الأسئلة. لم يكن يكفيني أن أعرف كيف تعمل الأشياء، بل كنت أريد أن أفهم لماذا تعمل بهذه الطريقة. كان لدي دائمًا فضول تجاه ما وراء الظواهر، وشعور بأن الحياة أوسع بكثير مما نراه على سطحها.",
    "لم تكن رحلتي مستقيمة دائمًا؛ عرفت التفوق، ومررت بفترات من التعثر، ثم تعلمت أن أستعيد طريقي من جديد.",
    "عندما دخلت كلية الطب، كنت أظن أن النجاح يعني أن أتفوق في دراستي فقط. لكنني توقفت يومًا لأسأل نفسي: ما قيمة أن أعرف الكثير عن الطب، بينما أجهل جوانب أخرى من الحياة أحتاج إلى فهمها؟ كان هذا السؤال نقطة تحول في طريقة تفكيري.",
    "بدأت أتعلم خارج حدود تخصصي، وأقرأ، وأتعلم الإنجليزية، وأمارس الرسم، وأستكشف مجالات جديدة. والمفاجأة أنني لم أضطر إلى الاختيار بين اتساع معرفتي وتفوقي الأكاديمي؛ فقد تخرجت في كلية الطب بامتياز مع مرتبة الشرف، وعُينت معيدًا، ثم أنهيت ماجستير الباثولوجيا الإكلينيكية.",
    "واليوم، ما زلت أؤمن بأن التعلم لا ينتهي عند شهادة، وأن التخصص في مجال لا ينبغي أن يمنعنا من فهم العالم الأوسع الذي نعيش فيه.",
    "هنا أشارك رحلتي، وما أتعلمه، وما أؤمن به؛ لأن المعرفة تزداد قيمة عندما تتحول إلى شيء ينفع الآخرين. أطمح إلى بناء مجتمع يجمع بين المعرفة، والتفكير، والتجارب الإنسانية، ويساعدنا على فهم أنفسنا والعالم بصورة أفضل."
  ];

  app.innerHTML = '<header class="topbar"><a class="wordmark" href="#home">د. محمد <span>عبده</span></a><nav aria-label="التنقل الرئيسي"><a href="#story">قصتي</a><a href="#videos">الفيديوهات</a><a href="#social">حساباتي</a></nav></header>' +
    '<main id="main"><section class="hero" id="home"><div class="hero-copy"><p class="eyebrow"><span></span> طبيب · متعلّم · إنسان</p><h1>الدكتور محمد محمود عبده</h1><p class="hero-tagline">الطب مهنتي،<br><em>ومساعدة الناس رسالتي.</em></p><p class="credentials">' + esc(config.professionalIdentity && config.professionalIdentity.ar) + '</p><div class="hero-actions"><a class="button button-primary" href="#story">تعرّف على قصتي <span>↙</span></a><a class="button button-quiet" href="#videos">شاهد فيديوهاتي <span>↗</span></a></div></div><div class="portrait-wrap"><div class="portrait-glow"></div><img src="' + esc(config.portrait && config.portrait.src || "./portrait.jpg") + '" alt="' + esc(config.portrait && config.portrait.alt && config.portrait.alt.ar || "الدكتور محمد محمود عبده") + '"><span class="portrait-tag">المعرفة · الطب · المجتمع</span></div><a class="scroll-hint" href="#intro" aria-label="انتقل إلى النبذة">↓</a></section>' +
    '<section class="intro section" id="intro"><div class="section-label"><span>01</span><span>نبذة عني</span></div><div class="intro-heading"><p class="eyebrow">طبيب بالمهنة، ومتعلّم بشغف، ومساعدة الناس هي رسالتي.</p><h2>رحلة من الفضول إلى خدمة الناس</h2></div><div class="summary">' + summary.map(function (paragraph) { return "<p>" + esc(paragraph) + "</p>"; }).join("") + '<a class="inline-link" href="#story">تعرّف على قصتي، وكن جزءًا من رحلتي <span>↙</span></a></div></section>' +
    '<section class="story section" id="story"><div class="section-label"><span>02</span><span>رحلتي</span></div><div class="story-heading"><p class="eyebrow">من الأسئلة الأولى إلى الطب والتعلّم المستمر</p><h2>قصتي، كما عشتها</h2><p>كل تجربة أضافت سؤالًا جديدًا، وكل سؤال فتح لي طريقًا للتعلّم.</p></div><details class="story-details"><summary>اقرأ القصة كاملة <span>＋</span></summary><article class="biography">' + storyMarkup(biography) + '</article></details></section>' +
    '<section class="videos section" id="videos"><div class="section-label"><span>03</span><span>على يوتيوب</span></div><div class="video-heading"><div><p class="eyebrow">محتوى القناة</p><h2>فيديوهات تساعدنا على التعلّم</h2></div><a class="inline-link" href="https://www.youtube.com/@drmoabdo/videos" target="_blank" rel="noopener noreferrer">كل الفيديوهات <span>↗</span></a></div><div class="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=' + playlist + '&amp;rel=0" title="فيديوهات قناة د. محمد عبده على يوتيوب" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="video-note">تُعرض أحدث فيديوهات القناة تلقائيًا من يوتيوب.</p></section>' +
    '<section class="social section" id="social"><div><p class="eyebrow">تابعني</p><h2>نلتقي على المنصات</h2></div><div class="social-links">' + links.map(function (item) { return '<a href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(item.platform) + '</span><b>↗</b></a>'; }).join("") + '</div></section></main><footer><a class="wordmark" href="#home">د. محمد <span>عبده</span></a><p>الطب مهنتي، ومساعدة الناس رسالتي.</p><a href="#home" class="back-top" aria-label="العودة للأعلى">↑</a></footer>';
})();
