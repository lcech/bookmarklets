(function () {
    var style = document.createElement("style"),
    utfStyle = document.createTextNode(".l-view [data-analytics] { outline: none !important; border-color: #4fc3f7 !important; box-shadow: 0 0 60px #4fc3f7 !important; }");
    style.appendChild(utfStyle);
    legacyStyle = document.createTextNode(".l-view [data-tracking] { outline: none !important; border-color: #f542e3 !important; box-shadow: 0 0 60px #f542e3 !important; }");
    style.appendChild(legacyStyle);
    var caput = document.getElementsByTagName("head");
    caput[0].appendChild(style);

    var head = document.getElementsByTagName("head")[0];

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://unpkg.com/micromodal/dist/micromodal.min.js");
    script.addEventListener("load", function() {
        createModal("Test");
        MicroModal.init();
    });
    head.appendChild(script);

    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", "https://gist.githubusercontent.com/ghosh/4f94cf497d7090359a5c9f81caf60699/raw/d9281f3298b46d9cf991b674bc6e1c1ed14e91cc/micromodal.css");
    head.appendChild(style);

    function createModal(modalContent) {
        var modal = document.createElement("div");
        modal.setAttribute("id", "utfModal");
        modal.setAttribute("aria-hidden", "true");
        modal.classList.add("modal");
        modal.classList.add("micromodal-slide");

        var tabindex = document.createElement("div");
        tabindex.setAttribute("tabindex", "-1");
        tabindex.setAttribute("data-micromodal-close", "true");
        tabindex.classList.add("modal__overlay");
        modal.appendChild(tabindex);

        var dialog = document.createElement("div");
        dialog.setAttribute("role", "dialog");
        dialog.setAttribute("aria-modal", "true");
        dialog.setAttribute("aria-labelledby", "utfModalTitle");
        dialog.classList.add("modal__container");
        tabindex.appendChild(dialog);

        var header = document.createElement("div");
        header.classList.add("modal__header");
        dialog.appendChild(header);

        var title = document.createElement("h2");
        title.setAttribute("id", "utfModalTitle");
        title.appendChild(document.createTextNode("UTF Parameters"));
        title.classList.add("modal__title");
        header.appendChild(title);

        var button = document.createElement("button");
        button.setAttribute("aria-label", "Close modal");
        button.setAttribute("data-micromodal-close", "true");
        button.classList.add("modal__close");
        header.appendChild(button);

        var content = document.createElement("div");
        content.setAttribute("id", "utfModalContent");
        content.classList.add("modal__content");
        dialog.appendChild(document.createTextNode(modalContent));

        dialog.appendChild(content);

        document.body.appendChild(modal);
    }
})();