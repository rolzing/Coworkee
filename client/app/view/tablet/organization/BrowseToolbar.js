Ext.define('App.view.tablet.organization.BrowseToolbar', {
    extend: 'App.view.widgets.BrowseToolbar',
    // xtype: 'organizationbrowsetoolbar', -- set by profile

    items: {
        managers: {
            xtype: 'combobox',
            valueField: 'value',
            displayField: 'label',
            placeholder: 'Todos los entrenadores',
            queryMode: 'local',
            weight: 10,
            bind: {
                selection: '{filters.manager}',
                store: '{managers}'
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
