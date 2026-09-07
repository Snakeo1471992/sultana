const translations={
fr:{
navHome:"Accueil",navAbout:"Sultana",navProducts:"Notre Produit",navGallery:"Galerie",navContact:"Contact",navOrder:"Commander",
top:"PÂTISSERIES MAROCAINES • TRADITIONNELLES & AUTHENTIQUES • FAITES AVEC AMOUR",
eyebrow:"L’élégance du savoir-faire marocain",heroTitle:"PÂTISSERIES MAROCAINES",
heroText:"Des saveurs d’antan, une touche d’élégance. Découvrez l’univers Sultana et ses pâtisseries marocaines traditionnelles, authentiques et raffinées.",
discover:"Découvrir",order:"Commander maintenant",house:"Notre maison",spirit:"L’esprit Sultana",
houseText:"Une identité inspirée du patrimoine marocain, entre générosité, finesse et art de recevoir.",taste:"Le goût du Maroc dans votre cuisine",
about1:"Sultana célèbre les recettes transmises de génération en génération. Chaque création associe des textures délicates, des fruits secs, du miel, des amandes, des pistaches et les parfums emblématiques du Maroc.",
about2:"Notre ambition : faire voyager vos sens et partager une pâtisserie marocaine élégante, généreuse et authentique.",talk:"Parler à Sultana",collection:"Découvrez notre univers",collectionText:"Notre page produits est prête à accueillir prochainement toutes les familles de produits Sultana.",
viewProducts:"Voir Notre Produit",galleryTitle:"Galerie Sultana",galleryEyebrow:"Savoir-faire & gourmandise",bannerTitle:"Le goût du Maroc, avec une touche de douceur !",bannerText:"Des recettes simples, authentiques et généreuses.",
contactEyebrow:"Une commande ? Une question ?",contactTitle:"Contactez Sultana",contactText:"Pour vos plateaux, cadeaux, événements ou commandes personnalisées.",shop:"Boutique Sultana",address:"Adresse",phone:"Téléphone",email:"Email",orderLabel:"Commande",quote:"Demander un devis",name:"Votre nom",type:"Type de commande",message:"Décrivez votre besoin...",send:"Envoyer sur WhatsApp",
productsHero:"Notre Produit",productsIntro:"Cette page sera dédiée aux différents types de produits Sultana.",coming:"Nos produits arrivent bientôt",comingText:"Cet espace est volontairement laissé libre. Les différentes catégories et types de produits seront ajoutés ici.",back:"Retour à l’accueil",
f1:"Recettes Marocaines",f1p:"Authentiques et inspirées du patrimoine.",f2:"Fait Maison",f2p:"Une attention particulière à chaque détail.",f3:"Élégantes",f3p:"Des créations raffinées pour vos tables.",f4:"Toutes Occasions",f4p:"Fêtes, cadeaux et événements.",f5:"Qualité",f5p:"Des ingrédients sélectionnés avec soin.",
t1:"Tradition",t1p:"Des recettes marocaines emblématiques et généreuses.",t2:"Élégance",t2p:"Une présentation raffinée pour vos moments précieux.",t3:"Authenticité",t3p:"Le goût et les parfums du patrimoine marocain.",
footerDesc:"Tradition Marocaine • Pâtisseries traditionnelles & authentiques.",footerNav:"Navigation",footerContact:"Contact",footerMap:"Nous trouver",footerSocial:"Suivez-nous",footerWhatsApp:"WhatsApp",footerMapLink:"Voir sur Google Maps"
},
en:{
navHome:"Home",navAbout:"Sultana",navProducts:"Our Product",navGallery:"Gallery",navContact:"Contact",navOrder:"Order",
top:"MOROCCAN PASTRIES • TRADITIONAL & AUTHENTIC • MADE WITH LOVE",eyebrow:"The elegance of Moroccan craftsmanship",heroTitle:"MOROCCAN PASTRIES",
heroText:"Timeless flavors with a touch of elegance. Discover the Sultana world and its traditional, authentic and refined Moroccan pastries.",discover:"Discover",order:"Order now",house:"Our House",spirit:"The Sultana Spirit",
houseText:"An identity inspired by Moroccan heritage, combining generosity, finesse and the art of hospitality.",taste:"The taste of Morocco in your kitchen",
about1:"Sultana celebrates recipes passed down from generation to generation. Each creation combines delicate textures, dried fruits, honey, almonds, pistachios and the signature aromas of Morocco.",
about2:"Our ambition is to delight your senses and share elegant, generous and authentic Moroccan pastry.",talk:"Talk to Sultana",collection:"Discover our world",collectionText:"Our product page is ready to welcome all Sultana product families soon.",viewProducts:"View Our Product",galleryTitle:"Sultana Gallery",galleryEyebrow:"Craftsmanship & sweetness",bannerTitle:"The taste of Morocco, with a touch of sweetness!",bannerText:"Simple, authentic and generous recipes.",
contactEyebrow:"An order? A question?",contactTitle:"Contact Sultana",contactText:"For trays, gifts, events or customized orders.",shop:"Sultana Boutique",address:"Address",phone:"Phone",email:"Email",orderLabel:"Order",quote:"Request a quote",name:"Your name",type:"Order type",message:"Describe your request...",send:"Send on WhatsApp",
productsHero:"Our Product",productsIntro:"This page will be dedicated to the different Sultana product types.",coming:"Our products are coming soon",comingText:"This space is intentionally left empty. The different categories and product types will be added here.",back:"Back to home",
f1:"Moroccan Recipes",f1p:"Authentic and inspired by heritage.",f2:"Homemade",f2p:"Special attention to every detail.",f3:"Elegant",f3p:"Refined creations for your table.",f4:"For Every Occasion",f4p:"Celebrations, gifts and events.",f5:"Quality",f5p:"Carefully selected ingredients.",
t1:"Tradition",t1p:"Iconic and generous Moroccan recipes.",t2:"Elegance",t2p:"A refined presentation for your special moments.",t3:"Authenticity",t3p:"The taste and aromas of Moroccan heritage.",
footerDesc:"Moroccan Tradition • Traditional & authentic pastries.",footerNav:"Navigation",footerContact:"Contact",footerMap:"Find us",footerSocial:"Follow us",footerWhatsApp:"WhatsApp",footerMapLink:"View on Google Maps"
}};

