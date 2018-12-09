import get from "./selector"class DownloadCV {    constructor() {        const domString = {            download: "#download",            modal: ".modal",            triggerClass: "downloadtriggered",            items: ".modal--text",            nav: ".nav"        }        this.button = get(domString.download);        this.modal = get(domString.modal);        this.triggerClass = domString.triggerClass;        this.nav = get(domString.nav);        this.modalItems = Array.from(get(domString.items, "all"));        this.events();    }    events() {        this.button.addEventListener("click", this.revealModal.bind(this));        this.modalItems.forEach((each) => each.addEventListener("click", this.hideModal.bind(this)));    }    revealModal(e) {        e.preventDefault();        this.modal.classList.add(this.triggerClass);        setTimeout(() => this.modal.classList.remove(this.triggerClass), 8000);    }    hideModal() {        this.modal.classList.remove(this.triggerClass);    }}export default DownloadCV;