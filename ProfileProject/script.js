function changeBackground() {
    // Масив с цветове
    const colors = ["#f4f4f4", "#c8e6c9", "#ffccbc", "#d1c4e9", "#b2ebf2"];
    
    // Избираме случаен индекс от масива
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Променяме фона на страницата
    document.body.style.backgroundColor = colors[randomIndex];
}
function showFact() {
    // Масив с няколко интересни факта
    const facts = [
        "Знаеше ли, че JavaScript е създаден само за 10 дни?",
        "Човешкият мозък използва приблизително 20% от енергията на тялото.",
        "Първият уебсайт някога е създаден през 1991 година от Тим Бърнърс-Лий.",
        "Дисковете в гръбнака ни помагат да носим тежестта на цялото тяло.",
        "Всяка секунда в интернет се изпращат над 3 милиона имейли."
    ];
    
    // Избираме случаен факт
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    // Показваме факта в alert прозорец
    alert(randomFact);
}
