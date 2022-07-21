# -*- coding: utf-8 -*-
# Copyright 2022 - QUADIT, SA DE CV(https://www.quadit.mx)
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Academy Photo Gallery OWL',
    'category': 'Website',
    'summary': 'Website module for OWL learn',
    'version': '15.0.0.0.1',
    'license': 'OPL-1',
    'author': 'QUADIT',
	'support': 'support@quadit.mx',
    'website' : 'https://www.quadit.mx',
	'description': "Website module for OWL learn",
    'depends': [
        'website',
    ],
    'data': [
        'data/website_data.xml',
        'security/ir.model.access.csv',
        'views/academy_image.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'academy_photo_gallery/static/src/js/components/GalleryScreen.js',
        ],
    },
    'installable': True,
    'application': True,
}