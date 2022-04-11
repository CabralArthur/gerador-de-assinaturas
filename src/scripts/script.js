const downloadHTML = () => {
    const button = document.getElementById('button-copy');
    const card = document.getElementById('main-content');

    button.href = 'data:text/html;charset=UTF-8,'+encodeURIComponent(card.outerHTML);
    button.download = `assinatura-${getFileSufix()}.html`;
}

const getFileSufix = () => {
    return document.getElementById('person-name').innerText;
}

const changeInput = (input, targetId) => {
    if (targetId === 'person-image-link') {
        document.getElementById(targetId).src = input.value;
        return;
    }

    if (targetId === 'person-whatsapp-link') {
        document.getElementById(targetId).href = input.value;
        return;
    }

    if (targetId === 'person-has-whatsapp') {
        const hasWhatsapp = document.getElementById('has-whatsapp').checked;

        document.getElementById('person-whatsapp-link').style.display = hasWhatsapp && 'flex' || 'none';
        return;
    }

    document.getElementById(targetId).innerText = input.value;
}
