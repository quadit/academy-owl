/** @odoo-module alias=academy_photo_gallery.gallery_item **/

const { Component } = owl;
const { xml } = owl.tags;

class GalleryItem extends Component {
    static template = xml`
    <t t-name="GalleryItem" owl="1">
        <div id="GalleryItem" class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-5">
                <img t-attf-src="data:image/webp;base64,{{props.image.image_1920}}" class="card-img-top" t-att-alt="props.image.title"/>
                <div class="card-body">
                    <h5 class="card-title" t-esc="props.image.title"/>
                    <div class="d-flex justify-content-between align-items-center">
                        <p id="likes">
                            Likes: <span t-esc="props.image.likes"/>
                        </p>
                        <button class="btn">
                            <i class="fa fa-heart-o text-danger"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </t>`;
    setup() {
    }
}

export default GalleryItem;