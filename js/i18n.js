/* Translations (EN / FA). Keys are referenced from the HTML via
   data-i18n (text), data-i18n-html (trusted markup), data-i18n-placeholder, data-i18n-aria */

(function () {
  var faNum = function (n) { return Number(n).toLocaleString("fa-IR"); };

  var en = {
    "nav.home": "home",
    "nav.works": "works",
    "nav.about": "about-me",
    "nav.contacts": "contacts",
    "lang.label": "Language",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "hero.title": 'Amirreza Arezoumand is a <span class="accent">web developer</span>',
    "hero.sub": "He builds fast, responsive and SEO-friendly websites with HTML, CSS, JavaScript and React.",
    "hero.btn": "Contact me !!",
    "hero.status": "Currently working on <b>Portfolio</b>",

    "quote.text": "Your favorite quote will be placed here",
    "quote.author": "- Author name",

    "projects.title": "projects",
    "projects.sub": "List of my projects",
    "projects.all": "View all",
    "proj.desc": "A short description of the project goes here.",
    "proj.live": "Live",
    "proj.source": "Source",

    "skills.title": "skills",
    "skills.markup": "Markup & Style",
    "skills.lang": "Languages",
    "skills.fw": "Frameworks",
    "skills.other": "Other",

    "about.title": "about-me",
    "about.sub": "Who am I?",
    "about.p1": "I am a Web Developer, SEO Specialist, and Business Development Consultant with a strong passion for building, growing, and establishing credible brands.",
    "about.p2": "My passion for web development goes beyond creating visually appealing pages. My goal is to build powerful digital platforms that showcase businesses, establish user trust, and turn website visitors into real customers.",
    "about.btn": "Read more",

    "contacts.title": "contacts",
    "contacts.text": "I'm interested in freelance opportunities. However, if you have any other request or question, don't hesitate to contact me.",
    "contacts.box": "Message me here",
    "contacts.formTitle": "Send a message",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "form.sending": "Sending...",
    "form.ok": "Thank you! Your message has been sent.",
    "form.err": "Something went wrong. Please try again or email me directly.",
    "form.setup": "The contact form is not connected yet. Please email me directly.",

    "footer.role": "Web developer",
    "footer.media": "Media",
    "footer.copy": "Made by Amirreza Arezoumand",

    "meta.title.home": "Amirreza Arezoumand | Web Developer",
    "meta.title.projects": "Projects | Amirreza Arezoumand",
    "meta.title.about": "About me | Amirreza Arezoumand",
    "meta.title.contacts": "Contacts | Amirreza Arezoumand",
    "meta.desc.home": "Portfolio of Amirreza Arezoumand, a web developer building fast, responsive and SEO-friendly websites with HTML, CSS, JavaScript and React.",
    "meta.desc.projects": "A selection of web projects by Amirreza Arezoumand.",
    "meta.desc.about": "About Amirreza Arezoumand, web developer: skills, background and approach.",
    "meta.desc.contacts": "Get in touch with Amirreza Arezoumand for freelance work or any question."
  };

  var fa = {
    "nav.home": "خانه",
    "nav.works": "نمونه‌کارها",
    "nav.about": "درباره‌من",
    "nav.contacts": "تماس",
    "lang.label": "زبان",
    "menu.open": "باز کردن منو",
    "menu.close": "بستن منو",

    "hero.title": 'امیررضا آرزومند، <span class="accent">توسعه‌دهنده وب</span>',
    "hero.sub": "او وب‌سایت‌های سریع، ریسپانسیو و سئوپسند را با HTML، CSS، جاوااسکریپت و ری‌اکت می‌سازد.",
    "hero.btn": "با من تماس بگیر !!",
    "hero.status": "در حال کار روی <b>پورتفولیو</b>",

    "quote.text": "نقل‌قول مورد علاقه‌ات اینجا قرار می‌گیرد",
    "quote.author": "- نام گوینده",

    "projects.title": "پروژه‌ها",
    "projects.sub": "فهرست پروژه‌های من",
    "projects.all": "مشاهده همه",
    "proj.desc": "توضیح کوتاه پروژه اینجا قرار می‌گیرد.",
    "proj.live": "نمایش زنده",
    "proj.source": "کد منبع",

    "skills.title": "مهارت‌ها",
    "skills.markup": "ساختار و ظاهر",
    "skills.lang": "زبان‌ها",
    "skills.fw": "فریم‌ورک‌ها",
    "skills.other": "سایر",

    "about.title": "درباره‌من",
    "about.sub": "من کیستم؟",
    "about.p1": "من یک توسعه‌دهنده وب، متخصص سئو و مشاور توسعه کسب‌وکار هستم که اشتیاق زیادی به ساخت، رشد و تثبیت برندهای معتبر دارم.",
    "about.p2": "علاقه و اشتیاق من به توسعه وب فراتر از طراحی صفحات زیبا و چشم‌نواز است. هدف من ساخت پلتفرم‌های دیجیتال قدرتمندی است که کسب‌وکارها را به بهترین شکل معرفی کنند، اعتماد کاربران را جلب کنند و بازدیدکنندگان وب‌سایت را به مشتریان واقعی تبدیل کنند.",
    "about.btn": "ادامه مطلب",

    "contacts.title": "تماس",
    "contacts.text": "به فرصت‌های فریلنسری علاقه‌مندم. با این حال اگر درخواست یا سوال دیگری داری، با من در تماس باش.",
    "contacts.box": "اینجا پیام بده",
    "contacts.formTitle": "ارسال پیام",
    "form.name": "نام",
    "form.email": "ایمیل",
    "form.message": "پیام",
    "form.send": "ارسال",
    "form.sending": "در حال ارسال...",
    "form.ok": "ممنون! پیامت ارسال شد.",
    "form.err": "مشکلی پیش آمد. دوباره تلاش کن یا مستقیم ایمیل بزن.",
    "form.setup": "فرم تماس هنوز متصل نشده است. لطفاً مستقیم ایمیل بزن.",

    "footer.role": "توسعه‌دهنده وب",
    "footer.media": "شبکه‌ها",
    "footer.copy": "ساخته‌شده توسط امیررضا آرزومند",

    "meta.title.home": "امیررضا آرزومند | توسعه‌دهنده وب",
    "meta.title.projects": "پروژه‌ها | امیررضا آرزومند",
    "meta.title.about": "درباره من | امیررضا آرزومند",
    "meta.title.contacts": "تماس | امیررضا آرزومند",
    "meta.desc.home": "پورتفولیو امیررضا آرزومند، توسعه‌دهنده وب؛ ساخت وب‌سایت‌های سریع، ریسپانسیو و سئوپسند با HTML، CSS، جاوااسکریپت و ری‌اکت.",
    "meta.desc.projects": "نمونه‌ای از پروژه‌های وب امیررضا آرزومند.",
    "meta.desc.about": "درباره امیررضا آرزومند، توسعه‌دهنده وب: مهارت‌ها، پیشینه و روش کار.",
    "meta.desc.contacts": "برای همکاری فریلنسری یا هر سوالی با امیررضا آرزومند در تماس باش."
  };

  for (var i = 1; i <= 6; i++) {
    en["proj.name" + i] = "Project " + i;
    fa["proj.name" + i] = "پروژه " + faNum(i);
  }

  window.I18N = { en: en, fa: fa };
})();
