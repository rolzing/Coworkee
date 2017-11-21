Ext.define('App.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [{
        id: 'home',
        xtype: 'home',
        text: 'Inicio',
        icon: 'home'
    }, {
        id: 'people',
        xtype: 'personbrowse',
        text: 'Trabajadores',
        icon: 'users'
    }, {
        id: 'organizations',
        xtype: 'organizationbrowse',
        text: 'Organizacion',
        icon: 'sitemap'
    }, {
        id: 'offices',
        xtype: 'officebrowse',
        text: 'Gimnasios',
        icon: 'globe'
    }, {
        id: 'history',
        xtype: 'historybrowse',
        text: 'Monitorear Actividad',
        icon: 'history'
    }]
});
