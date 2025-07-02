function dragElement(notebookElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    notebookElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        notebookElement.style.top = (notebookElement.offsetTop - pos2) + 'px';
        notebookElement.style.left = (notebookElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('sticker1'));
dragElement(document.getElementById('sticker2'));
dragElement(document.getElementById('sticker3'));
dragElement(document.getElementById('sticker4'));
dragElement(document.getElementById('sticker5'));
dragElement(document.getElementById('sticker6'));
dragElement(document.getElementById('sticker7'));
dragElement(document.getElementById('sticker8'));
dragElement(document.getElementById('sticker9'));
dragElement(document.getElementById('sticker10'));
dragElement(document.getElementById('sticker11'));
dragElement(document.getElementById('sticker12'));
dragElement(document.getElementById('sticker13'));
dragElement(document.getElementById('sticker14'));