# -*- coding: utf-8 -*-
# Copyright 2022 - QUADIT, SA DE CV(https://www.quadit.mx)
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import models, fields, _

class AcademyImage(models.Model):


    _name = 'academy.image'
    _order = 'create_date desc'
    _description = 'Image of Gallery'
    _rec_name = 'title'


    image_1920 = fields.Image(string='Image', max_width=1920, max_height=1920, required=True)
    image_128 = fields.Image(string='Image 128', related='image_1920', max_width=128, max_height=128, store=True)
    state = fields.Selection(selection=[
        ('draft', 'Draft'),
        ('posted', 'Posted'),
        ('cancel', 'Cancelled'),
    ], string='Status', required=True, readonly=True, default='draft')
    title = fields.Char(string='Title', required=True)
    description = fields.Text(string='Description')
    likes = fields.Integer(string='Likes', default=0, readonly=True)

    def button_draft(self):
        self.write({
            'state': 'draft',
        })

    def button_post(self):
        self.write({
            'state': 'posted',
        })

    def button_cancel(self):
        self.write({
            'state': 'cancel',
        })