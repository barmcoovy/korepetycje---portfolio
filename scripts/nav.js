const navigation = document.querySelector("#navigation");
const links = ["O mnie", "Oferta", "Kontakt"];

for (let i = 0; i < links.length; i++) {
    const span = document.createElement('span');
    span.id = `link-${i}`;
    span.className = 'link';

    const anchor = document.createElement('a');
    anchor.href = `#${links[i].toLowerCase().replace(" ", "-")}`;
    anchor.textContent = links[i];

    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Zapobiega zmianie URL
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });

    span.appendChild(anchor);
    navigation.appendChild(span);
}
