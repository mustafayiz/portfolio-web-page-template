
const translations = {
    en: {
        job: "Front-End Developer",
        home: "Home",
        //about: "About me",
        portfolio: "Portfolio",
        p1: "Hi,",
        p2: " I am John Doe. I am a Front-End Developer. I am interested in",
        p3: " Software Development, Graphic Design, Photography and improving myself in",
        p4: "these areas. To learn more about me, please take a look at my designs and projects.",
    },
    tr: {
        job: "Front-End Developer",
        home: "Anasayfa",
        //about: "Hakkımda",
        portfolio: "Portfolyo",
        p1: "Merhaba,",
        p2: "ben John Doe. Ben bir Front-End Developer'im. Yazilim Gelistirme, Grafik Tasarimi, Fotografcilik ile ilgileniyor ve ",
        p3: "bu alanlarda kendimi gelistiriyorum. Hakkimda daha fazla bilgi sahibi olmak icin lutfen tasarimlarima ve",
        p4: "projelerime goz atin.",
    },

};


document.addEventListener("DOMContentLoaded", () => {

const languageDropdown = document.getElementById("language-dropdown");

const translatableElements = document.querySelectorAll("[data-key]");

function changeLanguage(language) {
    translatableElements.forEach((element) => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[language][key];
    });
}


const defaultLanguage = "en";
languageDropdown.value = defaultLanguage;
changeLanguage(defaultLanguage);


languageDropdown.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value; 
    changeLanguage(selectedLanguage); 
});
});
