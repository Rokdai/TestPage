class ShowModal {
  constructor(element) {
    this.element = element;

    this.main = document.querySelector(".main");
    this.tabsNode = document.querySelectorAll("[tabindex]");
    console.log(this.tabsNode);

    this.modal = document.createElement("div");
    this.modal.classList.add("modal", "hidden");
    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("modal__btn");

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.destroy = this.destroy.bind(this);

    this.init();
  }

  init() {
    this.initContent();

    this.element.addEventListener("click", this.openModal);

    this.closeBtn.addEventListener("click", this.closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.tabsNode.forEach((item) => {
      item.setAttribute("tabindex", -1);
    });

    this.modal.classList.remove("hidden");
  }

  closeModal() {
    this.tabsNode.forEach((item) => {
      item.setAttribute("tabindex", 0);
    });

    this.modal.classList.add("hidden");
  }

  destroy() {
    this.element.removeEventListener("click", this.openModal);
    this.closeBtn.removeEventListener("click", this.closeModal);
    document.removeEventListener("keydown", this.closeModal);
  }

  initContent() {
    const modalContent = `<div class="modal__wrapper">
          <div class="modal__body">
            <div class="modal__btn-wrapper js-btn-wrapper">
              
            </div>
            <div class="modal-video__wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIMb5GSKhNE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>`;

    this.modal.innerHTML += modalContent;

    const closeBtnContent = `
                <span class="visually-hidden"
                  >Кнопка закрывающая всплывающее окно</span
                >
                <svg
                  class="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #fff;
                        opacity: 0;
                      }
                      .cls-2 {
                        fill: #fff;
                      }
                    </style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="close">
                      <g id="close-2" data-name="close">
                        <rect
                          class="cls-1"
                          transform="translate(24 24) rotate(180)"
                        />
                        <path
                          class="cls-2"
                          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              `;

    this.closeBtn.innerHTML += closeBtnContent;

    const btnWrapper = this.modal.querySelector(".js-btn-wrapper");
    btnWrapper.appendChild(this.closeBtn);

    this.main.appendChild(this.modal);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".js-openModal");
  items.forEach((item) => {
    new ShowModal(item);
  });
});
