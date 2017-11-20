Ext.define('App.view.home.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    controller: 'home',
    viewModel: {
        type: 'home'
    },

    config: {
        route: null
    },

    eventedConfig: {
        route: null
    },

    platformConfig: {
        '!phone': {
            header: {
                hidden: true
            }
        }
    },

    cls: 'home',
    scrollable: 'y',

    items: [{
        xtype : 'homeheader'
    }, {
        xtype: 'container',
        userCls: [
            'page-constrained',
            'blocks'
        ],

        items: [{
            xtype: 'container',
            userCls: 'blocks-column',
            items: [{
                xtype: 'homeevents',
                ui: 'block flat'
            }]
        }, {
            xtype: 'container',
            userCls: 'blocks-column',
            items: [{
                xtype: 'historypanel',
                bind: '{history}',
                ui: 'block flat',
                header: {
                    items: {
                        showall: {
                            ui: 'block flat'
                        }
                    }
                },
                listeners: {
                    childtap: 'onHistoryChildTap'
                }
            }]
        }]
    }],

    reset: function() {
        this.fireEvent('reset');
        return this;
    }
});

