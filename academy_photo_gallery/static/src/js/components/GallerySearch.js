/** @odoo-module alias=academy_photo_gallery.gallery_search **/

import { _t } from 'web.core';
const { Component } = owl;
const { useRef } = owl.hooks;
const { xml } = owl.tags;

class GallerySearch extends Component {
    static template = xml`
    <t t-name="GallerySearch" owl="1">
        <div class="form-group">
            <input t-ref="search-word-input" t-on-keyup="updateSearch" type="text" class="form-control" placeholder="${_t('Search')}"/>
        </div>
    </t>`;
    setup() {
        this.searchWordInput = useRef('search-word-input');
    }
    mounted() {
        this.searchWordInput.el.focus();
    }
    updateSearch(ev) {
        this.trigger('update-search', ev.target.value);
    }
}

export default GallerySearch;