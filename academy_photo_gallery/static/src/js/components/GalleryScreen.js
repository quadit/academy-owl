/** @odoo-module alias=academy_photo_gallery.gallery_screen **/

import { _t } from 'web.core';
import { query } from 'web.rpc';
const { Component } = owl;
const { useState } = owl.hooks;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

class GalleryScreen extends Component {
    setup() {
        this.state = useState({});
    }
}
GalleryScreen.template = xml`
<t t-name="GalleryScreen" owl="1">
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="${_t('Search')}"/>
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="submit"><i class="fa fa-search"/></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" t-if="false">
            <t t-foreach="props.images" t-as="image" t-key="product.id">
                <p t-esc="image.title"/>
            </t>
        </div>
    </div>
</t>
`;

whenReady(() => {
    const selector = document.querySelector('#wrap>section#GalleryScreen');
    if(selector) {
        const galleryScreen = new GalleryScreen();
        galleryScreen.mount(selector);
    }
});

return GalleryScreen;