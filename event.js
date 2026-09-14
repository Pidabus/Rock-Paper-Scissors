let btn = document.querySelector('#btn');

btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

btn.addEventListener("mouseup", (e) => { // "click" will always register as a left mouse button
    let msg = document.querySelector("#message");

    switch (e.button) {
        case 0:
            msg.textContent = "Left mouse button clicked";
            break;
        case 1:
            msg.textContent = "Middle mouse button clicked";
            break;
        case 2:
            msg.textContent = "Right mouse button clicked";
            break;
        default:
            msg.textContent = `Unknown mouse button: ${e.button}`;
    }
});