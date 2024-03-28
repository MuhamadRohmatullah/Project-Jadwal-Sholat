import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify/lib/framework.mjs';


export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    }
})