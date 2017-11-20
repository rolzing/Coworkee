Ext.define('App.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'home',
        xtype: 'home',
        text: 'Home',
        icon: 'home'
    }, {
        id: 'people',
        xtype: 'personbrowse',
        text: 'Clientes',
        icon: 'users'
    }, {
        id: 'organizations',
        xtype: 'organizationbrowse',
        text: 'Gymnasios',
        icon: 'sitemap'
    }, {
        id: 'offices',
        xtype: 'officebrowse',
        text: 'Gymnasios',
        icon: 'globe'
    }, {
        id: 'history',
        xtype: 'historybrowse',
        text: 'Monitorear Actividad',
        icon: 'history'
    }]
});
