import { LitElement, html } from '@polymer/lit-element';
import "@vaadin/vaadin-rich-text-editor"

class MyApp extends LitElement {
  render() {
    return html`
      <p>hello</p>
      <vaadin-rich-text-editor></vaadin-rich-text-editor>
    `;
  }
}

customElements.define('my-app', MyApp);