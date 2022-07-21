/** @odoo-module alias=academy_photo_gallery.gallery_search **/

import { _t } from 'web.core';
const { Component } = owl;
const { xml } = owl.tags;

class GallerySearch extends Component {
    static template = xml`
    <t t-name="GallerySearch" owl="1">
        <div class="input-group">
            <input t-ref="gallery_list" type="text" class="form-control" placeholder="${_t('Search')}"/>
            <div class="input-group-append">
                <button class="btn btn-secondary" type="submit"><i class="fa fa-search"/></button>
            </div>
        </div>
    </t>`;
    setup() {
    }
}

export default GallerySearch;