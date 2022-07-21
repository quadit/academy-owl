/** @odoo-module alias=academy_photo_gallery.gallery_widget **/

import GalleryList from 'academy_photo_gallery.gallery_list'
import GallerySearch from 'academy_photo_gallery.gallery_search'
import { query } from 'web.rpc'
const { Component } = owl;
const { useState, useRef } = owl.hooks;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

class GalleryWidget extends Component {
    static template = xml`
    <t t-name="GalleryWidget" owl="1">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <GallerySearch/>
                </div>
            </div>
            <div class="row my-5">
                <GalleryList images="imagesToDisplay" searchWord="searchWord"/>
            </div>
        </div>
    </t>`;
    static components = {
        GalleryList,
        GallerySearch,
    }
    setup() {
        this.state = useState({
            searchWord: '',
        });
        this.gallery_list_component = useRef('gallery_list');
    }
    async willStart() {
        this.images = await this._getImages();
        console.log(this.gallery_list_component);
    }
    get imagesToDisplay() {
        if(this.searchWord != '') {
            return this._getImages();
        }
        return this.images;
    }
    get searchWord() {
        return this.state.searchWord.trim();
    }
    async _getImages() {
        return await query({
            model: 'academy.image',
            method: 'search_read',
            args: [[['state', '=', 'posted'],['title', 'ilike', this.searchWord]]],
        });
    }
    _clearSearch() {
        this.state.searchWord = '';
    }
    _updateSearch(event) {
        this.state.searchWord = event.detail;
    }
}

whenReady(() => {
    const selector = document.querySelector('#wrap>section#GalleryWidget');
    if (selector) {
        const galleryWidget = new GalleryWidget();
        galleryWidget.mount(selector);
    }
});

return GalleryWidget;