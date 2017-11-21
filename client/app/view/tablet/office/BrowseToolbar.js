Ext.define('App.view.tablet.office.BrowseToolbar', {
    extend: 'App.view.widgets.BrowseToolbar',
    // xtype: 'officebrowsetoolbar', -- set by profile

    items: {
        countries: {
            xtype: 'combobox',
            valueField: 'value',
            displayField: 'label',
            placeholder: 'Todos los países',
            queryMode: 'local',
            weight: 10,
            bind: {
                selection: '{filters.country}',
                store: '{countries}'
            }
        },
        create: {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            handler: 'onCreate',
            text: 'Crear',
            weight: 50
        }
    }
});
