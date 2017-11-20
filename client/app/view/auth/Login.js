Ext.define('App.view.auth.Login', {
    extend: 'Ext.Container',
    xtype: 'authlogin',

    controller: 'authlogin',

    cls: 'auth-login',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        cls: 'auth-header',
        html:
            '<span class="logo x-fa fa-circle-o-notch"></span>'+
            '<div class="title">Gimnasio</div>'+
            '<div class="caption">Directorio de usuarios</div>'
    }, {
        xtype: 'formpanel',
        reference: 'form',
        layout: 'vbox',
        ui: 'auth',

        items: [{
            xtype: 'textfield',
            name: 'username',
            placeholder: 'Username',
            required: true
        }, {
            xtype: 'passwordfield',
            name: 'password',
            placeholder: 'Password',
            required: true
        }, {
            xtype: 'button',
            text: 'LOG IN',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            handler: 'onLoginTap',
            ui: 'action'
        }]
    }, {
        cls: 'auth-footer',
        html:
            '<div>ITO</div>'
    }]
});
