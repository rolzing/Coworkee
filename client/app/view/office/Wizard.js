Ext.define('App.view.office.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'officewizard',
        'officecreate',
        'officeedit'
    ],

    bind: {
        title: '{record.phantom? "Add" : "Edit"} Office'
    },

    screens: [{
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'name',
            label: 'Nombre',
            required: true,
            bind: '{record.name}'
        }, {
            xtype: 'textfield',
            reference: 'address',
            label: 'Direccion',
            required: true,
            bind: '{record.address}'
        }, {
            xtype: 'textfield',
            reference: 'city',
            label: 'Ciudad',
            required: true,
            bind: '{record.city}'
        }, {
            xtype: 'textfield',
            reference: 'postcode',
            label: 'Codigo Postal',
            bind: '{record.postcode}'
        }, {
            xtype: 'textfield',
            reference: 'country',
            label: 'Pais',
            required: true,
            bind: '{record.country}'
        }, {
            xtype: 'textfield',
            reference: 'region',
            label: 'Region',
            bind: '{record.region}'
        }]
    }]
});
