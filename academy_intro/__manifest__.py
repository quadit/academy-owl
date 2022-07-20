# -*- coding: utf-8 -*-
# Copyright 2022 - QUADIT, SA DE CV(https://www.quadit.mx)
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Academy Intro OWL',
    'category': 'Website',
    'summary': 'Website module for introduction with OWL',
    'version': '15.0.0.0.1',
    'license': 'OPL-1',
    'author': 'QUADIT',
	'support': 'support@quadit.mx',
    'website' : 'https://www.quadit.mx',
	'description': "Website module for introduction with OWL",
    'depends': [
        'website',
    ],
    'data': [
    ],
    'assets': {
        'web.assets_frontend': [
            'academy_intro/static/src/js/component.js',
        ],
        'web.assets_qweb': [
            'academy_intro/static/src/xml/*',
        ],
    },
    'installable': True,
    'application': True,
}