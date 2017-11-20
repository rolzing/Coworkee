Ext.define('App.view.person.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'personwizard',
        'personcreate',
        'personedit'
    ],

    controller: {
        type: 'personwizard'
    },

    viewModel: {
        type: 'personwizard'
    },

    bind: {
        title: '{record.phantom? "Add" : "Edit"} Trabajador'
    },

    cls: 'person-create',

    screens: [{
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [{
            xtype: 'textfield',
            reference: 'firstname',
            label: 'Nombre',
            required: true,
            bind: '{record.firstname}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        }, {
            xtype: 'textfield',
            reference: 'lastname',
            label: 'Apellido',
            required: true,
            bind: '{record.lastname}',
            listeners: {
                blur: 'onNameFieldsBlur'
            }
        }, {
            xtype: 'textfield',
            reference: 'username',
            label: 'Username',
            required: true,
            bind: '{record.username}',
            listeners: {
                change: 'onUsernameChange'
            }
        }, {
            xtype: 'passwordfield',
            reference: 'password',
            label: 'Password',
            required: true,
            bind: {
                required: '{record.phantom}',
                placeholder: '{record.phantom? "" : "Keep password unchanged"}',
                value: '{record.password}'
            }
        }, {
            xtype: 'passwordfield',
            reference: 'password_check',
            label: 'Confirm Password',
            disabled: true,
            validators: {
                type: 'controller',
                fn: 'doPasswordMatch'
            },
            bind: {
                required: '{record.phantom}',
                disabled: '{!password.value}'
            }
        }]
    }, {
        title: 'Personal',
        iconCls: 'x-fa fa-home',
        items: [{
            xtype: 'datepickerfield',
            reference: 'birthday',
            label: 'Cumpleaños',
            required: true,
            bind: '{record.birthday}'
        }, {
            xtype: 'emailfield',
            reference: 'email',
            label: 'Email',
            required: true,
            bind: '{record.email}'
        }, {
            xtype: 'textfield',
            reference: 'Telefono',
            label: 'Phone',
            required: true,
            bind: '{record.phone}'
        }, {
            xtype: 'textfield',
            reference: 'skype',
            label: 'Skype',
            bind: '{record.skype}'
        }, {
            xtype: 'textfield',
            reference: 'linkedin',
            label: 'LinkedIn',
            bind: '{record.linkedin}'
        }]
    }, {
        title: 'Work',
        iconCls: 'x-fa fa-sitemap',
        items: [{
            xtype: 'textfield',
            reference: 'title',
            label: 'Nombre del trabajo: ',
            required: true,
            bind: '{record.title}'
        }, {
            xtype: 'datepickerfield',
            reference: 'started',
            label: 'Fecha de entrada',
            required: true,
            bind: '{record.started}'
        }, {
            xtype: 'datepickerfield',
            reference: 'ended',
            label: 'Fecha de salida',
            bind: '{record.ended}'
        }, {
            xtype: 'combobox',
            label: 'Gymbasio',
            displayField: 'label',
            valueField: 'value',
            queryMode: 'local',
            forceSelection: true,
            required: true,
            bind: {
                value: '{record.office_id}',
                store: '{offices}'
            }
        }, {
            xtype: 'combobox',
            label: 'Gymnasio',
            displayField: 'label',
            valueField: 'value',
            queryMode: 'local',
            forceSelection: true,
            required: true,
            bind: {
                value: '{record.organization_id}',
                store: '{organizations}'
            }
        }]
    }]
});
