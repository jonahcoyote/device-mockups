(function() {
    tinymce.PluginManager.add('DM_tc_button', function( editor, url ) {
        editor.addButton( 'DM_tc_button', {
            title: 'Device Mockup',
            type: 'menubutton',
            icon: 'icon dashicons-smartphone',
            menu: [
                {
                    text: 'iPhone 6',
                    value: '[device type="iphone6" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'iPhone 6 Plus',
                    value: '[device type="iphone6-plus" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'iPhone 5s',
                    value: '[device type="iphone5s" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'iPhone 5',
                    value: '[device type="iphone5" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'iPad',
                    value: '[device type="ipad" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'iMac',
                    value: '[device type="imac" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Macbook Pro',
                    value: '[device type="macbook" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Galaxy S3',
                    value: '[device type="s3" color="" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Nexus 7',
                    value: '[device type="nexus7" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Surface',
                    value: '[device type="surface" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Lumia 920',
                    value: '[device type="lumia920" orientation="" width="" link=""][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
                {
                    text: 'Stacking',
                    value: '[device type="macbook" link="" stacked="open"][/device][device type="iphone5" orientation="" link="" stacked="closed" position="right"][/device]',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                },
             ]
        });
    });
})();
