export interface ConfigType {
  text?: string;
  id?: string;
  textId?: string;
  extraClass?: string;
  loadingType?: string;
  styleId?: string;
}

export interface ConfigElementsType {
  style: string;
  html: string;
}

export class EasyLoading {
  /*
   * Default configuration
   */
  #config: ConfigType = {
    text: "Loading",
    id: "_easy-loading",
    textId: "_easy-loading-text",
    extraClass: "_easyLoadingCustomClass",
    loadingType: "facebook",
    styleId: "_easy-loading-style",
  };

  #generalStyles: string = `
        ._easy-loading {
                width: 100vw;
                height: 100vh;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                flex-direction: column;
                background-color: rgba(0, 0, 0, 0.7);
                position: fixed;
                z-index: 9999;
                top: 0;
                left: 0;
                display: none;
        }
        ._easy-loading.active {
            display: flex;
        }
        
        ._easy-loading p {
            font-family: Arial, sans-serif;
            color: white;
        }
    `;

  /**
   * Generic loading options
   * */
  #loadingOptions: Record<string, ConfigElementsType> = {
    facebook: {
      style: `
                .lds-facebook {
                  /* change color here */
                  color: white
                }
                .lds-facebook,
                .lds-facebook div {
                  box-sizing: border-box;
                }
                .lds-facebook {
                  display: inline-block;
                  position: relative;
                  width: 80px;
                  height: 80px;
                }
                .lds-facebook div {
                  display: inline-block;
                  position: absolute;
                  left: 8px;
                  width: 16px;
                  background: currentColor;
                  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
                }
                .lds-facebook div:nth-child(1) {
                  left: 8px;
                  animation-delay: -0.24s;
                }
                .lds-facebook div:nth-child(2) {
                  left: 32px;
                  animation-delay: -0.12s;
                }
                .lds-facebook div:nth-child(3) {
                  left: 56px;
                  animation-delay: 0s;
                }
                @keyframes lds-facebook {
                  0% {
                    top: 8px;
                    height: 64px;
                  }
                  50%, 100% {
                    top: 24px;
                    height: 32px;
                  }
                }
            `,
      html: `<div class="lds-facebook"><div></div><div></div><div></div></div>`,
    },
    heart: {
      style: `
                .lds-heart {
                  color: white
                }
                .lds-heart,
                .lds-heart div,
                .lds-heart div:after,
                .lds-heart div:before {
                  box-sizing: border-box;
                }
                .lds-heart {
                  display: inline-block;
                  position: relative;
                  width: 80px;
                  height: 80px;
                  transform: rotate(45deg);
                  transform-origin: 40px 40px;
                }
                .lds-heart div {
                  top: 28px;
                  left: 28px;
                  position: absolute;
                  width: 32px;
                  height: 32px;
                  background: currentColor;
                  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                .lds-heart div:after,
                .lds-heart div:before {
                  content: " ";
                  position: absolute;
                  display: block;
                  width: 32px;
                  height: 32px;
                  background: currentColor;
                }
                .lds-heart div:before {
                  left: -24px;
                  border-radius: 50% 0 0 50%;
                }
                .lds-heart div:after {
                  top: -24px;
                  border-radius: 50% 50% 0 0;
                }
                @keyframes lds-heart {
                  0% {
                    transform: scale(0.95);
                  }
                  5% {
                    transform: scale(1.1);
                  }
                  39% {
                    transform: scale(0.85);
                  }
                  45% {
                    transform: scale(1);
                  }
                  60% {
                    transform: scale(0.95);
                  }
                  100% {
                    transform: scale(0.9);
                  }
                }`,
      html: `<div class="lds-heart"><div></div></div>`,
    },
    spinner: {
      style: `
            .lds-spinner {
              /* change color here */
              color: white
            }
            .lds-spinner,
            .lds-spinner div,
            .lds-spinner div:after {
              box-sizing: border-box;
            }
            .lds-spinner {
              display: inline-block;
              position: relative;
              width: 80px;
              height: 80px;
            }
            .lds-spinner div {
              transform-origin: 40px 40px;
              animation: lds-spinner 1.2s linear infinite;
            }
            .lds-spinner div:after {
              content: " ";
              display: block;
              position: absolute;
              top: 3.2px;
              left: 36.8px;
              width: 6.4px;
              height: 17.6px;
              border-radius: 20%;
              background: currentColor;
            }
            .lds-spinner div:nth-child(1) {
              transform: rotate(0deg);
              animation-delay: -1.1s;
            }
            .lds-spinner div:nth-child(2) {
              transform: rotate(30deg);
              animation-delay: -1s;
            }
            .lds-spinner div:nth-child(3) {
              transform: rotate(60deg);
              animation-delay: -0.9s;
            }
            .lds-spinner div:nth-child(4) {
              transform: rotate(90deg);
              animation-delay: -0.8s;
            }
            .lds-spinner div:nth-child(5) {
              transform: rotate(120deg);
              animation-delay: -0.7s;
            }
            .lds-spinner div:nth-child(6) {
              transform: rotate(150deg);
              animation-delay: -0.6s;
            }
            .lds-spinner div:nth-child(7) {
              transform: rotate(180deg);
              animation-delay: -0.5s;
            }
            .lds-spinner div:nth-child(8) {
              transform: rotate(210deg);
              animation-delay: -0.4s;
            }
            .lds-spinner div:nth-child(9) {
              transform: rotate(240deg);
              animation-delay: -0.3s;
            }
            .lds-spinner div:nth-child(10) {
              transform: rotate(270deg);
              animation-delay: -0.2s;
            }
            .lds-spinner div:nth-child(11) {
              transform: rotate(300deg);
              animation-delay: -0.1s;
            }
            .lds-spinner div:nth-child(12) {
              transform: rotate(330deg);
              animation-delay: 0s;
            }
            @keyframes lds-spinner {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }`,
      html: `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
    },
  };

  constructor(config: ConfigType | null | undefined) {
    if (config === null || config === undefined) {
      this.#config = Object.assign(this.#config, config) as ConfigType;
      // this._config = {...this._config, ...config};
    }
    this.#deletesElement();
    this.#createElement();
  }

  /**
   * Sets the configuration
   * @param config
   */
  setConfig(config: ConfigType): void {
    this.#config = { ...this.#config, ...config };
    this.#deletesElement();
    this.#createElement();
  }

  /**
   * Deletes the loading element
   */
  #deletesElement(): void {
    const el: HTMLElement | null = document.getElementById(this.#config.id);
    if (el !== null) {
      el.remove();
    }
    const style: HTMLElement | null = document.getElementById(
      this.#config.styleId,
    );
    if (style !== null) {
      style.remove();
    }
  }

  /**
   * Creates the loading element
   */
  #createElement(): void {
    const el: HTMLElement | null = document.getElementById(this.#config.id);
    if (el === null) {
      const div: HTMLElement = document.createElement("div");
      div.id = this.#config.id;
      div.classList.add("_easy-loading");
      div.classList.add(this.#config.extraClass);
      div.innerHTML =
        this.#loadingOptions[this.#config.loadingType].html +
        `<p id="${this.#config.textId}">${this.#config.text}</p>`;
      document.body.insertAdjacentHTML("afterend", div.outerHTML);
      document.body.insertAdjacentHTML(
        "afterend",
        `<style id="${this.#config.styleId}">${this.#generalStyles} ${this.#loadingOptions[this.#config.loadingType].style}</style>`,
      );
    }
  }

  /**
   * Shows the loading element
   */
  show(text: string | null | undefined = ""): void {
    if (text !== null && text !== undefined) {
      document.getElementById(this.#config.textId)!.innerText = text;
    }
    const el = document.getElementById(this.#config.id);
    if (el !== null) {
      el.classList.add("active");
    }
  }

  /**
   * Hides the loading element
   */
  hide(): void {
    const el: HTMLElement | null = document.getElementById(this.#config.id);
    if (el !== null) {
      el.classList.remove("active");
    }
  }
}
