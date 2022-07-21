/** @odoo-module alias=academy_photo_gallery.gallery_list **/

import GalleryItem from 'academy_photo_gallery.gallery_item'
const { Component } = owl;
const { xml } = owl.tags;

class GalleryList extends Component {
    static template = xml`
    <t t-name="GalleryList" owl="1">
        <div id="GalleryList" class="col-12" t-if="props.images.length != 0">
            <div class="row">
                <t t-foreach="props.images" t-as="image" t-key="image.id">
                    <GalleryItem image="image"/>
                </t>
            </div>
        </div>
        <div class="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4" t-else="">
            <img class="img-fluid" src="/academy_photo_gallery/static/src/images/empty.svg" alt="empty gallery"/>
        </div>
    </t>`;
    static components = {
        GalleryItem,
    }
    setup() {
    }
}

export default GalleryList;