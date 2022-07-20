/** @odoo-module alias=academy_intro.component **/

const { Component } = owl;
const { whenReady } = owl.utils;
const { useState } = owl.hooks;
const { xml } = owl.tags;

class MyComponent extends Component {
    static template = xml`
    <div t-on-click="increment">
        <t t-esc="state.value"/>
    </div>`;

    setup() {
        this.state = useState({
            value: 1,
        });
    }
    increment() {
        this.state.value++;
    }
}

whenReady(() => {
    const myComponent = new MyComponent();
    myComponent.mount(document.querySelector('#wrap'));
});