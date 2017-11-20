Ext.define('App.view.person.ShowOrg', {
    extend: 'Ext.Panel',
    xtype: 'personshoworg',

    cls: 'person-org',
    iconCls: 'x-fa fa-sitemap',

    bind: {
        title:
            '<a href="#{record.organization.url}">'+
                '{record.organization.name}'+
            '</a>'+
            '<div class="caption">'+
                'Entrenador:  '+
                '<a href="#{record.organization.manager.url}">'+
                    '{record.organization.manager.fullname}'+
                '</a>'+
            '</div>'
    },

    header: {
        items: [{
            xtype: 'button',
            handler: 'onOrganizationHeadcountTap',
            iconCls: 'x-fa fa-users',
            ui: 'block',
            weigth: 10,
            bind: {
                text: '{record.organization.headcount}',
                tooltip: 'Mostrar trabajdores de <b>{record.organization.name}</b> Gymnasio.'
            }
        }]
    },

    items: [{
        xtype: 'dataview',
        ui: 'thumbnails',
        minHeight: 80,
        inline: true,
        itemTpl: '<div class="thumbnail" style="background-image:url({picture})"></div>',
        bind: {
            emptyText: '{record.fullname} Es el unico trabajador en el gymnasio',
            store: '{coworkers}'
        },
        listeners: {
            childtap: 'onPeopleChildTap'
        }
    }]
});