function setLang(lang){
  const current=translations[lang]?lang:"fr";
  const t=translations[current];
  document.documentElement.lang=current;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.textContent=t[key];
  });
  document.querySelectorAll("[data-placeholder]").forEach(el=>{
    const key=el.dataset.placeholder;
    if(t[key]!==undefined) el.placeholder=t[key];
  });
  document.querySelectorAll("[data-title]").forEach(el=>{
    const key=el.dataset.title;
    if(t[key]!==undefined) el.title=t[key];
  });
  document.querySelectorAll("[data-fr][data-en]").forEach(el=>{
    el.textContent=el.dataset[current]||el.dataset.fr;
  });
  document.querySelectorAll(".lang button").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===current);
  });
  localStorage.setItem("sultanaLang",current);
}

function closeMobileMenu(){
  const menu=document.querySelector(".menu");
  const toggle=document.querySelector(".menu-toggle");
  if(!menu||!toggle)return;
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded","false");
  toggle.textContent="☰";
}

function initMobileMenu(){
  const toggle=document.querySelector(".menu-toggle");
  const menu=document.querySelector(".menu");
  if(!toggle||!menu)return;
  toggle.addEventListener("click",e=>{
    e.stopPropagation();
    const open=!menu.classList.contains("open");
    menu.classList.toggle("open",open);
    toggle.setAttribute("aria-expanded",String(open));
    toggle.textContent=open?"✕":"☰";
  });
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMobileMenu));
  document.addEventListener("click",e=>{
    if(menu.classList.contains("open")&&!menu.contains(e.target)&&!toggle.contains(e.target)) closeMobileMenu();
  });
}

function initLanguage(){
  document.querySelectorAll(".lang button").forEach(btn=>{
    btn.addEventListener("click",e=>{
      e.preventDefault();
      e.stopPropagation();
      setLang(btn.dataset.lang);
    });
  });
  setLang(localStorage.getItem("sultanaLang")||"fr");
}

function sendWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById("name")?.value||"";
  const phone=document.getElementById("phone")?.value||"";
  const type=document.getElementById("type")?.value||"";
  const msg=document.getElementById("message")?.value||"";
  const text=`Bonjour Sultana,%0A%0ANom : ${encodeURIComponent(name)}%0ATéléphone : ${encodeURIComponent(phone)}%0ACommande : ${encodeURIComponent(type)}%0A%0A${encodeURIComponent(msg)}`;
  window.open("https://wa.me/18196357927?text="+text,"_blank");
}

function init(){
  initMobileMenu();
  initLanguage();
  document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
  const form=document.querySelector("form");
  if(form) form.addEventListener("submit",sendWhatsApp);
}

document.addEventListener("DOMContentLoaded",init);
